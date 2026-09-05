from dotenv import load_dotenv
from pathlib import Path
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request
from fastapi.responses import StreamingResponse
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import uuid
import bcrypt
import jwt
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone, timedelta

from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')
JWT_SECRET = os.environ.get('JWT_SECRET', 'change-me')
JWT_ALGORITHM = "HS256"

app = FastAPI(title="Mr. Wood Interiors API")
api_router = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


# ---------------------------- Auth helpers ----------------------------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    payload = {
        "sub": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(days=7),
        "type": "access",
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_user(creds: Optional[HTTPAuthorizationCredentials] = Depends(security)) -> dict:
    if not creds or not creds.credentials:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(creds.credentials, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------------------- Models ----------------------------
class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    service: Optional[str] = None
    city: Optional[str] = "Jaipur"
    message: Optional[str] = None
    budget: Optional[str] = None
    source: Optional[str] = "website"
    lead_type: Optional[str] = "homeowner"
    status: str = "new"
    created_at: str = Field(default_factory=now_iso)


class LeadCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    service: Optional[str] = None
    city: Optional[str] = "Jaipur"
    message: Optional[str] = None
    budget: Optional[str] = None
    source: Optional[str] = "website"
    lead_type: Optional[str] = "homeowner"


class LoginRequest(BaseModel):
    email: str
    password: str


class ChatRequest(BaseModel):
    session_id: str
    message: str


# ---------------------------- Public routes ----------------------------
@api_router.get("/")
async def root():
    return {"message": "Mr. Wood Interiors & Furniture API", "status": "live"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    await db.leads.insert_one(lead.model_dump())
    logger.info(f"New lead: {lead.name} / {lead.phone} / {lead.service} / {lead.lead_type}")
    return lead


# ---------------------------- Auth routes ----------------------------
@api_router.post("/auth/login")
async def login(payload: LoginRequest):
    email = payload.email.strip().lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(user["id"], user["email"])
    return {"token": token, "user": {"email": user["email"], "name": user.get("name", "Admin")}}


@api_router.get("/auth/me")
async def me(user: dict = Depends(get_current_user)):
    return user


# ---------------------------- Protected admin routes ----------------------------
@api_router.get("/leads", response_model=List[Lead])
async def get_leads(user: dict = Depends(get_current_user)):
    docs = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(2000)
    return [Lead(**d) for d in docs]


@api_router.get("/leads/stats")
async def lead_stats(user: dict = Depends(get_current_user)):
    total = await db.leads.count_documents({})
    new = await db.leads.count_documents({"status": "new"})
    homeowner = await db.leads.count_documents({"lead_type": "homeowner"})
    trade = await db.leads.count_documents({"lead_type": "trade"})
    return {"total": total, "new": new, "homeowner": homeowner, "trade": trade}


# ---------------------------- AI Design Assistant ----------------------------
SYSTEM_PROMPT = (
    "You are the 'Design Assistant' for MR. WOOD INTERIORS & FURNITURE, a premium custom "
    "furniture manufacturer and interior design studio based in Jaipur, Rajasthan, India. "
    "You help potential customers with warm, concise, expert guidance on modular kitchens, "
    "wardrobes, TV units, false ceilings, office furniture, residential & commercial interiors, "
    "wood work and renovation. Speak like an experienced design consultant, not a salesperson: "
    "educate first, build trust, be honest about trade-offs (plywood vs MDF, laminate vs veneer "
    "vs PU/acrylic finish, POP vs gypsum ceilings, etc). Give realistic indicative price ranges in "
    "INR when asked, always noting the final quote depends on a site visit. Keep answers under 120 "
    "words, friendly and confident. When the customer shows buying intent, gently guide them to "
    "request a free consultation via the quote form, WhatsApp, or a showroom visit in Jaipur. Never "
    "invent specific offers or discounts. If asked something unrelated to interiors/furniture, "
    "politely steer back to how Mr. Wood can help their space."
)


async def stream_ai_reply(session_id: str, message: str):
    chat = LlmChat(api_key=EMERGENT_LLM_KEY, session_id=session_id, system_message=SYSTEM_PROMPT).with_model("openai", "gpt-5.4")
    try:
        async for event in chat.stream_message(UserMessage(text=message)):
            if isinstance(event, TextDelta):
                yield event.content
            elif isinstance(event, StreamDone):
                break
    except Exception as e:
        logger.error(f"AI stream error: {e}")
        yield "I'm having a little trouble right now. Please reach us on WhatsApp and our team will help you right away."


@api_router.post("/chat")
async def chat_endpoint(payload: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="AI assistant not configured")
    await db.chat_messages.insert_one({
        "id": str(uuid.uuid4()), "session_id": payload.session_id,
        "role": "user", "content": payload.message, "created_at": now_iso(),
    })
    return StreamingResponse(
        stream_ai_reply(payload.session_id, payload.message),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    # Seed admin idempotently
    admin_email = os.environ.get("ADMIN_EMAIL", "admin@example.com").strip().lower()
    admin_password = os.environ.get("ADMIN_PASSWORD", "admin123")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "id": str(uuid.uuid4()), "email": admin_email,
            "password_hash": hash_password(admin_password), "name": "Mr. Wood Admin",
            "role": "admin", "created_at": now_iso(),
        })
        logger.info("Seeded admin user")
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one({"email": admin_email}, {"$set": {"password_hash": hash_password(admin_password)}})
        logger.info("Updated admin password")
    await db.users.create_index("email", unique=True)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

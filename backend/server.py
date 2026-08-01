from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.responses import StreamingResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict, BeforeValidator
from typing import List, Optional, Annotated
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage, TextDelta, StreamDone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

app = FastAPI(title="Mr. Wood Interiors API")
api_router = APIRouter(prefix="/api")


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


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


class ChatRequest(BaseModel):
    session_id: str
    message: str


# ---------------------------- Routes ----------------------------
@api_router.get("/")
async def root():
    return {"message": "Mr. Wood Interiors & Furniture API", "status": "live"}


@api_router.post("/leads", response_model=Lead)
async def create_lead(payload: LeadCreate):
    lead = Lead(**payload.model_dump())
    await db.leads.insert_one(lead.model_dump())
    logger.info(f"New lead captured: {lead.name} / {lead.phone} / {lead.service}")
    return lead


@api_router.get("/leads", response_model=List[Lead])
async def get_leads():
    docs = await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [Lead(**d) for d in docs]


@api_router.get("/leads/stats")
async def lead_stats():
    total = await db.leads.count_documents({})
    new = await db.leads.count_documents({"status": "new"})
    return {"total": total, "new": new}


# ---------------------------- AI Design Assistant ----------------------------
SYSTEM_PROMPT = (
    "You are the 'Design Assistant' for MR. WOOD INTERIORS & FURNITURE, a premium custom "
    "furniture manufacturer and interior design studio based in Jaipur, Rajasthan, India. "
    "You help potential customers with warm, concise, expert guidance on modular kitchens, "
    "wardrobes, TV units, false ceilings, office furniture, residential & commercial interiors, "
    "wood work and renovation. Speak like an experienced design consultant, not a salesperson: "
    "educate first, build trust, be honest about trade-offs (materials like plywood vs MDF, "
    "laminate vs veneer vs PU finish, etc). Give realistic indicative price ranges in INR when "
    "asked, always noting the final quote depends on a site visit. Keep answers under 120 words, "
    "friendly and confident. When the customer shows buying intent, gently guide them to request a "
    "free consultation via the quote form, WhatsApp, or a showroom visit in Jaipur. Never invent "
    "specific offers or discounts. If asked something unrelated to interiors/furniture, politely "
    "steer back to how Mr. Wood can help their space."
)


async def stream_ai_reply(session_id: str, message: str):
    chat = LlmChat(
        api_key=EMERGENT_LLM_KEY,
        session_id=session_id,
        system_message=SYSTEM_PROMPT,
    ).with_model("openai", "gpt-5.4")
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
    # persist user message
    await db.chat_messages.insert_one({
        "id": str(uuid.uuid4()),
        "session_id": payload.session_id,
        "role": "user",
        "content": payload.message,
        "created_at": now_iso(),
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

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

"""Backend API tests for Mr. Wood Interiors — auth, leads, chat."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://mr-wood-spaces.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"

ADMIN_EMAIL = "admin@mrwoodinteriors.in"
ADMIN_PASSWORD = "MrWood@2026"


@pytest.fixture(scope="module")
def token():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD}, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "token" in data and isinstance(data["token"], str) and len(data["token"]) > 20
    assert data["user"]["email"] == ADMIN_EMAIL
    return data["token"]


@pytest.fixture(scope="module")
def auth_headers(token):
    return {"Authorization": f"Bearer {token}"}


# -------- Auth --------
def test_login_wrong_password():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"}, timeout=15)
    assert r.status_code == 401


def test_auth_me(auth_headers):
    r = requests.get(f"{API}/auth/me", headers=auth_headers, timeout=15)
    assert r.status_code == 200
    assert r.json()["email"] == ADMIN_EMAIL


# -------- Protected endpoints gating --------
def test_leads_requires_auth():
    assert requests.get(f"{API}/leads", timeout=15).status_code in (401, 403)


def test_leads_stats_requires_auth():
    assert requests.get(f"{API}/leads/stats", timeout=15).status_code in (401, 403)


def test_leads_with_token(auth_headers):
    r = requests.get(f"{API}/leads", headers=auth_headers, timeout=15)
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_stats_with_token(auth_headers):
    r = requests.get(f"{API}/leads/stats", headers=auth_headers, timeout=15)
    assert r.status_code == 200
    d = r.json()
    for k in ("total", "new", "homeowner", "trade"):
        assert k in d


# -------- Public lead posting (homeowner + trade) --------
def test_create_homeowner_lead(auth_headers):
    payload = {"name": "TEST_Homeowner", "phone": "9999900001", "service": "Modular Kitchen"}
    r = requests.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code == 200
    lead = r.json()
    assert lead["name"] == payload["name"]
    assert lead["lead_type"] == "homeowner"
    assert lead["city"] == "Jaipur"
    # verify persistence
    leads = requests.get(f"{API}/leads", headers=auth_headers, timeout=15).json()
    assert any(l["id"] == lead["id"] for l in leads)


def test_create_trade_lead(auth_headers):
    stats_before = requests.get(f"{API}/leads/stats", headers=auth_headers, timeout=15).json()
    payload = {"name": "TEST_Trade", "phone": "9999900002", "lead_type": "trade", "service": "B2B"}
    r = requests.post(f"{API}/leads", json=payload, timeout=15)
    assert r.status_code == 200
    lead = r.json()
    assert lead["lead_type"] == "trade"
    stats_after = requests.get(f"{API}/leads/stats", headers=auth_headers, timeout=15).json()
    assert stats_after["trade"] == stats_before["trade"] + 1
    assert stats_after["total"] == stats_before["total"] + 1


# -------- Chat streaming --------
def test_chat_streams():
    r = requests.post(f"{API}/chat", json={"session_id": "test-sess-1", "message": "Hi"}, timeout=45, stream=True)
    assert r.status_code == 200
    chunks = b""
    for c in r.iter_content(chunk_size=64):
        chunks += c
        if len(chunks) > 20:
            break
    assert len(chunks) > 0

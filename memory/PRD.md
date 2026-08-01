# PRD — MR. WOOD INTERIORS & FURNITURE (Jaipur)

## Problem Statement
Build a premium, award-worthy digital growth system (lead-gen website) for a custom furniture manufacturer & interior design studio in Jaipur. Objectives: qualified leads, WhatsApp/call enquiries, showroom visits, local SEO/GEO/AEO, premium brand perception, high conversion, fast performance.

## Architecture
- **Frontend**: React 19 + Tailwind, framer-motion (scroll reveals, kinetic hero, micro-interactions), lenis (smooth momentum scroll), react-fast-marquee. Fonts: Cormorant Garamond (heading) + Outfit (body) + Space Mono (labels). Warm earthy palette (bone/sand/ink/terracotta/walnut/olive).
- **Backend**: FastAPI + MongoDB (motor). Routes under /api.
- **AI**: emergentintegrations LlmChat, openai gpt-5.4, streaming SSE, EMERGENT_LLM_KEY.

## User Personas
- Jaipur homeowner planning a new home/kitchen/wardrobe interior.
- Business owner needing office/commercial fit-out.

## Core Requirements (static)
Premium editorial design, clear conversion paths (form, WhatsApp, call), trust indicators, SEO/schema, AEO FAQs, AI assistant.

## Implemented (2026-08-01)
- Kinetic hero with line-by-line masked reveal + parallax image.
- Editorial marquee, numbered manifesto/process chapters.
- Services hover-image list, asymmetric portfolio grid with clipped-frame scaling.
- Dark "why choose us" stats section, testimonial carousel, FAQ accordion (FAQPage schema).
- Lead form → POST /api/leads (persisted); success state.
- Admin dashboard at /admin (leads table + stats).
- AI Design Assistant chat widget (streaming, gpt-5.4).
- Sticky WhatsApp + Call actions.
- SEO: meta, canonical, OG, LocalBusiness + FAQPage JSON-LD.
- Tested: backend 100%, frontend 100% (iteration_1.json).

## Backlog (P1/P2)
- P1: Dedicated service landing pages (per service) for local SEO depth.
- P1: Email notification to studio on new lead (Resend integration).
- P2: Project detail pages / case studies with galleries.
- P2: GA4 + GTM + Clarity analytics wiring, review generation flow.
- P2: Admin auth (currently /admin is open).

## Config Notes
- Contact details in `frontend/src/lib/constants.js` are realistic placeholders (phone 98290 00000, email, Tonk Road address) — swap with real NAP.

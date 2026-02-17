<p align="center">
  <img src="https://img.shields.io/badge/JusticeAI-⚖️-blue?style=for-the-badge&labelColor=1a1a2e&color=3b82f6" alt="JusticeAI" />
</p>

<h1 align="center">⚖️ JusticeAI</h1>

<p align="center">
  <strong>AI-Powered Legal First-Aid for 1.4 Billion Indians</strong><br/>
  <em>Making legal awareness accessible, affordable, and voice-first</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs" alt="Next.js" />
  <img src="https://img.shields.io/badge/Groq-Llama_3.3_70B-orange?logo=meta" alt="Groq" />
  <img src="https://img.shields.io/badge/Sarvam_AI-Voice_&_Vernacular-green" alt="Sarvam AI" />
  <img src="https://img.shields.io/badge/Firebase-Backend-yellow?logo=firebase" alt="Firebase" />
  <img src="https://img.shields.io/badge/RAG-Legal_Knowledge_Base-purple" alt="RAG" />
</p>

<p align="center">
  <a href="#-the-problem">Problem</a> •
  <a href="#-solution">Solution</a> •
  <a href="#-product">Product</a> •
  <a href="#-technical-approach">Tech</a> •
  <a href="#-market-opportunity">Market</a> •
  <a href="#-business-model">Business</a> •
  <a href="#-competitive-landscape">Competition</a> •
  <a href="#-team">Team</a>
</p>

---

## 🏢 Startup Overview

| | |
|---|---|
| **Startup Name** | JusticeAI |
| **Product** | AI Legal First-Aid Platform |
| **Tagline** | *"Legal awareness shouldn't require a lawyer's fee"* |
| **Stage** | MVP (Live & Functional) |
| **Sector** | Legal Tech (AI + Access to Justice) |
| **Geography** | India-first, Global potential |

---

## 🚨 The Problem

### India's Access-to-Justice Crisis

India has a **massive legal awareness gap** that disproportionately affects its most vulnerable citizens:

| Metric | Data |
|--------|------|
| 📂 **Pending Court Cases** | **5+ Crore** cases pending across Indian courts |
| 👨‍⚖️ **Lawyer-to-Citizen Ratio** | 1 lawyer per **1,500 citizens** (vs. 1:300 in the US) |
| 🏘️ **Rural Legal Access** | **70% of rural India** has zero access to legal aid |
| 💰 **Cost of Legal Consultation** | ₹500–₹5,000 per consultation (unaffordable for most) |
| 🗣️ **Language Barrier** | **90% of Indian law** is documented in English; **57% of Indians** don't speak English |
| ⏱️ **Awareness Gap** | Most citizens don't know their basic legal rights (Right to FIR, Consumer Protection, etc.) |

### Who Suffers Most?

- **Daily wage workers** who don't know their labor rights
- **Women facing domestic violence** unsure of legal protections available (IPC 498A, DV Act)
- **Tenants** exploited by landlords who don't know Transfer of Property Act
- **Consumers** cheated online who don't know about Consumer Protection Act 2019
- **Rural citizens** with zero access to lawyers or legal literature

> *"The greatest threat to justice is not injustice — it's ignorance of one's own rights."*

---

## 💡 Solution

### JusticeAI: Legal First-Aid, Not Legal Advice

JusticeAI is an **AI-powered legal awareness platform** that gives every Indian citizen instant, voice-first access to legal information — in their own language.

We are **not** replacing lawyers. We are the **"first responder"** before the lawyer — like how WebMD doesn't replace doctors, but helps you understand symptoms before a hospital visit.

### Core Value Proposition

```
Citizen has a legal problem
       ↓
🎤 Speaks the problem (Hindi/English) via Sarvam Voice AI
       ↓
🧠 AI analyzes using RAG + LLM (grounded in Indian law)
       ↓
📋 Gets: Summary → Applicable Law → Risk Level → Actionable Steps
       ↓
📄 Can generate a Legal Notice Draft (editable + PDF export)
       ↓
🔗 All citations link to Indian Kanoon (verified legal sources)
```

### What Makes Us Different

| Feature | Generic ChatGPT | JusticeAI |
|---------|----------------|-----------|
| **Indian Law Specialization** | ❌ Generic global knowledge | ✅ Curated Indian legal KB |
| **Hallucination Prevention** | ❌ Invents section numbers | ✅ Cites only verified sources |
| **Voice-First (Hindi)** | ❌ Text only, English only | ✅ Speak in Hindi, get Hindi answers |
| **Source Citations** | ❌ No links to verify | ✅ Links to Indian Kanoon |
| **Legal Notice Generation** | ❌ Not available | ✅ Editable drafts + PDF export |
| **Responsible AI** | ❌ No disclaimers | ✅ Full disclaimer modal + guardrails |

---

## 🖥️ Product

### Live Features (Functional MVP)

#### 1. 🎤 Voice-First Legal Query (Sarvam AI)
- Speak your legal problem in **Hindi or English**
- Sarvam AI-powered Speech-to-Text transcription
- Text-to-Speech response playback (hear the answer in your language)
- Designed for **low-literacy users** and mobile-first India

#### 2. 🧠 AI Legal Analysis (Groq + Llama 3.3 70B)
- **Structured response**: Summary → Applicable Law → Explanation → Risk Level
- **Chain-of-Thought reasoning**: Step-by-step legal analysis displayed with animation
- **Risk Assessment**: Visual LOW / MEDIUM / HIGH risk meter
- Temperature: 0.5 for maximum reliability

#### 3. 📚 RAG Legal Knowledge Base (Anti-Wrapper Moat)
- **20+ curated Indian legal provisions** covering:
  - IPC (Criminal Law)
  - CrPC (Criminal Procedure)
  - Consumer Protection Act 2019
  - Domestic Violence Act 2005
  - IT Act (Cyber Crime)
  - Transfer of Property Act
  - Motor Vehicles Act
  - Right to Information Act
  - POCSO Act
- Keyword-based retrieval injected into LLM context
- Every provision linked to **Indian Kanoon** (verified source)

#### 4. 🔗 Verified Source Citations
- Every AI response includes **clickable links** to Indian Kanoon
- Fallback: Google Search links for uncovered topics
- **Zero tolerance for hallucinated section numbers**

#### 5. 📄 Legal Notice Draft Generator
- One-click **"Draft Notice"** button on every AI response
- AI generates a formal legal notice with professional formatting
- **Fully editable** — fill in `[YOUR NAME]`, `[DATE]`, `[ADDRESS]` placeholders
- **Save as PDF** with professional serif typography (Times New Roman)
- Supports Hindi notice generation

#### 6. ⚖️ Responsible AI Framework
- **Disclaimer Modal** on first visit (stored in localStorage)
- Clear messaging: "I am an AI, not a lawyer"
- Anti-hallucination prompt engineering guardrails
- Disclaimer on every AI response

#### 7. 📊 Real-Time Metrics Dashboard
- **Live stats bar**: Total queries served | Helpful % | Languages used
- **Feedback system**: 👍/👎 on every response, saved to Firebase
- Data-driven product improvement loop

---

## 🔧 Technical Approach

### Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 16)                 │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐ │
│  │Voice Input│  │ Chat UI  │  │  Legal Notice Modal    │ │
│  │(Sarvam)  │  │(Messages)│  │(Edit + PDF + Copy)     │ │
│  └────┬─────┘  └────┬─────┘  └────────────────────────┘ │
│       │              │                                    │
│  ┌────▼──────────────▼────────────────────────────────┐  │
│  │              AI QUERY ENGINE (lib/gemini.ts)        │  │
│  │  ┌─────────────┐    ┌──────────────────────────┐   │  │
│  │  │ RAG Search   │    │  Groq API (Llama 3.3)   │   │  │
│  │  │ (20+ Indian  │───▶│  + Guardrails           │   │  │
│  │  │  law entries)│    │  + Vernacular Prompts    │   │  │
│  │  └─────────────┘    └──────────────────────────┘   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │              FIREBASE BACKEND                      │  │
│  │  Auth │ Firestore (queries, feedback) │ Storage    │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Next.js 16 (React 19) | Server components, Turbopack, production-grade |
| **LLM** | Groq API (Llama 3.3 70B) | **10x faster** inference than OpenAI; free tier available |
| **Voice AI** | Sarvam AI | Best-in-class **Indian language** STT/TTS (Hindi, Tamil, etc.) |
| **Knowledge Base** | Custom RAG (TypeScript) | Curated legal provisions with keyword search |
| **Backend** | Firebase (Auth + Firestore + Storage) | Real-time, serverless, scalable |
| **Auth** | Firebase Authentication | Google/Email sign-in |
| **PDF** | Browser Print API | Zero-dependency PDF generation |
| **Deployment** | Vercel | Edge-optimized, global CDN |

### AI Moat: Why This Isn't "Just a Wrapper"

```
                 Generic AI Wrapper          JusticeAI
                 ─────────────────          ──────────
Input:           Text only                  Voice (Hindi/English)
Knowledge:       Generic LLM knowledge     RAG + Curated Indian Law KB
Guardrails:      None                       Anti-hallucination prompts
Output:          Plain text                 Structured JSON + Citations
Verification:    Trust the AI              Indian Kanoon source links
Action:          Nothing                    Generate Legal Notice + PDF
Feedback Loop:   None                       👍/👎 → Firebase analytics
Language:        English only               Vernacular (Think EN → Reply HI)
```

### Data Defensibility (Flywheel)

```
More Users → More Queries → More Feedback Data
     ↓              ↓              ↓
Better RAG    Better Prompts   Training Signal
     ↓              ↓              ↓
   Higher Accuracy & Better Answers
     ↓
  More Trust → More Users (repeat)
```

---

## 📈 Market Opportunity

### Total Addressable Market (TAM)

| Segment | Size | Source |
|---------|------|--------|
| **Indian Legal Services Market** | **$15 Billion** (2024) | IBEF, Niti Aayog |
| **Legal Tech (India)** | **$1.2 Billion** by 2027 | Inc42 / RedSeer |
| **Global Legal AI Market** | **$37 Billion** by 2030 | Grand View Research |

### Serviceable Market (SAM)

| Segment | Users | Opportunity |
|---------|-------|-------------|
| **Internet Users (India)** | 850M+ | Digital-first legal access |
| **Hindi-speaking Internet Users** | 500M+ | Voice-first, vernacular |
| **Legal Query Searches (Google India)** | 100M+/year | Unmet demand for structured answers |
| **Consumer Court Cases Filed** | 10L+/year | Direct actionable use case |

### Why Now?

1. **Sarvam AI** makes Indian-language voice AI production-ready (2024)
2. **Groq** delivers 10x faster LLM inference at fraction of the cost
3. **India Stack** (UPI, DigiLocker, Aadhaar) normalizes digital-first services
4. **Government push**: e-Courts, Tele-Law, Digital India mission
5. **5G rollout** enables voice-first apps in rural India

---

## 💰 Business Model

### Phase 1: Freemium (Current — User Acquisition)

| Tier | Price | Features |
|------|-------|----------|
| **Free** | ₹0 | 5 queries/day, basic legal guidance, voice input |
| **Pro** | ₹99/month | Unlimited queries, legal notice drafts, PDF export, priority response |

### Phase 2: B2B SaaS (6-12 months)

| Customer | Product | Revenue |
|----------|---------|---------|
| **Legal Aid NGOs** | White-label JusticeAI for their beneficiaries | ₹10K-50K/month |
| **District Legal Service Authorities** | AI-assisted triage for walk-in citizens | Government contract |
| **Law Firms** | Client intake automation + initial case assessment | ₹25K-1L/month |
| **Corporate Legal Teams** | Employee legal benefits platform | Per-seat pricing |

### Phase 3: Platform (12-24 months)

| Revenue Stream | Description |
|----------------|-------------|
| **Lawyer Marketplace** | Connect users to verified lawyers (commission model) |
| **Legal Document Templates** | AI-powered contract/agreement generation (pay-per-use) |
| **Legal Insurance** | Partner with insurers for micro legal insurance products |

### Unit Economics (Projected)

| Metric | Value |
|--------|-------|
| **CAC** | ₹50–100 (organic: voice demos, WhatsApp sharing) |
| **LTV (Pro)** | ₹1,200/year |
| **API Cost/Query** | ~₹0.5 (Groq free tier → Sarvam ~₹0.3/call) |
| **Gross Margin** | 85%+ (SaaS-like margins) |

---

## 🏟️ Competitive Landscape

### Direct Competitors

| Player | Strengths | Weaknesses | JusticeAI Advantage |
|--------|-----------|------------|---------------------|
| **Nyaaya.org** | Comprehensive legal wiki | No AI, text-only, English-first | Voice + AI + Vernacular |
| **Vidhik** | Government legal aid portal | Slow, requires form-filling | Instant AI responses |
| **LegalKart** | Lawyer marketplace | Expensive (₹500+ per call) | Free legal awareness first |
| **ChatGPT / Gemini** | Powerful general AI | Hallucinations, no Indian law focus, no voice | RAG + Guardrails + Citations |
| **Rocket Lawyer (US)** | Document automation | US-only, expensive, no Indian law | India-specific, affordable |

### Our Differentiation Matrix

```
                    Voice-First    Indian Law RAG    Vernacular    Actionable Output
                    ───────────    ─────────────    ──────────    ─────────────────
JusticeAI              ✅              ✅              ✅              ✅
ChatGPT                ❌              ❌              ❌              ❌
Nyaaya                 ❌              ❌ (manual)      ❌              ❌
LegalKart              ❌              ❌ (human)       ✅              ❌
Vidhik                 ❌              ❌              ✅              ❌
```

### Defensible Moats

1. **Data Moat**: Every query + feedback builds proprietary training data for Indian legal AI
2. **Knowledge Base Moat**: Curated, verified Indian legal provisions (constantly expanding)
3. **Vernacular Moat**: Hindi-first voice UX is extremely hard to replicate well
4. **Trust Moat**: Responsible AI framework (disclaimers, citations, anti-hallucination) builds user confidence
5. **Network Effect**: More users → more data → better AI → more users

---

## 👥 Team

### JusticeAI

<table>
  <tr>
    <td align="center" width="50%">
      <h3>🧑‍💻 Team JusticeAI</h3>
      <p><em>Building AI for Access to Justice</em></p>
      <br/>
      <p>
        We are a passionate team of engineers and legal-tech enthusiasts building at the intersection of 
        <strong>Artificial Intelligence</strong> and <strong>Access to Justice</strong>.
      </p>
      <p>
        Our mission: ensure that every Indian citizen — regardless of language, literacy, or location — 
        can understand their legal rights within seconds.
      </p>
    </td>
  </tr>
</table>

### Our Capabilities

| Domain | Expertise |
|--------|-----------|
| **AI/ML** | LLM prompt engineering, RAG pipelines, responsible AI |
| **Full-Stack** | Next.js, React, TypeScript, Firebase |
| **Voice AI** | Sarvam API integration, multilingual STT/TTS |
| **Legal Domain** | Indian law research, legal knowledge curation |
| **Product** | User-centric design, accessibility-first thinking |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Groq API Key
- Sarvam AI API Key
- Firebase Project

### Installation

```bash
# Clone the repository
git clone https://github.com/ask8962/v0-justice-ai-mvp-build-fg.git
cd v0-justice-ai-mvp-build-fg

# Install dependencies
npm install

# Run development server
npm run dev
```

### Environment Variables

```env
GROQ_API_KEY=your_groq_api_key
SARVAM_API_KEY=your_sarvam_api_key
```

---

## 📊 Traction & Metrics

| Metric | Status |
|--------|--------|
| **MVP** | ✅ Live & Functional |
| **Features Shipped** | 10+ investor-grade features |
| **Languages Supported** | English, Hindi (expandable) |
| **Legal Provisions in KB** | 20+ (and growing) |
| **Response Time** | < 3 seconds (Groq inference) |
| **User Feedback System** | ✅ Active (Firebase) |

---

## 📜 License

This project is proprietary software owned by **JusticeAI**.

---

<p align="center">
  <strong>⚖️ JusticeAI</strong><br/>
  <em>"Democratizing legal awareness for every Indian citizen"</em><br/><br/>
  <a href="https://github.com/ask8962/v0-justice-ai-mvp-build-fg">GitHub</a>
</p>

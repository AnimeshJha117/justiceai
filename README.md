# JusticeAI ⚖️
**Legal First-Aid for every Indian citizen.**

A bilingual, AI-powered legal assistant that empowers citizens with instant, accurate, and actionable legal guidance in 12+ languages. From understanding your rights to drafting a legal notice, JusticeAI is your pocket lawyer.

![JusticeAI UI](landing_page_preview.png)

## 🚀 Key Features

### 1. **Multi-Language Support (12 Languages)** 🇮🇳
Powered by **Sarvam AI**, we support English, Hindi, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu with native script output. Speak or type in your language!

### 2. **Actionable Outcomes** ✅
We don't just give text, we give tools:
- **Evidence Checklist**: Auto-generated list of documents you need (e.g., Rent Agreement, Bank Statement).
- **Draft Legal Notice**: One-click professional legal notice drafting.
- **Case Brief PDF**: Download a structured case summary for your lawyer.

### 3. **Explainable AI & Trust** 🧠
- **Reasoning Reports**: View the step-by-step logic tree of the AI.
- **RegTech Audit Trail**: Every advice is cryptographically hashed (SHA-256) and logged for tamper-proof verification.
- **Safety First**: Detects high-risk queries (DV, Suicide) and escalates to national helplines immediately.

### 4. **Accessible Design** ♿
- **Voice-First**: Integrated Speech-to-Text and Text-to-Speech for non-literate users.
- **High Contrast**: Designed for readability on low-end devices.

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, Tailwind CSS, TypeScript
- **AI/LLM**: Groq (Llama 3.3 70B Versatile)
- **Voice/Vernacular**: Sarvam AI (Bulbul, Saaras, Mayura models)
- **Backend/DB**: Firebase Firestore & Auth
- **Security**: SHA-256 Hashing, Firestore Rules

## 🏃‍♂️ Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/AnimeshJha117/justiceai.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`:
   ```bash
   NEXT_PUBLIC_GROQ_API_KEY=your_key
   NEXT_PUBLIC_SARVAM_API_KEY=your_key
   ```
4. Run locally:
   ```bash
   npm run dev
   ```

## 🔒 Security Note
All API keys are secured in `.env.local`. The repo does not contain any hardcoded secrets.

---
*Built for the JusticeAI Hackathon 2024.*

# Portfolio AI Chat - Specification

## Vision
The entire website is a conversational AI interface. Visitors chat with "Dhrumil's AI" to learn about his work, experience, skills, and ventures. Think of it as a digital twin that knows everything about Dhrumil.

## Core Features

### 1. Full-Screen Chat Interface
- No traditional page sections — just chat
- Clean, minimal UI (like ChatGPT/Claude)
- Dark/light theme auto-detect from system
- Smooth animations for messages

### 2. RAG System (Your Portfolio as Knowledge)
- All projects, experience, skills, ventures → vector embeddings
- When user asks → retrieve relevant context → feed to LLM
- LLM answers based ONLY on your actual data

### 3. LLM Integration
- **Primary**: Google Gemma 4 (via API or Ollama)
- **Fallback**: Claude/GPT if Gemma unavailable

### 4. Knowledge Base (RAG Content)

**Experience:**
- 2023-Present: Product Designer @ Golden Circle (Parent company)
- 2021-2023: Senior Product Designer @ Reliance General Insurance
- 2019-2021: Product Designer @ Cogno AI
- 2017-2019: Product Designer @ Kotak Securities

**Skills:**
- Design: Figma, Sketch, Design Systems, Prototyping
- UX: User Research, Testing, Accessibility WCAG
- AI: AI Product Management, Chatbot Design, ML Interfaces
- Tech: HTML/CSS, JavaScript, React, Framer Motion

**Ventures:**
- Golden Circle (Parent company - VC + design)
- Party Clap (Event services)
- Saura (Gujarati fashion brand)
- FinFly (Market surveillance/fintech)
- ESOP Platform (In development)
- Custom Clothing B2C (In development)

**Projects (19+):**
- Reliance General Insurance Website
- Hubble Hox Enterprise Dashboard
- Cogno AI Chatbot
- Kotak Securities Trading Platform
- Krft Finance Dashboard
- Envy Editor v1.0
- Party Clap Platform
- Saura Fashion Brand
- FinFly Finance Analytics
- And more...

## Technical Architecture

```
User Query → RAG Retriever → Relevant Context → LLM (Gemma 4) → Response
                                  ↓
                     Vector DB (Portfolio Embeddings)
```

### Files to Create:
1. `src/components/ChatInterface.tsx` - Full-screen chat UI
2. `src/lib/rag.ts` - RAG retrieval logic
3. `src/lib/knowledge.ts` - Portfolio knowledge base
4. `src/app/api/chat/route.ts` - Chat API endpoint

## UI Design

### Layout:
- Full viewport height
- Sidebar (optional): History, settings
- Main: Chat messages + input at bottom
- Responsive: Works on mobile

### Message Types:
- User messages (right-aligned)
- AI responses (left-aligned, with source references)
- Typing indicator
- Suggested questions

### Theme:
- Dark mode: #0A0A0F background, #6366F1 accent
- Light mode: White background, purple accent
- Auto-detect via `prefers-color-scheme`

## Deployment
- Vercel for hosting
- API routes for chat endpoint
- Environment variables for API keys

## Future Enhancements
- Voice input
- Web search for current info
- File upload for project consultation
- Multiple personality modes
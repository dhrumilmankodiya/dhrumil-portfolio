import { NextRequest, NextResponse } from 'next/server';
import { retrieveContext, buildPrompt } from '@/lib/rag';

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODEL_NAME = process.env.OLLAMA_MODEL || 'phi3:mini';

// POST /api/chat
// Body: { message: string, history?: { role: string, content: string }[] }

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, history = [] } = body;
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }
    
    // Retrieve relevant context from knowledge base
    const { context } = retrieveContext(message);
    
    // Build the prompt with system instructions and context
    const fullPrompt = buildPrompt(message, context);
    
    // Call Ollama with Phi-3 mini (or whatever model is available)
    try {
      const response = await fetch(`${OLLAMA_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            {
              role: 'system',
              content: 'You ARE Dhrumil Mankodiya. Speak in first person as if you are him. Be conversational, friendly, real. Not like an AI representing him - BE him.'
            },
            ...history.slice(-6).map((h: { role: string; content: string }) => ({ 
              role: h.role === 'assistant' ? 'assistant' : 'user', 
              content: h.content 
            })),
            {
              role: 'user',
              content: `Context about me: ${context}\n\nQuestion: ${message}\n\nRespond as if YOU are Dhrumil answering this. First person, conversational, natural.`
            },
          ],
          stream: false,
          options: {
            temperature: 0.7,
            num_predict: 512,
            top_p: 0.9,
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Ollama error:', response.status, errorText);
        throw new Error(`Ollama API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.message?.content || data.response;

      return NextResponse.json({
        response: aiResponse,
        sources: context ? context.split('\n\n').length : 0,
      });
      
    } catch (ollamaError) {
      console.error('Ollama call failed:', ollamaError);
      
      // Fallback: Direct response without LLM
      const fallbackResponse = generateDirectResponse(message, context);
      
      return NextResponse.json({
        response: fallbackResponse,
        sources: context ? context.split('\n\n').length : 0,
        fallback: true,
      });
    }
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

// Fallback responses when Ollama is unavailable
function generateDirectResponse(query: string, context: string): string {
  const q = query.toLowerCase();
  
  // Experience
  if (q.includes('experience') || q.includes('work') || q.includes('career')) {
    return `Hey! So my experience-wise, I've been building products since I was 19. Right now I'm at Golden Circle as Product Designer & AI PM - that's my parent company for all ventures. Before this, I was at Reliance General Insurance as Senior Product Designer (2021-2023), worked at Cogno AI on their chatbot (2019-2021), and did product design at Kotak Securities (2017-2019). That's about 4+ years of experience across some cool companies!`;
  }
  
  // Projects
  if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
    const projects = [
      'Reliance General Insurance Website - web design with UX research & accessibility',
      'Hubble Hox Enterprise Dashboard - complex enterprise dashboards',
      'Cogno AI Chatbot - complete chatbot redesign',
      'Kotak Securities Trading Platform - fintech trading interface',
      'FinFly Finance Analytics - my market surveillance platform',
    ];
    return `I've worked on some cool projects! ${projects.join('. ')}. Basically 19+ products shipped across fintech, e-commerce, and more.`;
  }
  
  // Skills
  if (q.includes('skill') || q.includes('know') || q.includes('tech')) {
    return `My skills? I design in Figma, Sketch, build Design Systems, do User Research. On the tech side I work with HTML, CSS, React, Framer Motion. I'm also really into AI Product Management and have worked across fintech, healthcare, e-commerce industries.`;
  }
  
  // Ventures
  if (q.includes('venture') || q.includes('company') || q.includes('business')) {
    return `I run 6 ventures under Golden Circle - that's my parent company. We have: Party Clap (events), Saura (Gujarati fashion), FinFly (fintech/market surveillance), plus ESOP Platform and Custom Clothing B2C which are still in development. Keeping busy!`;
  }
  
  // Contact
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('hire')) {
    return `Hey, thanks for wanting to connect! You can email me at hello@dhrumilmankodiya.com or find me on GitHub, LinkedIn, and Twitter/X. Would love to hear from you!`;
  }
  
  // About
  if (q.includes('about') || q.includes('who') || q.includes('introduce')) {
    return `Hey! I'm Dhrumil - 23 year old Product Designer & AI Product Manager. Been building products since I was 19, and now I run 6 ventures while working with companies like Reliance, Kotak, and Hubble. Pretty much living the entrepreneur life!`;
  }
  
  // Default
  return `Hey! Great question. I'm Dhrumil - feel free to ask me about my experience, projects, skills, ventures, or how to get in touch!`;
}

// GET /api/chat
// Health check
export async function GET() {
  // Check if Ollama is available
  let ollamaStatus = 'unavailable';
  try {
    const response = await fetch(`${OLLAMA_URL}/api/tags`, { 
      method: 'GET',
      signal: AbortSignal.timeout(3000)
    });
    if (response.ok) {
      ollamaStatus = 'available';
    }
  } catch (e) {
    ollamaStatus = 'unavailable';
  }
  
  return NextResponse.json({
    status: 'ok',
    message: 'Portfolio AI Chat API',
    ollama: ollamaStatus,
    model: MODEL_NAME,
    knowledgeItems: 29,
  });
}
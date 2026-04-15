import { NextRequest, NextResponse } from 'next/server';
import { retrieveContext, buildPrompt, generateFallbackResponse } from '@/lib/rag';

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
    
    // Check if we have an LLM API configured
    const llmUrl = process.env.LLM_API_URL;
    const llmApiKey = process.env.LLM_API_KEY;
    
    let aiResponse: string;
    
    if (llmUrl) {
      // Use external LLM API (Ollama, OpenAI, Anthropic, etc.)
      try {
        const prompt = buildPrompt(message, context);
        
        const response = await fetch(llmUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(llmApiKey ? { 'Authorization': `Bearer ${llmApiKey}` } : {}),
          },
          body: JSON.stringify({
            model: process.env.LLM_MODEL || 'gemma-4',
            messages: [
              { role: 'system', content: prompt },
              ...history.slice(-10).map((h: { role: string; content: string }) => ({ role: h.role, content: h.content })),
              { role: 'user', content: message },
            ],
            temperature: 0.7,
            max_tokens: 1024,
          }),
        });
        
        if (!response.ok) {
          throw new Error(`LLM API error: ${response.status}`);
        }
        
        const data = await response.json();
        aiResponse = data.choices?.[0]?.message?.content || data.message?.content || data.response;
      } catch (llmError) {
        console.error('LLM API call failed:', llmError);
        // Fall back to local generation
        aiResponse = generateFallbackResponse(message, context);
      }
    } else {
      // No LLM API configured - use fallback
      aiResponse = generateFallbackResponse(message, context);
    }
    
    return NextResponse.json({
      response: aiResponse,
      sources: context ? context.split('\n---\n').length : 0,
    });
    
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}

// GET /api/chat
// Health check
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Portfolio AI Chat API is running',
    knowledgeItems: 30,
  });
}
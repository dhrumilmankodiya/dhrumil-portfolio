// RAG (Retrieval-Augmented Generation) System for Portfolio Chat
// This handles retrieval of relevant context from the knowledge base

import { getRelevantKnowledge, getSystemPrompt, knowledgeBase, KnowledgeItem } from './knowledge';

export interface RetrievalResult {
  items: KnowledgeItem[];
  context: string;
}

// Simple but effective retrieval using keyword matching
// In production, you'd use vector embeddings + cosine similarity
export function retrieveContext(query: string, maxItems: number = 5): RetrievalResult {
  const relevantItems = getRelevantKnowledge(query, maxItems);
  
  // Build context string from retrieved items
  const context = relevantItems.map(item => 
    `${item.content}`
  ).join('\n\n');
  
  return {
    items: relevantItems,
    context,
  };
}

// Build the full prompt for Gemma 4
export function buildPrompt(userMessage: string, context: string): string {
  const systemPrompt = getSystemPrompt();
  
  return `${systemPrompt}

=== MY PORTFOLIO INFO (use this to answer accurately) ===
${context}

=== PERSON ASKING ME ===
${userMessage}

=== INSTRUCTIONS ===
Respond naturally as if you're Dhrumil having a conversation. Be friendly, share details in a natural way. Don't use bullet points unless specifically helpful. Just have a normal conversation!`;
}
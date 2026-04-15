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
    `[${item.category.toUpperCase()}] ${item.title}:\n${item.content}`
  ).join('\n\n---\n\n');
  
  return {
    items: relevantItems,
    context,
  };
}

// Generate prompt for LLM with retrieved context
export function buildPrompt(userMessage: string, context: string): string {
  const systemPrompt = getSystemPrompt();
  
  return `${systemPrompt}

=== RELEVANT KNOWLEDGE ===
${context}

=== USER QUESTION ===
${userMessage}

=== INSTRUCTIONS ===
Based on the knowledge above, provide a helpful, accurate response. 
If the knowledge contains relevant information, use it to answer.
If you need to list multiple items (projects, skills, etc.), format them clearly.
Keep your response conversational but informative.`;
}

// Fallback response when no LLM is available
export function generateFallbackResponse(query: string, context: string): string {
  const queryLower = query.toLowerCase();
  
  // Direct keyword-based responses as fallback
  if (queryLower.includes('project') || queryLower.includes('work') || queryLower.includes('portfolio')) {
    const projects = knowledgeBase.filter(k => k.category === 'projects');
    return `Here are some of Dhrumil's notable projects:\n\n${projects.map(p => `• **${p.title}**\n  ${p.content.split('\n').slice(2).join(' ')}`).join('\n\n')}`;
  }
  
  if (queryLower.includes('skill') || queryLower.includes('expert') || queryLower.includes('tools')) {
    const skills = knowledgeBase.filter(k => k.category === 'skills');
    return `Here's Dhrumil's skill set:\n\n${skills.map(s => `**${s.title}**: ${s.content}`).join('\n\n')}`;
  }
  
  if (queryLower.includes('experience') || queryLower.includes('work') || queryLower.includes('career')) {
    const experience = knowledgeBase.filter(k => k.category === 'experience');
    return `Dhrumil's work experience:\n\n${experience.map(e => `• **${e.title}**\n  ${e.content}`).join('\n\n')}`;
  }
  
  if (queryLower.includes('venture') || queryLower.includes('company') || queryLower.includes('business')) {
    const ventures = knowledgeBase.filter(k => k.category === 'ventures');
    return `Dhrumil runs 6 ventures:\n\n${ventures.map(v => `• **${v.title}**\n  ${v.content}`).join('\n\n')}`;
  }
  
  if (queryLower.includes('about') || queryLower.includes('who')) {
    const about = knowledgeBase.filter(k => k.category === 'about');
    return about.map(a => a.content).join('\n\n');
  }
  
  if (queryLower.includes('contact') || queryLower.includes('email') || queryLower.includes('reach')) {
    const contact = knowledgeBase.find(k => k.category === 'contact');
    return contact?.content || 'Contact info not available.';
  }
  
  // If no direct match, summarize from context
  if (context) {
    return `Based on Dhrumil's portfolio:\n\n${context.slice(0, 500)}...\n\nWould you like to know more about any specific area?`;
  }
  
  return `I'm Dhrumil's AI assistant! I can tell you about his projects, experience, skills, ventures, or how to contact him. What would you like to know?`;
}
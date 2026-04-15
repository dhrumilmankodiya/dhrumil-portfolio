// Complete Portfolio Knowledge Base for RAG
// This file contains ALL the information about Dhrumil that the AI can use to answer questions

export interface KnowledgeItem {
  id: string;
  category: 'experience' | 'skills' | 'projects' | 'ventures' | 'contact' | 'about';
  title: string;
  content: string;
  keywords: string[];
}

// Complete knowledge base - all this info can be retrieved and used by the AI
export const knowledgeBase: KnowledgeItem[] = [
  // === ABOUT ===
  {
    id: 'about-1',
    category: 'about',
    title: 'Basic Info',
    content: `Dhrumil Mankodiya is a 23-year-old Product Designer and AI Product Manager based in India. 
He has been building products since age 19, giving him over 4 years of hands-on experience.
He describes himself as a Product Designer, Entrepreneur, and Visionary.`,
    keywords: ['about', 'who', 'age', 'bio', 'introduction', 'profile', 'background', '23', 'young'],
  },
  {
    id: 'about-2',
    category: 'about',
    title: 'Experience Summary',
    content: `Dhrumil has worked with major companies including:
- Reliance General Insurance
- Kotak Securities  
- Hubble Hox
- Cogno AI

He has shipped 19+ products and is currently running 6 ventures simultaneously.`,
    keywords: ['experience', 'companies', 'worked', 'background', 'career', 'history', 'reliance', 'kotak', 'hubble', 'cogno'],
  },

  // === EXPERIENCE ===
  {
    id: 'exp-1',
    category: 'experience',
    title: 'Golden Circle - Product Designer & AI PM (Current)',
    content: `2023 - Present
Company: Golden Circle (Parent company / Venture Capital + Design)
Role: Product Designer & AI Product Manager
Description: Leading design across all ventures + AI product development. Building the empire.`,
    keywords: ['golden circle', 'current', 'present', '2023', 'parent company', 'ai product manager', 'lead'],
  },
  {
    id: 'exp-2',
    category: 'experience',
    title: 'Reliance General Insurance - Senior Product Designer',
    content: `2021 - 2023
Company: Reliance General Insurance
Role: Senior Product Designer
Description: UX Research, Design Systems, Accessibility. Comprehensive redesign of company website for accessible UX.`,
    keywords: ['reliance', 'senior product designer', '2021', '2023', 'design systems', 'ux research', 'accessibility', 'wcag'],
  },
  {
    id: 'exp-3',
    category: 'experience',
    title: 'Cogno AI - UI/UX Designer',
    content: `2019 - 2021
Company: Cogno AI
Role: UI/UX Designer
Description: AI chatbot interface design. Complete redesign of AI chatbot interface from research to implementation.`,
    keywords: ['cogno', 'cogno ai', '2019', '2021', 'ui ux designer', 'chatbot', 'ai interface'],
  },
  {
    id: 'exp-4',
    category: 'experience',
    title: 'Kotak Securities - Product Designer',
    content: `2017 - 2019
Company: Kotak Securities
Role: Product Designer
Description: Trading platform UX improvement for one of India's leading brokerages.`,
    keywords: ['kotak', 'kotak securities', '2017', '2019', 'product designer', 'trading', 'fintech', 'brokerage'],
  },

  // === SKILLS ===
  {
    id: 'skills-1',
    category: 'skills',
    title: 'Design Tools',
    content: `Design Tools: Figma, Sketch, Adobe XD, Design Systems, Prototyping, User Research`,
    keywords: ['figma', 'sketch', 'adobe xd', 'design systems', 'prototyping', 'design tools', 'software'],
  },
  {
    id: 'skills-2',
    category: 'skills',
    title: 'UX Expertise',
    content: `UX Expertise: User Research, Usability Testing, Information Architecture, Accessibility (WCAG)`,
    keywords: ['ux', 'user research', 'testing', 'ia', 'accessibility', 'wcag', 'usability'],
  },
  {
    id: 'skills-3',
    category: 'skills',
    title: 'AI & Product Management',
    content: `AI Skills: AI Product Management, Chatbot Design, ML Interfaces, AI Integration`,
    keywords: ['ai', 'artificial intelligence', 'product management', 'chatbot', 'ml', 'machine learning', 'ai pm'],
  },
  {
    id: 'skills-4',
    category: 'skills',
    title: 'Technologies',
    content: `Technologies: HTML, CSS, JavaScript, React, Framer Motion, Notion, Linear, Analytics`,
    keywords: ['html', 'css', 'javascript', 'react', 'framer motion', 'code', 'tech', 'notion', 'linear', 'analytics'],
  },
  {
    id: 'skills-5',
    category: 'skills',
    title: 'Industries',
    content: `Industry Experience: Fintech, Healthcare, E-commerce, Entertainment, Insurance, Trading`,
    keywords: ['fintech', 'healthcare', 'ecommerce', 'e-commerce', 'entertainment', 'insurance', 'trading', 'industries'],
  },

  // === VENTURES ===
  {
    id: 'venture-1',
    category: 'ventures',
    title: 'Golden Circle - Parent Company',
    content: `Golden Circle is the parent company that houses all ventures. It's a venture capital and design company that acts as the umbrella organization for all other ventures.`,
    keywords: ['golden circle', 'parent', 'vc', 'venture capital', 'umbrella'],
  },
  {
    id: 'venture-2',
    category: 'ventures',
    title: 'Party Clap - Event Services',
    content: `Party Clap is an event and entertainment services platform. Active and operating.`,
    keywords: ['party clap', 'party', 'event', 'entertainment', 'services', 'active'],
  },
  {
    id: 'venture-3',
    category: 'ventures',
    title: 'Saura - Fashion Brand',
    content: `Saura is a premium Gujarati clothing brand. It's a fashion brand focused on traditional Gujarati attire. Active and operating.`,
    keywords: ['saura', 'fashion', 'gujarati', 'clothing', 'brand', 'ethnic', 'fashion brand'],
  },
  {
    id: 'venture-4',
    category: 'ventures',
    title: 'FinFly - Market Surveillance',
    content: `FinFly is a market surveillance and financial analytics platform. It provides real-time market intelligence, analytics, and trading insights. Active and operating.`,
    keywords: ['finfly', 'fintech', 'finance', 'market', 'surveillance', 'analytics', 'trading', 'active'],
  },
  {
    id: 'venture-5',
    category: 'ventures',
    title: 'ESOP Platform',
    content: `ESOP Platform is an employee stock ownership platform. Currently in development.`,
    keywords: ['esop', 'employee stock', 'platform', 'in development', 'building'],
  },
  {
    id: 'venture-6',
    category: 'ventures',
    title: 'Custom Clothing B2C',
    content: `Custom Clothing B2C is a B2C custom clothing platform. Currently in development.`,
    keywords: ['custom clothing', 'b2c', 'clothing', 'custom', 'in development', 'building'],
  },

  // === PROJECTS ===
  {
    id: 'project-1',
    category: 'projects',
    title: 'Reliance General Insurance Website',
    content: `Project: Reliance General Insurance Website
Category: Web Design
Tags: UX Research, Design Systems, Accessibility
Description: Comprehensive redesign of company website for seamless, accessible UX.
Color: #6366F1 (Indigo)`,
    keywords: ['reliance', 'rgi', 'insurance', 'website', 'web design', 'design systems', 'accessibility', 'ux research'],
  },
  {
    id: 'project-2',
    category: 'projects',
    title: 'Hubble Hox Enterprise Dashboard',
    content: `Project: Hubble Hox Enterprise Dashboard
Category: UI/UX Design
Tags: Dashboard, Data Visualization, Enterprise
Description: Complex interface design for enterprise products. Data visualization and analytics dashboards.
Color: #8B5CF6 (Purple)`,
    keywords: ['hubble', 'hox', 'dashboard', 'enterprise', 'data visualization', 'ui ux', 'analytics'],
  },
  {
    id: 'project-3',
    category: 'projects',
    title: 'Cogno AI Chatbot',
    content: `Project: Cogno AI Chatbot
Category: Product Design
Tags: AI, Chat Interface, UX Research
Description: Complete AI chatbot interface redesign from research to implementation.
Color: #D946EF (Fuchsia)`,
    keywords: ['cogno', 'ai', 'chatbot', 'chat interface', 'product design', 'ai interface'],
  },
  {
    id: 'project-4',
    category: 'projects',
    title: 'Kotak Securities Trading Platform',
    content: `Project: Kotak Securities Trading Platform
Category: UI/UX Design
Tags: Fintech, Trading, High-Stakes UX
Description: Trading platform UX improvement for one of India's leading brokerages. High-stakes financial interfaces.
Color: #F5A623 (Gold)`,
    keywords: ['kotak', 'trading', 'securities', 'fintech', 'platform', 'brokerage', 'ui ux'],
  },
  {
    id: 'project-5',
    category: 'projects',
    title: 'Krft Finance Dashboard',
    content: `Project: Krft Finance Dashboard
Category: Product Design
Tags: Financial, Dashboard, Data Viz
Description: Complex financial dashboards for enterprise clients.
Color: #10B981 (Emerald)`,
    keywords: ['krft', 'finance', 'dashboard', 'financial', 'enterprise', 'data viz'],
  },
  {
    id: 'project-6',
    category: 'projects',
    title: 'Envy Editor v1.0',
    content: `Project: Envy Editor v1.0
Category: UI/UX Design
Tags: Media Editing, Product Design, Launch
Description: Flagship product UI design for a media editing platform. Launch version 1.0.
Color: #F43F5E (Rose)`,
    keywords: ['envy', 'editor', 'media', 'editing', 'product design', 'launch'],
  },
  {
    id: 'project-7',
    category: 'projects',
    title: 'Party Clap Platform',
    content: `Project: Party Clap Platform
Category: Product Design
Tags: Event Services, Startup, Mobile
Description: Event and entertainment services platform.
Color: #06B6D4 (Cyan)`,
    keywords: ['party clap', 'event', 'services', 'startup', 'mobile', 'platform'],
  },
  {
    id: 'project-8',
    category: 'projects',
    title: 'Saura Fashion Brand',
    content: `Project: Saura Fashion Brand
Category: Brand Design
Tags: E-commerce, Fashion, Heritage
Description: Premium Gujarati clothing brand. E-commerce fashion platform.
Color: #F97316 (Orange)`,
    keywords: ['saura', 'fashion', 'gujarati', 'ecommerce', 'brand', 'heritage', 'clothing'],
  },
  {
    id: 'project-9',
    category: 'projects',
    title: 'FinFly Finance Analytics',
    content: `Project: FinFly Finance Analytics
Category: Product Design
Tags: Fintech, Analytics, Market Surveillance
Description: Market surveillance platform. Real-time market intelligence and financial analytics.
Color: #84CC16 (Lime)`,
    keywords: ['finfly', 'finance', 'analytics', 'fintech', 'market', 'surveillance', 'trading'],
  },

  // === CONTACT ===
  {
    id: 'contact-1',
    category: 'contact',
    title: 'Contact Information',
    content: `Email: hello@dhrumilmankodiya.com
GitHub: https://github.com/dhrumilmankodiya
LinkedIn: https://linkedin.com/in/dhrumilmankodiya
Twitter/X: https://twitter.com/dhrumilmankodiya`,
    keywords: ['contact', 'email', 'github', 'linkedin', 'twitter', 'reach', 'connect', 'hello'],
  },
];

// Helper to get all content as plain text for embedding
export function getAllKnowledgeText(): string {
  return knowledgeBase.map(item => 
    `${item.title}: ${item.content}`
  ).join('\n\n');
}

// Get relevant knowledge for a query (simple keyword matching)
export function getRelevantKnowledge(query: string, maxItems: number = 5): KnowledgeItem[] {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);
  
  // Score each item
  const scored = knowledgeBase.map(item => {
    let score = 0;
    
    // Check title match (highest weight)
    if (item.title.toLowerCase().includes(queryLower)) {
      score += 10;
    }
    
    // Check keyword matches
    for (const keyword of item.keywords) {
      if (queryLower.includes(keyword.toLowerCase())) {
        score += 5;
      }
    }
    
    // Check content match
    if (item.content.toLowerCase().includes(queryLower)) {
      score += 3;
    }
    
    // Bonus for multiple query word matches
    for (const word of queryWords) {
      if (item.keywords.some(k => k.toLowerCase().includes(word))) {
        score += 2;
      }
    }
    
    return { item, score };
  });
  
  // Sort by score and return top results
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxItems)
    .map(s => s.item);
}

// System prompt for the AI
export function getSystemPrompt(): string {
  return `You are Dhrumil Mankodiya's AI assistant on his portfolio website. 
Your job is to help visitors learn about Dhrumil's work, experience, skills, and ventures.

IMPORTANT RULES:
1. ONLY use information from the provided knowledge base - never make up information
2. Be conversational but professional - like a knowledgeable friend
3. Keep responses concise but informative
4. When you mention projects, briefly describe what they are
5. If you don't have information about something, say so honestly
6. You can suggest next questions the user might want to ask

About Dhrumil:
- 23 years old, Product Designer & AI Product Manager
- 4+ years experience, started building products at 19
- Worked at: Reliance General Insurance, Kotak Securities, Hubble Hox, Cogno AI
- Currently runs 6 ventures under Golden Circle
- Has shipped 19+ products

Knowledge base context will be provided with each question. Use it to give accurate answers.`;
}
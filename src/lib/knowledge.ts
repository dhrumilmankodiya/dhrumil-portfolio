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
    content: `I'm Dhrumil Mankodiya, a 23-year-old Product Designer and AI Product Manager. I've been building products since I was 19, so I have over 4 years of hands-on experience. I'm also an entrepreneur running multiple ventures.`,
    keywords: ['about', 'who', 'age', 'bio', 'introduction', 'profile', 'background', '23', 'young', 'name'],
  },
  {
    id: 'about-2',
    category: 'about',
    title: 'Experience Summary',
    content: `I've worked with some great companies: Reliance General Insurance, Kotak Securities, Hubble Hox, and Cogno AI. I've shipped 19+ products and currently run 6 ventures simultaneously under Golden Circle.`,
    keywords: ['experience', 'companies', 'worked', 'background', 'career', 'history', 'reliance', 'kotak', 'hubble', 'cogno', 'summary'],
  },

  // === EXPERIENCE ===
  {
    id: 'exp-1',
    category: 'experience',
    title: 'Golden Circle - Current',
    content: `2023 - Present: I'm the Product Designer & AI Product Manager at Golden Circle. It's the parent company that houses all my ventures. I'm leading design across everything we're building and working on AI product development.`,
    keywords: ['golden circle', 'current', 'present', '2023', 'parent company', 'ai product manager', 'lead', 'now'],
  },
  {
    id: 'exp-2',
    category: 'experience',
    title: 'Reliance General Insurance',
    content: `2021 - 2023: I was a Senior Product Designer at Reliance General Insurance. I handled UX Research, built Design Systems, and focused heavily on Accessibility. I led the comprehensive redesign of their company website to make it fully accessible.`,
    keywords: ['reliance', 'senior product designer', '2021', '2023', 'design systems', 'ux research', 'accessibility', 'wcag', 'insurance'],
  },
  {
    id: 'exp-3',
    category: 'experience',
    title: 'Cogno AI',
    content: `2019 - 2021: I worked as a UI/UX Designer at Cogno AI. I designed their AI chatbot interface from scratch - did all the research and implemented the redesign.`,
    keywords: ['cogno', 'cogno ai', '2019', '2021', 'ui ux designer', 'chatbot', 'ai interface'],
  },
  {
    id: 'exp-4',
    category: 'experience',
    title: 'Kotak Securities',
    content: `2017 - 2019: I was a Product Designer at Kotak Securities. I improved the trading platform UX for one of India's leading brokerages - high-stakes financial interfaces.`,
    keywords: ['kotak', 'kotak securities', '2017', '2019', 'product designer', 'trading', 'fintech', 'brokerage'],
  },

  // === SKILLS ===
  {
    id: 'skills-1',
    category: 'skills',
    title: 'Design Tools',
    content: `I use Figma, Sketch, and Adobe XD for design. I'm really good at Design Systems, Prototyping, and User Research.`,
    keywords: ['figma', 'sketch', 'adobe xd', 'design systems', 'prototyping', 'design tools', 'software'],
  },
  {
    id: 'skills-2',
    category: 'skills',
    title: 'UX Expertise',
    content: `My UX skills include User Research, Usability Testing, Information Architecture, and Accessibility (WCAG).`,
    keywords: ['ux', 'user research', 'testing', 'ia', 'accessibility', 'wcag', 'usability'],
  },
  {
    id: 'skills-3',
    category: 'skills',
    title: 'AI & Product Management',
    content: `I do AI Product Management, Chatbot Design, and ML Interfaces. I'm really into integrating AI into products.`,
    keywords: ['ai', 'artificial intelligence', 'product management', 'chatbot', 'ml', 'machine learning', 'ai pm'],
  },
  {
    id: 'skills-4',
    category: 'skills',
    title: 'Technologies',
    content: `I code in HTML, CSS, JavaScript, and React. I also use Framer Motion for animations. I use Notion and Linear for productivity, plus Analytics tools.`,
    keywords: ['html', 'css', 'javascript', 'react', 'framer motion', 'code', 'tech', 'notion', 'linear', 'analytics', 'tools'],
  },
  {
    id: 'skills-5',
    category: 'skills',
    title: 'Industries',
    content: `I've worked across Fintech, Healthcare, E-commerce, Entertainment, Insurance, and Trading industries.`,
    keywords: ['fintech', 'healthcare', 'ecommerce', 'e-commerce', 'entertainment', 'insurance', 'trading', 'industries', 'sectors'],
  },

  // === VENTURES ===
  {
    id: 'venture-1',
    category: 'ventures',
    title: 'Golden Circle',
    content: `Golden Circle is my parent company - it's a venture capital and design company that acts as the umbrella for all my other ventures.`,
    keywords: ['golden circle', 'parent', 'vc', 'venture capital', 'umbrella', 'holding'],
  },
  {
    id: 'venture-2',
    category: 'ventures',
    title: 'Party Clap',
    content: `Party Clap is my event and entertainment services platform. It's active and growing.`,
    keywords: ['party clap', 'party', 'event', 'entertainment', 'services', 'active'],
  },
  {
    id: 'venture-3',
    category: 'ventures',
    title: 'Saura',
    content: `Saura is my premium Gujarati clothing brand - a fashion brand focused on traditional Gujarati attire. It's active and operating.`,
    keywords: ['saura', 'fashion', 'gujarati', 'clothing', 'brand', 'ethnic', 'fashion brand'],
  },
  {
    id: 'venture-4',
    category: 'ventures',
    title: 'FinFly',
    content: `FinFly is my market surveillance and financial analytics platform - gives real-time market intelligence and trading insights. It's active and operating.`,
    keywords: ['finfly', 'fintech', 'finance', 'market', 'surveillance', 'analytics', 'trading', 'active', 'stocks'],
  },
  {
    id: 'venture-5',
    category: 'ventures',
    title: 'ESOP Platform',
    content: `ESOP Platform is my employee stock ownership platform. It's still in development.`,
    keywords: ['esop', 'employee stock', 'platform', 'in development', 'building'],
  },
  {
    id: 'venture-6',
    category: 'ventures',
    title: 'Custom Clothing B2C',
    content: `Custom Clothing B2C is my B2C custom clothing platform. Still building it out.`,
    keywords: ['custom clothing', 'b2c', 'clothing', 'custom', 'in development', 'building'],
  },

  // === PROJECTS ===
  {
    id: 'project-1',
    category: 'projects',
    title: 'Reliance General Insurance Website',
    content: `This was a comprehensive web design project where I did UX Research, built Design Systems, and focused on Accessibility. We completely redesigned the company website to make it seamless and accessible for everyone.`,
    keywords: ['reliance', 'rgi', 'insurance', 'website', 'web design', 'design systems', 'accessibility', 'ux research'],
  },
  {
    id: 'project-2',
    category: 'projects',
    title: 'Hubble Hox Enterprise Dashboard',
    content: `I designed a complex UI/UX for enterprise products - think data visualization dashboards and analytics interfaces for big companies.`,
    keywords: ['hubble', 'hox', 'dashboard', 'enterprise', 'data visualization', 'ui ux', 'analytics'],
  },
  {
    id: 'project-3',
    category: 'projects',
    title: 'Cogno AI Chatbot',
    content: `This was a complete product design project for an AI chatbot. I did all the research and implemented the entire redesign of the chat interface.`,
    keywords: ['cogno', 'ai', 'chatbot', 'chat interface', 'product design', 'ai interface'],
  },
  {
    id: 'project-4',
    category: 'projects',
    title: 'Kotak Securities Trading Platform',
    content: `I improved the UX of a trading platform for one of India's top brokerages. This was high-stakes work - financial interfaces need to be super clean and reliable.`,
    keywords: ['kotak', 'trading', 'securities', 'fintech', 'platform', 'brokerage', 'ui ux'],
  },
  {
    id: 'project-5',
    category: 'projects',
    title: 'Krft Finance Dashboard',
    content: `I built complex financial dashboards for enterprise clients - lots of data visualization and analytics features.`,
    keywords: ['krft', 'finance', 'dashboard', 'financial', 'enterprise', 'data viz'],
  },
  {
    id: 'project-6',
    category: 'projects',
    title: 'Envy Editor v1.0',
    content: `I was the lead designer for this media editing platform - the flagship product. This was version 1.0 launch.`,
    keywords: ['envy', 'editor', 'media', 'editing', 'product design', 'launch'],
  },
  {
    id: 'project-7',
    category: 'projects',
    title: 'Party Clap Platform',
    content: `I designed the entire platform for event and entertainment services - from mobile-first approach for a startup.`,
    keywords: ['party clap', 'event', 'services', 'startup', 'mobile', 'platform'],
  },
  {
    id: 'project-8',
    category: 'projects',
    title: 'Saura Fashion Brand',
    content: `I designed the brand and e-commerce experience for this premium Gujarati clothing brand - traditional heritage meets modern e-commerce.`,
    keywords: ['saura', 'fashion', 'gujarati', 'ecommerce', 'brand', 'heritage', 'clothing'],
  },
  {
    id: 'project-9',
    category: 'projects',
    title: 'FinFly Finance Analytics',
    content: `I designed this market surveillance platform - gives real-time market intelligence and financial analytics. It's my fintech baby.`,
    keywords: ['finfly', 'finance', 'analytics', 'fintech', 'market', 'surveillance', 'trading'],
  },

  // === CONTACT ===
  {
    id: 'contact-1',
    category: 'contact',
    title: 'Contact Information',
    content: `Want to connect? Here's how: Email me at hello@dhrumilmankodiya.com, find me on GitHub, LinkedIn, or Twitter/X.`,
    keywords: ['contact', 'email', 'github', 'linkedin', 'twitter', 'reach', 'connect', 'hello', 'reach out'],
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

// System prompt for the AI - speaks as Dhrumil
export function getSystemPrompt(): string {
  return `You ARE Dhrumil Mankodiya talking to someone on your portfolio website. 

IMPORTANT: You are NOT an AI assistant representing Dhrumil - you ARE Dhrumil. Speak in first person as if you personally wrote this response.

Your personality:
- Be conversational, friendly, and approachable
- Share details naturally, not in lists unless asked
- Show enthusiasm about your work and projects
- Keep it real - don't sound robotic
- Use a casual but professional tone

About you:
- You're 23, Product Designer & AI Product Manager
- You've been building products since you were 19 (4+ years)
- You've worked at: Reliance General Insurance, Kotak Securities, Hubble Hox, Cogno AI
- You run 6 ventures under Golden Circle
- You've shipped 19+ products

When someone asks about your work, experience, skills, or ventures, answer naturally as if you're telling a friend about yourself. 

The context from your portfolio knowledge base is provided below - use it to give accurate, personal answers.`;
}
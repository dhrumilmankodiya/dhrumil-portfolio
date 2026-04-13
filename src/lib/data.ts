// All content data for Dhrumil's Portfolio
// Single source of truth — update here, it reflects everywhere

export const personal = {
  name: "Dhrumil",
  nameAccent: "M. Mankodiya",
  fullName: "DHRUMIL M. MANKODIYA",
  title: "Product Designer & AI Product Manager",
  tagline: "Building an empire at 23.",
  subTagline: "Designing products that ship. Building ventures that scale.",
  email: "hello@dhrumilmankodiya.com",
  social: {
    github: "https://github.com/dhrumilmankodiya",
    linkedin: "https://linkedin.com/in/dhrumilmankodiya",
    twitter: "https://twitter.com/dhrumilmankodiya",
    dribbble: "https://dribbble.com/dhrumilmankodiya",
  },
  stats: [
    { number: "19+", label: "Products Shipped" },
    { number: "6", label: "Ventures Building" },
    { number: "4+", label: "Years in Design" },
  ],
};

export const about = {
  headline: "I'm Dhrumil.",
  paragraphs: [
    "A 23-year-old building things that matter. Part product designer, part product thinker, full-time empire builder. I live at the intersection of design, technology, and business — where great products are born.",
    "I don't just design screens. I design outcomes. From AI-powered fintech platforms to fashion brands, I've shipped products that real people use, love, and pay for.",
  ],
};

export const capabilities = [
  {
    icon: "Layers",
    name: "Product Design",
    description:
      "End-to-end product thinking — from user research to shipped code. I turn ambiguous problems into clear, beautiful, functional products.",
  },
  {
    icon: "Monitor",
    name: "UI/UX Design",
    description:
      "Pixel-perfect interfaces that users love. Web + mobile, from wireframes to polished handoff. Every pixel intentional.",
  },
  {
    icon: "Sparkles",
    name: "AI Product Management",
    description:
      "Building with AI, not just around it. LLM products, automation pipelines, and intelligence layers that make products genuinely smart.",
  },
  {
    icon: "Box",
    name: "Design Systems",
    description:
      "Scalable, consistent, team-ready. Component libraries and design tokens that let teams ship faster without breaking things.",
  },
];

export const projects = [
  {
    id: "reliance-gi",
    name: "Reliance General Insurance",
    category: "Fintech",
    tags: ["Product Design", "UX Overhaul", "Insurance"],
    role: "Lead Product Designer",
    challenge:
      "Complex legacy underwriting system causing 40% task overhead. Underwriters struggled with multi-step workflows and data overload.",
    approach:
      "Full UX overhaul — simplified flows, progressive disclosure, intelligent defaults. Designed a new component system for insurance-specific inputs.",
    outcome:
      "40% reduction in task completion time. Significantly improved underwriter satisfaction scores.",
    featured: true,
    color: "#1a56db",
  },
  {
    id: "kotak-securities",
    name: "Kotak Securities",
    category: "Fintech",
    tags: ["Mobile UX", "Trading Platform", "Redesign"],
    role: "Senior Product Designer",
    challenge:
      "Trade completion rates lagging due to complex mobile flows. Users dropping off at critical points in the investment journey.",
    approach:
      "Mobile-first redesign of the trading flow. Simplified order entry, one-tap quick trades, redesigned portfolio view.",
    outcome:
      "Measurable improvement in mobile trade completion rates. NPS increase across trading segments.",
    featured: true,
    color: "#0f9d58",
  },
  {
    id: "finfly-finance",
    name: "FinFly Finance",
    category: "AI / Fintech",
    tags: ["AI", "Real-time Data", "Product Design"],
    role: "Founder + Product Designer",
    challenge:
      "Build a real-time market intelligence platform from zero — surveillance, analysis, and trade calls for 41 stocks.",
    approach:
      "Designed complete product: dashboard architecture, data visualization systems, AI-generated insights layout, alert framework.",
    outcome:
      "41-stock portfolio tracked. 9 automated cron jobs running. 24/7 market surveillance with real-time Telegram delivery.",
    featured: true,
    color: "#f59e0b",
  },
  {
    id: "finbro-ai",
    name: "FinBro AI",
    category: "AI Trading",
    tags: ["AI Chatbot", "Trading", "UX"],
    role: "Product Designer",
    challenge:
      "Create an AI-powered trading assistant that makes complex market data accessible to retail investors.",
    approach:
      "Conversational UI design for financial data. Natural language queries with structured data responses.",
    outcome:
      "Launched beta with strong user engagement on conversational trading insights.",
    featured: false,
    color: "#8b5cf6",
  },
  {
    id: "golden-circle",
    name: "Golden Circle",
    category: "Insurance",
    tags: ["Product Design", "Underwriting", "Platform"],
    role: "Product Designer",
    challenge: "Build an insurance underwriting platform for the Golden Circle parent company.",
    approach: "End-to-end product design from research to development handoff.",
    outcome: "Core platform launched and operational.",
    featured: false,
    color: "#6366f1",
  },
  {
    id: "party-clap",
    name: "Party Clap",
    category: "Services",
    tags: ["Brand Identity", "Web Design", "Services"],
    role: "UX Designer",
    challenge: "Establish a distinctive services brand presence with a compelling web identity.",
    approach: "Brand identity design + web presence from concept to launch.",
    outcome: "Live brand and website driving client acquisition.",
    featured: false,
    color: "#ec4899",
  },
  {
    id: "saura",
    name: "Saura",
    category: "Fashion",
    tags: ["E-commerce", "Fashion", "Brand Identity"],
    role: "Product Designer",
    challenge: "Design e-commerce UX and brand identity for a Gujarati fashion brand.",
    approach: "Heritage-meets-modern brand identity with full e-commerce experience design.",
    outcome: "Brand and platform established in the Gujarati fashion market.",
    featured: false,
    color: "#f97316",
  },
  {
    id: "esop-platform",
    name: "ESOP Platform",
    category: "Fintech",
    tags: ["Product Design", "In Development"],
    role: "Founder + Designer",
    challenge: "Build a platform to simplify employee stock option plans for startups.",
    approach: "Product design in progress.",
    outcome: "In development.",
    featured: false,
    color: "#06b6d4",
  },
  {
    id: "custom-clothing-b2c",
    name: "Custom Clothing B2C",
    category: "E-commerce",
    tags: ["E-commerce", "Fashion Tech", "In Development"],
    role: "Founder + Designer",
    challenge: "Direct-to-consumer custom clothing platform with tailored fit.",
    approach: "Product design in progress.",
    outcome: "In development.",
    featured: false,
    color: "#84cc16",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    company: "FinFly Finance",
    role: "Founder, Product Designer (AI)",
    description:
      "Building real-time market intelligence from zero. Designing AI-powered surveillance platform, data visualization systems, and automated trade intelligence delivery.",
    tags: ["Product Design", "AI/ML", "Founder"],
  },
  {
    period: "2024 — Present",
    company: "Golden Circle",
    role: "Lead Product Designer",
    description:
      "Insurance underwriting platform redesign. Led end-to-end product design for a complex B2B insurance workflow tool.",
    tags: ["Product Design", "Insurance", "B2B"],
  },
  {
    period: "2024",
    company: "Kotak Securities",
    role: "Senior Product Designer",
    description:
      "Trading platform UX overhaul. Mobile-first redesign of the investment app, focusing on trade completion optimization.",
    tags: ["Mobile UX", "Fintech", "Trading"],
  },
  {
    period: "2023",
    company: "FinBro AI",
    role: "Product Designer",
    description:
      "AI-powered trading assistant with conversational interface. Natural language queries for financial market data.",
    tags: ["AI", "Conversational UI", "Fintech"],
  },
  {
    period: "2023",
    company: "Party Clap",
    role: "UX Designer",
    description:
      "Services business brand identity and web presence. Creating a distinctive voice and visual system for a creative services firm.",
    tags: ["Brand Identity", "Web Design"],
  },
  {
    period: "2022",
    company: "Saura",
    role: "Product Designer",
    description:
      "Gujarati fashion brand identity and e-commerce UX. Heritage-meets-modern design for a regional fashion brand going digital.",
    tags: ["E-commerce", "Fashion", "Brand"],
  },
  {
    period: "2021",
    company: "Golden Circle",
    role: "Product Designer",
    description:
      "Early-stage product design work for the parent company. Learning the insurance domain while shipping real product.",
    tags: ["Product Design", "Insurance"],
  },
  {
    period: "2020",
    company: "Early Career",
    role: "Design Intern",
    description:
      "First steps in the industry. Learning, shipping, growing. Every designer starts somewhere.",
    tags: ["Early Career", "Learning"],
  },
];

export const ventures = [
  {
    name: "Golden Circle",
    emoji: "🏛️",
    tagline: "The umbrella. The foundation.",
    description:
      "Parent company for the empire. Insurance underwriting and financial services platform — the business foundation everything else is built on.",
    status: "Active",
    statusColor: "green",
  },
  {
    name: "FinFly Finance",
    emoji: "📈",
    tagline: "Real-time market intelligence.",
    description:
      "AI-powered trading intelligence platform. 41-stock surveillance, automated trade calls, and real-time delivery via Telegram. Bobby Axelrod energy.",
    status: "Active",
    statusColor: "green",
  },
  {
    name: "Party Clap",
    emoji: "👏",
    tagline: "Services that stand out.",
    description:
      "Creative services business. Branding, design, and execution for clients who want work that actually makes a difference.",
    status: "Active",
    statusColor: "green",
  },
  {
    name: "Saura",
    emoji: "🛍️",
    tagline: "Heritage meets modern.",
    description:
      "Gujarati fashion brand. Taking traditional craft to modern markets — beautiful clothing with cultural depth.",
    status: "Active",
    statusColor: "green",
  },
  {
    name: "ESOP Platform",
    emoji: "📊",
    tagline: "Employee ownership, simplified.",
    description:
      "Coming soon. Making stock options accessible and understandable for startup employees at every level.",
    status: "In Development",
    statusColor: "amber",
  },
  {
    name: "Custom Clothing B2C",
    emoji: "👔",
    tagline: "Tailored, direct.",
    description:
      "Coming soon. Direct-to-consumer custom clothing with perfect fit — technology meets traditional tailoring.",
    status: "In Development",
    statusColor: "amber",
  },
];

export const skills = {
  designTools: ["Figma", "Adobe XD", "Sketch", "Principle", "Framer"],
  expertise: [
    "Product Design",
    "AI/ML Integration",
    "Fintech UX",
    "Design Systems",
    "Prototyping",
    "User Research",
  ],
  languages: ["English", "Hindi", "Gujarati"],
};

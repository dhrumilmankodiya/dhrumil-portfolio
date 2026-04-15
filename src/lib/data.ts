export const heroData = {
  tagline: "Building an empire at 23.",
  subtitle: "Product Designer. Entrepreneur. Visionary.",
  stats: [
    {
      value: "19+",
      label: "Products Shipped",
    },
    {
      value: "6",
      label: "Ventures",
    },
    {
      value: "4+",
      label: "Years",
    },
  ],
};

export const colors = {
  background: "#0A0A0F",
  backgroundDeep: "#050508",
  surface: "#12121A",
  surfaceLight: "#1A1A25",
  surfaceElevated: "#1E1E2A",
  text: "#FFFFFF",
  textMuted: "#A0A0B0",
  textDim: "#6B6B7B",
  accent: "#6366F1",
  accentLight: "#818CF8",
  accentDark: "#4F46E5",
  accentGradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
  accentGlow: "rgba(99, 102, 241, 0.4)",
  accentSubtle: "rgba(99, 102, 241, 0.1)",
  gold: "#F5A623",
  goldLight: "#FBD587",
  goldGradient: "linear-gradient(135deg, #F5A623 0%, #F7B731 100%)",
  success: "#10B981",
  successLight: "#34D399",
  error: "#EF4444",
  warning: "#F59E0B",
  border: "rgba(255, 255, 255, 0.08)",
  borderLight: "rgba(255, 255, 255, 0.12)",
  borderSubtle: "rgba(255, 255, 255, 0.04)",
  cardGlow: "rgba(99, 102, 241, 0.15)",
  cardBorder: "rgba(255, 255, 255, 0.06)",
};

export const typography = {
  hero: "clamp(56px, 10vw, 120px)",
  heroMobile: "clamp(40px, 8vw, 72px)",
  h1: "clamp(40px, 7vw, 80px)",
  h2: "clamp(32px, 5vw, 56px)",
  h3: "clamp(24px, 3.5vw, 40px)",
  h4: "clamp(20px, 2.5vw, 28px)",
  body: "18px",
  bodyLarge: "20px",
  bodySmall: "16px",
  small: "14px",
  tiny: "12px",
};

export interface Project {
  id: string;
  name: string;
  category: string;
  tags: string[];
  thumbnail: string;
  link: string;
  description: string;
  color?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Reliance General Insurance Website",
    category: "Web Design",
    tags: ["UX Research", "Design Systems", "Accessibility"],
    thumbnail: "/projects/rgi-website.jpg",
    link: "/projects/reliance-general",
    description: "Comprehensive redesign of company website for seamless, accessible UX",
    color: "#6366F1"
  },
  {
    id: "2",
    name: "Hubble Hox Enterprise Dashboard",
    category: "UI/UX Design",
    tags: ["Dashboard", "Data Visualization", "Enterprise"],
    thumbnail: "/projects/hubble-dashboard.jpg",
    link: "/projects/hubble-hox",
    description: "Complex interface design for enterprise products",
    color: "#8B5CF6"
  },
  {
    id: "3",
    name: "Cogno AI Chatbot",
    category: "Product Design",
    tags: ["AI", "Chat Interface", "UX Research"],
    thumbnail: "/projects/cogno-ai.jpg",
    link: "/projects/cogno-ai",
    description: "Complete AI chatbot interface redesign from research to implementation",
    color: "#D946EF"
  },
  {
    id: "4",
    name: "Kotak Securities Trading Platform",
    category: "UI/UX Design",
    tags: ["Fintech", "Trading", "High-Stakes UX"],
    thumbnail: "/projects/kotak-trading.jpg",
    link: "/projects/kotak-securities",
    description: "Trading platform UX improvement for one of India's leading brokerages",
    color: "#F5A623"
  },
  {
    id: "5",
    name: "Krft Finance Dashboard",
    category: "Product Design",
    tags: ["Financial", "Dashboard", "Data Viz"],
    thumbnail: "/projects/krft-finance.jpg",
    link: "/projects/krft-finance",
    description: "Complex financial dashboards for enterprise clients",
    color: "#10B981"
  },
  {
    id: "6",
    name: "Envy Editor v1.0",
    category: "UI/UX Design",
    tags: ["Media Editing", "Product Design", "Launch"],
    thumbnail: "/projects/envy-editor.jpg",
    link: "/projects/envy-editor",
    description: "Flagship product UI design for a media editing platform",
    color: "#F43F5E"
  },
  {
    id: "7",
    name: "Party Clap Platform",
    category: "Product Design",
    tags: ["Event Services", "Startup", "Mobile"],
    thumbnail: "/projects/party-clap.jpg",
    link: "/projects/party-clap",
    description: "Event and entertainment services platform",
    color: "#06B6D4"
  },
  {
    id: "8",
    name: "Saura Fashion Brand",
    category: "Brand Design",
    tags: ["E-commerce", "Fashion", "Heritage"],
    thumbnail: "/projects/saura.jpg",
    link: "/projects/saura",
    description: "Premium Gujarati clothing brand - traditional heritage meets contemporary design",
    color: "#F97316"
  },
  {
    id: "9",
    name: "FinFly Finance Analytics",
    category: "Product Design",
    tags: ["Fintech", "Analytics", "Surveillance"],
    thumbnail: "/projects/finfly.jpg",
    link: "/projects/finfly",
    description: "Market surveillance and financial analytics platform",
    color: "#84CC16"
  },
  {
    id: "10",
    name: "Golden Circle Ecosystem",
    category: "Brand Design",
    tags: ["Venture Capital", "Design Systems", "Multi-brand"],
    thumbnail: "/projects/golden-circle.jpg",
    link: "/projects/golden-circle",
    description: "Parent company unifying all ventures under one vision",
    color: "#EC4899"
  },
  {
    id: "11",
    name: "DelegateX Platform",
    category: "Web Design",
    tags: ["UX Research", "Platform Design", "Freelance"],
    thumbnail: "/projects/delegatex.jpg",
    link: "/projects/delegatex",
    description: "Freelance platform with seamless user journeys",
    color: "#6366F1"
  },
  {
    id: "12",
    name: "Beyond Portfolio",
    category: "Web Design",
    tags: ["Portfolio", "Showcase", "Creative"],
    thumbnail: "/projects/beyond.jpg",
    link: "/projects/beyond",
    description: "Freelance work showcase with tailored UX solutions",
    color: "#8B5CF6"
  },
  {
    id: "13",
    name: "Insurance Quote Calculator",
    category: "Product Design",
    tags: ["Interactive", "Forms", "Conversion"],
    thumbnail: "/projects/quote-calc.jpg",
    link: "/projects/quote-calculator",
    description: "Streamlined insurance quote flow with improved conversion rates",
    color: "#D946EF"
  },
  {
    id: "14",
    name: "Claims Processing Portal",
    category: "UI/UX Design",
    tags: ["Enterprise", "Forms", "B2B"],
    thumbnail: "/projects/claims-portal.jpg",
    link: "/projects/claims-portal",
    description: "Simplified claims submission and tracking system",
    color: "#F5A623"
  },
  {
    id: "15",
    name: "Mobile App Redesign",
    category: "Product Design",
    tags: ["Mobile", "App Design", "iOS/Android"],
    thumbnail: "/projects/mobile-app.jpg",
    link: "/projects/mobile-app",
    description: "End-to-end mobile application redesign for insurance services",
    color: "#10B981"
  },
  {
    id: "16",
    name: "Design System Implementation",
    category: "Design Systems",
    tags: ["Components", "Documentation", "Scale"],
    thumbnail: "/projects/design-system.jpg",
    link: "/projects/design-system",
    description: "Company-wide design system with components and documentation",
    color: "#F43F5E"
  },
  {
    id: "17",
    name: "User Research Report",
    category: "UX Research",
    tags: ["Research", "Testing", "Insights"],
    thumbnail: "/projects/user-research.jpg",
    link: "/projects/user-research",
    description: "Comprehensive user research and usability testing",
    color: "#06B6D4"
  },
  {
    id: "18",
    name: "Prototyping Workshop",
    category: "UX Design",
    tags: ["Prototyping", "Figma", "Collaboration"],
    thumbnail: "/projects/prototyping.jpg",
    link: "/projects/prototyping",
    description: "High-fidelity interactive prototypes for stakeholder review",
    color: "#F97316"
  },
  {
    id: "19",
    name: "Accessibility Audit",
    category: "UX Research",
    tags: ["Accessibility", "WCAG", "Compliance"],
    thumbnail: "/projects/accessibility.jpg",
    link: "/projects/accessibility",
    description: "WCAG compliance audit and remediation recommendations",
    color: "#84CC16"
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

// About section data
export const about = {
  headline: "About Me",
  paragraphs: [
    "I'm a 23-year-old Product Designer and AI Product Manager who's been building products since I was 19. With over 4 years of experience, I've worked with major companies like Reliance General Insurance, Kotak Securities, and Hubble Hox.",
    "I specialize in design systems, UX research, and creating products that scale. My work spans fintech, healthcare, e-commerce, and entertainment industries.",
    "As an entrepreneur, I've launched multiple ventures including Party Clap (event services), Saura (fashion), and FinFly (finance analytics). I believe in building products that matter."
  ]
};

export const personal = {
  stats: [
    { number: "19+", label: "Products Shipped" },
    { number: "4+", label: "Years Experience" },
    { number: "6", label: "Ventures" },
    { number: "8", label: "Companies Worked" }
  ]
};

// Capabilities/What I Do
export const capabilities = [
  {
    name: "Product Design",
    description: "End-to-end product design from research to launch. I create user-centered designs that solve real problems.",
    icon: "Layers"
  },
  {
    name: "UI/UX Design",
    description: "Beautiful, functional interfaces that users love. Focus on accessibility, usability, and visual excellence.",
    icon: "Monitor"
  },
  {
    name: "AI Product Management",
    description: "Building products that leverage AI effectively. Understanding both technical capabilities and user needs.",
    icon: "Sparkles"
  },
  {
    name: "Design Systems",
    description: "Scalable design systems that keep teams aligned. Components, documentation, and governance frameworks.",
    icon: "Box"
  }
];

// Experience data
export const experience = [
  {
    company: "Reliance General Insurance",
    role: "Product Designer",
    period: "2023 - Present",
    description: "Leading product design for insurance platform",
    tags: ["Insurance", "Fintech", "Design Systems"]
  },
  {
    company: "Hubble Hox",
    role: "UI/UX Designer",
    period: "2022 - 2023",
    description: "Enterprise dashboard design",
    tags: ["Dashboard", "Enterprise", "Data Viz"]
  },
  {
    company: "Kotak Securities",
    role: "Design Consultant",
    period: "2021 - 2022",
    description: "Trading platform UX improvement",
    tags: ["Fintech", "Trading", "UX Research"]
  },
  {
    company: "Freelance",
    role: "Product Designer",
    period: "2019 - 2021",
    description: "Various client projects",
    tags: ["UX", "Mobile", "Web"]
  }
];

// Ventures data
export const ventures = [
  {
    name: "Golden Circle",
    description: "Parent company for all ventures",
    icon: "Rocket"
  },
  {
    name: "Party Clap",
    description: "Event and entertainment services platform",
    icon: "Music"
  },
  {
    name: "Saura",
    description: "Premium Gujarati clothing brand",
    icon: "ShoppingBag"
  },
  {
    name: "FinFly",
    description: "Market surveillance and financial analytics",
    icon: "TrendingUp"
  },
  {
    name: "ESOP Platform",
    description: "Employee stock ownership platform",
    icon: "PieChart"
  },
  {
    name: "Custom Clothing",
    description: "B2C custom clothing platform",
    icon: "Scissors"
  }
];

// Skills
export const skills = [
  "Product Design",
  "UI/UX Design",
  "Figma",
  "Design Systems",
  "User Research",
  "Prototyping",
  "HTML/CSS",
  "JavaScript",
  "React",
  "Framer Motion",
  "AI/ML Integration"
];
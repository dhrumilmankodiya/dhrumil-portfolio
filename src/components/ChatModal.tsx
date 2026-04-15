"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot as BotIcon, User, Sparkles, X, MessageCircle } from "lucide-react";

// Types
interface Project {
  id: string;
  name: string;
  category: string;
  tags: string[];
  thumbnail: string;
  link: string;
  description: string;
  color?: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  projectCards?: Project[];
  isTyping?: boolean;
}

// Projects data
const projects: Project[] = [
  { id: "1", name: "Reliance General Insurance", category: "Web Design", tags: ["UX Research", "Design Systems"], thumbnail: "/projects/rgi-website.jpg", link: "/projects/reliance-general", description: "Comprehensive redesign for accessible UX", color: "#6366F1" },
  { id: "2", name: "Hubble Hox Dashboard", category: "UI/UX Design", tags: ["Dashboard", "Enterprise"], thumbnail: "/projects/hubble-dashboard.jpg", link: "/projects/hubble-hox", description: "Complex enterprise interface", color: "#8B5CF6" },
  { id: "3", name: "Cogno AI Chatbot", category: "Product Design", tags: ["AI", "Chat Interface"], thumbnail: "/projects/cogno-ai.jpg", link: "/projects/cogno-ai", description: "Complete AI chatbot redesign", color: "#D946EF" },
  { id: "4", name: "Kotak Securities", category: "UI/UX Design", tags: ["Fintech", "Trading"], thumbnail: "/projects/kotak-trading.jpg", link: "/projects/kotak-securities", description: "Trading platform UX", color: "#F5A623" },
  { id: "5", name: "Krft Finance Dashboard", category: "Product Design", tags: ["Financial", "Dashboard"], thumbnail: "/projects/krft-finance.jpg", link: "/projects/krft-finance", description: "Enterprise financial dashboards", color: "#10B981" },
  { id: "9", name: "FinFly Finance Analytics", category: "Product Design", tags: ["Fintech", "Analytics"], thumbnail: "/projects/finfly.jpg", link: "/projects/finfly", description: "Market surveillance platform", color: "#84CC16" },
  { id: "7", name: "Party Clap Platform", category: "Product Design", tags: ["Event Services", "Startup"], thumbnail: "/projects/party-clap.jpg", link: "/projects/party-clap", description: "Event services platform", color: "#06B6D4" },
  { id: "8", name: "Saura Fashion Brand", category: "Brand Design", tags: ["E-commerce", "Fashion"], thumbnail: "/projects/saura.jpg", link: "/projects/saura", description: "Gujarati clothing brand", color: "#F97316" },
];

// Experience data
const experience = [
  { role: "Product Designer & AI PM", company: "Golden Circle", period: "Current", description: "Leading design across all ventures + AI product development" },
  { role: "Senior Product Designer", company: "Reliance General Insurance", period: "2021-2024", description: "UX Research, Design Systems, Accessibility" },
  { role: "UI/UX Designer", company: "Cogno AI", period: "2019-2021", description: "AI chatbot interface design" },
  { role: "Product Designer", company: "Kotak Securities", period: "2017-2019", description: "Trading platform improvements" },
];

// Skills data
const skills = {
  design: ["Figma", "Sketch", "Adobe XD", "Design Systems", "Prototyping"],
  ux: ["User Research", "Testing", "IA", "Accessibility WCAG"],
  ai: ["AI Product Management", "Chatbot Design", "ML Interfaces"],
  tools: ["Notion", "Linear", "Analytics"],
};

// Ventures data
const ventures = [
  { name: "Golden Circle", role: "Parent company", description: "Venture capital + design" },
  { name: "Party Clap", role: "Services business", description: "Event entertainment" },
  { name: "Saura", role: "Fashion brand", description: "Gujarati clothing" },
  { name: "FinFly", role: "Fintech platform", description: "Market surveillance" },
];

// AI Response Generator (simulates AI with rich context)
function generateAIResponse(query: string): Message {
  const q = query.toLowerCase();
  
  // Finance/Fintech query
  if (q.includes("finance") || q.includes("fintech") || q.includes("trading") || q.includes("banking")) {
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "Here's Dhrumil's fintech and finance work:",
      timestamp: new Date(),
      projectCards: projects.filter(p => ["Kotak Securities", "Krft Finance Dashboard", "FinFly Finance Analytics"].includes(p.name)),
    };
  }
  
  // Insurance query
  if (q.includes("insurance") || q.includes("reliance") || q.includes("claim")) {
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "His insurance work includes:",
      timestamp: new Date(),
      projectCards: projects.filter(p => ["Reliance General Insurance"].includes(p.name)),
    };
  }
  
  // AI/Chatbot query
  if (q.includes("ai") || q.includes("chatbot") || q.includes("ml") || q.includes("machine learning")) {
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "Here's his AI/ML work:",
      timestamp: new Date(),
      projectCards: projects.filter(p => p.name === "Cogno AI Chatbot"),
    };
  }
  
  // Experience query
  if (q.includes("experience") || q.includes("background") || q.includes("about") || q.includes("work history")) {
    const expText = `Dhrumil is a Product Designer & AI Product Manager with 8+ years experience:

• **Current**: Leading design at Golden Circle
• **Reliance General Insurance**: UX Research, Design Systems, Accessibility
• **Cogno AI**: AI chatbot interface redesign  
• **Kotak Securities**: Trading platform UX

He's led design for India's top financial companies and built AI products from scratch. Want to know more about any specific role?`;
    return { id: Date.now().toString(), role: "assistant", content: expText, timestamp: new Date() };
  }
  
  // Skills query
  if (q.includes("skill") || q.includes("tool") || q.includes("expert") || q.includes("can you")) {
    const skillText = `Dhrumil's toolkit:

**Design**: ${skills.design.join(", ")}
**UX Research**: ${skills.ux.join(", ")}  
**AI/ML**: ${skills.ai.join(", ")}
**Tools**: ${skills.tools.join(", ")}

He's strongest in fintech/insurance UX and AI product design. What area interests you?`;
    return { id: Date.now().toString(), role: "assistant", content: skillText, timestamp: new Date() };
  }
  
  // Ventures query
  if (q.includes("venture") || q.includes("company") || q.includes("startup") || q.includes("business")) {
    const ventText = `Dhrumil's ventures:

• **Golden Circle** - Parent company (venture capital + design)
• **Party Clap** - Event/entertainment services
• **Saura** - Premium Gujarati fashion
• **FinFly** - Market surveillance platform

Want to explore any of these in detail?`;
    return { id: Date.now().toString(), role: "assistant", content: ventText, timestamp: new Date() };
  }
  
  // Project/Work query
  if (q.includes("project") || q.includes("work") || q.includes("show") || q.includes("portfolio")) {
    return {
      id: Date.now().toString(),
      role: "assistant",
      content: "Here are some of his featured projects:",
      timestamp: new Date(),
      projectCards: projects.slice(0, 4),
    };
  }
  
  // Contact query
  if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("hire") || q.includes("work with")) {
    const contactText = `To connect with Dhrumil:

📧 **Email**: dhrumil@designcraft.io
💼 **LinkedIn**: linkedin.com/in/dhrumilmankodiya
🐙 **GitHub**: github.com/dhrumilmankodiya

Or scroll to the contact section on the main page!`;
    return { id: Date.now().toString(), role: "assistant", content: contactText, timestamp: new Date() };
  }
  
  // Default - helpful suggestions
  return {
    id: Date.now().toString(),
    role: "assistant",
    content: `I can help you explore Dhrumil's work in many ways:

• "Show me fintech projects" - Finance & trading work
• "Tell me about experience" - His background
• "What are his skills?" - Design toolkit
• "Show me AI projects" - Chatbot/ML work
• "What ventures is he building?" - His companies
• "How to contact?" - Get in touch

What would you like to know?`,
    timestamp: new Date(),
  };
}

// Welcome message
const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content: `Hey! I'm your AI guide to Dhrumil's portfolio.

I know about his 19+ projects, 8+ years experience, skills, and ventures. Ask me anything!

💬 Try: "Show me fintech projects" or "Tell me about his experience"`,
  timestamp: new Date(),
};

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function ChatModal({ isOpen, onClose, darkMode }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const response = generateAIResponse(userMessage.content);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 600 + Math.random() * 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="chat-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        className="chat-modal"
        style={{
          width: "100%",
          maxWidth: 600,
          height: "85vh",
          maxHeight: 750,
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
          background: darkMode ? "#0a0a0f" : "#fafafa",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          className="chat-header"
          style={{
            padding: "16px 20px",
            borderBottom: `1px solid ${darkMode ? "#1e1e28" : "#e5e5e5"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: darkMode ? "#0a0a0f" : "#fafafa",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BotIcon size={20} color="white" />
            </div>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: darkMode ? "#fff" : "#1a1a1a", margin: 0 }}>
                Dhrumil's Portfolio AI
              </h2>
              <p style={{ fontSize: 12, color: darkMode ? "#666" : "#888", margin: 0, display: "flex", alignItems: "center", gap: 4 }}>
                <Sparkles size={12} style={{ color: "#6366f1" }} />
                AI-powered guide
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: darkMode ? "#1e1e28" : "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <X size={18} color={darkMode ? "#fff" : "#1a1a1a"} />
          </button>
        </div>

        {/* Messages */}
        <div
          className="chat-messages"
          style={{
            flex: 1,
            overflow: "auto",
            padding: 20,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <AnimatePresence>
            {messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="message-row"
                style={{
                  display: "flex",
                  gap: 12,
                  flexDirection: msg.role === "user" ? "row-reverse" : "row",
                  alignItems: "flex-start",
                }}
              >
                <div
                  className="avatar"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: msg.role === "assistant"
                      ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                      : darkMode ? "#2a2a35" : "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {msg.role === "assistant" ? (
                    <BotIcon size={16} color="white" />
                  ) : (
                    <User size={16} color={msg.role === "user" ? (darkMode ? "#fff" : "#fff") : "#666"} />
                  )}
                </div>
                <div style={{ maxWidth: "75%" }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bubble"
                    style={{
                      padding: "14px 18px",
                      borderRadius: 18,
                      borderTopLeftRadius: msg.role === "assistant" ? 4 : 18,
                      borderTopRightRadius: msg.role === "user" ? 4 : 18,
                      background: msg.role === "assistant"
                        ? (darkMode ? "#1e1e28" : "#fff")
                        : (darkMode ? "#6366f1" : "#1a1a1a"),
                      color: msg.role === "assistant"
                        ? (darkMode ? "#e5e5e5" : "#1a1a1a")
                        : "#fff",
                      fontSize: 15,
                      lineHeight: 1.6,
                      whiteSpace: "pre-wrap",
                      boxShadow: darkMode ? "0 4px 16px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.08)",
                    }}
                  >
                    {msg.content}
                  </motion.div>
                  
                  {/* Project Cards */}
                  {msg.projectCards && msg.projectCards.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="project-cards"
                      style={{
                        display: "flex",
                        gap: 12,
                        marginTop: 12,
                        overflowX: "auto",
                        paddingBottom: 8,
                      }}
                    >
                      {msg.projectCards.map(project => (
                        <a
                          key={project.id}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card"
                          style={{
                            minWidth: 160,
                            padding: 12,
                            borderRadius: 14,
                            background: darkMode ? "#1e1e28" : "#fff",
                            border: `1px solid ${darkMode ? "#2a2a35" : "#e5e5e5"}`,
                            textDecoration: "none",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <div
                            style={{
                              height: 60,
                              borderRadius: 8,
                              background: project.color || "#6366f1",
                              marginBottom: 10,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              fontSize: 10,
                              fontWeight: 600,
                            }}
                          >
                            {project.category}
                          </div>
                          <h4 style={{ fontSize: 14, fontWeight: 600, color: darkMode ? "#fff" : "#1a1a1a", margin: "0 0 4px" }}>
                            {project.name}
                          </h4>
                          <p style={{ fontSize: 12, color: darkMode ? "#888" : "#666", margin: 0, lineHeight: 1.4 }}>
                            {project.description}
                          </p>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ display: "flex", gap: 12 }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <BotIcon size={16} color="white" />
                </div>
                <div
                  style={{
                    padding: "14px 18px",
                    borderRadius: 18,
                    borderTopLeftRadius: 4,
                    background: darkMode ? "#1e1e28" : "#fff",
                    display: "flex",
                    gap: 4,
                  }}
                >
                  {[0, 0.2, 0.4].map((delay, i) => (
                    <span
                      key={i}
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#6366f1",
                        animation: `pulse 1s infinite ${delay}s`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          className="chat-input-area"
          style={{
            padding: "16px 20px",
            borderTop: `1px solid ${darkMode ? "#1e1e28" : "#e5e5e5"}`,
            background: darkMode ? "#0a0a0f" : "#fafafa",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 12,
              background: darkMode ? "#1e1e28" : "#fff",
              borderRadius: 20,
              padding: "8px 8px 8px 18",
              border: `1px solid ${darkMode ? "#2a2a35" : "#e5e5e5"}`,
              boxShadow: darkMode ? "0 4px 16px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.08)",
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask anything about Dhrumil's work..."
              rows={1}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: darkMode ? "#fff" : "#1a1a1a",
                fontSize: 15,
                resize: "none",
                maxHeight: 100,
                lineHeight: 1.5,
                fontFamily: "inherit",
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              style={{
                width: 40,
                height: 40,
                borderRadius: 14,
                background: input.trim() && !isTyping
                  ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                  : darkMode ? "#2a2a35" : "#e5e5e5",
                border: "none",
                cursor: input.trim() && !isTyping ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              <Send size={16} color={input.trim() && !isTyping ? "#fff" : darkMode ? "#666" : "#999"} />
            </motion.button>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .chat-modal ::-webkit-scrollbar {
            width: 4px;
          }
          .chat-modal ::-webkit-scrollbar-track {
            background: transparent;
          }
          .chat-modal ::-webkit-scrollbar-thumb {
            background: #6366f1;
            border-radius: 2px;
          }
          .project-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3) !important;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
}
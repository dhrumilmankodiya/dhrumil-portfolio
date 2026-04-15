"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, RefreshCw, ArrowDown } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

// Suggested questions for new users
const suggestedQuestions = [
  "Tell me about yourself",
  "Show me your projects",
  "What skills do you have?",
  "What ventures do you run?",
  "How can I contact you?",
];

export default function ChatInterface() {
  const [mounted, setMounted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [input, setInput] = useState("");
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Detect theme from system preference
  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatState.messages, chatState.isLoading]);

  // Handle scroll to show/hide scroll button
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowScrollButton(scrollHeight - scrollTop - clientHeight > 300);
    };
    
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || chatState.isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));
    setInput("");
    inputRef.current?.focus();

    try {
      // Build history for context
      const history = chatState.messages.map(m => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          history,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Chat error:", error);
      setChatState(prev => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setChatState({ messages: [], isLoading: false });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: darkMode ? "#0a0a0f" : "#fafafa",
      }}>
        <div style={{
          width: 40,
          height: 40,
          border: "3px solid #6366f1",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }} />
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const colors = darkMode ? {
    background: "#0a0a0f",
    surface: "#12121a",
    surfaceLight: "#1a1a24",
    surfaceElevated: "#22222e",
    border: "rgba(255, 255, 255, 0.06)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    text: "#ffffff",
    textMuted: "#8b8b9a",
    textDim: "#5a5a6a",
    accent: "#6366f1",
    accentLight: "#818cf8",
    accentGlow: "rgba(99, 102, 241, 0.15)",
    userBubble: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  } : {
    background: "#f8f9fc",
    surface: "#ffffff",
    surfaceLight: "#f0f1f5",
    surfaceElevated: "#ffffff",
    border: "rgba(0, 0, 0, 0.06)",
    borderLight: "rgba(0, 0, 0, 0.1)",
    text: "#1a1a2e",
    textMuted: "#6b6b7a",
    textDim: "#9a9aaa",
    accent: "#6366f1",
    accentLight: "#818cf8",
    accentGlow: "rgba(99, 102, 241, 0.08)",
    userBubble: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: colors.background,
      color: colors.text,
      fontFamily: "'Space Grotesk', -apple-system, sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle gradient orbs in background */}
      <div style={{
        position: "absolute",
        top: "-20%",
        left: "-10%",
        width: "50%",
        height: "50%",
        background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20%",
        right: "-10%",
        width: "60%",
        height: "60%",
        background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Header */}
      <header style={{
        padding: "20px 32px",
        borderBottom: `1px solid ${colors.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: colors.surface + "ee",
        backdropFilter: "blur(20px)",
        position: "relative",
        zIndex: 10,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
            }}
          >
            <Bot size={24} color="white" />
          </motion.div>
          <div>
            <h1 style={{
              fontSize: 20,
              fontWeight: 600,
              margin: 0,
              background: "linear-gradient(135deg, #ffffff 0%, #a0a0b0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.02em",
            }}>
              Dhrumil
            </h1>
            <p style={{
              fontSize: 13,
              color: colors.textMuted,
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
              <span style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
              }} />
              Online
            </p>
          </div>
        </div>
        
        {chatState.messages.length > 0 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={clearChat}
            style={{
              background: colors.surfaceLight,
              border: `1px solid ${colors.border}`,
              color: colors.textMuted,
              cursor: "pointer",
              padding: "10px 16px",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: 13,
              fontFamily: "'Space Grotesk', sans-serif",
              transition: "all 0.2s ease",
            }}
            whileHover={{ 
              background: colors.surfaceElevated,
              borderColor: colors.borderLight,
            }}
          >
            <RefreshCw size={14} />
            New Chat
          </motion.button>
        )}
      </header>

      {/* Messages Area */}
      <main 
        ref={messagesContainerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 32px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <AnimatePresence>
          {chatState.messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px",
              }}
            >
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 28,
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "28px",
                  boxShadow: "0 12px 40px rgba(99, 102, 241, 0.35)",
                }}
              >
                <Sparkles size={44} color="white" />
              </motion.div>
              
              <h2 style={{
                fontSize: 32,
                fontWeight: 600,
                marginBottom: "14px",
                letterSpacing: "-0.02em",
                background: darkMode 
                  ? "linear-gradient(135deg, #ffffff 0%, #a0a0b0 100%)"
                  : "linear-gradient(135deg, #1a1a2e 0%, #4a4a5e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Hey, I'm Dhrumil
              </h2>
              <p style={{
                fontSize: 16,
                color: colors.textMuted,
                maxWidth: 520,
                lineHeight: 1.7,
                marginBottom: "36px",
              }}>
                I'm a 23-year-old Product Designer & AI Product Manager. 
                Ask me anything about my work, projects, skills, or ventures!
              </p>
              
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center",
                maxWidth: 580,
              }}>
                {suggestedQuestions.map((q, i) => (
                  <motion.button
                    key={q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => sendMessage(q)}
                    style={{
                      padding: "14px 22px",
                      borderRadius: 12,
                      border: `1px solid ${colors.border}`,
                      background: colors.surfaceElevated,
                      color: colors.text,
                      cursor: "pointer",
                      fontSize: 14,
                      fontFamily: "'Space Grotesk', sans-serif",
                      transition: "all 0.2s ease",
                    }}
                    whileHover={{ 
                      borderColor: colors.accent,
                      background: colors.accentGlow,
                      transform: "translateY(-2px)",
                    }}
                    whileTap={{ transform: "translateY(0)" }}
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div style={{ maxWidth: 720, margin: "0 auto", width: "100%" }}>
              {chatState.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    display: "flex",
                    gap: "14px",
                    marginBottom: "20px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: message.role === "user" 
                      ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                      : colors.surfaceElevated,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: message.role === "assistant" 
                      ? "0 2px 12px rgba(0,0,0,0.15)" 
                      : "none",
                  }}>
                    {message.role === "user" ? (
                      <User size={18} color="white" />
                    ) : (
                      <Bot size={18} color={colors.accent} />
                    )}
                  </div>
                  <div style={{
                    flex: 1,
                    padding: "18px 22px",
                    borderRadius: 18,
                    background: message.role === "user" 
                      ? "transparent"
                      : colors.surfaceElevated,
                    lineHeight: 1.7,
                    whiteSpace: "pre-wrap",
                    fontSize: 15,
                    border: message.role === "user" 
                      ? "none"
                      : `1px solid ${colors.border}`,
                  }}>
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {chatState.isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: colors.surfaceElevated,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `1px solid ${colors.border}`,
                  }}>
                    <Bot size={18} color={colors.accent} />
                  </div>
                  <div style={{
                    padding: "18px 22px",
                    borderRadius: 18,
                    background: colors.surfaceElevated,
                    border: `1px solid ${colors.border}`,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <motion.span
                        key={i}
                        animate={{ 
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          delay,
                        }}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: colors.accent,
                          display: "inline-block",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Scroll to bottom button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToBottom}
            style={{
              position: "absolute",
              bottom: 100,
              left: "50%",
              transform: "translateX(-50%)",
              background: colors.surfaceElevated,
              border: `1px solid ${colors.border}`,
              borderRadius: 20,
              padding: "8px 16px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              color: colors.textMuted,
              fontSize: 13,
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <ArrowDown size={14} />
            New messages
          </motion.button>
        )}
      </AnimatePresence>

      {/* Input Area */}
      <footer style={{
        padding: "20px 32px 28px",
        background: "linear-gradient(to top, " + colors.background + " 60%, transparent)",
        position: "relative",
      }}>
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
          background: colors.surfaceElevated,
          borderRadius: 20,
          padding: "14px 18px",
          border: `1px solid ${colors.border}`,
          boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
          transition: "all 0.2s ease",
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Dhrumil..."
            rows={1}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: colors.text,
              fontSize: 15,
              fontFamily: "'Space Grotesk', sans-serif",
              resize: "none",
              maxHeight: 120,
              lineHeight: 1.5,
            }}
          />
          <motion.button
            onClick={() => sendMessage()}
            disabled={!input.trim() || chatState.isLoading}
            style={{
              width: 42,
              height: 42,
              borderRadius: 12,
              border: "none",
              background: input.trim() && !chatState.isLoading
                ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
                : colors.surfaceLight,
              color: "white",
              cursor: input.trim() && !chatState.isLoading ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: input.trim() && !chatState.isLoading 
                ? "0 4px 16px rgba(99, 102, 241, 0.4)" 
                : "none",
              transition: "all 0.2s ease",
            }}
            whileHover={input.trim() && !chatState.isLoading ? { 
              scale: 1.05,
            } : {}}
            whileTap={input.trim() && !chatState.isLoading ? { 
              scale: 0.95,
            } : {}}
          >
            <Send size={18} />
          </motion.button>
        </div>
        
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: colors.textDim,
          marginTop: "14px",
        }}>
          AI-powered responses • Powered by portfolio knowledge
        </p>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { 
          background: rgba(99, 102, 241, 0.2); 
          border-radius: 3px; 
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.4);
        }
      `}</style>
    </div>
  );
}
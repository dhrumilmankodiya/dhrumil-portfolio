"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, MessageCircle, RefreshCw } from "lucide-react";

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
  "Tell me about your experience",
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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
  }, [chatState.messages]);

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

  if (!mounted) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0F",
      }}>
        <div className="loading-spinner" />
      </div>
    );
  }

  const colors = darkMode ? {
    background: "#0A0A0F",
    surface: "#12121A",
    surfaceElevated: "#1E1E2A",
    border: "rgba(255, 255, 255, 0.08)",
    text: "#FFFFFF",
    textMuted: "#A0A0B0",
    accent: "#6366F1",
    accentLight: "#818CF8",
  } : {
    background: "#FAFAFA",
    surface: "#FFFFFF",
    surfaceElevated: "#F5F5F5",
    border: "rgba(0, 0, 0, 0.08)",
    text: "#1A1A1A",
    textMuted: "#666666",
    accent: "#6366F1",
    accentLight: "#818CF8",
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      background: colors.background,
      color: colors.text,
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      {/* Header */}
      <header style={{
        padding: "16px 24px",
        borderBottom: `1px solid ${colors.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: colors.surface,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Bot size={22} color="white" />
          </div>
          <div>
            <h1 style={{
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Dhrumil's AI
            </h1>
            <p style={{
              fontSize: 12,
              color: colors.textMuted,
              margin: 0,
            }}>
              Your guide to Dhrumil's portfolio
            </p>
          </div>
        </div>
        <button
          onClick={clearChat}
          style={{
            background: "transparent",
            border: "none",
            color: colors.textMuted,
            cursor: "pointer",
            padding: "8px",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: 14,
          }}
        >
          <RefreshCw size={16} />
          New Chat
        </button>
      </header>

      {/* Messages Area */}
      <main style={{
        flex: 1,
        overflowY: "auto",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
      }}>
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
              <div style={{
                width: 80,
                height: 80,
                borderRadius: 24,
                background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                boxShadow: "0 8px 32px rgba(99, 102, 241, 0.3)",
              }}>
                <Sparkles size={40} color="white" />
              </div>
              <h2 style={{
                fontSize: 28,
                fontWeight: 600,
                marginBottom: "12px",
              }}>
                Hey! I'm Dhrumil's AI assistant
              </h2>
              <p style={{
                fontSize: 16,
                color: colors.textMuted,
                maxWidth: 500,
                lineHeight: 1.6,
                marginBottom: "32px",
              }}>
                I know everything about Dhrumil's work, projects, experience, skills, and ventures. 
                Ask me anything!
              </p>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                justifyContent: "center",
                maxWidth: 600,
              }}>
                {suggestedQuestions.map((q, i) => (
                  <motion.button
                    key={q}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => sendMessage(q)}
                    style={{
                      padding: "12px 20px",
                      borderRadius: 12,
                      border: `1px solid ${colors.border}`,
                      background: colors.surfaceElevated,
                      color: colors.text,
                      cursor: "pointer",
                      fontSize: 14,
                      fontFamily: "'Space Grotesk', sans-serif",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {q}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div style={{ maxWidth: 800, margin: "0 auto", width: "100%" }}>
              {chatState.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginBottom: "24px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: message.role === "user" 
                      ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                      : colors.surfaceElevated,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    {message.role === "user" ? (
                      <User size={18} color="white" />
                    ) : (
                      <Bot size={18} color={colors.accent} />
                    )}
                  </div>
                  <div style={{
                    flex: 1,
                    padding: "16px 20px",
                    borderRadius: 16,
                    background: colors.surfaceElevated,
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
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
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: colors.surfaceElevated,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Bot size={18} color={colors.accent} />
                  </div>
                  <div style={{
                    padding: "16px 20px",
                    borderRadius: 16,
                    background: colors.surfaceElevated,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <span style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: colors.accent,
                      animation: "pulse 1s infinite",
                    }} />
                    <span style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: colors.accent,
                      animation: "pulse 1s infinite 0.2s",
                    }} />
                    <span style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: colors.accent,
                      animation: "pulse 1s infinite 0.4s",
                    }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Input Area */}
      <footer style={{
        padding: "20px 24px",
        borderTop: `1px solid ${colors.border}`,
        background: colors.surface,
      }}>
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-end",
          gap: "12px",
          background: colors.surfaceElevated,
          borderRadius: 16,
          padding: "12px 16px",
          border: `1px solid ${colors.border}`,
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything about Dhrumil..."
            rows={1}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: colors.text,
              fontSize: 16,
              fontFamily: "'Space Grotesk', sans-serif",
              resize: "none",
              maxHeight: 150,
              lineHeight: 1.5,
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || chatState.isLoading}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              border: "none",
              background: input.trim() && !chatState.isLoading
                ? "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)"
                : colors.surface,
              color: input.trim() && !chatState.isLoading ? "white" : colors.textMuted,
              cursor: input.trim() && !chatState.isLoading ? "pointer" : "not-allowed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
          >
            <Send size={18} />
          </button>
        </div>
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: colors.textMuted,
          marginTop: "12px",
        }}>
          AI responses powered by your portfolio knowledge
        </p>
      </footer>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { 
          background: rgba(99, 102, 241, 0.3); 
          border-radius: 4px; 
        }
      `}</style>
    </div>
  );
}
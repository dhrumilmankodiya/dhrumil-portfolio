"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import ChatModal from "./ChatModal";
import { useTheme } from "./ThemeProvider";

export default function ChatFab() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const darkMode = resolvedTheme === "dark";

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          width: 60,
          height: 60,
          borderRadius: 18,
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(99, 102, 241, 0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9998,
        }}
      >
        <MessageCircle size={26} color="white" />
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#10b981",
            border: "3px solid white",
          }}
        />
      </motion.button>

      <ChatModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        darkMode={darkMode}
      />
    </>
  );
}
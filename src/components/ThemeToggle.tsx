"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  const icons = {
    dark: Moon,
    light: Sun,
    system: Monitor,
  };

  const Icon = icons[theme];

  return (
    <motion.button
      onClick={cycleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-3 rounded-full"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      title={`Current: ${theme} (${resolvedTheme}). Click to toggle.`}
    >
      <Icon 
        className="w-5 h-5" 
        style={{ color: "var(--foreground)" }}
      />
    </motion.button>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Ventures", href: "#ventures" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
        style={{
          background: scrolled ? "var(--surface)ee" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--accent-gradient, linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)" }}
              >
                <Zap className="w-5 h-5 text-white" />
              </span>
              <span style={{ color: "var(--foreground)" }}>DM</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium transition-colors hover:opacity-80"
                  style={{ color: "var(--textMuted)" }}
                >
                  {link.label}
                </button>
              ))}
              <ThemeToggle />
              <a
                href="#connect"
                className="text-sm font-semibold px-6 py-3 rounded-full transition-all hover:opacity-90"
                style={{
                  background: "var(--accent-gradient, linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
                  color: "var(--foreground)",
                  boxShadow: "0 4px 20px var(--accent-glow)",
                }}
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{ color: "var(--foreground)" }}
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: "var(--background)" }}
          >
            <div className="flex items-center justify-between h-20 px-6 border-b" style={{ borderColor: "var(--border)" }}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl font-bold flex items-center gap-2"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent-gradient, linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)" }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </span>
                <span style={{ color: "var(--foreground)" }}>DM</span>
              </button>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2"
                style={{ color: "var(--foreground)" }}
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-3xl font-bold text-left"
                  style={{ color: "var(--foreground)" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="#connect"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.3 }}
                className="text-3xl font-bold mt-4"
                style={{ color: "var(--accent-light)" }}
              >
                Let&apos;s Talk →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
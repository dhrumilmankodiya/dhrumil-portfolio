"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const BADGES = [
  { label: "Golden Circle", emoji: "🏛️" },
  { label: "FinFly Finance", emoji: "📈" },
  { label: "Party Clap", emoji: "👏" },
  { label: "Saura", emoji: "🛍️" },
  { label: "ESOP Platform", emoji: "📊" },
];

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  // Character-stagger name animation
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const chars = el.querySelectorAll<HTMLSpanElement>("[data-char]");
    chars.forEach((char, i) => {
      setTimeout(() => {
        char.style.opacity = "1";
        char.style.transform = "translateY(0)";
      }, i * 30);
    });
  }, []);

  const nameChars = personal.fullName.split("").map((ch, i) => (
    <span
      key={i}
      data-char={i}
      style={{
        display: "inline-block",
        opacity: 0,
        transform: "translateY(20px)",
        transition: `all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)`,
        color: ch === "M" || ch === "." ? "#D4AF37" : "#000",
      }}
    >
      {ch === " " ? "\u00A0" : ch}
    </span>
  ));

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Pre-header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-6"
        >
          {personal.title}
        </motion.p>

        {/* Name */}
        <h1 ref={nameRef} className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
          {nameChars}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3"
        >
          {personal.tagline}
        </motion.p>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-base md:text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          {personal.subTagline}
        </motion.p>

        {/* Venture Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {BADGES.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:scale-105 active:scale-100 transition-transform"
            >
              <span>{b.emoji}</span>
              {b.label}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:hello@dhrumilmankodiya.com"
            className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-sm font-medium text-sm"
          >
            Get in Touch
          </a>
          <button
            onClick={() =>
              document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 border border-black rounded-full hover:bg-gray-50 transition-all active:scale-95 font-medium text-sm"
          >
            See My Work
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() =>
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}

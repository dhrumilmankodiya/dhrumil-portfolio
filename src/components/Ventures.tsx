"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ventures as venturesData } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { colors, typography } from "@/lib/data";
import { Rocket, Music, ShoppingBag, TrendingUp, PieChart, Scissors } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  Music,
  ShoppingBag,
  TrendingUp,
  PieChart,
  Scissors,
};

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section 
      id="ventures" 
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: colors.backgroundDeep }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <ScrollReveal direction="up">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontSize: typography.h2,
              color: colors.text,
            }}
          >
            The Empire
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <motion.p
            className="text-base mb-14 max-w-xl"
            style={{
              fontSize: typography.body,
              color: colors.textMuted,
            }}
          >
            Six ventures building simultaneously. Each solving a real problem. All part of one vision.
          </motion.p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {venturesData.map((venture, i) => {
            const Icon = iconMap[venture.icon] || Rocket;
            return (
              <ScrollReveal key={venture.name} direction="up" delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8, borderColor: colors.accent }}
                  className="rounded-2xl p-8 transition-all"
                  style={{
                    background: colors.surface,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: colors.accentGradient }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: colors.successLight + "20",
                        color: colors.successLight,
                      }}
                    >
                      Active
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-1"
                    style={{
                      fontSize: typography.h4,
                      color: colors.text,
                    }}
                  >
                    {venture.name}
                  </h3>
                  <p 
                    className="text-sm mb-3"
                    style={{ color: colors.textMuted }}
                  >
                    {venture.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
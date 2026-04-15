"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills as skillsData } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { colors, typography } from "@/lib/data";

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Split skills into categories
  const designTools = skillsData.slice(0, 6);
  const expertise = skillsData.slice(6, 12);
  const languages = skillsData.slice(12);

  const categories = [
    { label: "Design Tools", items: designTools },
    { label: "Expertise", items: expertise },
    { label: "Technologies", items: languages },
  ];

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <ScrollReveal direction="up">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-14"
            style={{
              fontSize: typography.h2,
              color: colors.text,
            }}
          >
            Skills & Tools
          </motion.h2>
        </ScrollReveal>

        <div className="space-y-10" ref={ref}>
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.label} direction="up" delay={i * 0.1}>
              <motion.div>
                <p 
                  className="text-xs font-medium uppercase tracking-widest mb-4"
                  style={{ color: colors.textMuted }}
                >
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, borderColor: colors.accent }}
                      className="inline-flex px-4 py-2 rounded-full text-sm font-medium"
                      style={{
                        background: colors.surface,
                        border: `1px solid ${colors.border}`,
                        color: colors.textMuted,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
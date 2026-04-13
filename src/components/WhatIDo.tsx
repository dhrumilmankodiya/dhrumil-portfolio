"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Monitor, Sparkles, Box } from "lucide-react";
import { capabilities } from "@/lib/data";

const ICONS: Record<string, React.ReactNode> = {
  Layers: <Layers size={40} strokeWidth={1.5} className="text-gray-800 mb-4" />,
  Monitor: <Monitor size={40} strokeWidth={1.5} className="text-gray-800 mb-4" />,
  Sparkles: <Sparkles size={40} strokeWidth={1.5} className="text-gray-800 mb-4" />,
  Box: <Box size={40} strokeWidth={1.5} className="text-gray-800 mb-4" />,
};

export default function WhatIDo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          What I Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" ref={ref}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              {ICONS[cap.icon]}
              <h3 className="text-xl font-semibold mb-3">{cap.name}</h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ventures } from "@/lib/data";

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ventures" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          The Empire
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base text-gray-500 mb-14 max-w-xl"
        >
          Six ventures building simultaneously. Each solving a real problem. All part of one vision.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {ventures.map((venture, i) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{venture.emoji}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    venture.statusColor === "green"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {venture.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{venture.name}</h3>
              <p className="text-sm font-medium text-gray-400 mb-3">{venture.tagline}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{venture.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

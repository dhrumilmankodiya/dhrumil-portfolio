"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-14"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative" ref={ref}>
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-10 md:pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 bg-black rounded-full" />
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-1">
                    {exp.period}
                  </p>
                  <h3 className="text-lg font-semibold mb-0.5">{exp.role}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">{exp.company}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

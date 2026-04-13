"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Connect() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const socials = [
    { icon: Github, href: "https://github.com/dhrumilmankodiya", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/dhrumilmankodiya", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/dhrumilmankodiya", label: "X / Twitter" },
    { icon: Mail, href: "mailto:hello@dhrumilmankodiya.com", label: "Email" },
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let&apos;s build something great together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-gray-400 mb-10"
        >
          Interested in working together or just want to say hi?
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.4 }}
          href="mailto:hello@dhrumilmankodiya.com"
          className="inline-block text-base font-medium px-10 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all active:scale-95 mb-16"
        >
          hello@dhrumilmankodiya.com
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-95"
            >
              <Icon size={20} strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </div>
      <div ref={ref} />
    </section>
  );
}

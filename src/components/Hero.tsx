"use client";

import { motion } from "framer-motion";
import { Package, Rocket, Clock, Sparkles, ArrowDown } from "lucide-react";
import { heroData } from "@/lib/data";
import FloatingParticles from "@/components/FloatingParticles";
import TextReveal from "@/components/TextReveal";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import ParallaxSection, { ParallaxBackground } from "@/components/ParallaxSection";

const stats = [
  { value: "19+", label: "Products Shipped", icon: Package },
  { value: "6", label: "Ventures", icon: Rocket },
  { value: "4+", label: "Years", icon: Clock },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Enhanced Animated Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <ParallaxBackground speed={0.2} className="absolute inset-0">
          {/* Primary Gradient Orb - Moving */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[800px] h-[800px] rounded-full opacity-20"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
              filter: "blur(150px)",
              top: "-30%",
              left: "-20%",
            }}
          />
        </ParallaxBackground>
        
        {/* Secondary Gradient Orb */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "linear-gradient(135deg, #F5A623 0%, #F7B731 100%)",
            filter: "blur(120px)",
            bottom: "-20%",
            right: "-10%",
          }}
        />

        {/* Tertiary Accent with Parallax Effect via CSS */}
        <motion.div
          animate={{
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
              background: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
              filter: "blur(100px)",
              top: "40%",
              left: "60%",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles count={30} color="rgba(99, 102, 241, 0.3)" />
        <FloatingParticles count={15} color="rgba(245, 166, 35, 0.2)" />
      </div>

      <div className="relative z-10 max-w-6xl w-full text-center">
        {/* Premium Badge */}
        <ScrollReveal direction="down" delay={0.1}>
          <motion.div
            className="mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--accent-light)",
                boxShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span className="relative">
                Building the future at 23
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px"
                  style={{
                    background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
                  }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </span>
          </motion.div>
        </ScrollReveal>

        {/* Main Tagline - Larger Typography */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.h1
            className="font-bold mb-8 leading-[1.05]"
            style={{
              fontSize: "clamp(56px, 10vw, 120px)",
              color: "var(--foreground)",
              lineHeight: 1.05,
            }}
          >
            <span className="block">
              <TextReveal text={heroData.tagline} delay={0.3} />
            </span>
          </motion.h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal direction="up" delay={0.4}>
          <motion.p
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontSize: "clamp(24px, 3.5vw, 40px)",
              color: "var(--textMuted)",
              lineHeight: 1.5,
            }}
          >
            {heroData.subtitle}
          </motion.p>
        </ScrollReveal>

        {/* CTA Buttons - Enhanced */}
        <ScrollReveal direction="up" delay={0.5}>
          <motion.div
            className="flex flex-wrap justify-center gap-5 mb-20"
          >
            <Link href="#ventures">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px var(--accent-glow)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-full font-semibold text-lg"
                style={{
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
                  color: "var(--foreground)",
                  boxShadow: "0 4px 30px var(--accent-glow)",
                }}
              >
                Explore My Work
              </motion.button>
            </Link>
            <Link href="#connect">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 rounded-full font-semibold text-lg"
                style={{
                  background: "transparent",
                  border: "2px solid var(--border)",
                  color: "var(--foreground)",
                }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </ScrollReveal>

        {/* Stats Display - Enhanced Cards */}
        <ScrollReveal direction="up" delay={0.6}>
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px var(--accent-glow)" }}
                  className="flex flex-col items-center p-8 rounded-3xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 0 40px var(--accent-glow)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span
                    className="font-bold"
                    style={{
                      fontSize: "clamp(40px, 7vw, 80px)",
                      color: "var(--foreground)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "var(--textMuted)",
                      marginTop: "8px",
                    }}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </ScrollReveal>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-24"
        >
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-16 rounded-full flex justify-center mx-auto cursor-pointer"
              style={{ 
                border: "2px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <motion.div
                className="w-1.5 h-1.5 rounded-full mt-3"
                style={{ 
                  background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
                }}
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
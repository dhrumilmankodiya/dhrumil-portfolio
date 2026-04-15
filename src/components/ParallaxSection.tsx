"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  offset?: any;
  style?: React.CSSProperties;
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5,
  direction = "up",
  className = "",
  offset = ["start end", "end start"],
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Calculate transforms based on direction
  const getTransforms = () => {
    const distance = speed * 100;
    switch (direction) {
      case "up":
        return { y: useTransform(scrollYProgress, [0, 1], [`${distance}%`, `-${distance}%`]) };
      case "down":
        return { y: useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]) };
      case "left":
        return { x: useTransform(scrollYProgress, [0, 1], [`${distance}%`, `-${distance}%`]) };
      case "right":
        return { x: useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`]) };
      default:
        return { y: useTransform(scrollYProgress, [0, 1], [`${distance}%`, `-${distance}%`]) };
    }
  };

  const transforms = getTransforms();

  return (
    <motion.div ref={ref} style={{ ...transforms, ...style }} className={className}>
      {children}
    </motion.div>
  );
}

// Enhanced parallax with scale and opacity
interface ParallaxCardProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxCard({ children, className = "" }: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, scale, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Background parallax that moves slower than foreground
interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxBackground({ children, speed = 0.3, className = "" }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 500]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

// Floating animation parallax - gentle bobbing
interface FloatingParallaxProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function FloatingParallax({ children, intensity = 20, className = "" }: FloatingParallaxProps) {
  return (
    <motion.div
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
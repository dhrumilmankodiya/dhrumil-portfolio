"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  const trailRef = useRef<HTMLDivElement>(null);
  const trailPositions = useRef<Array<{ x: number; y: number }>>([]);
  const [trailElements, setTrailElements] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);
      
      // Add position to trail
      trailPositions.current.push({ x: e.clientX, y: e.clientY });
      if (trailPositions.current.length > 15) {
        trailPositions.current.shift();
      }
      
      // Update trail elements
      setTrailElements(
        trailPositions.current.slice(0, 15).map((pos, i) => ({
          id: i,
          x: pos.x,
          y: pos.y,
        }))
      );
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button";
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY, isVisible]);

  // Only show on desktop
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-4 h-4 rounded-full bg-white"
        />
      </motion.div>

      {/* Trail Effect */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        {trailElements.map((pos, index) => (
          <motion.div
            key={pos.id}
            className="absolute w-2 h-2 rounded-full bg-white/30"
            style={{
              x: pos.x,
              y: pos.y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: 1 - index * 0.06,
              opacity: (1 - index * 0.06) * 0.3,
            }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </div>
    </>
  );
}
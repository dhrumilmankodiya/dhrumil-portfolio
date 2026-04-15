"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/data";

// Project colors for visual variety
const projectColors = [
  "#6366F1", "#8B5CF6", "#D946EF", "#F5A623", "#10B981", "#F43F5E",
  "#06B6D4", "#F97316", "#84CC16", "#EC4899"
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const color = projectColors[index % projectColors.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}20 0%, transparent 70%)`,
        }}
      />
      
      {/* Thumbnail Area */}
      <div 
        className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
        }}
      >
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(${color}40 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}/>
        
        <div className="relative z-10 text-center">
          <span 
            className="text-6xl font-black opacity-30"
            style={{ color }}
          >
            {project.name.charAt(0)}
          </span>
        </div>
        
        {/* Category Badge */}
        <span 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${color}20`,
            color: color,
            border: `1px solid ${color}40`,
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-xs font-medium"
              style={{
                background: "var(--surfaceLight)",
                color: "var(--textMuted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 
          className="text-lg font-bold mb-2 group-hover:opacity-80 transition-opacity"
          style={{ color: "var(--foreground)" }}
        >
          {project.name}
        </h3>
        
        <p 
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: "var(--textMuted)" }}
        >
          {project.description}
        </p>
        
        <div 
          className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
          style={{ color }}
        >
          <span>View Project</span>
          <ArrowRight size={14} strokeWidth={2} />
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Show first 6 projects
  const displayProjects = projects.slice(0, 6);

  return (
    <section 
      id="work" 
      className="py-24 md:py-32 relative"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Section Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #D946EF 100%)",
            filter: "blur(80px)",
            top: "20%",
            right: "-10%",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span 
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--accent)" }}
          >
            Portfolio
          </span>
          <h2 
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "var(--foreground)",
            }}
          >
            Selected Work
          </h2>
          <p 
            className="max-w-xl"
            style={{
              fontSize: "18px",
              color: "var(--textMuted)",
            }}
          >
            A curated collection of projects spanning fintech, e-commerce, and innovative product design.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://dribbble.com/dhrumilm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:gap-3"
            style={{
              background: "transparent",
              border: "2px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            <span>View All Projects</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
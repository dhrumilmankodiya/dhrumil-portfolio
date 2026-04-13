"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg cursor-pointer"
    >
      {/* Thumbnail */}
      <div
        className="aspect-video flex items-center justify-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-extrabold opacity-20" style={{ color: project.color }}>
            {project.name[0]}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          {project.challenge}
        </p>
        <div className="flex items-center gap-1 text-sm font-medium text-gray-900 group-hover:gap-2 transition-all">
          <span>View Case Study</span>
          <ArrowRight size={14} strokeWidth={2} />
        </div>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          Selected Work
        </motion.h2>

        {/* Featured Case Studies — 2-col alternating */}
        <div className="space-y-16 mb-20" ref={ref}>
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`rounded-2xl aspect-video flex items-center justify-center overflow-hidden ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
                style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}55)` }}
              >
                <span className="text-8xl font-extrabold opacity-15" style={{ color: project.color }}>
                  {project.name[0]}
                </span>
              </div>

              {/* Details */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{project.name}</h3>
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-2">
                  {project.role}
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {project.challenge}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {project.outcome}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:gap-2 transition-all">
                  <span>Read Case Study</span>
                  <ArrowRight size={14} strokeWidth={2} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Grid */}
        {rest.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="text-2xl font-bold mb-8"
            >
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  isInView={isInView}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

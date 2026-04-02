"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  tags,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl border border-card-border bg-card overflow-hidden"
    >
      {/* Gradient top bar */}
      <div className="h-1 bg-gradient-to-r from-cyan to-violet" />

      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-cyan/30 shadow-[0_0_30px_rgba(0,212,255,0.1)]" />

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)] text-foreground group-hover:text-cyan transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

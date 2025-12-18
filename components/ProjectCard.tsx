"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  badge?: ReactNode;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  badge,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative overflow-hidden glass-panel p-5"
    >
      <div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-border-glass/40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25)_0,transparent_55%),radial-gradient(circle_at_100%_0%,rgba(168,85,247,0.26)_0,transparent_55%)] opacity-0 transition group-hover:opacity-100" />

      <div className="relative z-10 space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-base text-text-main">{title}</h3>
            <p className="mt-1 text-xs text-text-muted">{description}</p>
          </div>
          {badge ? (
            <div className="pill border-accent-cyan/40 text-[10px] text-accent-cyan">
              {badge}
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-1.5 text-[11px] text-text-muted">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-bg-glass/80 px-2 py-1 text-[10px] text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border-glass/70 bg-bg-glass/80 px-3 py-1.5 text-text-main transition hover:border-accent-cyan hover:text-accent-cyan"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Code</span>
          </a>
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-accent-cyan/70 bg-gradient-to-r from-accent-cyan/10 to-accent-violet/20 px-3 py-1.5 text-text-main transition hover:border-accent-violet hover:text-accent-cyan"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Live</span>
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

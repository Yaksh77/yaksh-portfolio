"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";

type ApiStatus = "idle" | "loading" | "success" | "error";

type ApiResponse<T> = {
  status: "success" | "error";
  message?: string;
  data?: T;
};

export interface Project {
  _id?: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<ApiStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchProjects = async () => {
      try {
        setStatus("loading");
        const res = await fetch("/api/projects");
        const json = (await res.json()) as ApiResponse<Project[]>;
        if (!res.ok || json.status !== "success" || !json.data) {
          throw new Error(json.message || "Failed to load projects.");
        }
        if (isMounted) {
          setProjects(json.data);
          setStatus("success");
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "Unexpected error occurred."
          );
          setStatus("error");
        }
      }
    };

    void fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  if (status === "loading" || status === "idle") {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="animate-pulse rounded-3xl border border-border-glass/60 bg-bg-glass/70 p-5"
          >
            <div className="mb-3 h-4 w-2/3 rounded bg-bg-glass/80" />
            <div className="mb-2 h-3 w-full rounded bg-bg-glass/80" />
            <div className="mb-2 h-3 w-5/6 rounded bg-bg-glass/80" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-16 rounded-full bg-bg-glass/80" />
              <div className="h-6 w-20 rounded-full bg-bg-glass/80" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-2xl border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-100">
        {error ?? "Failed to load projects."}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="rounded-2xl border border-border-glass/60 bg-bg-glass/80 px-4 py-3 text-sm text-text-main">
        No projects found yet. Seed the database via the{" "}
        <code>/api/projects</code> endpoint.
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project._id ?? project.title}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          githubUrl={project.githubUrl}
          liveUrl={project.liveUrl}
          badge={project.featured ? "Featured" : undefined}
        />
      ))}
    </div>
  );
}

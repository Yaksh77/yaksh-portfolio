"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
        <Reveal className="space-y-6">
          <div className="pill w-fit border border-accent-cyan/50 text-accent-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            Open to internships, placements & freelance work
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl tracking-tight text-text-main sm:text-5xl lg:text-6xl">
              Building{" "}
              <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet bg-clip-text text-transparent">
                clean
              </span>{" "}
              and scalable web applications.
            </h1>
            <p className="max-w-xl text-sm text-text-muted sm:text-base">
              I’m Yaksh, an Information Technology engineering student and
              full-stack developer focused on building real-world,
              placement-ready applications using Next.js, MERN stack, and modern
              UI practices.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-text-muted">
            <div>
              <div className="font-display text-sm text-text-main">
                Full-Stack Development
              </div>
              <div>Next.js · React · Node.js</div>
            </div>
            <div>
              <div className="font-display text-sm text-text-main">
                Backend & Databases
              </div>
              <div>Express · MongoDB · REST APIs</div>
            </div>
            <div>
              <div className="font-display text-sm text-text-main">
                Modern UI
              </div>
              <div>Tailwind CSS · Responsive Design · Accessibility</div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-glass/70 bg-bg-glass/80 text-text-main transition hover:border-accent-cyan hover:text-accent-cyan"
            >
              <Github className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        {/* Avatar Section */}
        <Reveal className="section-shell relative flex items-center justify-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.35)_0,transparent_60%)]" />

          <div className="relative z-10 flex h-52 w-52 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet opacity-70 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-accent-cyan/60 bg-bg-glass/90 shadow-neon-cyan">
              <Image
                src="/avatar.jpg"
                alt="Yaksh Chudasama"
                width={160}
                height={160}
                priority
                className="h-40 w-40 rounded-full border border-border-glass/70 object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Skill Highlights */}
      <Reveal className="grid gap-6 md:grid-cols-3">
        <div className="section-shell">
          <h2 className="font-display text-lg text-text-main">Frontend</h2>
          <p className="mt-2 text-sm text-text-muted">
            Building responsive, accessible, and user-friendly interfaces with
            React, Next.js, and Tailwind CSS.
          </p>
        </div>

        <div className="section-shell">
          <h2 className="font-display text-lg text-text-main">
            Backend & APIs
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Designing clean REST APIs with Node.js and Express, focusing on
            validation, error handling, and scalable architecture.
          </p>
        </div>

        <div className="section-shell">
          <h2 className="font-display text-lg text-text-main">
            Placement-Ready Projects
          </h2>
          <p className="mt-2 text-sm text-text-muted">
            Developing real-world projects with proper structure, documentation,
            and explanations suitable for technical interviews.
          </p>
        </div>
      </Reveal>

      {/* Philosophy */}
      <Reveal className="grid items-center gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <div className="section-shell space-y-4">
          <h2 className="font-display text-2xl text-text-main">
            Engineering with clarity and purpose.
          </h2>
          <p className="text-sm text-text-muted">
            I enjoy turning ideas into working products by combining clean
            engineering practices with thoughtful UI design. My focus is always
            on building solutions that are easy to understand, maintain, and
            scale.
          </p>
          <p className="text-sm text-text-muted">
            This portfolio highlights my journey through full-stack development,
            academic projects, and hands-on learning aimed at cracking software
            engineering roles.
          </p>
        </div>

        <div className="section-shell flex items-center justify-center">
          <div className="relative h-40 w-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-violet opacity-60 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-accent-cyan/60 bg-bg-glass/90 shadow-neon-cyan">
              <Image
                src="/avatar1.jpg"
                alt="Yaksh Chudasama"
                width={120}
                height={120}
                className="h-24 w-24 rounded-full border border-border-glass/70 object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

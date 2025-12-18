import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About | Yaksh Chudasama",
  description:
    "Learn more about Yaksh Chudasama, an IT engineering student and full-stack developer focused on building clean, scalable, and placement-ready web applications.",
};

const skills = [
  { name: "Next.js / React / TypeScript", level: 90 },
  { name: "Node.js / Express / REST APIs", level: 88 },
  { name: "MongoDB / SQL / Database Design", level: 85 },
  { name: "Tailwind CSS / Responsive UI", level: 92 },
  { name: "AI Tools & Automation", level: 80 },
];

const experience = [
  {
    title: "Full Stack Developer Intern",
    company: "Tririd Technologies",
    period: "Jul 2024 — Aug 2024",
    description:
      "Worked on full-stack web applications using React, Node.js, and MongoDB. Contributed to backend API development, frontend UI improvements, and real-world project workflows in a professional environment.",
  },
  {
    title: "Full Stack Developer (Projects & Freelance)",
    company: "Academic & Personal Projects",
    period: "2023 — Present",
    description:
      "Designed and developed multiple full-stack projects including e-commerce platforms, management systems, and AI-integrated applications with a strong focus on clean code, scalability, and placement readiness.",
  },
];

const education = [
  {
    title: "Bachelor of Engineering in Information Technology",
    company: "L.D. College of Engineering (LDCE), Ahmedabad",
    period: "2022 — Present",
    description:
      "Currently pursuing a BE in IT with a strong focus on software engineering, data structures, databases, and full-stack web development.",
  },
  {
    title: "Diploma in Information Technology",
    company: "Government Polytechnic",
    period: "2019 — 2022",
    description:
      "Graduated with a 9.60 CGPA, building a strong foundation in programming, databases, and core computer science concepts.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SectionHeader
        eyebrow="About"
        title="Who I am & how I build."
        subtitle="A full-stack developer focused on practical problem solving and clean engineering."
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <Reveal className="section-shell space-y-4">
          <h2 className="font-display text-xl text-text-main">
            Product-focused full-stack developer.
          </h2>
          <p className="text-sm text-text-muted">
            I’m Yaksh Chudasama, an Information Technology engineering student
            who enjoys building real-world, full-stack web applications. I focus
            on creating solutions that are practical, scalable, and easy to
            understand—both for users and for developers.
          </p>
          <p className="text-sm text-text-muted">
            My work primarily revolves around the MERN stack and Next.js. I
            enjoy working on backend APIs, database design, and frontend
            interfaces, while keeping performance, code quality, and user
            experience in mind. I also actively use AI tools to improve
            productivity and explore modern development workflows.
          </p>
        </Reveal>

        <Reveal className="section-shell space-y-4">
          <h2 className="font-display text-xl text-text-main">Skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between text-xs text-text-main">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-bg-glass/70">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-violet"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="section-shell space-y-6">
          <h2 className="font-display text-xl text-text-main">
            Experience Timeline
          </h2>
          <ol className="relative border-l border-border-glass/60">
            {experience.map((item) => (
              <li key={item.title} className="mb-6 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-accent-cyan bg-bg-main" />
                <div className="text-xs uppercase tracking-[0.18em] text-accent-cyan">
                  {item.period}
                </div>
                <h3 className="mt-1 font-display text-sm text-text-main">
                  {item.title}
                </h3>
                <p className="text-xs text-text-main">{item.company}</p>
                <p className="mt-2 text-sm text-text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="section-shell space-y-6">
          <h2 className="font-display text-xl text-text-main">
            Education & Foundations
          </h2>
          <ol className="relative border-l border-border-glass/60">
            {education.map((item) => (
              <li key={item.title} className="mb-6 ml-4">
                <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-accent-violet bg-bg-main" />
                <div className="text-xs uppercase tracking-[0.18em] text-accent-violet">
                  {item.period}
                </div>
                <h3 className="mt-1 font-display text-sm text-text-main">
                  {item.title}
                </h3>
                <p className="text-xs text-text-main">{item.company}</p>
                <p className="mt-2 text-sm text-text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </div>
  );
}

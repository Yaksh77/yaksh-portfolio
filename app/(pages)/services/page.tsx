import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Services | Yaksh Chudasama",
  description:
    "How Yaksh can help with full-stack web development, backend APIs, and placement-ready project development.",
};

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete, real-world web applications using modern technologies with a focus on clean code and scalability.",
    items: [
      "Next.js & React application development",
      "REST API design with Node.js & Express",
      "MongoDB database modeling and integration",
    ],
  },
  {
    title: "Backend & API Development",
    description:
      "Designing secure, scalable backend systems that power real-world applications and are easy to maintain.",
    items: [
      "Authentication & authorization (JWT, sessions)",
      "Validation, error handling & clean architecture",
      "API testing and debugging",
    ],
  },
  {
    title: "Placement-Ready Projects & Guidance",
    description:
      "Helping build and refine projects that are suitable for technical interviews, internships, and placement evaluations.",
    items: [
      "Project structuring & documentation",
      "Code quality and best practices",
      "Interview-focused explanations of projects",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <SectionHeader
        eyebrow="Services"
        title="How I can add value."
        subtitle="Focused on practical development, clean engineering, and placement-oriented outcomes."
      />

      <Reveal className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="section-shell space-y-3">
            <h2 className="font-display text-lg text-text-main">
              {service.title}
            </h2>
            <p className="text-sm text-text-muted">
              {service.description}
            </p>
            <ul className="mt-2 space-y-1 text-xs text-text-muted">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-accent-cyan" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

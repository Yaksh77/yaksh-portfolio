import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Cyber-Minimal Portfolio",
  description:
    "Explore selected full-stack, 3D, and motion-rich projects built with Next.js, Three.js, and modern tooling."
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work & experiments."
        subtitle="A snapshot of full-stack builds, interactive visuals, and production-grade systems."
      />

      <Reveal className="section-shell">
        <ProjectsGrid />
      </Reveal>
    </div>
  );
}



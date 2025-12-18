import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Blog | Yaksh Chudasama",
  description:
    "Learnings and thoughts on full-stack development, Next.js, MERN stack, backend APIs, and placement-oriented project building.",
};

const posts = [
  {
    title: "Building clean and scalable UIs with React and Tailwind CSS",
    summary:
      "How I approach designing responsive and maintainable user interfaces using React and Tailwind CSS, focusing on readability, reusability, and performance.",
    tag: "Frontend",
  },
  {
    title: "Structuring backend APIs with Node.js and MongoDB",
    summary:
      "Best practices I follow while building REST APIs using Node.js, Express, and MongoDB, including validation, error handling, and clean project structure.",
    tag: "Backend",
  },
  {
    title: "Making full-stack projects placement-ready",
    summary:
      "Key things I focus on while building MERN and Next.js projects for placements, such as real-world features, clean code, documentation, and interview explanations.",
    tag: "Placements",
  },
];

export default function BlogPage() {
  return (
    <div className="page-shell">
      <SectionHeader
        eyebrow="Blog"
        title="Notes from my learning and building journey."
        subtitle="Sharing practical experiences from full-stack development and placement preparation."
      />

      <Reveal className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="section-shell space-y-3">
            <span className="pill text-accent-violet">{post.tag}</span>
            <h2 className="font-display text-lg text-text-main">
              {post.title}
            </h2>
            <p className="text-sm text-text-muted">{post.summary}</p>
          </article>
        ))}
      </Reveal>
    </div>
  );
}

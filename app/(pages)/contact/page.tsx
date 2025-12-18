import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Cyber-Minimal Portfolio",
  description:
    "Get in touch with Yaksh for freelance work, collaborations, or full-time roles across frontend, backend, and 3D."
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something together."
        subtitle="Tell me about your idea, product, or team. I’ll get back to you with next steps."
      />

      <Reveal className="section-shell">
        <ContactForm />
      </Reveal>
    </div>
  );
}



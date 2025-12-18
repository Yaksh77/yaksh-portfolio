import Reveal from "@/components/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <Reveal className="space-y-3">
      <div className="pill border-accent-cyan/40 text-accent-cyan">
        {eyebrow}
      </div>
      <div className="space-y-2">
        <h1 className="font-display text-3xl text-text-main sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="max-w-2xl text-sm text-text-muted">{subtitle}</p>
        ) : null}
      </div>
    </Reveal>
  );
}

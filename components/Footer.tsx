export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-glass/60 bg-bg-glass/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] text-text-main md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {year} Yaksh. Crafted with Next.js, Three.js, and a love for motion
          design.
        </p>
        <p className="text-text-main">
          Built for production on Vercel · Dark-mode native
        </p>
      </div>
    </footer>
  );
}

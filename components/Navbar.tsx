"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Route } from "next";

type NavItem = {
  label: string;
  href: Route;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border-glass/60 bg-bg-glass/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-violet text-xs font-bold text-text-main shadow-neon-cyan">
            Y
          </span>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-sm text-text-main">
              Yaksh.dev
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-main">
              Full-Stack & 3D
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 text-xs md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3 py-1.5 border transition ${
                isActive(item.href)
                  ? "border-border-glass/70 bg-bg-glass/80 text-accent-cyan shadow-neon-cyan/60"
                  : "border-transparent text-text-muted hover:border-border-glass/60 hover:bg-bg-glass/60 hover:text-accent-cyan"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-glass/70 bg-bg-glass/80 text-text-main transition md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border-glass/60 bg-bg-glass/90 backdrop-blur-xl px-4 pb-4 pt-1 md:hidden">
          <div className="flex flex-col gap-1 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 transition ${
                  isActive(item.href)
                    ? "bg-bg-glass/80 text-accent-cyan"
                    : "text-text-muted hover:bg-bg-glass/70 hover:text-accent-cyan"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Business", href: "#business" },
  { label: "Career", href: "#career" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      {/* Gold top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-60" />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="text-white text-[14px] font-medium tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="text-[var(--color-gold)]">J</span>ingi
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="メインナビ">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-white/50 text-[11px] tracking-[0.15em] uppercase hover:text-[var(--color-gold)] transition-colors">{n.label}</a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center justify-center bg-transparent text-white text-[11px] tracking-[0.1em] border border-white/20 rounded-full px-5 py-2 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
          Contact
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="メニュー" aria-expanded={open}>
          <span className={`block w-5 h-px bg-white transition-all ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-5 h-px bg-white mt-1.5 transition-all ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {nav.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-white/60 text-[12px] tracking-[0.15em] uppercase hover:text-[var(--color-gold)] transition-colors">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
  { label: "Business", href: "#business" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container h-[60px] sm:h-[64px] flex items-center justify-between">
        <a href="#" className="text-white text-[15px] tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
          <span className="text-[var(--color-gold)]">J</span>ingi Ueda
        </a>

        <nav className="hidden lg:flex items-center gap-7" aria-label="メインナビ">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-white/45 text-[10px] font-medium tracking-[0.15em] uppercase hover:text-white transition-colors">{n.label}</a>
          ))}
        </nav>

        {/* ハンバーガー */}
        <button onClick={() => setOpen(!open)} className="lg:hidden relative w-7 h-7 flex items-center justify-center" aria-label="メニュー" aria-expanded={open}>
          <span className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
          <span className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div className={`lg:hidden fixed inset-0 top-[60px] sm:top-[64px] bg-black/98 backdrop-blur-lg transition-all duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col items-center justify-center h-full gap-7 -mt-12">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-white text-[14px] font-medium tracking-[0.2em] uppercase" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

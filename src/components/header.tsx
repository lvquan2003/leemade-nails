"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zen-line bg-[rgba(255,249,251,0.94)] backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-[min(1180px,calc(100%-28px))] items-center gap-3 sm:min-h-[72px] sm:w-[min(1180px,calc(100%-40px))]">
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0 font-display text-[14px] tracking-[0.08em] sm:text-[15px]">
            ZEM
            <span className="ml-1 block font-sans text-[7px] font-bold tracking-[0.2em] text-zen-accent-dark sm:text-[8px]">BEAUTY & MORE</span>
          </Link>

          <nav aria-label="Hauptnavigation" className="ml-auto hidden items-center gap-7 text-[10px] font-bold uppercase tracking-[0.12em] min-[821px]:flex">
            {links.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-zen-accent-dark">{link.label}</Link>)}
          </nav>

          <Link href="/booking/" className="ml-auto hidden min-h-10 items-center justify-center border border-zen-accent px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-zen-accent-dark transition hover:bg-zen-soft min-[821px]:flex">Termin buchen</Link>
          <Link href="/booking/" className="ml-auto flex min-h-9 items-center justify-center border border-zen-accent px-3 text-[9px] font-bold uppercase tracking-[0.07em] text-zen-accent-dark min-[821px]:hidden">Buchen</Link>

          <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zen-line transition hover:bg-zen-soft active:scale-95 min-[821px]:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Menü schließen" : "Menü öffnen"} aria-expanded={open}>
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-[rgba(255,249,251,0.98)] px-5 py-5 backdrop-blur-2xl transition-all duration-300 sm:top-[72px] min-[821px]:hidden ${open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
        <nav aria-label="Mobile Navigation" className="flex flex-col">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-4 border-b border-zen-line py-[17px] font-display text-[28px] font-normal transition hover:text-zen-accent-dark sm:py-[18px] sm:text-[30px]" style={{ transitionDelay: open ? `${index * 45}ms` : "0ms", transform: open ? "translateY(0)" : "translateY(12px)", opacity: open ? 1 : 0 }}>
              <span className="min-w-7 font-sans text-[9px] font-bold tracking-[0.1em] text-zen-accent">0{index + 1}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/booking/" onClick={() => setOpen(false)} className="mt-6 flex min-h-13 items-center justify-center bg-zen-accent text-[11px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(232,143,168,0.22)]">Termin buchen</Link>
        <div className="mt-auto flex justify-between gap-5 pt-7 text-[8px] uppercase tracking-[0.08em] text-zen-muted"><span>Nails · Beauty · You</span><span>© {new Date().getFullYear()} Zem Beauty</span></div>
      </div>
    </>
  );
}

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zen-line bg-zen-surface">
      <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-10 py-14 sm:w-[min(1180px,calc(100%-40px))] md:grid-cols-3">
        <div>
          <Link href="/" className="font-display text-xl tracking-[0.08em]">ZEM<span className="ml-1 block font-sans text-[7px] font-bold tracking-[0.2em] text-zen-accent-dark">BEAUTY & MORE</span></Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-zen-muted">Nails · Beauty · You</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <strong className="mb-2 text-[10px] uppercase tracking-[0.14em] text-zen-accent-dark">Navigation</strong>
          <Link href="/services/">Services</Link><Link href="/gallery/">Gallery</Link><Link href="/about/">About</Link><Link href="/faq/">FAQ</Link><Link href="/contact/">Kontakt</Link>
        </div>
        <div className="flex flex-col gap-2 text-sm text-zen-muted">
          <strong className="mb-2 text-[10px] uppercase tracking-[0.14em] text-zen-accent-dark">Kontakt</strong>
          <span>Adresse hier eintragen</span><span>+49 000 000000</span><span>hello@zem-beauty.de</span>
        </div>
      </div>
      <div className="border-t border-zen-line py-5 text-center text-[9px] uppercase tracking-[0.1em] text-zen-muted">© {new Date().getFullYear()} Zem Beauty & More · Impressum · Datenschutz</div>
    </footer>
  );
}

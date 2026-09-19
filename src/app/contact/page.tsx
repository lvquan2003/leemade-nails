import type { Metadata } from "next";

export const metadata: Metadata = { title: "Kontakt", description: "Kontakt, Adresse und Öffnungszeiten von Zem Beauty & More." };

const cards = [["Adresse", "Adresse hier eintragen"], ["Telefon", "+49 000 000000"], ["E-Mail", "hello@zem-beauty.de"], ["Öffnungszeiten", "Mo–Fr 09:00–18:00\nSa 09:00–16:00\nSo geschlossen"]];

export default function ContactPage() { return <section className="mx-auto w-[min(900px,calc(100%-28px))] py-20 sm:w-[min(900px,calc(100%-40px))] sm:py-28"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zen-accent-dark">Kontakt</p><h1 className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.05em]">Wir freuen uns<br/>auf dich.</h1><div className="mt-12 grid gap-px border border-zen-line bg-zen-line sm:grid-cols-2">{cards.map(([title,value])=><div key={title} className="bg-white p-7"><p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zen-accent-dark">{title}</p><p className="mt-3 whitespace-pre-line text-sm leading-7 text-zen-muted">{value}</p></div>)}</div></section>; }

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Termin buchen", description: "Vereinbare deinen Termin bei Zem Beauty & More." };

export default function BookingPage() {
  return <section className="mx-auto w-[min(850px,calc(100%-28px))] py-20 sm:w-[min(850px,calc(100%-40px))] sm:py-28"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zen-accent-dark">Termin</p><h1 className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.05em]">Deine Auszeit<br/>beginnt hier.</h1><p className="mt-7 max-w-2xl text-sm leading-7 text-zen-muted sm:text-base">Die Website ist aktuell statisch. Dieser Bereich ist als Booking-Placeholder vorbereitet und kann später mit einer Booking-API oder einem externen Buchungssystem verbunden werden.</p><div className="mt-8 flex flex-wrap gap-3"><a className="inline-flex min-h-12 items-center justify-center bg-zen-accent px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white" href="tel:+490000000000">Anrufen</a><a className="inline-flex min-h-12 items-center justify-center border border-zen-line px-6 text-[10px] font-bold uppercase tracking-[0.1em]" href="mailto:hello@example.com">E-Mail</a><Link className="inline-flex min-h-12 items-center justify-center border border-zen-line px-6 text-[10px] font-bold uppercase tracking-[0.1em]" href="/contact/">Kontakt & Öffnungszeiten</Link></div></section>;
}

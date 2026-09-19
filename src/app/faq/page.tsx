import type { Metadata } from "next";

export const metadata: Metadata = { title: "FAQ", description: "Häufige Fragen zu Terminen und Services." };

const faqs = [["Brauche ich einen Termin?", "Wir empfehlen einen Termin, damit wir genug Zeit für dich einplanen können."],["Kann ich eigene Design-Ideen mitbringen?", "Ja. Zeige uns gerne ein Foto oder Beispiel und wir besprechen gemeinsam die Möglichkeiten."],["Wie kann ich meinen Termin ändern?", "Aktuell bitte telefonisch oder per E-Mail. Später kann dieser Bereich direkt mit dem Booking-System verbunden werden."]];

export default function FAQPage() { return <section className="mx-auto w-[min(900px,calc(100%-28px))] py-20 sm:w-[min(900px,calc(100%-40px))] sm:py-28"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zen-accent-dark">FAQ</p><h1 className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.05em]">Häufige Fragen.</h1><div className="mt-12 divide-y divide-zen-line border-y border-zen-line">{faqs.map(([q,a])=><details key={q} className="py-6"><summary className="cursor-pointer list-none font-display text-xl">{q}</summary><p className="mt-3 max-w-2xl text-sm leading-7 text-zen-muted">{a}</p></details>)}</div></section>; }

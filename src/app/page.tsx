import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Clock3, Instagram, MapPin, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { GalleryCard } from "@/components/gallery-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ServicesShowcase } from "@/components/services-showcase";
import { galleryImages, siteImages } from "@/data/content";

const services = [
  { number: "01", title: "Maniküre", text: "Gepflegte Hände, perfekte Form und ein schönes Finish.", price: "ab 25 €", image: "" },
  { number: "02", title: "Nail Design", text: "Individuelle Designs von clean bis statement.", price: "ab 35 €", image: "" },
  { number: "03", title: "Pediküre", text: "Pflege und ein frisches, gepflegtes Gefühl für deine Füße.", price: "ab 30 €", image: "" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-zen-soft blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-zen-lavender blur-3xl" />
        <div className="mx-auto grid min-h-[calc(100svh-64px)] w-[min(1180px,calc(100%-28px))] items-center gap-10 py-12 sm:w-[min(1180px,calc(100%-40px))] sm:py-16 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zen-accent-dark">Nails · Beauty · You</p>
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.4rem,10vw,7rem)] font-normal leading-[0.88] tracking-[-0.055em]">Beauty<br/><em className="text-zen-accent">made</em><br/>personal.</h1>
            <p className="mt-7 max-w-md text-sm leading-7 text-zen-muted sm:text-base">Dein moderner Beauty-Moment – mit Liebe zum Detail, schönen Designs und einer Atmosphäre, in der du dich wohlfühlst.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/booking/" className="inline-flex min-h-12 items-center justify-center bg-zen-accent px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_16px_35px_rgba(232,143,168,0.24)] transition hover:-translate-y-0.5 hover:bg-zen-accent-dark">Termin buchen</Link>
              <Link href="/services/" className="inline-flex min-h-12 items-center justify-center border border-zen-line bg-white/60 px-6 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:bg-white">Services entdecken</Link>
            </div>
          </div>
          <div className="relative">
            <ImagePlaceholder src={siteImages.hero} alt="Zem Beauty Studio" label="HERO IMAGE" priority className="aspect-[4/5] shadow-[0_30px_80px_rgba(100,60,75,0.12)]" />
            <div className="absolute -bottom-5 -left-4 max-w-[210px] border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur-md sm:-left-7"><p className="text-[9px] font-bold uppercase tracking-[0.12em] text-zen-accent-dark">Your moment</p><p className="mt-2 font-display text-lg">Schön, dass du da bist.</p></div>
          </div>
        </div>
        <div className="mx-auto flex w-[min(1180px,calc(100%-28px))] items-center gap-3 pb-8 text-[9px] uppercase tracking-[0.16em] text-zen-muted sm:w-[min(1180px,calc(100%-40px))]"><ArrowDownRight size={14}/>Scroll to explore</div>
      </section>

      <section className="border-y border-zen-line bg-white">
        <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-px bg-zen-line sm:w-[min(1180px,calc(100%-40px))] sm:grid-cols-3">
          {[['01','Persönlich','Dein Look, dein Stil.'],['02','Modern','Clean, soft & individuell.'],['03','Mit Liebe','Details, die den Unterschied machen.']].map(([n,t,d])=><div key={n} className="bg-white p-7"><span className="text-[9px] font-bold tracking-[0.14em] text-zen-accent">{n}</span><h2 className="mt-3 font-display text-2xl font-normal">{t}</h2><p className="mt-2 text-sm text-zen-muted">{d}</p></div>)}
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-28px))] py-20 sm:w-[min(1180px,calc(100%-40px))] sm:py-28">
        <SectionTitle eyebrow="Services" title="Kleine Details. Großer Unterschied." description="Entdecke unsere wichtigsten Beauty-Services und finde deinen nächsten Lieblingslook." />
        <div className="mt-10"><ServicesShowcase /></div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">{services.map(service => <ServiceCard key={service.number} {...service} />)}</div>
        <Link href="/services/" className="mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zen-accent-dark">Alle Services & Preise <ArrowUpRight size={14} /></Link>
      </section>

      <section className="bg-zen-surface py-20 sm:py-28">
        <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] items-center gap-10 sm:w-[min(1180px,calc(100%-40px))] lg:grid-cols-2">
          <div><SectionTitle eyebrow="About" title="Ein Ort für deinen kleinen Reset." description="Zem Beauty & More steht für moderne Nails, Beauty und eine entspannte Atmosphäre. Du kommst für deine Behandlung – und gehst mit einem guten Gefühl." /><Link href="/about/" className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zen-accent-dark">Mehr über uns <ArrowUpRight size={14} /></Link></div>
          <ImagePlaceholder src={siteImages.studio} alt="Zem Beauty Studio Interior" label="STUDIO IMAGE" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="mx-auto w-[min(1180px,calc(100%-28px))] py-20 sm:w-[min(1180px,calc(100%-40px))] sm:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><SectionTitle eyebrow="Gallery" title="Looks we love." description="Deine besten Nail Designs direkt auf der Startseite – die vollständige Galerie gibt es auf der Gallery-Seite." /><Link href="/gallery/" className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zen-accent-dark">Ganze Gallery <ArrowUpRight size={14}/></Link></div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{galleryImages.slice(0,4).map((item,index)=><GalleryCard key={item.title} {...item} alt={`${item.title} – Zem Beauty`} className={index===1 ? "md:mt-10" : ""} />)}</div>
      </section>

      <section className="bg-zen-fg py-20 text-white sm:py-28">
        <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-10 sm:w-[min(1180px,calc(100%-40px))] lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zen-rose">Ready when you are</p><h2 className="mt-4 max-w-2xl font-display text-5xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-6xl">Dein nächster<br/><em className="text-zen-rose">Beauty-Moment</em>.</h2></div>
          <div className="flex flex-wrap gap-3"><Link href="/booking/" className="inline-flex min-h-12 items-center justify-center bg-zen-accent px-6 text-[10px] font-bold uppercase tracking-[0.1em] text-white">Termin buchen</Link><Link href="/contact/" className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-[10px] font-bold uppercase tracking-[0.1em]">Kontakt</Link></div>
        </div>
      </section>

      <section className="border-b border-zen-line bg-white py-7"><div className="mx-auto flex w-[min(1180px,calc(100%-28px))] items-center gap-3 text-[10px] font-bold uppercase tracking-[0.12em] text-zen-muted sm:w-[min(1180px,calc(100%-40px))]"><Instagram size={15}/><span>Instagram / @yourhandle</span></div></section>
      <section className="bg-zen-surface py-6"><div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-5 sm:w-[min(1180px,calc(100%-40px))] sm:grid-cols-3"><div className="flex items-center gap-3"><MapPin size={18} className="text-zen-accent"/><div><strong className="block text-sm">Location</strong><span className="text-xs text-zen-muted">Adresse hier eintragen</span></div></div><div className="flex items-center gap-3"><Clock3 size={18} className="text-zen-accent"/><div><strong className="block text-sm">Öffnungszeiten</strong><span className="text-xs text-zen-muted">Mo–Sa · nach Termin</span></div></div><div className="flex items-center gap-3"><Sparkles size={18} className="text-zen-accent"/><div><strong className="block text-sm">Termin</strong><span className="text-xs text-zen-muted">Persönlich & unkompliziert</span></div></div></div></section>
    </>
  );
}

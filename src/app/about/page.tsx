import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { siteImages } from "@/data/content";

export const metadata: Metadata = { title: "Über uns", description: "Mehr über Zem Beauty & More und unser Studio." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-zen-surface py-20 sm:py-28"><div className="mx-auto w-[min(1180px,calc(100%-28px))] sm:w-[min(1180px,calc(100%-40px))]"><SectionTitle eyebrow="Über uns" title="Beauty ist persönlich." description="Hier kannst du später die echte Studio-Story, Philosophie und das Team vorstellen." /></div></section>
      <section className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-10 py-16 sm:w-[min(1180px,calc(100%-40px))] sm:py-24 lg:grid-cols-2"><ImagePlaceholder src={siteImages.about} alt="Zem Beauty Studio" label="ABOUT IMAGE" className="aspect-[4/5]" /><div className="self-center"><p className="text-sm leading-8 text-zen-muted">Zem Beauty & More ist ein Ort für gepflegte Nails, schöne Details und eine entspannte Auszeit. Ersetze diesen Text später mit eurer echten Geschichte.</p><div className="mt-8 grid grid-cols-2 gap-4"><div className="border border-zen-line bg-white p-5"><p className="font-display text-3xl text-zen-accent">01</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em]">Persönlich</p></div><div className="border border-zen-line bg-white p-5"><p className="font-display text-3xl text-zen-accent">02</p><p className="mt-2 text-[10px] font-bold uppercase tracking-[0.1em]">Modern</p></div></div></div></section>
    </>
  );
}

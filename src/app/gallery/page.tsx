import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { GalleryCard } from "@/components/gallery-card";
import { galleryImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Inspiration und Nail Designs von Zem Beauty & More.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-28px))] py-20 sm:w-[min(1180px,calc(100%-40px))] sm:py-28">
      <SectionTitle eyebrow="Gallery" title="Dein nächster Look." description="Alle 12 Bildflächen sind vorbereitet. Du musst nur die `src`-Links in `src/data/content.ts` ersetzen." />
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((item, index) => (
          <GalleryCard key={`${item.title}-${index}`} {...item} alt={`${item.title} – Zem Beauty`} className={index % 5 === 1 ? "md:mt-8" : ""} />
        ))}
      </div>
    </section>
  );
}

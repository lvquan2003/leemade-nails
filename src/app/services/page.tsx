import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { ServicesShowcase } from "@/components/services-showcase";

export const metadata: Metadata = {
  title: "Services",
  description: "Entdecke die Nail- und Beauty-Services von Zem Beauty & More.",
};

const services = [
  { number: "01", title: "Classic Manicure", text: "Gepflegte Hände, Form und ein cleanes Finish.", price: "ab 25 €", image: "https://res.cloudinary.com/fulahwzr/image/upload/v1789808536/main-sample.png" },
  { number: "02", title: "Gel / Shellac", text: "Langanhaltender Look für deinen Alltag.", price: "ab 35 €", image: "https://res.cloudinary.com/fulahwzr/image/upload/v1789808536/main-sample.png" },
  { number: "03", title: "Nail Design", text: "Von minimal bis individuell und auffällig.", price: "ab 45 €", image: "" },
  { number: "04", title: "Classic Pedicure", text: "Pflege für schöne und gepflegte Füße.", price: "ab 30 €", image: "" },
  { number: "05", title: "Spa Pedicure", text: "Mehr Pflege, mehr Zeit, mehr Wohlfühlen.", price: "ab 50 €", image: "" },
  { number: "06", title: "Beauty Add-on", text: "Kleine Extras für deinen persönlichen Look.", price: "ab 5 €", image: "" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-zen-line bg-zen-surface py-20 sm:py-28"><div className="mx-auto w-[min(1180px,calc(100%-28px))] sm:w-[min(1180px,calc(100%-40px))]"><SectionTitle eyebrow="Services & Preise" title="Was wir für dich tun." description="Beispielpreise – einfach in dieser Datei durch eure echten Leistungen und Preise ersetzen." /></div></section>
      <section className="mx-auto w-[min(1180px,calc(100%-28px))] py-16 sm:w-[min(1180px,calc(100%-40px))] sm:py-24"><ServicesShowcase /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(s => <ServiceCard key={s.number} {...s} />)}</div></section>
    </>
  );
}

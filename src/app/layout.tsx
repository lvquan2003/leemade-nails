import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const siteUrl = "https://www.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Zem Beauty & More | Nails & Beauty Studio", template: "%s | Zem Beauty & More" },
  description: "Zem Beauty & More – modernes Nail- und Beauty-Studio für Maniküre, Pediküre, Nail Design und Beauty.",
  keywords: ["Nails", "Beauty", "Nail Studio", "Maniküre", "Pediküre", "Nail Design"],
  alternates: { canonical: "/" },
  openGraph: { title: "Zem Beauty & More", description: "Nails · Beauty · You", url: siteUrl, siteName: "Zem Beauty & More", type: "website" },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Zem Beauty & More",
  url: siteUrl,
  description: "Nail and beauty studio offering manicure, pedicure, nail design and beauty services.",
  priceRange: "€€",
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-16:00"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

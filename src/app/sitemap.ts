// import type { MetadataRoute } from "next";
// export default function sitemap(): MetadataRoute.Sitemap {
//   const base = "https://www.example.com";
//   return ["", "services", "gallery", "about", "booking", "contact", "faq"].map((route) => ({ url: `${base}/${route}`, lastModified: new Date() }));
// }

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://YOUR_USERNAME.github.io/leemade-nails";

  return [
    "",
    "/services/",
    "/gallery/",
    "/about/",
    "/booking/",
    "/contact/",
    "/faq/",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
  }));
}
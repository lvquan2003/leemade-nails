# Zem Beauty & More — Final

Next.js + TypeScript + Tailwind CSS v4 website for Zem Beauty & More.

## Images: one file to edit
Open:

`src/data/content.ts`

That file contains all prepared image slots for:
- Hero
- Studio
- About
- Services showcase
- 12 Gallery items

Just replace `src: ""` with a direct URL, for example:

```ts
src: "https://cdn.example.com/nail-01.webp"
```

or a local image:

```ts
src: "/images/nail-01.webp"
```

The site deliberately uses a normal `<img>` in the reusable image component so arbitrary direct image URLs can be pasted without adding every image host to Next.js config. Keep images reasonably compressed; WebP/AVIF are recommended.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is written to `out/` because `next.config.ts` uses `output: "export"`.

## Before deployment

Replace `https://www.example.com` with the real domain in:
- `src/app/layout.tsx`
- `src/app/sitemap.ts`
- `public/robots.txt`

## Styling

Component and responsive styling is done with Tailwind CSS. `src/app/globals.css` is intentionally kept small: theme tokens + global/base rules only.

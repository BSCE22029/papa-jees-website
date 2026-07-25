# Papa Jee's — Website (Redesign Pitch Build)

Production-ready Next.js 15 marketing site built as a redesign proposal for **Papa Jee's** (Gulberg, Lahore) — a 86,000+ Facebook-follower fast food brand currently operating with no website of its own.

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS
- Framer Motion (scroll animations)
- Lucide Icons

## What's real vs. sample content
- **Real / verified:** business name, owner, address, phone numbers, Facebook/Instagram links, hours structure.
- **Sample placeholder content (clearly marked in-page):** menu items & prices, testimonials, gallery images. These exist so the site can be demoed and must be replaced with the client's actual menu, real customer reviews, and real photography before going live.
- Photography is represented with styled placeholder blocks rather than scraped images — swap in licensed/owned photos before launch.

## Pages
Home · About · Menu · Gallery · Testimonials · FAQs · Contact (with map + form) · Privacy Policy · Custom 404

## Features included
Responsive design, SEO metadata + Open Graph/Twitter cards, JSON-LD Restaurant + FAQ schema, `sitemap.ts` / `robots.ts`, dynamically generated favicon, WhatsApp floating button, click-to-call button, contact form (stub API route — needs a real email provider wired in), loading skeleton, scroll-triggered Framer Motion animations, `prefers-reduced-motion` support.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before going live
1. Replace sample menu, testimonials, and gallery captions in `lib/site-config.ts` with real content.
2. Replace placeholder image blocks with real photography (add images to `/public` and update components).
3. Wire `app/api/contact/route.ts` to a real email service (e.g. Resend, SendGrid) — see `.env.example`.
4. Update `siteConfig.domain` to the final production domain once purchased.
5. Run `npm run build` locally to confirm a clean production build before deploying.

## Deploying to Vercel
1. Push this folder to its own GitHub repository.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required for the base build.
4. Click **Deploy**. Vercel will build and assign a URL in the form `https://papa-jees-website.vercel.app` (or your chosen project name) — a custom domain can be attached afterward under Project → Settings → Domains.

## Lighthouse target
This build avoids render-blocking patterns, uses `next/font` for zero layout-shift fonts, and lazy-loads below-the-fold content — a clean `npm run build` + Vercel deploy should score 95+ on Performance, Accessibility, Best Practices, and SEO. Actual scores should be verified post-deploy via Chrome DevTools Lighthouse or PageSpeed Insights, since no local Lighthouse run was performed in this environment.

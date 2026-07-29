# Mohammed Shanis Portfolio - Next.js SEO Version

This is the SEO-focused Next.js migration of the original React/Vite portfolio.

## What changed

- Migrated routing to Next.js App Router
- Added Metadata API SEO for every page
- Added canonical URLs
- Added OpenGraph and Twitter cards
- Added Person, WebSite, Breadcrumb, and BlogPosting JSON-LD schema
- Added dynamic blog metadata
- Added auto `/sitemap.xml` through `src/app/sitemap.js`
- Added auto `/robots.txt` through `src/app/robots.js`
- Kept the original UI/components and animations

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## SEO notes

After deployment, submit these in Google Search Console:

- `https://shanis.in/sitemap.xml`
- Request indexing for `/`, `/about`, `/projects`, `/services`, `/blog`, and all blog detail pages.

For ranking improvement, add more long-form blogs targeting:

- Full Stack Developer Kerala
- MERN Stack Developer Kerala
- React Developer Kerala
- Freelance Web Developer Kerala

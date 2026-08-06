# Inbox App Website

Production-ready, multi-page marketing website for Inbox. The visual language
mirrors the iOS app across timetable, grades, plus points, exams, and absences.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm test
```

`npm test` runs the production build, creates the Cloudflare Pages bundle, and
checks every public route, metadata, SEO files, the custom 404 page, and assets.

## Cloudflare Pages

Use these settings in Cloudflare:

- Root directory: `website`
- Build command: `npm run build:pages`
- Build output directory: `pages-dist`
- Node version: `22`

Or deploy from an authenticated local Wrangler session:

```bash
npm run deploy:pages
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before the final
deployment. The fallback is `https://inbx.page`.

## Content to finalize before launch

- Replace the App Store destination in `app/components/SiteChrome.tsx` once the
  public listing URL is known.
- Complete the responsible entity and postal address in
  `app/datenschutz/page.tsx`.
- Replace `support@inbox-app.ch`, `privacy@inbox-app.ch`, and
  `hello@inbox-app.ch` if different mailboxes will be used.

## Assets

Add future screenshots, school marks, press images, and campaign assets under
`public/assets/`. See `public/assets/README.md` for naming guidance. The custom
social preview lives at `public/og.png`.

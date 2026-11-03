# Portfolio — Kai Ler Mai

Personal portfolio and writing site, built with [Astro](https://astro.build/).

**Live site:** https://kailermai.github.io/portfolio/

---

## Quick start

```sh
npm install      # install dependencies
npm run dev      # dev server at http://localhost:4321/portfolio
npm run build    # production build to ./dist
npm run preview  # preview the production build locally
```

> Node 22 is expected (see the GitHub Actions workflow). Astro requires Node 18+.

---

## How the site is organised

This is a **static** Astro site. There is no database and no runtime server — every
page is pre-rendered to HTML at build time. Content comes from two places:

1. **Structured data** in `src/data/site.ts` (hero, experience, education, modules,
   certifications, activities). These render as the sections on the home page.
2. **Markdown content collections** in `src/content/` (projects + writing sections).

```
.
├── astro.config.mjs          # Astro config: site URL, base path, markdown plugins
├── package.json
├── public/                   # Static files copied verbatim to the site root
│   ├── favicon.svg
│   └── assets/               # Images used by markdown (served at /portfolio/assets/…)
│       ├── images/           #   project screenshots
│       └── default/          #   blog (NUSPlan) screenshots
└── src/
    ├── content.config.ts     # Content collection schemas (projects, blog)
    ├── data/
    │   └── site.ts           # ← EDIT: all structured home-page data
    ├── content/              # ← EDIT: markdown content
    │   ├── projects/         #   project cards (home page "Projects" grid)
    │   └── blog/             #   blog posts / project write-ups
    ├── layouts/
    │   ├── Base.astro        # <html>, nav, theme toggle, footer (wraps every page)
    │   └── Article.astro     # breadcrumb + prose wrapper for a single markdown entry
    ├── pages/                # Routes (file-based routing)
    │   ├── index.astro       # home page ("/") — projects (with tag filter), etc.
    │   ├── blog/
    │   │   ├── index.astro   # "/blog" — lists blog entries
    │   │   └── [...slug].astro  # "/blog/<slug>" — renders one entry
    │   └── og/
    │       └── [...route].ts # generates /og/*.png social preview images
    ├── plugins/
    │   └── rehype-base-assets.mjs  # prefixes /… URLs in markdown with the base path
    └── styles/
        └── global.css        # all site styling + CSS variables (theme colors)
```

---

## Common editing tasks

### Add or edit a project card (home page)

Create/edit a markdown file in `src/content/projects/`. Frontmatter schema
(`src/content.config.ts` → `projects`):

```md
---
title: "My Project"
description: "One-sentence summary."
tech: [TypeScript, React]          # tag chips shown on the card
category: Web                      # filter bucket: Web | Mobile | Games | Tools | Other
links:                             # optional external links
  - { label: "GitHub", url: "https://github.com/…" }
featured: true                     # highlight with accent border
order: 1                           # lower = earlier in the grid
image: /assets/images/foo.png      # optional card screenshot (in public/assets/)
---
Optional markdown body (not shown on the card today).
```

### Add a blog post

Drop a markdown file in `src/content/blog/`. Frontmatter schema
(`src/content.config.ts` → `writingSchema`):

```md
---
title: "Post title"
description: "Shown on the blog index and as the page/social meta description."
tags: [tag1, tag2]
order: 1          # optional; lower sorts first, else alphabetical by title
draft: false      # set true to exclude from the published build
---
Markdown body…
```

The file name becomes the URL slug, e.g. `src/content/blog/my-post.md` →
`/portfolio/blog/my-post`. The blog index (`/blog`) lists every non-draft entry
automatically, and an OG social image is generated for it automatically — no
extra wiring needed. Nothing else to touch.

### Edit structured home-page content

Everything else on the home page (name, role, experience, education, modules,
certifications, activities) lives in `src/data/site.ts` as typed arrays. Edit the
data; the home page re-renders from it.

### Add a brand-new content section (e.g. "notes")

Currently `blog` is the only writing collection (`projects` is the other
collection, rendered as home-page cards). To add a whole new section:

1. In `src/content.config.ts`: define a new collection (copy the `blog` block,
   rename it, reuse `writingSchema`) and add it to the `collections` export.
2. Create the route pair by copying `src/pages/blog/`:
   - `src/pages/<slug>/index.astro` — the listing page
   - `src/pages/<slug>/[...slug].astro` — the per-entry page
   In both, change `getCollection('blog', …)` to your new collection name and
   update the category label passed to `Article` (and the page titles).
3. Add the markdown files under `src/content/<slug>/`.
4. Add a nav link in `src/layouts/Base.astro` (follow the existing
   `${base}/blog` pattern — see the Guardrails section about base paths).
5. (Optional) To generate OG images for the new entries, extend the `pages` map
   in `src/pages/og/[...route].ts` the same way blog entries are added there.

> There is no central category registry to update — each section is just a
> collection + a route pair + a nav link. (An earlier `WRITING_CATEGORIES`
> constant was removed; don't look for it.)

### Images in markdown

Put the image in `public/assets/…` and reference it with a **root-absolute path**:

```md
![alt text](/assets/images/my-screenshot.png)
```

Do **not** hardcode `/portfolio/` — the `rehype-base-assets` plugin
(`src/plugins/rehype-base-assets.mjs`) automatically prefixes root-absolute
URLs with the configured `base` at build time, so links keep working whether the
base is `/portfolio` or `/`. For links **between markdown pages**, use relative
paths (e.g. `[see](../other-post)`), which are base-independent.

---

## Guardrails — how not to break things

Read these before making changes:

- **Base path / URLs.** The site is served from the `/portfolio/` subpath, so
  **never hardcode absolute paths** like `/blog` or `/assets/...` in `.astro`
  files. Build URLs from the base: `const base = import.meta.env.BASE_URL.replace(/\/$/, '')`
  then `` `${base}/blog` ``. In markdown, use root-absolute `/assets/...` for
  images (the rehype plugin prefixes the base) and **relative** links between
  pages (e.g. `../other-post`). This is the #1 source of past breakage.
- **Always verify a build before pushing:** `npm run build`. The build is
  type-checked and will fail on a bad content schema, broken import, or missing
  collection — treat a green build as the minimum bar. A push to `main`
  auto-deploys, so a broken push breaks the live site.
- **Don't rename or remove** `src/content.config.ts` collection keys
  (`projects`, `blog`) without updating every `getCollection('<key>')` call and
  the matching `src/pages/<key>/` routes.
- **Frontmatter must match the schema** in `src/content.config.ts`. Missing a
  required field (e.g. a project without `title`/`description`) fails the build.
- **`draft: true`** keeps an entry out of the published site — use it for
  work-in-progress rather than deleting.
- **Don't touch the `v4` branch** — it's the archived original Quartz site kept
  as a backup. All work happens on `main`.
- **Images:** put files in `public/assets/…` (served verbatim). Don't put them
  in `src/` expecting them to be copied.
- **Keep `base` (astro.config.mjs) and the OG `Astro.site` URL in sync** if the
  hosting ever changes (see Deployment).

---

## Deployment

Pushing to the `main` branch triggers
`.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes
`./dist` to GitHub Pages. The site serves at **https://kailermai.github.io/portfolio/**.

> **Base path.** Because this is a GitHub *project* page served from the
> `/portfolio/` subpath, `base: '/portfolio'` is set in `astro.config.mjs`. The
> same value is passed to the markdown asset plugin. If you move to a custom
> domain or a user-page repo (`<user>.github.io`), change `base` to `'/'` (or
> remove it) and update `site` — nothing else needs to change.

---

## What was intentionally left out

This site was migrated from an older [Quartz](https://quartz.jzhao.xyz/) digital
garden (preserved on the **`v4`** branch). The old Quartz config hid several
folders from the public site via `ignorePatterns`:

- `4 - General Notes`, `5 - Leetcode Notes`, `6 - School Notes`, `7 - Go Notes`

Those were **private notes** and are **not** ported here — only the sections the
original site displayed publicly (About Me, Blog, The Odin Project) were migrated.
The source markdown still lives on the `v4` branch if any of it is ever needed.

The Odin Project pages were **merged into the Projects grid** (see the
`odin-*.md` files in `src/content/projects/`) rather than kept as a separate
section.

---

## Built-in features

- **Dark / light theme** toggle (persisted in `localStorage`), set before paint
  to avoid a flash. See the inline scripts in `src/layouts/Base.astro`.
- **Project category filtering** — the Projects section renders one filter
  button per `category` that has projects (Web / Mobile / Games / Tools / Other),
  plus "All". Clicking filters the grid (vanilla JS in `src/pages/index.astro`,
  reading each card's `data-category`). Set a project's bucket via the `category`
  frontmatter field. This is deliberately a small, meaningful set of buckets
  rather than a button per tech tag (which produced 20+ buttons). The detailed
  `tech` chips still show on each card.
- **Scroll reveal** — sections fade in on scroll via `IntersectionObserver`,
  disabled under `prefers-reduced-motion`. Classes `.reveal` / `.in-view` in
  `global.css`; the class is added by JS so no-JS users still see all content.
- **Active-section nav highlight** — the nav link for the section in view gets
  an `.active` class as you scroll.
- **Auto-generated OG social images** — `src/pages/og/[...route].ts` uses
  `astro-og-canvas` to render a 1200×630 PNG for the site and each blog post at
  build time. `Base.astro` emits the Open Graph + Twitter meta tags. To give a
  page its own card, pass `ogId` to `Base`/`Article` and add a matching entry in
  the OG route's `pages` map.
- **Custom 404 page** — `src/pages/404.astro` builds to `dist/404.html`, which
  GitHub Pages automatically serves for unknown URLs. It reuses the site layout.
- **Analytics (opt-in, GoatCounter)** — privacy-friendly, cookie-free. Disabled
  by default. To turn it on: create a free account at
  [goatcounter.com](https://www.goatcounter.com/) and set `goatCounterCode` in
  `src/data/site.ts` to your site code (the `YOURCODE` in
  `YOURCODE.goatcounter.com`). The tracking script in `Base.astro` is only
  emitted when that value is non-empty, so leaving it blank ships no analytics.

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
│       ├── images/           #   project & Odin screenshots
│       └── default/          #   blog (NUSPlan) screenshots
└── src/
    ├── content.config.ts     # Collection schemas + WRITING_CATEGORIES metadata
    ├── data/
    │   └── site.ts           # ← EDIT: all structured home-page data
    ├── content/              # ← EDIT: markdown content
    │   ├── projects/         #   project cards (home page "Projects" grid)
    │   ├── blog/             #   blog posts / project write-ups
    │   └── odin/             #   The Odin Project pages
    ├── layouts/
    │   ├── Base.astro        # <html>, nav, theme toggle, footer (wraps every page)
    │   └── Article.astro     # breadcrumb + prose wrapper for a single markdown entry
    ├── pages/                # Routes (file-based routing)
    │   ├── index.astro       # home page ("/")
    │   ├── blog/
    │   │   ├── index.astro   # "/blog" — lists blog entries
    │   │   └── [...slug].astro  # "/blog/<slug>" — renders one entry
    │   └── odin/
    │       ├── index.astro   # "/odin"
    │       └── [...slug].astro  # "/odin/<slug>"
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
tech: [TypeScript, React]          # tag chips
links:                              # optional external links
  - { label: "GitHub", url: "https://github.com/…" }
featured: true                     # highlight with accent border
order: 1                           # lower = earlier in the grid
---
Optional markdown body (not shown on the card today).
```

### Add a blog post or Odin page

Drop a markdown file in `src/content/blog/` or `src/content/odin/`. Shared
frontmatter schema (`src/content.config.ts` → `writingSchema`):

```md
---
title: "Post title"
description: "Shown on the category index and as the meta description."
tags: [tag1, tag2]
order: 1          # optional; lower sorts first, else alphabetical by title
draft: false      # set true to exclude from the published build
---
Markdown body…
```

The file name becomes the URL slug, e.g. `src/content/blog/my-post.md` →
`/portfolio/blog/my-post`. The category index page lists every non-draft entry
automatically — no extra wiring needed.

### Edit structured home-page content

Everything else on the home page (name, role, experience, education, modules,
certifications, activities) lives in `src/data/site.ts` as typed arrays. Edit the
data; the home page re-renders from it.

### Add a brand-new writing category (e.g. "notes")

1. Add a collection in `src/content.config.ts` (copy the `blog` block, rename).
2. Add it to the `collections` export and the `WRITING_CATEGORIES` array.
3. Create `src/pages/<slug>/index.astro` and `src/pages/<slug>/[...slug].astro`
   (copy the `blog/` pair and change the collection name + category label).
4. Add a nav link in `src/layouts/Base.astro` and (optionally) a card in the
   home page "Writing" section (`src/pages/index.astro`).

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

## Deployment

Pushing to the `astro-revamp` branch triggers
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

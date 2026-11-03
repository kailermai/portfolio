# Portfolio — Kai Ler Mai

My personal portfolio, built with [Astro](https://astro.build/).

Live site: **https://kailermai.github.io/portfolio/**

## Editing content

Most content is data-driven and easy to maintain:

- **Experience, education, modules, certifications, activities** — edit `src/data/site.ts`
- **Projects** — add or edit a markdown file in `src/content/projects/`. Each file has frontmatter (`title`, `description`, `tech`, `links`, `featured`, `order`) and an optional markdown body.
- **Styling / theme colors** — `src/styles/global.css`
- **Layout (nav, footer)** — `src/layouts/Base.astro`

## Local development

```sh
npm install      # install dependencies
npm run dev      # start dev server at localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Deployment

Pushing to the `astro-revamp` branch triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and deploys it to
GitHub Pages.

> **Note:** the `base` path in `astro.config.mjs` is set to `/portfolio` so the
> site serves correctly at `kailermai.github.io/portfolio/`. If you later move to
> a custom domain or a user-page repo, remove the `base` option.

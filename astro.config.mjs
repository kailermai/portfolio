import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeBaseAssets from './src/plugins/rehype-base-assets.mjs';

// The site is served from the /portfolio subpath on GitHub Pages
// (kailermai.github.io/portfolio). Keep BASE and SITE in sync with deployment.
// On a custom domain or user-page repo, set base to '/' (or remove it).
const BASE = '/portfolio';

export default defineConfig({
  site: 'https://kailermai.github.io',
  base: BASE,
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      watch: {
        // WSL can miss file events on Windows-mounted drives, leaving stale pages.
        usePolling: process.platform === 'linux' && process.cwd().startsWith('/mnt/'),
        interval: 300,
      },
    },
  },
  markdown: {
    // Rewrite /assets/... URLs in markdown to include the base path.
    rehypePlugins: [[rehypeBaseAssets, { base: BASE }]],
  },
});

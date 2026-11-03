import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Update "site" to your real domain when you deploy.
// If you keep hosting on GitHub Pages at kailermai.github.io/portfolio,
// set base: '/portfolio'. On Cloudflare/Vercel with a custom domain, remove base.
export default defineConfig({
  site: 'https://kailermai.github.io',
  base: '/portfolio',
  integrations: [mdx(), sitemap()],
});

import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Auto-generates Open Graph preview images (1200x630 PNG) at build time for
// every blog entry plus a site-wide default, served under /og/<id>.png.
// Referenced by the <meta property="og:image"> tag in Base.astro.

const blog = await getCollection('blog', ({ data }) => !data.draft);

const pages: Record<string, { title: string; description?: string }> = {
  // Site-wide default card (used by the home page and any page without its own).
  site: {
    title: 'Kai Ler Mai',
    description: 'Computer Science @ NUS · Incoming SWE Intern @ TikTok',
  },
};

for (const entry of blog) {
  pages[`blog-${entry.id}`] = {
    title: entry.data.title,
    description: entry.data.description ?? '',
  };
}

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [11, 13, 18],
      [22, 26, 35],
    ],
    border: { color: [110, 231, 183], width: 8, side: 'inline-start' },
    padding: 60,
    font: {
      title: { color: [230, 232, 238], size: 64, weight: 'Bold' },
      description: { color: [154, 163, 178], size: 32 },
    },
  }),
});

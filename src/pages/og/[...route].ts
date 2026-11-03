import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { site } from '../../data/site';

// Auto-generates Open Graph preview images (1200x630 PNG) at build time for
// every blog entry plus a site-wide default, served under /og/<id>.png.
// Referenced by the <meta property="og:image"> tag in Base.astro.

const blog = await getCollection('blog', ({ data }) => !data.draft);

const pages: Record<string, { title: string; description?: string }> = {
  // Site-wide default card (used by the home page and any page without its own).
  site: {
    title: site.name,
    description: site.role,
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
      [246, 244, 239],
      [246, 244, 239],
    ],
    border: { color: [145, 69, 47], width: 3, side: 'inline-start' },
    padding: 60,
    font: {
      title: { color: [41, 39, 35], size: 64, weight: 'Bold' },
      description: { color: [103, 97, 89], size: 32 },
    },
  }),
});

import { visit } from 'unist-util-visit';

/**
 * Rehype plugin factory that prefixes root-absolute asset URLs (/assets/...) in
 * markdown with the given `base` path, so images and links resolve correctly
 * when the site is served from a subpath (e.g. kailermai.github.io/portfolio/).
 *
 * Markdown authors keep writing clean paths like `/assets/images/foo.png`;
 * this rewrites them to `/portfolio/assets/images/foo.png` at build time.
 *
 * Usage in astro.config.mjs:
 *   markdown: { rehypePlugins: [[rehypeBaseAssets, { base: '/portfolio' }]] }
 */
export default function rehypeBaseAssets(options = {}) {
  const base = (options.base || '/').replace(/\/$/, '');

  return (tree) => {
    if (!base) return;
    visit(tree, 'element', (node) => {
      const attr =
        node.tagName === 'img' || node.tagName === 'source'
          ? 'src'
          : node.tagName === 'a'
            ? 'href'
            : null;
      if (!attr) return;
      const val = node.properties?.[attr];
      // Prefix root-absolute, same-site URLs (e.g. /assets/... or /blog/...)
      // with the base path. Skip protocol-relative (//), external, anchors,
      // mailto/tel, and anything already under the base.
      if (
        typeof val === 'string' &&
        val.startsWith('/') &&
        !val.startsWith('//') &&
        !val.startsWith(base + '/')
      ) {
        node.properties[attr] = base + val;
      }
    });
  };
}

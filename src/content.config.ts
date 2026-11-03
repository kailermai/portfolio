import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// -----------------------------------------------------------------------------
// Content collections.
//
// `projects` is data-driven cards shown on the home page.
//
// `blog` is the public writing section, ported from the old Quartz site. NOTE:
// the old Quartz site hid several folders via `ignorePatterns` (General Notes,
// Leetcode Notes, School Notes, Go Notes) — those were private and are
// intentionally NOT ported. The Odin Project pages were merged into `projects`.
//
// The blog collection is a folder of markdown files under src/content/blog/ and
// is rendered by the dynamic route src/pages/blog/[...slug].astro, with an index
// page at src/pages/blog/index.astro.
//
// To add a new writing entry: drop a markdown file in the right folder with the
// frontmatter below. Set `draft: true` to keep it out of the published site.
// -----------------------------------------------------------------------------

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    links: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

// Shared schema for the public writing collections.
const writingSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  draft: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  // Lower order sorts first; otherwise entries sort alphabetically by title.
  order: z.number().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: writingSchema,
});

export const collections = { projects, blog };

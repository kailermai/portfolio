import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// -----------------------------------------------------------------------------
// Content collections.
//
// `projects` is data-driven cards shown on the home page.
//
// `blog` and `odin` are the public "writing" sections, ported from the old
// Quartz site. NOTE: the old Quartz site hid several folders via
// `ignorePatterns` (General Notes, Leetcode Notes, School Notes, Go Notes) —
// those were private and are intentionally NOT ported here. Only sections that
// were publicly displayed on the original site are included.
//
// Each writing collection is a folder of markdown files under
// src/content/<collection>/ and is rendered by the dynamic route
// src/pages/<collection>/[...slug].astro, with an index page at
// src/pages/<collection>/index.astro.
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

const odin = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/odin' }),
  schema: writingSchema,
});

export const collections = { projects, blog, odin };

// Metadata describing each public writing category. Used to build nav links and
// the category index pages. Add an entry here when you add a new collection.
export const WRITING_CATEGORIES = [
  {
    slug: 'blog',
    name: 'Blog',
    collection: 'blog' as const,
    description: 'Thoughts and write-ups from events and projects.',
  },
  {
    slug: 'odin',
    name: 'The Odin Project',
    collection: 'odin' as const,
    description: 'Projects built while studying The Odin Project.',
  },
];

import type { MarkdownInstance } from 'astro';

type Frontmatter = {
  title: string;
  slug: string;
  date: string;
  category?: string;
  description?: string;
  draft?: boolean;
  legacySlug?: string;
};

const files = import.meta.glob<MarkdownInstance<Frontmatter>>('../content/posts/*.md', { eager: true });

export async function getPosts() {
  const posts = await Promise.all(Object.values(files)
    .filter((file) => !file.frontmatter.draft)
    .map(async (file) => {
      const frontmatter = file.frontmatter;
      if (!frontmatter.title || !frontmatter.slug || !frontmatter.date) {
        throw Error(`Missing title, slug or date: ${file.file}`);
      }
      if (!/^[a-z0-9-]+$/.test(frontmatter.slug)) {
        throw Error(`Use a lowercase English slug: ${file.file}`);
      }
      const date = String(frontmatter.date).slice(0, 10);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date))) {
        throw Error(`Invalid date: ${file.file}`);
      }
      return {
        title: String(frontmatter.title),
        slug: `blog/${frontmatter.slug}`,
        legacySlug: frontmatter.legacySlug ? String(frontmatter.legacySlug) : undefined,
        date,
        category: String(frontmatter.category || '学习笔记'),
        excerpt: String(frontmatter.description || ''),
        html: await file.compiledContent(),
      };
    }));

  if (new Set(posts.map((post) => post.slug)).size !== posts.length) {
    throw Error('Duplicate article URL');
  }
  const legacySlugs = posts.flatMap((post) => post.legacySlug ? [post.legacySlug] : []);
  if (new Set(legacySlugs).size !== legacySlugs.length || legacySlugs.some((slug) => posts.some((post) => post.slug === slug))) {
    throw Error('Duplicate legacy article URL');
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic/config';

const posts = createReader(process.cwd(), config).collections.posts;

type Entry = NonNullable<Awaited<ReturnType<typeof posts.read<[{ resolveLinkedFiles: false }]>>>>;

function toArticle(slug: string, entry: Entry) {
  return { ...entry, slug, excerpt: entry.summary };
}

export async function getArticles() {
  const entries = await posts.all({ resolveLinkedFiles: false });
  return entries
    .map(({ slug, entry }) => toArticle(slug, entry))
    .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '') || a.slug.localeCompare(b.slug));
}

export async function getArticleBySlug(slug: string) {
  const entry = await posts.read(slug, { resolveLinkedFiles: false });
  return entry ? toArticle(slug, entry) : null;
}

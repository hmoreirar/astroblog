export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

export function getUniqueTags(tags: string[]): string[] {
  return [...new Set(tags.map(normalizeTag))];
}

export function collectTags(
  posts: Array<{ data: { tags: string[] } }>,
): Map<string, number> {
  const tagCounts = new Map<string, number>();
  for (const post of posts) {
    const seen = new Set<string>();
    for (const tag of post.data.tags) {
      const normalized = normalizeTag(tag);
      if (!seen.has(normalized)) {
        seen.add(normalized);
        tagCounts.set(normalized, (tagCounts.get(normalized) ?? 0) + 1);
      }
    }
  }
  return tagCounts;
}

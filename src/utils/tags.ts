export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

export interface TagLink {
  key: string;
  label: string;
}

const LABELS: Record<string, string> = {
  politica: "política",
  tecnologia: "tecnología",
  musica: "música",
  critica: "crítica",
  filosofia: "filosofía",
  "vision-artificial": "visión artificial",
  "capitalismo-de-vigilancia": "capitalismo de vigilancia",
  "live-coding": "live coding",
  "web-development": "web development",
};

export function tagLabel(key: string): string {
  return LABELS[key] ?? key.replace(/-/g, " ");
}

export function tagLinks(tags: string[]): TagLink[] {
  const seen = new Set<string>();
  const links: TagLink[] = [];
  for (const tag of tags) {
    const key = normalizeTag(tag);
    if (!seen.has(key)) {
      seen.add(key);
      links.push({ key, label: tagLabel(key) });
    }
  }
  return links;
}

export function collectTags(
  posts: Array<{ data: { tags: string[] } }>,
): Map<string, { count: number; label: string }> {
  const tags = new Map<string, { count: number; label: string }>();
  for (const post of posts) {
    for (const { key, label } of tagLinks(post.data.tags)) {
      const entry = tags.get(key);
      if (entry) {
        entry.count += 1;
      } else {
        tags.set(key, { count: 1, label });
      }
    }
  }
  return tags;
}

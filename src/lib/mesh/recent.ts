const KEY = "lookout-recent";

export function readRecent(): string[] {
  if (typeof localStorage === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === "string").slice(0, 6);
  } catch {
    return [];
  }
}

export function remember(query: string) {
  const cleaned = query.trim();
  if (!cleaned || cleaned === "*") return;
  const next = [cleaned, ...readRecent().filter((item) => item.toLowerCase() !== cleaned.toLowerCase())].slice(0, 6);
  localStorage.setItem(KEY, JSON.stringify(next));
}

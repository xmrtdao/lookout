import {
  CORPUS,
  type Doc,
  type Kind,
  type Protocol,
} from "./corpus.ts";

export type Tab = "all" | Kind;

export interface ParsedQuery {
  text: string;
  phrases: string[];
  kind?: Kind;
  protocol?: Protocol | "none";
  near?: string;
  maxHops?: number;
  capability?: string;
  raw: string;
}

export interface Hit {
  doc: Doc;
  score: number;
  snippet: string;
}

export interface SearchResult {
  hits: Hit[];
  parsed: ParsedQuery;
  didYouMean?: string;
  related: string[];
  terms: string[];
}

const STOP = new Set([
  "the", "a", "an", "of", "to", "and", "for", "on", "in", "is", "it", "by",
  "with", "from", "that", "this", "what", "how", "are", "be", "or", "at",
]);

const SYN: Record<string, string[]> = {
  radio: ["node", "lora", "meshtastic", "meshcore"],
  radios: ["node", "lora"],
  repeater: ["relay", "ridge"],
  repeaters: ["relay", "ridge"],
  offline: ["blackout", "mesh"],
  agent: ["eliza", "hermes", "libp2p"],
  agents: ["eliza", "hermes", "fleet"],
  storm: ["weather", "wind"],
  rescue: ["sar"],
  sar: ["rescue"],
  ping: ["participation", "proof"],
  internet: ["cloud", "grid"],
  cloud: ["internet"],
  phone: ["hermes", "android"],
  search: ["lookout", "index"],
};

const KINDS = new Set<Kind>(["node", "channel", "person", "place", "bulletin", "page"]);

function asKind(value: string): Kind | undefined {
  const v = value.toLowerCase();
  return KINDS.has(v as Kind) ? (v as Kind) : undefined;
}

function asProtocol(value: string): Protocol | "none" {
  const v = value.toLowerCase();
  if (v === "meshtastic" || v === "meshcore" || v === "libp2p" || v === "mixed") return v;
  if (v === "xmrt" || v === "gossipsub" || v === "gossip" || v === "libp2p") return "libp2p";
  if (v === "lora") return "mixed";
  return "none";
}

export function tokens(input: string): string[] {
  return input
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOP.has(t));
}

export function parseQuery(raw: string): ParsedQuery {
  const phrases: string[] = [];
  const without = raw.replace(/"([^"]+)"/g, (_, phrase: string) => {
    const trimmed = phrase.trim();
    if (trimmed) phrases.push(trimmed);
    return " ";
  });
  const free: string[] = [];
  let kind: Kind | undefined;
  let protocol: Protocol | "none" | undefined;
  let near: string | undefined;
  let maxHops: number | undefined;
  let capability: string | undefined;

  for (const part of without.split(/\s+/).filter(Boolean)) {
    const match = /^([a-z]+):(.+)$/i.exec(part);
    if (!match) {
      free.push(part);
      continue;
    }
    const key = match[1].toLowerCase();
    const val = match[2];
    if (key === "node" || key === "channel" || key === "person" || key === "place" || key === "bulletin" || key === "page") {
      kind = key;
      if (val) free.push(val);
    } else if (key === "kind") {
      kind = asKind(val) ?? kind;
    } else if (key === "proto" || key === "protocol") {
      protocol = asProtocol(val);
    } else if (key === "near") {
      near = val.replace(/-/g, " ");
    } else if (key === "hops" || key === "hop") {
      const n = Number(val);
      if (Number.isFinite(n)) maxHops = n;
    } else if (key === "cap" || key === "capability") {
      capability = val.toLowerCase();
    } else {
      free.push(part);
    }
  }

  return { text: free.join(" "), phrases, kind, protocol, near, maxHops, capability, raw };
}

export function highlightTerms(parsed: ParsedQuery): string[] {
  const terms = new Set<string>();
  for (const phrase of parsed.phrases) terms.add(phrase);
  for (const token of tokens(parsed.text)) terms.add(token);
  if (parsed.capability) terms.add(parsed.capability);
  if (parsed.near) terms.add(parsed.near);
  return [...terms];
}

function includes(hay: string, needle: string): boolean {
  return hay.toLowerCase().includes(needle.toLowerCase());
}

type Strength = "exact" | "syn" | "miss";

function hitField(field: string, token: string): Strength {
  if (includes(field, token)) return "exact";
  const syns = SYN[token] ?? [];
  if (syns.some((s) => includes(field, s))) return "syn";
  return "miss";
}

function windowSnippet(doc: Doc, terms: string[]): string {
  const hay = doc.body.replace(/\s+/g, " ").trim();
  const lower = hay.toLowerCase();
  let idx = -1;
  for (const term of terms) {
    const at = lower.indexOf(term.toLowerCase());
    if (at >= 0 && (idx < 0 || at < idx)) idx = at;
  }
  if (idx < 0) return doc.snippet;
  const start = Math.max(0, idx - 50);
  const end = Math.min(hay.length, idx + 150);
  let slice = hay.slice(start, end).trim();
  if (start > 0) slice = `…${slice}`;
  if (end < hay.length) slice = `${slice}…`;
  return slice;
}

function passes(doc: Doc, parsed: ParsedQuery, tab: Tab): boolean {
  if (tab !== "all" && doc.kind !== tab) return false;
  if (parsed.kind && doc.kind !== parsed.kind) return false;
  if (parsed.protocol === "none") return false;
  if (parsed.protocol && doc.protocol !== parsed.protocol && doc.protocol !== "mixed") return false;
  if (parsed.maxHops !== undefined && doc.hops > parsed.maxHops) return false;
  if (parsed.capability) {
    const blob = `${doc.tags.join(" ")} ${doc.body} ${doc.facts.map((f) => f.value).join(" ")}`;
    if (!includes(blob, parsed.capability)) return false;
  }
  if (parsed.near) {
    const blob = `${doc.region} ${doc.title} ${doc.tags.join(" ")} ${doc.snippet}`;
    if (!includes(blob, parsed.near)) return false;
  }
  for (const phrase of parsed.phrases) {
    const blob = `${doc.title} ${doc.snippet} ${doc.body}`;
    if (!includes(blob, phrase)) return false;
  }
  return true;
}

function scoreDoc(doc: Doc, parsed: ParsedQuery, _terms: string[]): number {
  let score = 0;
  let matched = 0;
  const tags = doc.tags.join(" ");
  for (const token of tokens(parsed.text)) {
    const title = hitField(doc.title, token);
    const tag = hitField(tags, token);
    const path = hitField(doc.path, token);
    const body = hitField(`${doc.body} ${doc.snippet} ${doc.region} ${doc.heardVia}`, token);
    const best = [title, tag, path, body];
    if (best.every((s) => s === "miss")) continue;
    matched += 1;
    if (title === "exact") score += 28;
    else if (title === "syn") score += 12;
    if (tag === "exact") score += 16;
    else if (tag === "syn") score += 6;
    if (path === "exact") score += 8;
    if (body === "exact") score += 7;
    else if (body === "syn") score += 3;
  }
  for (const phrase of parsed.phrases) {
    if (includes(doc.title, phrase)) score += 40;
    else score += 24;
    matched += 1;
  }
  const textTokens = tokens(parsed.text);
  if (textTokens.length > 0 && matched < textTokens.length && parsed.phrases.length === 0) {
    score *= matched / textTokens.length;
  }
  if (textTokens.length >= 2 && matched >= textTokens.length) score *= 1.28;
  if (parsed.capability && includes(doc.tags.join(" "), parsed.capability)) score += 18;
  if (parsed.near && includes(doc.region, parsed.near)) score += 10;

  const asked = textTokens.length + parsed.phrases.length;
  const filtered = parsed.protocol || parsed.kind || parsed.near || parsed.maxHops !== undefined || parsed.capability;
  if (asked === 0 && filtered) score += 8;
  if (score <= 0) return 0;

  const fresh = doc.kind === "bulletin" ? Math.max(0, 16 - doc.lastHeardMin / 6) : Math.max(0, 4 - doc.lastHeardMin / 200);
  const hop = Math.max(0, 9 - doc.hops * 1.7);
  const ear = doc.snr > 6 ? 3 : doc.snr > 0 ? 1 : 0;
  return score + fresh + hop + ear;
}

function rank(docs: Doc[], parsed: ParsedQuery, tab: Tab): Hit[] {
  const terms = highlightTerms(parsed);
  const hits: Hit[] = [];
  for (const doc of docs) {
    if (!passes(doc, parsed, tab)) continue;
    const score = scoreDoc(doc, parsed, terms);
    if (score <= 0) continue;
    hits.push({ doc, score, snippet: windowSnippet(doc, terms) });
  }
  hits.sort((a, b) => b.score - a.score || a.doc.hops - b.doc.hops || a.doc.lastHeardMin - b.doc.lastHeardMin || a.doc.title.localeCompare(b.doc.title));
  return hits;
}

const VOCAB = (() => {
  const words = new Set<string>(["meshtastic", "meshcore", "libp2p", "lookout", "meshworld"]);
  for (const doc of CORPUS) {
    for (const token of tokens(`${doc.title} ${doc.tags.join(" ")}`)) {
      if (token.length >= 4) words.add(token);
    }
  }
  return [...words];
})();

function editDistance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 2) return 9;
  const prev = new Array<number>(b.length + 1);
  const cur = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    cur[0] = i;
    let rowMin = cur[0];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > 2) return 9;
    for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
  }
  return prev[b.length];
}

function correctToken(token: string): string | undefined {
  if (token.length < 4 || VOCAB.includes(token)) return undefined;
  let best: string | undefined;
  let bestDist = 9;
  for (const word of VOCAB) {
    if (word[0] !== token[0]) continue;
    const dist = editDistance(token, word);
    const limit = token.length >= 7 ? 2 : 1;
    if (dist > 0 && dist <= limit && dist < bestDist) {
      best = word;
      bestDist = dist;
    }
  }
  return best;
}

function suggestionFor(raw: string, tab: Tab): string | undefined {
  const parsed = parseQuery(raw);
  const replacements = new Map<string, string>();
  for (const token of tokens(parsed.text)) {
    const fixed = correctToken(token);
    if (fixed) replacements.set(token, fixed);
  }
  if (replacements.size === 0) return undefined;
  const corrected = raw.replace(/[a-z0-9]+/gi, (word) => replacements.get(word.toLowerCase()) ?? word);
  if (corrected.toLowerCase() === raw.toLowerCase()) return undefined;
  if (rank(CORPUS, parseQuery(corrected), tab).length === 0) return undefined;
  return corrected;
}

function relatedFrom(hits: Hit[], parsed: ParsedQuery): string[] {
  const skip = new Set(tokens(`${parsed.text} ${parsed.phrases.join(" ")} ${(parsed.capability ?? "")} ${(parsed.near ?? "")}`));
  const counts = new Map<string, number>();
  for (const hit of hits.slice(0, 6)) {
    for (const tag of hit.doc.tags) {
      const key = tag.toLowerCase();
      if (skip.has(key) || key.length < 3) continue;
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 6)
    .map(([tag]) => tag);
}

export function searchDocs(raw: string, tab: Tab = "all"): SearchResult {
  const trimmed = raw.trim();
  if (trimmed === "*") {
    const parsed = parseQuery("*");
    const hits = CORPUS
      .filter((doc) => (tab === "all" || doc.kind === tab))
      .sort((a, b) => a.hops - b.hops || a.lastHeardMin - b.lastHeardMin || a.title.localeCompare(b.title))
      .map((doc) => ({ doc, score: 1, snippet: doc.snippet }));
    return { hits, parsed, related: relatedFrom(hits, parsed), terms: [] };
  }
  if (!trimmed) {
    const parsed = parseQuery("");
    return { hits: [], parsed, related: [], terms: [] };
  }
  const parsed = parseQuery(trimmed);
  const hits = rank(CORPUS, parsed, tab);
  const didYouMean = hits.length === 0 ? suggestionFor(trimmed, tab) : undefined;
  return {
    hits,
    parsed,
    didYouMean,
    related: relatedFrom(hits, parsed),
    terms: highlightTerms(parsed),
  };
}

export function suggest(raw: string): Hit[] {
  const q = raw.trim();
  if (q.length < 1) return [];
  return searchDocs(q, "all").hits.slice(0, 6);
}

export function nearestFieldNode(): Doc {
  const nodes = CORPUS.filter((doc) => doc.kind === "node" && doc.id !== "ear");
  nodes.sort((a, b) => a.hops - b.hops || b.snr - a.snr);
  return nodes[0] ?? CORPUS[0];
}

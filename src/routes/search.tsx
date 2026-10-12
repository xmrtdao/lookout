import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Highlight } from "@/components/highlight";
import { Foot, TopBar } from "@/components/shell";
import {
  heardLabel,
  hopsLabel,
  KIND_LABEL,
  PROTOCOL_LABEL,
  type Kind,
} from "@/lib/mesh/corpus";
import { searchDocs, type Tab } from "@/lib/mesh/search";

const TABS: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "node", label: "Nodes" },
  { id: "channel", label: "Channels" },
  { id: "person", label: "People" },
  { id: "place", label: "Places" },
  { id: "bulletin", label: "Bulletins" },
  { id: "page", label: "Pages" },
];

function readTab(value: unknown): Tab {
  return TABS.some((tab) => tab.id === value) ? (value as Tab) : "all";
}

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : "",
    tab: readTab(search.tab),
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q, tab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const result = searchDocs(q, tab);
  const [shown, setShown] = useState(8);
  useEffect(() => {
    setShown(8);
  }, [q, tab]);
  const visible = result.hits.slice(0, shown);
  const top = result.hits[0];
  const conflict = tab !== "all" && result.parsed.kind && result.parsed.kind !== tab;

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar query={q} />
      <div className="border-b border-line">
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {TABS.map((item) => {
            const on = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate({ search: { q, tab: item.id } })}
                className={`shrink-0 border-b-2 px-3 py-3 text-sm ${
                  on ? "border-signal text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <p className="text-sm text-muted" aria-live="polite">
          {q.trim()
            ? `${result.hits.length} signal${result.hits.length === 1 ? "" : "s"} for “${q.trim()}”`
            : "Type a name, a channel, or a place."}
        </p>
        <OperatorRow q={q} />
        {conflict && (
          <p className="mt-4 text-ink">
            That operator asks for {KIND_LABEL[result.parsed.kind as Kind].toLowerCase()}s, and this tab is
            something else. Switch to All.
          </p>
        )}
        {!conflict && result.didYouMean && (
          <p className="mt-4 text-ink">
            Nothing under that spelling. Did you mean{" "}
            <button
              type="button"
              className="text-signal underline underline-offset-4"
              onClick={() => navigate({ search: { q: result.didYouMean ?? q, tab } })}
            >
              {result.didYouMean}
            </button>
            ?
          </p>
        )}
        {!conflict && q.trim() && result.hits.length === 0 && !result.didYouMean && (
          <p className="mt-6 max-w-xl text-lg text-ink">
            The mesh has not said anything that matches. Try a repeater, a channel, or{" "}
            <button
              type="button"
              className="underline decoration-signal underline-offset-4"
              onClick={() => navigate({ search: { q: "proto:meshcore", tab: "all" } })}
            >
              proto:meshcore
            </button>
            .
          </p>
        )}
        <div className="mt-6 flex flex-col items-start gap-10 lg:flex-row">
          <section className="w-full min-w-0 lg:max-w-xl">
            <ol className="space-y-7">
              {visible.map((hit) => (
                <li key={hit.doc.id}>
                  <p className="truncate text-sm text-muted">{hit.doc.path}</p>
                  <Link
                    to="/mesh/$id"
                    params={{ id: hit.doc.id }}
                    className="text-xl font-medium text-ink hover:underline hover:decoration-signal hover:underline-offset-4"
                  >
                    <Highlight text={hit.doc.title} terms={result.terms} />
                  </Link>
                  <p className="mt-1 text-sm text-muted">
                    <span className="text-signal">{PROTOCOL_LABEL[hit.doc.protocol]}</span>
                    {" · "}
                    {KIND_LABEL[hit.doc.kind]}
                    {" · "}
                    {hopsLabel(hit.doc.hops)}
                    {" · "}
                    heard {heardLabel(hit.doc.lastHeardMin)}
                    {hit.doc.kind === "bulletin" && hit.doc.lastHeardMin < 45 ? " · fresh" : ""}
                  </p>
                  <p className="mt-1 max-w-xl text-base leading-relaxed text-ink">
                    <Highlight text={hit.snippet} terms={result.terms} />
                  </p>
                </li>
              ))}
            </ol>
            {shown < result.hits.length && (
              <button
                type="button"
                className="mt-8 h-11 rounded-full border border-line bg-card px-5 text-ink"
                onClick={() => setShown((n) => n + 8)}
              >
                More signals
              </button>
            )}
            {result.related.length > 0 && (
              <div className="mt-10">
                <p className="text-sm text-muted">Related on the mesh</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {result.related.map((tag) => (
                    <li key={tag}>
                      <button
                        type="button"
                        className="rounded-full border border-line bg-card px-3 py-2 text-sm text-ink hover:border-signal"
                        onClick={() => navigate({ search: { q: tag, tab: "all" } })}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
          {top && (
            <aside className="w-full rounded-2xl border border-line bg-card p-5 lg:sticky lg:top-24 lg:w-72">
              <p className="text-sm text-signal">{KIND_LABEL[top.doc.kind]}</p>
              <h2 className="mt-1 font-display text-2xl tracking-tight text-ink">{top.doc.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{top.doc.snippet}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Protocol</dt>
                  <dd className="text-right text-ink">{PROTOCOL_LABEL[top.doc.protocol]}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Distance</dt>
                  <dd className="text-right text-ink">{hopsLabel(top.doc.hops)}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted">Heard</dt>
                  <dd className="text-right text-ink">{heardLabel(top.doc.lastHeardMin)}</dd>
                </div>
                {top.doc.facts.slice(0, 3).map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4">
                    <dt className="text-muted">{fact.label}</dt>
                    <dd className="text-right text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                to="/mesh/$id"
                params={{ id: top.doc.id }}
                className="mt-5 inline-flex h-11 items-center rounded-full bg-signal px-4 text-on-signal"
              >
                Open on the mesh
              </Link>
            </aside>
          )}
        </div>
      </main>
      <Foot />
    </div>
  );
}

function OperatorRow({ q }: { q: string }) {
  const navigate = Route.useNavigate();
  const ops = [
    { label: "proto:meshcore", q: "proto:meshcore" },
    { label: "hops:2", q: "hops:2" },
    { label: "near:gulf", q: "near:gulf" },
    { label: "cap:python", q: "cap:python" },
    { label: "channel:sar", q: "channel:sar" },
  ];
  if (q.trim() === "*" || !q.trim()) return null;
  return (
    <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
      <span>Narrow it</span>
      {ops.map((op) => (
        <button
          key={op.label}
          type="button"
          className="underline decoration-line underline-offset-4 hover:text-ink"
          onClick={() => navigate({ search: { q: op.q, tab: "all" } })}
        >
          {op.label}
        </button>
      ))}
    </p>
  );
}

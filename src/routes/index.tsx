import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CORPUS } from "@/lib/mesh/corpus";
import { nearestFieldNode } from "@/lib/mesh/search";
import { readRecent, remember } from "@/lib/mesh/recent";
import { SearchBox } from "@/components/search-box";
import { Wordmark } from "@/components/wordmark";
import { Foot } from "@/components/shell";

export const Route = createFileRoute("/")({ component: Home });

const EXAMPLES = ["storm watch", "eliza", "channel:sar", "proto:meshcore", "proof of participation"];

function Home() {
  const navigate = useNavigate();
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    setRecent(readRecent());
  }, []);

  function go(query: string) {
    remember(query);
    navigate({ to: "/search", search: { q: query, tab: "all" } });
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex items-center justify-between px-4 py-4 text-sm sm:px-6">
        <a href="https://meshworld.org" className="text-muted hover:text-ink">
          MeshWorld
        </a>
        <Link to="/about" className="text-muted hover:text-ink">
          About the index
        </Link>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-4 pb-16">
        <Wordmark />
        <p className="mt-3 text-center text-lg text-muted">What the mesh has already said.</p>
        <div className="mt-8 w-full max-w-xl">
          <SearchBox
            size="hero"
            autoFocus
            onSubmit={go}
            onNearest={() =>
              navigate({ to: "/mesh/$id", params: { id: nearestFieldNode().id } })
            }
          />
        </div>
        <ul className="mt-8 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {EXAMPLES.map((example) => (
            <li key={example}>
              <button
                type="button"
                className="inline-flex min-h-11 items-center text-muted underline decoration-line underline-offset-4 hover:text-ink"
                onClick={() => go(example)}
              >
                {example}
              </button>
            </li>
          ))}
        </ul>
        {recent.length > 0 && (
          <div className="mt-8 w-full max-w-xl text-center text-sm">
            <p className="text-muted">Recent on this radio</p>
            <ul className="mt-2 flex flex-wrap justify-center gap-2">
              {recent.map((query) => (
                <li key={query}>
                  <button
                    type="button"
                    className="rounded-full border border-line bg-card px-3 py-2 text-ink hover:border-signal"
                    onClick={() => go(query)}
                  >
                    {query}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <p className="mt-10 text-center text-sm text-muted">
          {CORPUS.length} signals in the field snapshot · Meshtastic, MeshCore, and libp2p
        </p>
      </main>
      <Foot />
    </div>
  );
}

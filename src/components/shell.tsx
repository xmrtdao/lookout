import { Link, useNavigate } from "@tanstack/react-router";
import { remember } from "@/lib/mesh/recent";
import { SearchBox } from "@/components/search-box";
import { Wordmark } from "@/components/wordmark";

export function TopBar({ query = "" }: { query?: string }) {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4">
        <Wordmark size="sm" />
        <div className="min-w-0 flex-1">
          <SearchBox
            size="bar"
            initial={query}
            onSubmit={(q) => {
              remember(q);
              navigate({ to: "/search", search: { q, tab: "all" } });
            }}
          />
        </div>
      </div>
    </header>
  );
}

export function Foot() {
  return (
    <footer className="mt-auto border-t border-line px-4 py-4 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <p>Field index for MeshWorld. Queries stay on this radio.</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-2">
          <Link to="/about" className="hover:text-ink">
            About the index
          </Link>
          <Link to="/search" search={{ q: "*", tab: "all" }} className="hover:text-ink">
            Browse signals
          </Link>
          <a href="https://meshworld.org" className="hover:text-ink">
            MeshWorld
          </a>
        </nav>
      </div>
    </footer>
  );
}

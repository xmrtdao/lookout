import { useEffect, useId, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { KIND_LABEL } from "@/lib/mesh/corpus";
import { suggest, type Hit } from "@/lib/mesh/search";

export function SearchBox({
  initial = "",
  size = "bar",
  autoFocus = false,
  onSubmit,
  onNearest,
}: {
  initial?: string;
  size?: "hero" | "bar";
  autoFocus?: boolean;
  onSubmit: (query: string) => void;
  onNearest?: () => void;
}) {
  const formId = `lookout-${useId().replace(/:/g, "")}`;
  const boxId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initial);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [hits, setHits] = useState<Hit[]>([]);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  useEffect(() => {
    if (!autoFocus) return;
    if (window.matchMedia("(min-width: 768px)").matches) inputRef.current?.focus();
  }, [autoFocus]);

  useEffect(() => {
    setHits(suggest(value));
    setActive(-1);
  }, [value]);

  function commit(next: string) {
    const query = next.trim();
    if (!query) return;
    setOpen(false);
    onSubmit(query);
  }

  const hero = size === "hero";
  const listId = `${boxId}-list`;

  return (
    <div className={hero ? "w-full max-w-xl" : "w-full"}>
      <form
        id={formId}
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          if (active >= 0 && hits[active]) commit(hits[active].doc.title);
          else commit(value);
        }}
      >
        <div className="relative">
          <div
            className={`flex items-center gap-2 border border-line bg-card shadow-sm transition-colors focus-within:border-signal ${
              hero ? "h-14 rounded-full px-5" : "h-11 rounded-full px-4"
            }`}
          >
            <Search className="size-5 shrink-0 text-muted" aria-hidden="true" />
            <input
              ref={inputRef}
              value={value}
              aria-label="Search the mesh"
              aria-autocomplete="list"
              aria-controls={listId}
              aria-expanded={open && hits.length > 0}
              placeholder={hero ? "Search nodes, channels, places, agents" : "Search the mesh"}
              className={`min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted ${
                hero ? "text-lg" : "text-base"
              }`}
              onChange={(event) => {
                setValue(event.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setOpen(true);
                  setActive((n) => Math.min(n + 1, hits.length - 1));
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  setActive((n) => Math.max(n - 1, -1));
                } else if (event.key === "Escape") {
                  setOpen(false);
                  setActive(-1);
                }
              }}
            />
            {value && (
              <button
                type="button"
                aria-label="Clear search"
                className="grid size-11 shrink-0 place-items-center rounded-full text-muted hover:bg-paper hover:text-ink"
                onClick={() => {
                  setValue("");
                  setOpen(false);
                  inputRef.current?.focus();
                }}
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          {open && hits.length > 0 && (
            <ul
              id={listId}
              role="listbox"
              className="absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-line bg-card py-1 text-left shadow-md"
            >
              {hits.map((hit, index) => (
                <li key={hit.doc.id} role="option" aria-selected={index === active}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left ${
                      index === active ? "bg-paper" : "hover:bg-paper"
                    }`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => commit(hit.doc.title)}
                  >
                    <span className="truncate text-ink">{hit.doc.title}</span>
                    <span className="shrink-0 text-sm text-muted">{KIND_LABEL[hit.doc.kind]}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>
      {hero && (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="submit"
            form={formId}
            className="h-11 min-w-40 rounded-full bg-signal px-5 text-on-signal"
          >
            Search the mesh
          </button>
          {onNearest && (
            <button
              type="button"
              onClick={onNearest}
              className="h-11 min-w-40 rounded-full border border-line bg-card px-5 text-ink"
            >
              Nearest signal
            </button>
          )}
        </div>
      )}
    </div>
  );
}

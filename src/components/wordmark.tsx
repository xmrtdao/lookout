import { Link } from "@tanstack/react-router";

export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M6.5 22.5a9.5 9.5 0 0 1 19 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M10.5 22.5a5.5 5.5 0 0 1 11 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.5" r="2" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ size = "lg" }: { size?: "lg" | "sm" }) {
  const text = size === "lg" ? "text-5xl sm:text-7xl" : "text-xl sm:text-2xl";
  const mark = size === "lg" ? "size-9 sm:size-12" : "size-6";
  return (
    <Link
      to="/"
      aria-label="Lookout home"
      className={`inline-flex items-center gap-2 font-display tracking-tight text-ink ${text}`}
    >
      <Mark className={`shrink-0 text-signal ${mark}`} />
      <span>Lookout</span>
    </Link>
  );
}

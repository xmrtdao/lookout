function escapeReg(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function Highlight({ text, terms }: { text: string; terms: string[] }) {
  const cleaned = [...new Set(terms.map((term) => term.trim()).filter((term) => term.length > 1))];
  if (cleaned.length === 0) return <>{text}</>;
  const set = new Set(cleaned.map((term) => term.toLowerCase()));
  const re = new RegExp(`(${cleaned.map(escapeReg).join("|")})`, "ig");
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, index) =>
        set.has(part.toLowerCase()) ? <mark key={index}>{part}</mark> : <span key={index}>{part}</span>,
      )}
    </>
  );
}

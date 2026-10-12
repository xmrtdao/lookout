import { createFileRoute, Link } from "@tanstack/react-router";
import { Foot, TopBar } from "@/components/shell";
import {
  getDoc,
  heardLabel,
  hopsLabel,
  KIND_LABEL,
  PROTOCOL_LABEL,
} from "@/lib/mesh/corpus";

export const Route = createFileRoute("/mesh/$id")({
  component: MeshPage,
});

function MeshPage() {
  const { id } = Route.useParams();
  const doc = getDoc(id);

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        {!doc ? (
          <div className="max-w-xl">
            <h1 className="font-display text-4xl tracking-tight text-ink">Not on this mesh</h1>
            <p className="mt-3 text-lg text-muted">
              Nothing in the field index uses that name. It may be out of range, or it may never have announced.
            </p>
            <Link to="/" className="mt-6 inline-flex h-11 items-center text-signal underline underline-offset-4">
              Back to search
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-10 lg:flex-row">
            <article className="w-full min-w-0 lg:max-w-xl">
              <p className="text-sm text-muted">{doc.path}</p>
              <p className="mt-3 text-sm text-signal">
                {KIND_LABEL[doc.kind]} · {PROTOCOL_LABEL[doc.protocol]}
              </p>
              <h1 className="mt-1 font-display text-4xl tracking-tight text-ink sm:text-5xl">{doc.title}</h1>
              <p className="mt-4 text-sm text-muted">
                Heard {heardLabel(doc.lastHeardMin)} · {hopsLabel(doc.hops)} · {doc.region}
              </p>
              <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink">
                {doc.body.split(/\n\n+/).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {doc.related.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-sm text-muted">Also heard nearby</h2>
                  <ul className="mt-3 space-y-2">
                    {doc.related.map((rel) => {
                      const other = getDoc(rel);
                      if (!other) return null;
                      return (
                        <li key={rel}>
                          <Link
                            to="/mesh/$id"
                            params={{ id: rel }}
                            className="text-ink underline decoration-line underline-offset-4 hover:decoration-signal"
                          >
                            {other.title}
                          </Link>
                          <span className="text-muted"> · {KIND_LABEL[other.kind]}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </article>
            <aside className="w-full rounded-2xl border border-line bg-card p-5 lg:sticky lg:top-24 lg:w-72">
              <h2 className="font-display text-xl text-ink">Heard as</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <Row label="Via" value={doc.heardVia} />
                <Row label="Protocol" value={PROTOCOL_LABEL[doc.protocol]} />
                <Row label="Distance" value={hopsLabel(doc.hops)} />
                <Row label="SNR" value={`${doc.snr} dB`} />
                <Row label="Region" value={doc.region} />
                {doc.facts.map((fact) => (
                  <Row key={fact.label} label={fact.label} value={fact.value} />
                ))}
              </dl>
            </aside>
          </div>
        )}
      </main>
      <Foot />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-line pb-2">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  );
}

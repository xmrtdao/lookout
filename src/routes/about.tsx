import { createFileRoute, Link } from "@tanstack/react-router";
import { Foot, TopBar } from "@/components/shell";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-10">
        <p className="text-sm text-signal">MeshWorld field index</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Search the mesh, not the cloud.
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink">
          <p>
            Lookout is a search engine for what radios and agents have already said. Nodes, channels,
            waypoints, bulletins, and peers — ranked the way a mesh actually hears them.
          </p>
          <p>
            The clearnet answers by asking a few buildings. A mesh answers by whoever still has battery.
            Once that network can talk, someone in the rain still needs to find the repeater, the channel,
            and the rally point. That is this box.
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl text-ink">Where the idea comes from</h2>
        <div className="mt-3 space-y-4 text-lg leading-relaxed text-ink">
          <p>
            Joseph Andrew Lee has been writing that the internet is already turning into a mesh: permissionless,
            offline-capable, built for the edge rather than the center. In his XMRT essays the MESHNET is the
            sync layer that keeps mining and coordinating when the uplink does not. A ping is proof of
            participation. His line: the internet may go down, but XMRT will keep mining. And the sharper one:
            we do not rely on the cloud — we are the cloud.
          </p>
          <p>
            The node you can build today is{" "}
            <span className="whitespace-nowrap">xmrtdao/xmrt-mesh</span>, a Rust libp2p process. mDNS on the
            local link, Gossipsub for capability announcements, Noise on the transport, tasks by
            request-response. The path written as xmrtdao/MESHNET is not published. The essay’s MESHNET is the
            idea. The Rust node is the implementation. There is no DHT in that design, so somebody has to
            listen and remember. That somebody is a search index.
          </p>
          <p>
            Cory Gray’s MeshWorld is the radio in the other hand. One client for Meshtastic and MeshCore —
            they do not interoperate, so the client speaks both — plus maps, encrypted channels, waypoints,
            and an operations console that runs on your machine. Lookout is the search that console does not
            have yet.
          </p>
        </div>

        <h2 className="mt-10 font-display text-2xl text-ink">What it refuses</h2>
        <p className="mt-3 text-lg leading-relaxed text-ink">
          Private channel payloads, task bodies, and keys are not in the index. You can learn that a homestead
          channel exists. You cannot read it here. Queries are not uploaded. This preview is a field snapshot
          so the ranking can be tried before a thousand live radios are connected. Point the ear at a real
          mesh and the pages change. The rules do not.
        </p>

        <h2 className="mt-10 font-display text-2xl text-ink">How a result ranks</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-lg text-ink">
          <li>Words in the name beat words in the body. A quoted phrase has to appear.</li>
          <li>Fewer hops beat more hops. A neighbor outranks a sixth-hand relay.</li>
          <li>Fresh bulletins outrank stale ones. A storm watch decays in hours, not weeks.</li>
          <li>Operators narrow the ear instead of hoping the rank guesses.</li>
        </ul>
        <ul className="mt-4 space-y-2 text-base text-ink">
          <li>
            <code className="text-signal">proto:meshcore</code> or <code className="text-signal">proto:meshtastic</code> or{" "}
            <code className="text-signal">proto:libp2p</code>
          </li>
          <li>
            <code className="text-signal">hops:2</code> keeps only what arrived within two hops
          </li>
          <li>
            <code className="text-signal">near:gulf</code> · <code className="text-signal">near:harbor</code> ·{" "}
            <code className="text-signal">channel:sar</code>
          </li>
          <li>
            <code className="text-signal">cap:python</code> finds agents that announced the capability
          </li>
          <li>
            <code className="text-signal">"proof of participation"</code> requires the phrase
          </li>
        </ul>
        <p className="mt-8">
          <Link to="/search" search={{ q: "storm watch", tab: "all" }} className="text-signal underline underline-offset-4">
            Try the storm watch
          </Link>
        </p>
      </main>
      <Foot />
    </div>
  );
}

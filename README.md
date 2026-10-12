# Lookout

[![CI](https://img.shields.io/github/actions/workflow/status/YOUR_USERNAME/lookout/ci.yml?branch=main&style=flat-square&label=CI)](https://github.com/YOUR_USERNAME/lookout/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7%2B-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/license-not%20specified-lightgrey?style=flat-square)](#license)

**Search the mesh, not the cloud.** Lookout is MeshWorld's field-oriented search engine for nodes, channels, waypoints, bulletins, places, and libp2p agents. It turns what a connected radio or edge agent has already announced into a fast, readable index—without uploading the user's query to a cloud search service.

> This repository is a faithful, cleaned public release of the MeshWorld “Lookout” workspace archive. The included snapshot uses a deterministic in-browser corpus so the product can be explored without hardware or external services.

## Why Lookout

Traditional search assumes a reliable uplink and a centralized index. A mesh has different truths:

- **Proximity matters:** a one-hop neighbor is usually more useful than a six-hop rumor.
- **Freshness matters:** a storm bulletin decays faster than a node identity.
- **Protocols differ:** Meshtastic, MeshCore, and libp2p expose different kinds of signals.
- **Discovery is not conversation:** public node metadata can be indexed without exposing private channel payloads.
- **The edge should keep working:** the demo has no required backend, database, or AI provider.

Lookout is designed as the memory layer for a MeshWorld-style operations console: find the repeater, channel, agent, or rally point before you need to scroll through a map in the rain.

## Features

- **Field-aware ranking** that favors title matches, tags, exact phrases, freshness, signal quality, and fewer hops.
- **Typed operators** for protocol, kind, hop distance, region, channel, and announced capability.
- **Search suggestions** with keyboard navigation and typo correction.
- **Signal detail pages** with protocol, SNR, region, path, freshness, and related results.
- **Nearest signal** shortcut for the closest indexed node.
- **Local recent-search history** stored in browser `localStorage` only.
- **Responsive, accessible UI** for desktop and mobile field use.
- **PWA support** and install guidance through the included deployment scaffolding.
- **Deterministic tests** for the search engine and the surrounding workspace helpers.
- **Optional PGLite/Neon and auth scaffolding** retained from the source workspace for future expansion; the current Lookout UI does not require them.

## Search language

Try these examples from the home page:

| Query | What it does |
| --- | --- |
| `storm watch` | Finds relevant signals using field-aware ranking and synonyms. |
| `eliza` | Finds the libp2p agent and related announcements. |
| `proto:meshcore` | Limits results to MeshCore signals. |
| `proto:meshtastic` | Limits results to Meshtastic signals. |
| `proto:libp2p` | Limits results to libp2p signals. |
| `hops:2` | Keeps signals heard within two hops. |
| `near:gulf` | Searches the Gulf region and related metadata. |
| `near:harbor` | Searches harbor-related signals. |
| `channel:sar` | Finds search-and-rescue channel signals. |
| `cap:python` | Finds agents that announced Python capability. |
| `"proof of participation"` | Requires an exact phrase. |

The `All`, `Nodes`, `Channels`, `People`, `Places`, `Bulletins`, and `Pages` tabs can be combined with operators.

## Architecture

```text
┌──────────────────────────────────────────────────────────┐
│ React 19 + TanStack Start UI                             │
│ Home · Search · Signal detail · About                    │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│ Deterministic client-side search                         │
│ Query parser · operators · synonyms · scoring · snippets │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│ Mesh corpus snapshot                                     │
│ Meshtastic · MeshCore · libp2p · mixed signals           │
└──────────────────────────────────────────────────────────┘

Optional workspace infrastructure: Vercel/Nitro, PGLite or Neon,
Better Auth, PWA middleware, and the retained preview bridge.
```

### Repository map

- `src/routes/` — TanStack Router pages for home, search, details, and about.
- `src/lib/mesh/corpus.ts` — typed field-index snapshot.
- `src/lib/mesh/search.ts` — parser, filters, scoring, suggestions, and typo correction.
- `src/components/` — search box, shell, wordmark, and highlighting components.
- `src/lib/auth/`, `src/lib/app-data/`, `src/lib/db.ts` — optional platform scaffolding retained from the source archive.
- `migrations/` — database migration sources used by the optional database path.
- `scripts/` — build, preview, PWA, migration, and invariant helpers.
- `public/` — favicon, share-card, and PWA assets.
- `.grok/` — original workspace references and platform integration metadata included in the archive.

## Getting started

### Requirements

- Node.js 22+
- npm 10+

### Install and run

```bash
git clone https://github.com/YOUR_USERNAME/lookout.git
cd lookout
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

The included `startup.sh` is an idempotent restart helper for the original workspace contract. The normal local development command is `npm run dev`.

### Environment variables

Copy the template when you need environment configuration:

```bash
cp .env.example .env
```

`DEEPSEEK_API_KEY` is reserved for a future server-side DeepSeek integration. **The current application does not call DeepSeek, Grok, xAI, OpenAI, or any other LLM**, so no key is needed to run or search the demo. Never put provider keys in client-exposed `VITE_` variables or commit real values.

The retained optional auth preview scaffolding uses `GROK_AUTH_PREVIEW_CLIENT_SECRET` only when that platform flow is deliberately enabled; it is not part of the Lookout search path.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite/TanStack development server on port 8080. |
| `npm run build` | Build the Vercel/Nitro production output and run migrations when configured. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm test` | Run the JavaScript and TypeScript test suites. |
| `npm run lint` | Run ESLint. |
| `npm run check:auth` | Validate auth invariants in the retained workspace scaffolding. |
| `npm run preview` | Serve a production build locally. |

## Security and privacy

Lookout's product rule is simple: **discovery can be public; conversation can remain private.** The field snapshot contains node and announcement metadata, not private channel payloads, task bodies, or encryption keys. Recent queries are kept locally in the browser. The deterministic demo makes no network request for search.

The public repository intentionally contains no live API credentials. Server-side secrets must be supplied through the runtime environment.

## Roadmap

- Replace the static corpus with a pluggable Meshtastic adapter.
- Add a MeshCore route/advert listener.
- Ingest libp2p capability announcements and peer metadata.
- Persist a local append-only signal log with retention controls.
- Add signed provenance and freshness windows to indexed signals.
- Provide an optional, explicitly user-triggered DeepSeek enrichment layer for summarization—not for private payload access or ranking by default.

## Contributing

Issues and pull requests are welcome. Keep changes focused, preserve the privacy boundary, and add tests for parser or ranking behavior changes. Do not commit `.env` files, provider credentials, private channel content, or user-identifying field data.

## License

No license was specified in the source archive. Until a license is added by the copyright holder, the repository should be treated as **all rights reserved**; review and local use are welcome, but redistribution and commercial use are not automatically granted.

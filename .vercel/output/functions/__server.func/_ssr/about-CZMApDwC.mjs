import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Foot, o as TopBar } from "./shell-Cze8ADDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CZMApDwC.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-2xl flex-1 px-4 py-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-signal",
						children: "MeshWorld field index"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl",
						children: "Search the mesh, not the cloud."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4 text-lg leading-relaxed text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lookout is a search engine for what radios and agents have already said. Nodes, channels, waypoints, bulletins, and peers — ranked the way a mesh actually hears them." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The clearnet answers by asking a few buildings. A mesh answers by whoever still has battery. Once that network can talk, someone in the rain still needs to find the repeater, the channel, and the rally point. That is this box." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl text-ink",
						children: "Where the idea comes from"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-4 text-lg leading-relaxed text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Joseph Andrew Lee has been writing that the internet is already turning into a mesh: permissionless, offline-capable, built for the edge rather than the center. In his XMRT essays the MESHNET is the sync layer that keeps mining and coordinating when the uplink does not. A ping is proof of participation. His line: the internet may go down, but XMRT will keep mining. And the sharper one: we do not rely on the cloud — we are the cloud." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"The node you can build today is",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "whitespace-nowrap",
									children: "xmrtdao/xmrt-mesh"
								}),
								", a Rust libp2p process. mDNS on the local link, Gossipsub for capability announcements, Noise on the transport, tasks by request-response. The path written as xmrtdao/MESHNET is not published. The essay’s MESHNET is the idea. The Rust node is the implementation. There is no DHT in that design, so somebody has to listen and remember. That somebody is a search index."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cory Gray’s MeshWorld is the radio in the other hand. One client for Meshtastic and MeshCore — they do not interoperate, so the client speaks both — plus maps, encrypted channels, waypoints, and an operations console that runs on your machine. Lookout is the search that console does not have yet." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl text-ink",
						children: "What it refuses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg leading-relaxed text-ink",
						children: "Private channel payloads, task bodies, and keys are not in the index. You can learn that a homestead channel exists. You cannot read it here. Queries are not uploaded. This preview is a field snapshot so the ranking can be tried before a thousand live radios are connected. Point the ear at a real mesh and the pages change. The rules do not."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-10 font-display text-2xl text-ink",
						children: "How a result ranks"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 list-disc space-y-2 pl-5 text-lg text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Words in the name beat words in the body. A quoted phrase has to appear." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fewer hops beat more hops. A neighbor outranks a sixth-hand relay." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fresh bulletins outrank stale ones. A storm watch decays in hours, not weeks." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Operators narrow the ear instead of hoping the rank guesses." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-2 text-base text-ink",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "proto:meshcore"
								}),
								" or ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "proto:meshtastic"
								}),
								" or",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "proto:libp2p"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-signal",
								children: "hops:2"
							}), " keeps only what arrived within two hops"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "near:gulf"
								}),
								" · ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "near:harbor"
								}),
								" ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "text-signal",
									children: "channel:sar"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-signal",
								children: "cap:python"
							}), " finds agents that announced the capability"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "text-signal",
								children: "\"proof of participation\""
							}), " requires the phrase"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/search",
							search: {
								q: "storm watch",
								tab: "all"
							},
							className: "text-signal underline underline-offset-4",
							children: "Try the storm watch"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {})
		]
	});
}
//#endregion
export { About as component };

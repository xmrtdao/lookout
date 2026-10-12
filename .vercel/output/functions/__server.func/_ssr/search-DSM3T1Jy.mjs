import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PROTOCOL_LABEL, l as heardLabel, m as searchDocs, n as Foot, o as TopBar, r as KIND_LABEL, u as hopsLabel } from "./shell-Cze8ADDJ.mjs";
import { i as TABS, r as Route$1 } from "./router-C-WnnREs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-DSM3T1Jy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function escapeReg(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Highlight({ text, terms }) {
	const cleaned = [...new Set(terms.map((term) => term.trim()).filter((term) => term.length > 1))];
	if (cleaned.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
	const set = new Set(cleaned.map((term) => term.toLowerCase()));
	const re = new RegExp(`(${cleaned.map(escapeReg).join("|")})`, "ig");
	const parts = text.split(re);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: parts.map((part, index) => set.has(part.toLowerCase()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: part }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: part }, index)) });
}
function SearchPage() {
	const { q, tab } = Route$1.useSearch();
	const navigate = Route$1.useNavigate();
	const result = searchDocs(q, tab);
	const [shown, setShown] = (0, import_react.useState)(8);
	(0, import_react.useEffect)(() => {
		setShown(8);
	}, [q, tab]);
	const visible = result.hits.slice(0, shown);
	const top = result.hits[0];
	const conflict = tab !== "all" && result.parsed.kind && result.parsed.kind !== tab;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, { query: q }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4",
					children: TABS.map((item) => {
						const on = item.id === tab;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ search: {
								q,
								tab: item.id
							} }),
							className: `shrink-0 border-b-2 px-3 py-3 text-sm ${on ? "border-signal text-ink" : "border-transparent text-muted hover:text-ink"}`,
							children: item.label
						}, item.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						"aria-live": "polite",
						children: q.trim() ? `${result.hits.length} signal${result.hits.length === 1 ? "" : "s"} for “${q.trim()}”` : "Type a name, a channel, or a place."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OperatorRow, { q }),
					conflict && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-ink",
						children: [
							"That operator asks for ",
							KIND_LABEL[result.parsed.kind].toLowerCase(),
							"s, and this tab is something else. Switch to All."
						]
					}),
					!conflict && result.didYouMean && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-ink",
						children: [
							"Nothing under that spelling. Did you mean",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "text-signal underline underline-offset-4",
								onClick: () => navigate({ search: {
									q: result.didYouMean ?? q,
									tab
								} }),
								children: result.didYouMean
							}),
							"?"
						]
					}),
					!conflict && q.trim() && result.hits.length === 0 && !result.didYouMean && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 max-w-xl text-lg text-ink",
						children: [
							"The mesh has not said anything that matches. Try a repeater, a channel, or",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "underline decoration-signal underline-offset-4",
								onClick: () => navigate({ search: {
									q: "proto:meshcore",
									tab: "all"
								} }),
								children: "proto:meshcore"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col items-start gap-10 lg:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "w-full min-w-0 lg:max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "space-y-7",
									children: visible.map((hit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm text-muted",
											children: hit.doc.path
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/mesh/$id",
											params: { id: hit.doc.id },
											className: "text-xl font-medium text-ink hover:underline hover:decoration-signal hover:underline-offset-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
												text: hit.doc.title,
												terms: result.terms
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-muted",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-signal",
													children: PROTOCOL_LABEL[hit.doc.protocol]
												}),
												" · ",
												KIND_LABEL[hit.doc.kind],
												" · ",
												hopsLabel(hit.doc.hops),
												" · ",
												"heard ",
												heardLabel(hit.doc.lastHeardMin),
												hit.doc.kind === "bulletin" && hit.doc.lastHeardMin < 45 ? " · fresh" : ""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 max-w-xl text-base leading-relaxed text-ink",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Highlight, {
												text: hit.snippet,
												terms: result.terms
											})
										})
									] }, hit.doc.id))
								}),
								shown < result.hits.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-8 h-11 rounded-full border border-line bg-card px-5 text-ink",
									onClick: () => setShown((n) => n + 8),
									children: "More signals"
								}),
								result.related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "Related on the mesh"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-2 flex flex-wrap gap-2",
										children: result.related.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "rounded-full border border-line bg-card px-3 py-2 text-sm text-ink hover:border-signal",
											onClick: () => navigate({ search: {
												q: tag,
												tab: "all"
											} }),
											children: tag
										}) }, tag))
									})]
								})
							]
						}), top && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "w-full rounded-2xl border border-line bg-card p-5 lg:sticky lg:top-24 lg:w-72",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-signal",
									children: KIND_LABEL[top.doc.kind]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-1 font-display text-2xl tracking-tight text-ink",
									children: top.doc.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted",
									children: top.doc.snippet
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-4 space-y-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Protocol"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right text-ink",
												children: PROTOCOL_LABEL[top.doc.protocol]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Distance"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right text-ink",
												children: hopsLabel(top.doc.hops)
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: "Heard"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right text-ink",
												children: heardLabel(top.doc.lastHeardMin)
											})]
										}),
										top.doc.facts.slice(0, 3).map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: fact.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "text-right text-ink",
												children: fact.value
											})]
										}, fact.label))
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/mesh/$id",
									params: { id: top.doc.id },
									className: "mt-5 inline-flex h-11 items-center rounded-full bg-signal px-4 text-on-signal",
									children: "Open on the mesh"
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {})
		]
	});
}
function OperatorRow({ q }) {
	const navigate = Route$1.useNavigate();
	const ops = [
		{
			label: "proto:meshcore",
			q: "proto:meshcore"
		},
		{
			label: "hops:2",
			q: "hops:2"
		},
		{
			label: "near:gulf",
			q: "near:gulf"
		},
		{
			label: "cap:python",
			q: "cap:python"
		},
		{
			label: "channel:sar",
			q: "channel:sar"
		}
	];
	if (q.trim() === "*" || !q.trim()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Narrow it" }), ops.map((op) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "underline decoration-line underline-offset-4 hover:text-ink",
			onClick: () => navigate({ search: {
				q: op.q,
				tab: "all"
			} }),
			children: op.label
		}, op.label))]
	});
}
//#endregion
export { SearchPage as component };

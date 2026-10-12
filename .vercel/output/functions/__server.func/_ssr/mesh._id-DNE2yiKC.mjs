import { S as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as getDoc, i as PROTOCOL_LABEL, l as heardLabel, n as Foot, o as TopBar, r as KIND_LABEL, u as hopsLabel } from "./shell-Cze8ADDJ.mjs";
import { n as Route } from "./router-C-WnnREs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mesh._id-DNE2yiKC.js
var import_jsx_runtime = require_jsx_runtime();
function MeshPage() {
	const { id } = Route.useParams();
	const doc = getDoc(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto w-full max-w-6xl flex-1 px-4 py-8",
				children: !doc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-4xl tracking-tight text-ink",
							children: "Not on this mesh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-lg text-muted",
							children: "Nothing in the field index uses that name. It may be out of range, or it may never have announced."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "mt-6 inline-flex h-11 items-center text-signal underline underline-offset-4",
							children: "Back to search"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-10 lg:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "w-full min-w-0 lg:max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: doc.path
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-signal",
								children: [
									KIND_LABEL[doc.kind],
									" · ",
									PROTOCOL_LABEL[doc.protocol]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-4xl tracking-tight text-ink sm:text-5xl",
								children: doc.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-sm text-muted",
								children: [
									"Heard ",
									heardLabel(doc.lastHeardMin),
									" · ",
									hopsLabel(doc.hops),
									" · ",
									doc.region
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink",
								children: doc.body.split(/\n\n+/).map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, index))
							}),
							doc.related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-sm text-muted",
									children: "Also heard nearby"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 space-y-2",
									children: doc.related.map((rel) => {
										const other = getDoc(rel);
										if (!other) return null;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/mesh/$id",
											params: { id: rel },
											className: "text-ink underline decoration-line underline-offset-4 hover:decoration-signal",
											children: other.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted",
											children: [" · ", KIND_LABEL[other.kind]]
										})] }, rel);
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "w-full rounded-2xl border border-line bg-card p-5 lg:sticky lg:top-24 lg:w-72",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-xl text-ink",
							children: "Heard as"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-4 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Via",
									value: doc.heardVia
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Protocol",
									value: PROTOCOL_LABEL[doc.protocol]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Distance",
									value: hopsLabel(doc.hops)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "SNR",
									value: `${doc.snr} dB`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Region",
									value: doc.region
								}),
								doc.facts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: fact.label,
									value: fact.value
								}, fact.label))
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-4 border-b border-line pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-ink",
			children: value
		})]
	});
}
//#endregion
export { MeshPage as component };

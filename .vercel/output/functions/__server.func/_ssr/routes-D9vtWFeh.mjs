import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SearchBox, d as nearestFieldNode, f as readRecent, n as Foot, p as remember, s as Wordmark, t as CORPUS } from "./shell-Cze8ADDJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9vtWFeh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EXAMPLES = [
	"storm watch",
	"eliza",
	"channel:sar",
	"proto:meshcore",
	"proof of participation"
];
function Home() {
	const navigate = useNavigate();
	const [recent, setRecent] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setRecent(readRecent());
	}, []);
	function go(query) {
		remember(query);
		navigate({
			to: "/search",
			search: {
				q: query,
				tab: "all"
			}
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between px-4 py-4 text-sm sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://meshworld.org",
					className: "text-muted hover:text-ink",
					children: "MeshWorld"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "text-muted hover:text-ink",
					children: "About the index"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex flex-1 flex-col items-center justify-center px-4 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-lg text-muted",
						children: "What the mesh has already said."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 w-full max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {
							size: "hero",
							autoFocus: true,
							onSubmit: go,
							onNearest: () => navigate({
								to: "/mesh/$id",
								params: { id: nearestFieldNode().id }
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex max-w-xl flex-wrap justify-center gap-x-4 gap-y-2 text-sm",
						children: EXAMPLES.map((example) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex min-h-11 items-center text-muted underline decoration-line underline-offset-4 hover:text-ink",
							onClick: () => go(example),
							children: example
						}) }, example))
					}),
					recent.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 w-full max-w-xl text-center text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Recent on this radio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-wrap justify-center gap-2",
							children: recent.map((query) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "rounded-full border border-line bg-card px-3 py-2 text-ink hover:border-signal",
								onClick: () => go(query),
								children: query
							}) }, query))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-center text-sm text-muted",
						children: [CORPUS.length, " signals in the field snapshot · Meshtastic, MeshCore, and libp2p"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Foot, {})
		]
	});
}
//#endregion
export { Home as component };

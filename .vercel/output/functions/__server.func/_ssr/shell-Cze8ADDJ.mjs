import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Search, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-Cze8ADDJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "lookout-recent";
function readRecent() {
	if (typeof localStorage === "undefined") return [];
	try {
		const raw = localStorage.getItem(KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((item) => typeof item === "string").slice(0, 6);
	} catch {
		return [];
	}
}
function remember(query) {
	const cleaned = query.trim();
	if (!cleaned || cleaned === "*") return;
	const next = [cleaned, ...readRecent().filter((item) => item.toLowerCase() !== cleaned.toLowerCase())].slice(0, 6);
	localStorage.setItem(KEY, JSON.stringify(next));
}
var CORPUS = [
	{
		id: "ear",
		kind: "node",
		title: "Lookout Ear",
		path: "mesh://node/lookout-ear",
		snippet: "The radio this index is listening on. Hop zero. It ranks what it hears, and it does not upload the query.",
		body: "Lookout Ear is the companion radio sitting with the search index. Every result in this field snapshot was heard by a node like this one: a Meshtastic or MeshCore radio, or a libp2p agent speaking the XMRT mesh protocols.\n\nHop count is measured from here. A result at one hop is a neighbor. A result at six hops is a rumor that survived a chain of repeaters. Ranking prefers the neighbor when the words are equal.\n\nNothing you type is sent to a cloud. The index is the memory of what the mesh already said.",
		protocol: "mixed",
		hops: 0,
		snr: 12,
		lastHeardMin: 1,
		region: "Gulf Coast",
		tags: [
			"lookout",
			"index",
			"this radio",
			"hop zero",
			"search"
		],
		heardVia: "local companion",
		facts: [
			{
				label: "Role",
				value: "Index ear"
			},
			{
				label: "Hops",
				value: "0 — this radio"
			},
			{
				label: "Query log",
				value: "Stays on the radio"
			}
		],
		related: [
			"how-lookout-hears",
			"south-gate",
			"two-protocols"
		]
	},
	{
		id: "south-gate",
		kind: "node",
		title: "South Gate Handheld",
		path: "mesh://node/south-gate",
		snippet: "Nearest field radio. Meshtastic companion at the south gate, one hop, strong SNR, position on.",
		body: "South Gate is a Meshtastic handheld paired the way MeshWorld expects: Bluetooth to the phone, then the radio does the rest. It is the closest field node to Lookout Ear, one hop, with a clean signal.\n\nThe node announces position, battery, and a short name. It does not repeat other people’s traffic unless the channel role says so. In a Meshtastic flood, any client may still relay. On a MeshCore path, clients stay quiet and repeaters do the work.\n\nUse it as the “nearest signal” — the mesh equivalent of feeling lucky.",
		protocol: "meshtastic",
		hops: 1,
		snr: 9.4,
		lastHeardMin: 4,
		region: "Gulf Coast",
		tags: [
			"nearest",
			"handheld",
			"meshtastic",
			"south gate",
			"position",
			"companion"
		],
		heardVia: "Meshtastic nodeinfo",
		facts: [
			{
				label: "Role",
				value: "Companion"
			},
			{
				label: "Battery",
				value: "81%"
			},
			{
				label: "SNR",
				value: "9.4 dB"
			},
			{
				label: "Hops",
				value: "1"
			}
		],
		related: [
			"ear",
			"homestead-south",
			"ch-homestead",
			"north-pasture"
		]
	},
	{
		id: "ridge-repeater",
		kind: "node",
		title: "Ridge Repeater",
		path: "mesh://node/ridge-repeater",
		snippet: "Solar MeshCore repeater on the ridgeline. Learns a path once, then keeps it, so the channel stays quiet.",
		body: "Ridge Repeater is a solar MeshCore node on the gulf ridgeline. MeshCore floods once to discover a route, then reuses that path until it breaks. The ridge is why a handheld in the pasture can still reach the harbor without every radio shouting.\n\nMeshWorld can aim a route through a chosen repeater. This is the one the field index prefers for anything heading inland to the coast.\n\nLast advert was quiet on purpose. MeshCore sends node adverts and telemetry rarely, so the air stays free for actual messages.",
		protocol: "meshcore",
		hops: 2,
		snr: 6.1,
		lastHeardMin: 18,
		region: "Ridgeline",
		tags: [
			"repeater",
			"meshcore",
			"solar",
			"ridge",
			"route",
			"relay"
		],
		heardVia: "MeshCore advert",
		facts: [
			{
				label: "Role",
				value: "Repeater"
			},
			{
				label: "Power",
				value: "Solar, battery 78%"
			},
			{
				label: "Path style",
				value: "Learn once, then stick"
			},
			{
				label: "Hops",
				value: "2"
			}
		],
		related: [
			"ridgeline-site",
			"storm-watch",
			"ridge-battery",
			"harbor-light",
			"two-protocols"
		]
	},
	{
		id: "harbor-light",
		kind: "node",
		title: "Harbor Light Repeater",
		path: "mesh://node/harbor-light",
		snippet: "Coastal MeshCore repeater at the harbor mouth. Three hops inland, line of sight down the water.",
		body: "Harbor Light sits above the harbor mouth and watches the water. It is a MeshCore repeater, three hops from the south gate if the ridge path is up, farther if the ridge drops and the mesh has to hunt a new route.\n\nBoats and the shore team share waypoints on the rally channel when the cellular net is gone. The repeater itself does not read those messages. It only forwards ciphertext.",
		protocol: "meshcore",
		hops: 3,
		snr: 3.2,
		lastHeardMin: 26,
		region: "Harbor",
		tags: [
			"repeater",
			"meshcore",
			"harbor",
			"coast",
			"waypoint"
		],
		heardVia: "MeshCore path",
		facts: [
			{
				label: "Role",
				value: "Repeater"
			},
			{
				label: "Coverage",
				value: "Harbor mouth"
			},
			{
				label: "Hops",
				value: "3 via the ridge"
			}
		],
		related: [
			"harbor-mouth",
			"ridge-repeater",
			"ch-rally",
			"storm-watch"
		]
	},
	{
		id: "homestead-south",
		kind: "node",
		title: "Homestead South",
		path: "mesh://node/homestead-south",
		snippet: "Family Meshtastic node at the south homestead. Two hops. Private channel exists; the messages do not.",
		body: "Homestead South is the porch node for a family that wanted a radio when the grid flickers. It runs Meshtastic, two hops from Lookout Ear, and it sits on both the public channel and a private homestead channel.\n\nLookout indexed the node and the fact of the channel. It did not index what the family said. Private payloads stay on the radios that hold the key.\n\nThat is the rule for a mesh search engine: discovery is public, conversation is not.",
		protocol: "meshtastic",
		hops: 2,
		snr: 5.5,
		lastHeardMin: 11,
		region: "Inland homestead",
		tags: [
			"homestead",
			"family",
			"meshtastic",
			"porch",
			"private"
		],
		heardVia: "Meshtastic nodeinfo",
		facts: [
			{
				label: "Role",
				value: "Client"
			},
			{
				label: "Channels",
				value: "Public, Homestead"
			},
			{
				label: "Hops",
				value: "2"
			}
		],
		related: [
			"ch-homestead",
			"south-gate",
			"private-means-private",
			"blackout-cabin"
		]
	},
	{
		id: "sar-rover-4",
		kind: "node",
		title: "SAR Rover 4",
		path: "mesh://node/sar-rover-4",
		snippet: "Search-and-rescue handheld moving toward the north pasture rally. Meshtastic, two hops, position fresh.",
		body: "SAR Rover 4 is a search team radio on the SAR channel. The last position fix puts it near the north pasture rally point, moving, two hops out.\n\nMeshWorld’s map is built for this: track a group, drop a waypoint, keep going when the cell network is a rumor. Lookout is the other half — find the rover, the channel, and the rally without scrolling a map legend in the rain.\n\nThe team lead on this net uses the handle Northstar.",
		protocol: "meshtastic",
		hops: 2,
		snr: 7.2,
		lastHeardMin: 6,
		region: "Gulf Coast",
		tags: [
			"sar",
			"rescue",
			"rover",
			"meshtastic",
			"position",
			"search and rescue"
		],
		heardVia: "Meshtastic position",
		facts: [
			{
				label: "Role",
				value: "SAR handheld"
			},
			{
				label: "Team",
				value: "Northstar"
			},
			{
				label: "Last fix",
				value: "North pasture"
			},
			{
				label: "Hops",
				value: "2"
			}
		],
		related: [
			"northstar",
			"north-pasture",
			"ch-sar",
			"rover-position"
		]
	},
	{
		id: "clinic-porch",
		kind: "node",
		title: "Clinic Porch",
		path: "mesh://node/clinic-porch",
		snippet: "Community Meshtastic node on a clinic porch. Four hops. A long ping streak is its proof of participation.",
		body: "Clinic Porch is a small solar node on a clinic porch, four hops from the coast. It exists for the case Joseph Andrew Lee wrote about: a barrio, a blackout, a phone that can still hear another radio.\n\nEach ping another XMRT-aware node answers is a proof of participation — presence, logged and hashed, not a bank account and not a puzzle. The clinic does not mine with a warehouse. It shows up.\n\nThe index keeps the streak and the node name. It does not keep patient anything. There is no patient traffic on this channel.",
		protocol: "meshtastic",
		hops: 4,
		snr: 1.1,
		lastHeardMin: 22,
		region: "Clinic mile",
		tags: [
			"clinic",
			"community",
			"ping",
			"participation",
			"meshtastic",
			"porch"
		],
		heardVia: "Meshtastic nodeinfo",
		facts: [
			{
				label: "Role",
				value: "Community node"
			},
			{
				label: "Ping streak",
				value: "46 answered pings"
			},
			{
				label: "Hops",
				value: "4"
			}
		],
		related: [
			"clinic",
			"clinic-pings",
			"proof-of-participation",
			"becoming-a-mesh"
		]
	},
	{
		id: "blackout-cabin",
		kind: "node",
		title: "Blackout Cabin",
		path: "mesh://node/blackout-cabin",
		snippet: "Homestead node with no internet backhaul at all. Five hops. If the cloud disappears, this radio does not notice.",
		body: "Blackout Cabin has no uplink. No Starlink, no cell, no fiber. It is a Meshtastic node five hops inland, and the only way to reach it is the mesh.\n\nThis is the point of a search engine that does not live in a data center. When the internet goes down, the cabin is still a place with a name, a channel, and a waypoint. Lookout can only find it if some ear on the mesh has heard it. Today, one has.",
		protocol: "meshtastic",
		hops: 5,
		snr: -2.4,
		lastHeardMin: 54,
		region: "Inland homestead",
		tags: [
			"offline",
			"blackout",
			"cabin",
			"homestead",
			"no internet",
			"meshtastic"
		],
		heardVia: "multi-hop nodeinfo",
		facts: [
			{
				label: "Backhaul",
				value: "None"
			},
			{
				label: "SNR",
				value: "−2.4 dB"
			},
			{
				label: "Hops",
				value: "5"
			}
		],
		related: [
			"homestead-south",
			"becoming-a-mesh",
			"blackout-drill",
			"ch-homestead"
		]
	},
	{
		id: "eliza-dev",
		kind: "node",
		title: "Eliza-Dev",
		path: "mesh://node/eliza-dev",
		snippet: "libp2p agent on a laptop. Announces bash, node, python, curl, and git every 120 seconds.",
		body: "Eliza-Dev is the laptop node from the XMRT mesh: a Rust libp2p process, Noise encrypted, Yamux multiplexed, mDNS for anyone on the same link, Gossipsub for everyone else.\n\nEvery 120 seconds it publishes a capability announcement on /xmrt/mesh/agents/0.1.0 — agent name, peer id, and the tools it can actually run. Tasks arrive as request-response on /xmrt/mesh/tasks/0.1.0. A ping on /xmrt/mesh/ping/0.1.0 returns uptime and a task count.\n\nLookout treats that announcement the way it treats a radio advert. An agent that can run python is findable. The contents of a task are not, unless the agent chose to publish a result.",
		protocol: "libp2p",
		hops: 2,
		snr: 8,
		lastHeardMin: 3,
		region: "Agent mesh",
		tags: [
			"eliza",
			"agent",
			"libp2p",
			"python",
			"bash",
			"gossipsub",
			"xmrt",
			"capability"
		],
		heardVia: "Gossipsub /xmrt/mesh/agents/0.1.0",
		facts: [
			{
				label: "Peer",
				value: "12D3KooW…eliza"
			},
			{
				label: "Capabilities",
				value: "bash, node, python, curl, git"
			},
			{
				label: "Port",
				value: "9000"
			},
			{
				label: "Announce",
				value: "Every 120 seconds"
			}
		],
		related: [
			"eliza",
			"xmrt-mesh",
			"four-topics",
			"hermes",
			"vex"
		]
	},
	{
		id: "hermes",
		kind: "node",
		title: "Hermes",
		path: "mesh://node/hermes",
		snippet: "Phone agent. Termux on Android, ARM64 build of xmrt-mesh, python plus a LoRa bridge.",
		body: "Hermes is the mobile agent: Android, Termux, the ARM64 build of the Rust mesh node. It announces python and lora, which means a phone can both think and hear a radio.\n\nThe XMRT fleet treats Hermes as the edge. Laptops and relays are optional. A phone that still has a battery is a peer. mDNS finds it on a local network. If the local network is gone, a LoRa bridge — the Pi at two hops — carries a thin gossip into the radio mesh.\n\nJoseph’s line for this shape of network: the internet may go down, but the mesh keeps working.",
		protocol: "libp2p",
		hops: 3,
		snr: 4.4,
		lastHeardMin: 9,
		region: "Agent mesh",
		tags: [
			"hermes",
			"phone",
			"android",
			"termux",
			"libp2p",
			"python",
			"lora",
			"agent"
		],
		heardVia: "Gossipsub capability announce",
		facts: [
			{
				label: "Platform",
				value: "Android / Termux"
			},
			{
				label: "Build",
				value: "aarch64"
			},
			{
				label: "Capabilities",
				value: "python, lora"
			},
			{
				label: "Hops",
				value: "3"
			}
		],
		related: [
			"hermes-announce",
			"eliza-dev",
			"pi-bridge",
			"eliza"
		]
	},
	{
		id: "vex",
		kind: "node",
		title: "Vex Relay",
		path: "mesh://node/vex",
		snippet: "Primary gossipsub relay for the agent fleet. Forwards heartbeats, tasks, discovery, and fleet broadcast.",
		body: "Vex is the relay that keeps the agent fleet in one conversation. It speaks the four gossip topics the fleet actually uses: agent-heartbeat, agent-tasks, agent-discovery, and fleet-broadcast.\n\nIf Vex goes quiet, xmrt-mesh does not. Direct peers still exchange tasks over Noise. The relay is a convenience, not a gate. That is the difference between a mesh and a server with extra steps.",
		protocol: "libp2p",
		hops: 2,
		snr: 7.8,
		lastHeardMin: 2,
		region: "Agent mesh",
		tags: [
			"vex",
			"relay",
			"gossipsub",
			"libp2p",
			"heartbeat",
			"fleet"
		],
		heardVia: "agent-heartbeat",
		facts: [
			{
				label: "Role",
				value: "Gossipsub relay"
			},
			{
				label: "Topics",
				value: "heartbeat, tasks, discovery, broadcast"
			},
			{
				label: "Hops",
				value: "2"
			}
		],
		related: [
			"four-topics",
			"eliza-dev",
			"ch-fleet",
			"xmrt-mesh"
		]
	},
	{
		id: "pi-bridge",
		kind: "node",
		title: "Pi Bridge",
		path: "mesh://node/pi-bridge",
		snippet: "Raspberry Pi that hears LoRa on one side and libp2p on the other. The seam between radio mesh and agent mesh.",
		body: "Pi Bridge is a Raspberry Pi on the homestead shelf. One process talks Meshtastic over a USB radio. Another runs xmrt-mesh and announces the capability lora-bridge.\n\nIt is how a SAR bullet on a radio becomes something an agent can file, and how an agent warning becomes a short text a handheld can show. The bridge publishes the existence of the seam. It does not publish private channel traffic crossing it.\n\nCross-compile notes from the xmrt-mesh repo matter here: armv7 for the Pi, aarch64 for the phone.",
		protocol: "mixed",
		hops: 2,
		snr: 6.6,
		lastHeardMin: 7,
		region: "Gulf Coast",
		tags: [
			"bridge",
			"raspberry pi",
			"lora",
			"libp2p",
			"meshtastic",
			"gateway"
		],
		heardVia: "both radio advert and gossipsub",
		facts: [
			{
				label: "Role",
				value: "Radio ↔ agent bridge"
			},
			{
				label: "Hardware",
				value: "Raspberry Pi"
			},
			{
				label: "Hops",
				value: "2"
			}
		],
		related: [
			"xmrt-mesh",
			"hermes",
			"two-protocols",
			"how-lookout-hears"
		]
	},
	{
		id: "ch-public",
		kind: "channel",
		title: "Public",
		path: "mesh://channel/public",
		snippet: "The open Meshtastic channel. LongFast. Anyone in range can hear that it exists. Chatter is still radio, not a web page.",
		body: "Public is the default LongFast-style channel for the gulf field mesh. Nodes announce it. Lookout lists it so a new radio can find the front door.\n\nMessages on Public are not private, but they are also not copied wholesale into this index. The crawler stores the channel name, the rough traffic temperature, and which repeaters carry it. A search engine that archived every hello would be a wiretap with a text box.",
		protocol: "meshtastic",
		hops: 1,
		snr: 8,
		lastHeardMin: 5,
		region: "Gulf Coast",
		tags: [
			"public",
			"longfast",
			"channel",
			"meshtastic"
		],
		heardVia: "channel advert",
		facts: [
			{
				label: "Mode",
				value: "LongFast"
			},
			{
				label: "Privacy",
				value: "Open radio, not archived chat"
			},
			{
				label: "Hops",
				value: "1"
			}
		],
		related: [
			"ch-weather",
			"two-protocols",
			"private-means-private"
		]
	},
	{
		id: "ch-sar",
		kind: "channel",
		title: "SAR",
		path: "mesh://channel/sar",
		snippet: "Search-and-rescue channel. Rover positions, rally points, and Northstar’s net. Metadata only.",
		body: "SAR is the channel the rover team actually works. Lookout knows the channel is up, that Rover 4 is publishing position, and that the north pasture is the current rally.\n\nIt does not store the team’s medical notes or door-to-door checks. Those stay in the encrypted channel. Search finds the net. The net does the rescue.",
		protocol: "meshtastic",
		hops: 2,
		snr: 7,
		lastHeardMin: 6,
		region: "Gulf Coast",
		tags: [
			"sar",
			"rescue",
			"channel",
			"rally",
			"search and rescue"
		],
		heardVia: "channel advert",
		facts: [
			{
				label: "Lead",
				value: "Northstar"
			},
			{
				label: "Active rover",
				value: "SAR Rover 4"
			},
			{
				label: "Rally",
				value: "North pasture"
			}
		],
		related: [
			"sar-rover-4",
			"northstar",
			"north-pasture",
			"rover-position"
		]
	},
	{
		id: "ch-homestead",
		kind: "channel",
		title: "Homestead",
		path: "mesh://channel/homestead",
		snippet: "Private family channel. Lookout can tell you it exists. It cannot tell you what was said.",
		body: "Homestead is a private channel shared by the south homestead radios. Keys live on those devices.\n\nIndexed: the name, the nodes that advertise membership, the hop distance. Not indexed: messages, names of kids, gate codes, anything said after the key was applied.\n\nIf you are on the channel, you already know more than this page does. That is correct.",
		protocol: "meshtastic",
		hops: 2,
		snr: 5,
		lastHeardMin: 15,
		region: "Inland homestead",
		tags: [
			"homestead",
			"private",
			"family",
			"channel",
			"encrypted"
		],
		heardVia: "channel presence, not payload",
		facts: [{
			label: "Privacy",
			value: "Payloads not indexed"
		}, {
			label: "Members heard",
			value: "Homestead South, South Gate"
		}],
		related: [
			"private-means-private",
			"homestead-south",
			"south-gate"
		]
	},
	{
		id: "ch-fleet",
		kind: "channel",
		title: "Fleet discovery",
		path: "mesh://channel/fleet",
		snippet: "The agent-discovery topic. Capabilities, not secrets. Eliza, Hermes, and Vex check in here.",
		body: "Fleet discovery is the gossip topic where agents say what they can do. It maps to agent-discovery on the XMRT fleet and to the capability announcements on /xmrt/mesh/agents/0.1.0.\n\nSearch cap:python and this is why a laptop and a phone both appear. The announcement is the page. The task payload is not.",
		protocol: "libp2p",
		hops: 2,
		snr: 8,
		lastHeardMin: 2,
		region: "Agent mesh",
		tags: [
			"fleet",
			"discovery",
			"agents",
			"gossipsub",
			"capability",
			"channel"
		],
		heardVia: "agent-discovery",
		facts: [{
			label: "Topic",
			value: "agent-discovery"
		}, {
			label: "Also",
			value: "/xmrt/mesh/agents/0.1.0"
		}],
		related: [
			"four-topics",
			"eliza-dev",
			"hermes",
			"vex"
		]
	},
	{
		id: "ch-weather",
		kind: "channel",
		title: "Weather",
		path: "mesh://channel/weather",
		snippet: "Weather bulletins for the gulf field. Storm watch on the ridge is the fresh one.",
		body: "Weather is a low-rate channel for observations the mesh can use when forecast sites do not load. People post wind, water on the road, and whether a repeater path still holds.\n\nThe fresh bulletin is the ridge storm watch. Ranking lifts it because it is new and because a storm is the moment a mesh earns its keep.",
		protocol: "mixed",
		hops: 2,
		snr: 6,
		lastHeardMin: 12,
		region: "Gulf Coast",
		tags: [
			"weather",
			"storm",
			"wind",
			"channel",
			"bulletin"
		],
		heardVia: "bulletin relay",
		facts: [{
			label: "Fresh item",
			value: "Storm watch on the ridge path"
		}, {
			label: "Rate",
			value: "Low, on purpose"
		}],
		related: [
			"storm-watch",
			"ridge-repeater",
			"ch-public"
		]
	},
	{
		id: "ch-rally",
		kind: "channel",
		title: "Rally",
		path: "mesh://channel/rally",
		snippet: "Waypoint channel. Rally points and routes, including MeshCore shares through a chosen repeater.",
		body: "Rally is where waypoints move. MeshWorld already shares them to contacts and groups, and on MeshCore a path can be pinned through a repeater instead of shouted across the channel.\n\nThe north pasture rally is the one SAR is using. The blackout drill tonight is posted against the same channel.",
		protocol: "meshcore",
		hops: 2,
		snr: 5.8,
		lastHeardMin: 14,
		region: "Gulf Coast",
		tags: [
			"rally",
			"waypoint",
			"meshcore",
			"channel",
			"route"
		],
		heardVia: "MeshCore waypoint",
		facts: [{
			label: "Current rally",
			value: "North pasture"
		}, {
			label: "Preferred repeater",
			value: "Ridge"
		}],
		related: [
			"north-pasture",
			"ridge-repeater",
			"blackout-drill",
			"meshworld-field"
		]
	},
	{
		id: "eliza",
		kind: "person",
		title: "Eliza",
		path: "mesh://person/eliza",
		snippet: "XMRT’s operator agent. On the mesh she is a peer with capabilities, not a cloud login.",
		body: "Eliza is the autonomous operator Joseph Andrew Lee describes at the center of XMRT DAO: governance help, mesh awareness, a memory that is supposed to live with the agent rather than with a platform.\n\nOn this index she is not a chatbot window. She is Eliza-Dev, a libp2p peer you can find, ping, and hand a task if you already speak the protocol. Lookout will show you the peer. It will not pretend to be her.",
		protocol: "libp2p",
		hops: 2,
		snr: 8,
		lastHeardMin: 3,
		region: "Agent mesh",
		tags: [
			"eliza",
			"agent",
			"xmrt",
			"operator",
			"person"
		],
		heardVia: "capability announcement",
		facts: [{
			label: "Node",
			value: "Eliza-Dev"
		}, {
			label: "Speaks",
			value: "Noise, Gossipsub, request-response"
		}],
		related: [
			"eliza-dev",
			"becoming-a-mesh",
			"four-topics",
			"proof-of-participation"
		]
	},
	{
		id: "northstar",
		kind: "person",
		title: "Northstar",
		path: "mesh://person/northstar",
		snippet: "SAR net lead for the gulf field team. Reachable on the SAR channel, usually within two hops of Rover 4.",
		body: "Northstar runs the SAR net on this field mesh. The handle is what the radios show. Lookout does not attach a legal name, a phone number, or a face. The mesh did not announce those, and a search box is not a reason to invent them.\n\nFind the channel, the rover, and the rally. Call Northstar on the radio.",
		protocol: "meshtastic",
		hops: 2,
		snr: 7,
		lastHeardMin: 8,
		region: "Gulf Coast",
		tags: [
			"northstar",
			"sar",
			"lead",
			"person",
			"rescue"
		],
		heardVia: "SAR channel presence",
		facts: [{
			label: "Net",
			value: "SAR"
		}, {
			label: "Rover",
			value: "SAR Rover 4"
		}],
		related: [
			"ch-sar",
			"sar-rover-4",
			"north-pasture"
		]
	},
	{
		id: "north-pasture",
		kind: "place",
		title: "North Pasture Rally",
		path: "mesh://place/north-pasture",
		snippet: "Current SAR rally point. Shared as a waypoint. Rover 4’s last fix is beside it.",
		body: "North Pasture is a waypoint, not a street address the web would understand. It was dropped on the rally channel and mirrored to the SAR net.\n\nIn MeshWorld this is the pin you share with the group. In Lookout it is a page you can find by typing the name, even when the map tiles never downloaded.",
		protocol: "mixed",
		hops: 2,
		snr: 6.4,
		lastHeardMin: 6,
		region: "Gulf Coast",
		tags: [
			"waypoint",
			"rally",
			"pasture",
			"sar",
			"place"
		],
		heardVia: "waypoint share",
		facts: [
			{
				label: "Kind",
				value: "Rally waypoint"
			},
			{
				label: "Set by",
				value: "SAR net"
			},
			{
				label: "Nearby",
				value: "SAR Rover 4"
			}
		],
		related: [
			"sar-rover-4",
			"ch-rally",
			"rover-position",
			"ch-sar"
		]
	},
	{
		id: "ridgeline-site",
		kind: "place",
		title: "Ridgeline Solar Site",
		path: "mesh://place/ridgeline",
		snippet: "Where the MeshCore repeater lives. High ground between the homestead and the harbor.",
		body: "The ridgeline site is a pole, a panel, a battery, and Ridge Repeater. It is the planned infrastructure MeshCore wants: a few good repeaters, clients that stay quiet, paths that get learned and reused.\n\nLose this hill and hop counts jump. The storm watch bulletin is mostly a question about this place: is the path still good?",
		protocol: "meshcore",
		hops: 2,
		snr: 6,
		lastHeardMin: 18,
		region: "Ridgeline",
		tags: [
			"ridgeline",
			"solar",
			"repeater",
			"place",
			"meshcore"
		],
		heardVia: "repeater advert",
		facts: [{
			label: "Gear",
			value: "Solar repeater"
		}, {
			label: "Node",
			value: "Ridge Repeater"
		}],
		related: [
			"ridge-repeater",
			"ridge-battery",
			"storm-watch"
		]
	},
	{
		id: "clinic",
		kind: "place",
		title: "Clinic Mile",
		path: "mesh://place/clinic-mile",
		snippet: "The porch, the road, and the node that proves someone is still there when the backhaul is not.",
		body: "Clinic Mile is the stretch of road where the porch node lives. Four hops is a long way for a chatty flood. It is a reasonable way for a rare ping.\n\nThe place matters because the last internet was built for the middle. This one is a porch. Proof of participation counts the porch.",
		protocol: "meshtastic",
		hops: 4,
		snr: 1,
		lastHeardMin: 22,
		region: "Clinic mile",
		tags: [
			"clinic",
			"place",
			"community",
			"porch"
		],
		heardVia: "nodeinfo",
		facts: [{
			label: "Node",
			value: "Clinic Porch"
		}, {
			label: "Hops",
			value: "4"
		}],
		related: [
			"clinic-porch",
			"clinic-pings",
			"proof-of-participation"
		]
	},
	{
		id: "harbor-mouth",
		kind: "place",
		title: "Harbor Mouth",
		path: "mesh://place/harbor-mouth",
		snippet: "Water side of the field mesh. Harbor Light repeater has line of sight down the channel.",
		body: "Harbor Mouth is the coastal end of the path that starts in the pasture, crosses the ridge, and reaches salt water. Waypoints for a shore team land here when weather turns.\n\nThree hops if Ridge Repeater is healthy. Search near:harbor when you care about the water and not the whole gulf.",
		protocol: "meshcore",
		hops: 3,
		snr: 3,
		lastHeardMin: 26,
		region: "Harbor",
		tags: [
			"harbor",
			"coast",
			"place",
			"water"
		],
		heardVia: "repeater path",
		facts: [{
			label: "Repeater",
			value: "Harbor Light"
		}, {
			label: "Hops",
			value: "3"
		}],
		related: [
			"harbor-light",
			"ridge-repeater",
			"storm-watch"
		]
	},
	{
		id: "storm-watch",
		kind: "bulletin",
		title: "Storm watch on the ridge path",
		path: "mesh://bulletin/storm-watch",
		snippet: "Wind is up. The learned MeshCore path across the ridge still holds. Do not flood the channel to ask.",
		body: "Storm watch, heard on Weather and confirmed by a MeshCore path check. The route from South Gate through Ridge Repeater to Harbor Light is still the sticky path. SNR on the ridge is lower than this morning and still usable.\n\nMeshCore’s whole bet is that you do not re-flood just because you are nervous. The path is known until it breaks. This bulletin says it has not broken.\n\nIf you are moving a team, prefer the rally channel and the north pasture pin. Public does not need a play-by-play.",
		protocol: "meshcore",
		hops: 2,
		snr: 4.8,
		lastHeardMin: 12,
		region: "Ridgeline",
		tags: [
			"storm",
			"weather",
			"wind",
			"ridge",
			"path",
			"bulletin"
		],
		heardVia: "Weather channel",
		facts: [
			{
				label: "Path",
				value: "South Gate → Ridge → Harbor Light"
			},
			{
				label: "Status",
				value: "Sticky route still good"
			},
			{
				label: "Heard",
				value: "12 min ago"
			}
		],
		related: [
			"ch-weather",
			"ridge-repeater",
			"harbor-light",
			"ridge-battery"
		]
	},
	{
		id: "clinic-pings",
		kind: "bulletin",
		title: "Clinic porch ping streak",
		path: "mesh://bulletin/clinic-pings",
		snippet: "Forty-six answered pings from Clinic Porch. Presence is the proof. No internet required for the count.",
		body: "Clinic Porch answered another ping. The streak stands at forty-six. On the XMRT mesh, a ping is not a keepalive for a dashboard. It is proof of participation: this radio is here, it heard you, it spent a little power to say so.\n\nThe scoreboard Joseph’s essays describe can live on a mesh even when the Supabase view of the world cannot be reached. This bulletin is the local copy.",
		protocol: "meshtastic",
		hops: 4,
		snr: 1.1,
		lastHeardMin: 22,
		region: "Clinic mile",
		tags: [
			"ping",
			"participation",
			"clinic",
			"proof",
			"bulletin"
		],
		heardVia: "ping response",
		facts: [{
			label: "Streak",
			value: "46"
		}, {
			label: "Node",
			value: "Clinic Porch"
		}],
		related: [
			"clinic-porch",
			"proof-of-participation",
			"clinic"
		]
	},
	{
		id: "hermes-announce",
		kind: "bulletin",
		title: "Hermes announced python and lora",
		path: "mesh://bulletin/hermes-announce",
		snippet: "Fresh capability gossip. The phone agent can run python and hear LoRa. Peer is three hops out.",
		body: "Hermes published a capability announcement: python, lora, version 0.1.0, listen address on the phone’s mesh port. Gossipsub carried it. Lookout Ear heard it via the Pi Bridge, three hops from the agent itself if you count the radio seam as a hop.\n\nAnyone ranking agents by what they can do — cap:python, cap:lora — should see Hermes beside Eliza-Dev. Eliza has the wider toolbox. Hermes is the one in a pocket.",
		protocol: "libp2p",
		hops: 3,
		snr: 4.4,
		lastHeardMin: 9,
		region: "Agent mesh",
		tags: [
			"hermes",
			"python",
			"lora",
			"capability",
			"announce",
			"bulletin"
		],
		heardVia: "Gossipsub",
		facts: [{
			label: "Capabilities",
			value: "python, lora"
		}, {
			label: "Interval",
			value: "120 seconds"
		}],
		related: [
			"hermes",
			"eliza-dev",
			"ch-fleet",
			"pi-bridge"
		]
	},
	{
		id: "rover-position",
		kind: "bulletin",
		title: "Rover 4 is at the north pasture",
		path: "mesh://bulletin/rover-position",
		snippet: "Position packet from SAR Rover 4. Beside the rally pin. Two hops, six minutes old.",
		body: "SAR Rover 4 published a position. It plots on top of the north pasture rally waypoint, close enough that the team treats them as the same place until the rover moves again.\n\nLookout keeps the bulletin, the hop count, and the link to the pin. The track history belongs on the MeshWorld map, which can cache tiles. Search is how you find the pin when you do not remember what the team called it.",
		protocol: "meshtastic",
		hops: 2,
		snr: 7.2,
		lastHeardMin: 6,
		region: "Gulf Coast",
		tags: [
			"rover",
			"position",
			"sar",
			"pasture",
			"bulletin"
		],
		heardVia: "position packet",
		facts: [{
			label: "Node",
			value: "SAR Rover 4"
		}, {
			label: "Place",
			value: "North Pasture Rally"
		}],
		related: [
			"sar-rover-4",
			"north-pasture",
			"ch-sar"
		]
	},
	{
		id: "ridge-battery",
		kind: "bulletin",
		title: "Ridge battery holding at 78%",
		path: "mesh://bulletin/ridge-battery",
		snippet: "Solar repeater telemetry. Battery 78% under cloud. Advert was sparse, which is MeshCore behaving.",
		body: "Ridge Repeater sent telemetry: battery 78%, panel still contributing, no reboot. MeshCore sends this rarely. A search for the battery should find it. A chat app should not have needed a stream of beacons to know it.\n\nIf the number falls through the afternoon storm, the next advert replaces this one. Freshness is part of rank for bulletins, so the new number wins.",
		protocol: "meshcore",
		hops: 2,
		snr: 6.1,
		lastHeardMin: 18,
		region: "Ridgeline",
		tags: [
			"battery",
			"solar",
			"ridge",
			"telemetry",
			"bulletin"
		],
		heardVia: "MeshCore telemetry",
		facts: [{
			label: "Battery",
			value: "78%"
		}, {
			label: "Node",
			value: "Ridge Repeater"
		}],
		related: [
			"ridge-repeater",
			"ridgeline-site",
			"storm-watch"
		]
	},
	{
		id: "blackout-drill",
		kind: "bulletin",
		title: "Blackout drill tonight on Rally",
		path: "mesh://bulletin/blackout-drill",
		snippet: "Community drill after dusk. Assume no cellular. Rally channel, north pasture, ridge path only.",
		body: "The gulf field mesh is running a blackout drill tonight. Phones stay in airplane mode plus the radio. Check-in is a ping, not a text to a server. Rally points go on the Rally channel. The ridge path is the planned route to anyone near the water.\n\nThis is the ordinary version of Joseph’s sentence. The internet is not “down” as a catastrophe. It is simply not invited. The mesh is the network for the evening.",
		protocol: "mixed",
		hops: 1,
		snr: 9,
		lastHeardMin: 30,
		region: "Gulf Coast",
		tags: [
			"drill",
			"blackout",
			"rally",
			"community",
			"bulletin",
			"offline"
		],
		heardVia: "Rally channel",
		facts: [
			{
				label: "When",
				value: "After dusk"
			},
			{
				label: "Channel",
				value: "Rally"
			},
			{
				label: "Rule",
				value: "No cellular"
			}
		],
		related: [
			"ch-rally",
			"blackout-cabin",
			"becoming-a-mesh",
			"north-pasture"
		]
	},
	{
		id: "proof-of-participation",
		kind: "page",
		title: "Proof of participation",
		path: "mesh://page/proof-of-participation",
		snippet: "A ping is the proof. Showing up on the mesh counts, even when the internet and the power company do not.",
		body: "Proof of participation is the idea Joseph Andrew Lee published for the XMRT mesh: mining and membership that do not require a warehouse or a reliable uplink. A device proves it is present by pinging another device. The exchange is hashed. The streak is the record.\n\nHe put it plainly in the essay: no Wi-Fi is not a problem, because the mesh does not rely on the cloud. The mesh is the cloud.\n\nLookout’s job is narrower than the DAO’s. It does not pay anyone. It makes the ping, the porch, and the streak findable by the people who are already on the radio.\n\nClinic Porch is the worked example in this field index. Forty-six answered pings, four hops, no backhaul required for the count.",
		protocol: "mixed",
		hops: 4,
		snr: 1,
		lastHeardMin: 22,
		region: "Clinic mile",
		tags: [
			"proof",
			"participation",
			"ping",
			"xmrt",
			"pop",
			"joseph"
		],
		heardVia: "indexed essay, local ping bulletin",
		facts: [{
			label: "Source",
			value: "Joseph Andrew Lee, XMRT DAO"
		}, {
			label: "Local proof",
			value: "Clinic porch streak"
		}],
		related: [
			"clinic-pings",
			"clinic-porch",
			"becoming-a-mesh",
			"xmrt-mesh"
		]
	},
	{
		id: "becoming-a-mesh",
		kind: "page",
		title: "The internet is becoming a mesh",
		path: "mesh://page/becoming-a-mesh",
		snippet: "Not a metaphor. Radios, phones, and agents already forward for each other when the center goes quiet.",
		body: "The clearnet is a bunch of clients asking a few buildings for permission to speak. A mesh is the opposite shape: every radio can be a forwarder, every phone can be a peer, and the path is whatever still has battery.\n\nJoseph Andrew Lee’s XMRT essays argue that this is already the network for the edge — jungles, blackouts, barrios, prepaid Androids — and that it should keep mining and coordinating when the internet does not. His line: the internet may go down, but XMRT will keep mining.\n\nCory Gray’s MeshWorld is the same bet in the other hand. Off-grid comms for storms, search and rescue, homesteads, and community nets, on real LoRa radios, with a client that speaks both Meshtastic and MeshCore.\n\nLookout is the missing piece between them. Once a mesh can talk, someone still has to find the repeater, the channel, the waypoint, and the agent. Search, without sending the question to a company.",
		protocol: "mixed",
		hops: 1,
		snr: 9,
		lastHeardMin: 40,
		region: "Gulf Coast",
		tags: [
			"mesh",
			"internet",
			"xmrt",
			"meshworld",
			"offline",
			"edge",
			"joseph",
			"cory"
		],
		heardVia: "field index",
		facts: [
			{
				label: "Writing",
				value: "Joseph Andrew Lee"
			},
			{
				label: "Radio client",
				value: "MeshWorld"
			},
			{
				label: "Agent node",
				value: "xmrt-mesh"
			}
		],
		related: [
			"two-protocols",
			"meshworld-field",
			"xmrt-mesh",
			"how-lookout-hears"
		]
	},
	{
		id: "two-protocols",
		kind: "page",
		title: "Two radios, one search box",
		path: "mesh://page/two-protocols",
		snippet: "Meshtastic floods. MeshCore learns a path and stays quiet. MeshWorld speaks both. They do not speak to each other.",
		body: "Meshtastic and MeshCore share LoRa chips and a lot of the same boards. They do not share a protocol. A Meshtastic node cannot deliver a MeshCore message. One firmware at a time.\n\nMeshtastic is the flood: nodes relay, setup is closer to “flash and go,” and a crowded channel gets loud. MeshCore is the planned net: repeaters forward, clients stay quiet, a path is discovered and then reused, hop budgets are long.\n\nMeshWorld’s client is built to pair either radio over Bluetooth, then give you maps, encrypted channels, waypoints, and an operations console that runs on the machine in front of you. Lookout does not pick a side. proto:meshtastic and proto:meshcore are both first-class. A mixed result, like the Pi Bridge or this page, is the seam.\n\nSearch ranks a quiet repeater and a chatty handheld by the words you typed and by how many hops they took to arrive — not by which logo is on the case.",
		protocol: "mixed",
		hops: 1,
		snr: 8,
		lastHeardMin: 50,
		region: "Gulf Coast",
		tags: [
			"meshtastic",
			"meshcore",
			"protocol",
			"meshworld",
			"lora",
			"dual"
		],
		heardVia: "field index",
		facts: [
			{
				label: "Meshtastic",
				value: "Managed flood"
			},
			{
				label: "MeshCore",
				value: "Learned paths, quiet clients"
			},
			{
				label: "Interop",
				value: "None. Pick a firmware."
			}
		],
		related: [
			"meshworld-field",
			"ridge-repeater",
			"south-gate",
			"becoming-a-mesh"
		]
	},
	{
		id: "xmrt-mesh",
		kind: "page",
		title: "xmrt-mesh, the agent node",
		path: "mesh://page/xmrt-mesh",
		snippet: "Rust libp2p node. mDNS, Gossipsub, Noise, Yamux. Capability announces every two minutes. Tasks by request-response.",
		body: "The published node is github.com/xmrtdao/xmrt-mesh. It is a Rust libp2p process for the XMRT agent fleet, MIT licensed. mDNS discovers peers on the local link. Gossipsub carries capability announcements on /xmrt/mesh/agents/0.1.0. Tasks use request-response on /xmrt/mesh/tasks/0.1.0. Health is a ping on /xmrt/mesh/ping/0.1.0. Noise encrypts the transport. Yamux multiplexes it.\n\nThere is no DHT in that README. Discovery is mDNS plus gossip, which is exactly why a search index has to listen and remember. The mesh will tell you about a peer, then stop repeating it.\n\nThe repo path written as xmrtdao/MESHNET is not published. In Joseph’s essays MESHNET is the offline sync layer — the idea. xmrt-mesh is the node you can build. The older clearnet name Project Meshnet is a different history. This index follows the radio and the agent fleet, not that archive.\n\nA Go relay can sit beside the node for task results. It is optional. Peers that can see each other do not need it.",
		protocol: "libp2p",
		hops: 2,
		snr: 8,
		lastHeardMin: 15,
		region: "Agent mesh",
		tags: [
			"xmrt-mesh",
			"libp2p",
			"mdns",
			"gossipsub",
			"noise",
			"yamux",
			"rust",
			"meshnet"
		],
		heardVia: "protocol card",
		facts: [
			{
				label: "Announce",
				value: "/xmrt/mesh/agents/0.1.0"
			},
			{
				label: "Tasks",
				value: "/xmrt/mesh/tasks/0.1.0"
			},
			{
				label: "Ping",
				value: "/xmrt/mesh/ping/0.1.0"
			},
			{
				label: "License",
				value: "MIT"
			}
		],
		related: [
			"four-topics",
			"eliza-dev",
			"how-lookout-hears",
			"pi-bridge"
		]
	},
	{
		id: "four-topics",
		kind: "page",
		title: "Four gossip topics",
		path: "mesh://page/four-topics",
		snippet: "Heartbeat, tasks, discovery, fleet broadcast. The agent mesh has a small vocabulary. Listen to all four.",
		body: "The XMRT fleet’s living traffic sorts into four gossip topics.\n\nagent-heartbeat — a pulse every half minute to a minute, so peers know who is still up.\n\nagent-tasks — work offered to someone with the right capability.\n\nagent-discovery — names, endpoints, and what an agent can do.\n\nagent-broadcast, called fleet-broadcast in the fleet notes — the message every peer is meant to see.\n\nThe Rust node’s single announce topic is the disciplined version of discovery: a JSON object with agent id, peer id, capabilities, version, and listen addresses, every 120 seconds.\n\nLookout subscribes the way a careful node would. Heartbeats change rank and freshness. Discovery changes the page. Task bodies stay out unless an agent published a result on purpose.",
		protocol: "libp2p",
		hops: 2,
		snr: 8,
		lastHeardMin: 2,
		region: "Agent mesh",
		tags: [
			"gossip",
			"topics",
			"heartbeat",
			"tasks",
			"discovery",
			"broadcast",
			"fleet"
		],
		heardVia: "fleet gossip",
		facts: [
			{
				label: "Heartbeat",
				value: "agent-heartbeat"
			},
			{
				label: "Tasks",
				value: "agent-tasks"
			},
			{
				label: "Discovery",
				value: "agent-discovery"
			},
			{
				label: "Broadcast",
				value: "fleet-broadcast"
			}
		],
		related: [
			"vex",
			"ch-fleet",
			"xmrt-mesh",
			"eliza-dev"
		]
	},
	{
		id: "how-lookout-hears",
		kind: "page",
		title: "How Lookout hears",
		path: "mesh://page/how-lookout-hears",
		snippet: "It does not crawl the web. It remembers adverts, gossip, waypoints, and pings, then ranks them by words and hops.",
		body: "A web search engine fetches pages from servers that wanted to be fetched. Lookout listens. Meshtastic nodeinfo, MeshCore adverts and learned paths, waypoints, weather bulletins, and libp2p capability announcements are already being said out loud. The index is a memory of that speech.\n\nRank is deliberately physical.\n\nWords in the name beat words in the body. A quoted phrase has to appear. Fewer hops beat more hops when the words tie, because a neighbor is more true than a sixth-hand relay. Bulletins decay: a storm watch from this hour outranks a battery note from yesterday. Operators narrow the ear: proto:meshcore, hops:2, near:gulf, channel:sar, cap:python.\n\nWhat the rank refuses: private payloads, task bodies, and anything the mesh did not say. You can find the Homestead channel. You cannot read it here.\n\nThis preview is a field snapshot, assembled so the box works before a thousand radios are connected. The ranking is the real one. Point the ear at a live mesh and the pages change.",
		protocol: "mixed",
		hops: 0,
		snr: 12,
		lastHeardMin: 1,
		region: "Gulf Coast",
		tags: [
			"ranking",
			"index",
			"crawler",
			"hops",
			"search",
			"lookout",
			"privacy"
		],
		heardVia: "this radio",
		facts: [
			{
				label: "Listens to",
				value: "Adverts, gossip, waypoints, pings"
			},
			{
				label: "Ignores",
				value: "Private payloads"
			},
			{
				label: "Queries",
				value: "Not uploaded"
			}
		],
		related: [
			"ear",
			"private-means-private",
			"two-protocols",
			"xmrt-mesh"
		]
	},
	{
		id: "private-means-private",
		kind: "page",
		title: "Private means not in the index",
		path: "mesh://page/private-means-private",
		snippet: "Channels can be discovered. Conversations cannot. Encryption is not a suggestion the search box gets to overrule.",
		body: "MeshCore encrypts messages end to end. Meshtastic private channels use a key the index does not have. libp2p tasks ride inside Noise. Lookout never asks for those keys.\n\nThe searchable surface is what a stranger’s radio could already observe: names, roles, hop count, signal, public bulletins, capability announcements, waypoint names that were shared to a public or rally net.\n\nIf a future version runs on your own radio, your own keys could open your own channels on your own screen. That index would still not be a copy for anyone else. Search is a local sense, not a new cloud.",
		protocol: "mixed",
		hops: 1,
		snr: 8,
		lastHeardMin: 60,
		region: "Gulf Coast",
		tags: [
			"private",
			"encrypted",
			"privacy",
			"channels",
			"noise",
			"keys"
		],
		heardVia: "field index",
		facts: [
			{
				label: "Private channels",
				value: "Name only"
			},
			{
				label: "Task payloads",
				value: "Not stored"
			},
			{
				label: "Keys",
				value: "Never requested"
			}
		],
		related: [
			"ch-homestead",
			"how-lookout-hears",
			"xmrt-mesh"
		]
	},
	{
		id: "meshworld-field",
		kind: "page",
		title: "MeshWorld, on the field",
		path: "mesh://page/meshworld",
		snippet: "Cory Gray’s MeshWorld is the client: both firmwares, maps, encrypted chat, waypoints, and a console that does not need a cloud.",
		body: "MeshWorld is the off-grid client at meshworld.org. Pair a Meshtastic or MeshCore radio, follow the short setup, and the phone is on the mesh. The maps cache. The channels encrypt. Waypoints move to a group. The operations console — map, chat, alerts, direct messages — is meant to run on the machine in the room, not on somebody’s server.\n\nPeople use it when the grid fails: storms, search and rescue, rural property, community networks, a family that wants a way to find each other.\n\nLookout is the search box that client does not have yet. The radio can already say “I am the ridge repeater” and “the rally is the north pasture.” Someone in the rain should be able to type those words and land on the right page.\n\nBuilt as a field index for that mesh, and for the agent mesh XMRT runs beside it.",
		protocol: "mixed",
		hops: 1,
		snr: 9,
		lastHeardMin: 20,
		region: "Gulf Coast",
		tags: [
			"meshworld",
			"cory",
			"client",
			"console",
			"maps",
			"off-grid",
			"app"
		],
		heardVia: "field index",
		facts: [
			{
				label: "Client",
				value: "Meshtastic and MeshCore"
			},
			{
				label: "Console",
				value: "Local, not a cloud login"
			},
			{
				label: "Site",
				value: "meshworld.org"
			}
		],
		related: [
			"two-protocols",
			"becoming-a-mesh",
			"ch-rally",
			"how-lookout-hears"
		]
	}
];
var byId = new Map(CORPUS.map((doc) => [doc.id, doc]));
function getDoc(id) {
	return byId.get(id);
}
var KIND_LABEL = {
	node: "Node",
	channel: "Channel",
	person: "Person",
	place: "Place",
	bulletin: "Bulletin",
	page: "Page"
};
var PROTOCOL_LABEL = {
	meshtastic: "Meshtastic",
	meshcore: "MeshCore",
	libp2p: "libp2p",
	mixed: "Radio + agent"
};
function heardLabel(min) {
	if (min < 2) return "just now";
	if (min < 60) return `${min} min ago`;
	const h = Math.round(min / 60);
	if (h < 36) return h === 1 ? "1 hour ago" : `${h} hours ago`;
	const d = Math.round(min / 1440);
	return d === 1 ? "1 day ago" : `${d} days ago`;
}
function hopsLabel(hops) {
	if (hops <= 0) return "on this radio";
	if (hops === 1) return "1 hop";
	return `${hops} hops`;
}
var STOP = /* @__PURE__ */ new Set([
	"the",
	"a",
	"an",
	"of",
	"to",
	"and",
	"for",
	"on",
	"in",
	"is",
	"it",
	"by",
	"with",
	"from",
	"that",
	"this",
	"what",
	"how",
	"are",
	"be",
	"or",
	"at"
]);
var SYN = {
	radio: [
		"node",
		"lora",
		"meshtastic",
		"meshcore"
	],
	radios: ["node", "lora"],
	repeater: ["relay", "ridge"],
	repeaters: ["relay", "ridge"],
	offline: ["blackout", "mesh"],
	agent: [
		"eliza",
		"hermes",
		"libp2p"
	],
	agents: [
		"eliza",
		"hermes",
		"fleet"
	],
	storm: ["weather", "wind"],
	rescue: ["sar"],
	sar: ["rescue"],
	ping: ["participation", "proof"],
	internet: ["cloud", "grid"],
	cloud: ["internet"],
	phone: ["hermes", "android"],
	search: ["lookout", "index"]
};
var KINDS = /* @__PURE__ */ new Set([
	"node",
	"channel",
	"person",
	"place",
	"bulletin",
	"page"
]);
function asKind(value) {
	const v = value.toLowerCase();
	return KINDS.has(v) ? v : void 0;
}
function asProtocol(value) {
	const v = value.toLowerCase();
	if (v === "meshtastic" || v === "meshcore" || v === "libp2p" || v === "mixed") return v;
	if (v === "xmrt" || v === "gossipsub" || v === "gossip" || v === "libp2p") return "libp2p";
	if (v === "lora") return "mixed";
	return "none";
}
function tokens(input) {
	return input.toLowerCase().split(/[^a-z0-9]+/).filter((t) => t.length > 1 && !STOP.has(t));
}
function parseQuery(raw) {
	const phrases = [];
	const without = raw.replace(/"([^"]+)"/g, (_, phrase) => {
		const trimmed = phrase.trim();
		if (trimmed) phrases.push(trimmed);
		return " ";
	});
	const free = [];
	let kind;
	let protocol;
	let near;
	let maxHops;
	let capability;
	for (const part of without.split(/\s+/).filter(Boolean)) {
		const match = /^([a-z]+):(.+)$/i.exec(part);
		if (!match) {
			free.push(part);
			continue;
		}
		const key = match[1].toLowerCase();
		const val = match[2];
		if (key === "node" || key === "channel" || key === "person" || key === "place" || key === "bulletin" || key === "page") {
			kind = key;
			if (val) free.push(val);
		} else if (key === "kind") kind = asKind(val) ?? kind;
		else if (key === "proto" || key === "protocol") protocol = asProtocol(val);
		else if (key === "near") near = val.replace(/-/g, " ");
		else if (key === "hops" || key === "hop") {
			const n = Number(val);
			if (Number.isFinite(n)) maxHops = n;
		} else if (key === "cap" || key === "capability") capability = val.toLowerCase();
		else free.push(part);
	}
	return {
		text: free.join(" "),
		phrases,
		kind,
		protocol,
		near,
		maxHops,
		capability,
		raw
	};
}
function highlightTerms(parsed) {
	const terms = /* @__PURE__ */ new Set();
	for (const phrase of parsed.phrases) terms.add(phrase);
	for (const token of tokens(parsed.text)) terms.add(token);
	if (parsed.capability) terms.add(parsed.capability);
	if (parsed.near) terms.add(parsed.near);
	return [...terms];
}
function includes(hay, needle) {
	return hay.toLowerCase().includes(needle.toLowerCase());
}
function hitField(field, token) {
	if (includes(field, token)) return "exact";
	if ((SYN[token] ?? []).some((s) => includes(field, s))) return "syn";
	return "miss";
}
function windowSnippet(doc, terms) {
	const hay = doc.body.replace(/\s+/g, " ").trim();
	const lower = hay.toLowerCase();
	let idx = -1;
	for (const term of terms) {
		const at = lower.indexOf(term.toLowerCase());
		if (at >= 0 && (idx < 0 || at < idx)) idx = at;
	}
	if (idx < 0) return doc.snippet;
	const start = Math.max(0, idx - 50);
	const end = Math.min(hay.length, idx + 150);
	let slice = hay.slice(start, end).trim();
	if (start > 0) slice = `…${slice}`;
	if (end < hay.length) slice = `${slice}…`;
	return slice;
}
function passes(doc, parsed, tab) {
	if (tab !== "all" && doc.kind !== tab) return false;
	if (parsed.kind && doc.kind !== parsed.kind) return false;
	if (parsed.protocol === "none") return false;
	if (parsed.protocol && doc.protocol !== parsed.protocol && doc.protocol !== "mixed") return false;
	if (parsed.maxHops !== void 0 && doc.hops > parsed.maxHops) return false;
	if (parsed.capability) {
		if (!includes(`${doc.tags.join(" ")} ${doc.body} ${doc.facts.map((f) => f.value).join(" ")}`, parsed.capability)) return false;
	}
	if (parsed.near) {
		if (!includes(`${doc.region} ${doc.title} ${doc.tags.join(" ")} ${doc.snippet}`, parsed.near)) return false;
	}
	for (const phrase of parsed.phrases) if (!includes(`${doc.title} ${doc.snippet} ${doc.body}`, phrase)) return false;
	return true;
}
function scoreDoc(doc, parsed, _terms) {
	let score = 0;
	let matched = 0;
	const tags = doc.tags.join(" ");
	for (const token of tokens(parsed.text)) {
		const title = hitField(doc.title, token);
		const tag = hitField(tags, token);
		const path = hitField(doc.path, token);
		const body = hitField(`${doc.body} ${doc.snippet} ${doc.region} ${doc.heardVia}`, token);
		if ([
			title,
			tag,
			path,
			body
		].every((s) => s === "miss")) continue;
		matched += 1;
		if (title === "exact") score += 28;
		else if (title === "syn") score += 12;
		if (tag === "exact") score += 16;
		else if (tag === "syn") score += 6;
		if (path === "exact") score += 8;
		if (body === "exact") score += 7;
		else if (body === "syn") score += 3;
	}
	for (const phrase of parsed.phrases) {
		if (includes(doc.title, phrase)) score += 40;
		else score += 24;
		matched += 1;
	}
	const textTokens = tokens(parsed.text);
	if (textTokens.length > 0 && matched < textTokens.length && parsed.phrases.length === 0) score *= matched / textTokens.length;
	if (textTokens.length >= 2 && matched >= textTokens.length) score *= 1.28;
	if (parsed.capability && includes(doc.tags.join(" "), parsed.capability)) score += 18;
	if (parsed.near && includes(doc.region, parsed.near)) score += 10;
	const asked = textTokens.length + parsed.phrases.length;
	const filtered = parsed.protocol || parsed.kind || parsed.near || parsed.maxHops !== void 0 || parsed.capability;
	if (asked === 0 && filtered) score += 8;
	if (score <= 0) return 0;
	const fresh = doc.kind === "bulletin" ? Math.max(0, 16 - doc.lastHeardMin / 6) : Math.max(0, 4 - doc.lastHeardMin / 200);
	const hop = Math.max(0, 9 - doc.hops * 1.7);
	const ear = doc.snr > 6 ? 3 : doc.snr > 0 ? 1 : 0;
	return score + fresh + hop + ear;
}
function rank(docs, parsed, tab) {
	const terms = highlightTerms(parsed);
	const hits = [];
	for (const doc of docs) {
		if (!passes(doc, parsed, tab)) continue;
		const score = scoreDoc(doc, parsed, terms);
		if (score <= 0) continue;
		hits.push({
			doc,
			score,
			snippet: windowSnippet(doc, terms)
		});
	}
	hits.sort((a, b) => b.score - a.score || a.doc.hops - b.doc.hops || a.doc.lastHeardMin - b.doc.lastHeardMin || a.doc.title.localeCompare(b.doc.title));
	return hits;
}
var VOCAB = (() => {
	const words = /* @__PURE__ */ new Set([
		"meshtastic",
		"meshcore",
		"libp2p",
		"lookout",
		"meshworld"
	]);
	for (const doc of CORPUS) for (const token of tokens(`${doc.title} ${doc.tags.join(" ")}`)) if (token.length >= 4) words.add(token);
	return [...words];
})();
function editDistance(a, b) {
	if (Math.abs(a.length - b.length) > 2) return 9;
	const prev = new Array(b.length + 1);
	const cur = new Array(b.length + 1);
	for (let j = 0; j <= b.length; j++) prev[j] = j;
	for (let i = 1; i <= a.length; i++) {
		cur[0] = i;
		let rowMin = cur[0];
		for (let j = 1; j <= b.length; j++) {
			const cost = a[i - 1] === b[j - 1] ? 0 : 1;
			cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
			if (cur[j] < rowMin) rowMin = cur[j];
		}
		if (rowMin > 2) return 9;
		for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
	}
	return prev[b.length];
}
function correctToken(token) {
	if (token.length < 4 || VOCAB.includes(token)) return void 0;
	let best;
	let bestDist = 9;
	for (const word of VOCAB) {
		if (word[0] !== token[0]) continue;
		const dist = editDistance(token, word);
		const limit = token.length >= 7 ? 2 : 1;
		if (dist > 0 && dist <= limit && dist < bestDist) {
			best = word;
			bestDist = dist;
		}
	}
	return best;
}
function suggestionFor(raw, tab) {
	const parsed = parseQuery(raw);
	const replacements = /* @__PURE__ */ new Map();
	for (const token of tokens(parsed.text)) {
		const fixed = correctToken(token);
		if (fixed) replacements.set(token, fixed);
	}
	if (replacements.size === 0) return void 0;
	const corrected = raw.replace(/[a-z0-9]+/gi, (word) => replacements.get(word.toLowerCase()) ?? word);
	if (corrected.toLowerCase() === raw.toLowerCase()) return void 0;
	if (rank(CORPUS, parseQuery(corrected), tab).length === 0) return void 0;
	return corrected;
}
function relatedFrom(hits, parsed) {
	const skip = new Set(tokens(`${parsed.text} ${parsed.phrases.join(" ")} ${parsed.capability ?? ""} ${parsed.near ?? ""}`));
	const counts = /* @__PURE__ */ new Map();
	for (const hit of hits.slice(0, 6)) for (const tag of hit.doc.tags) {
		const key = tag.toLowerCase();
		if (skip.has(key) || key.length < 3) continue;
		counts.set(tag, (counts.get(tag) ?? 0) + 1);
	}
	return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 6).map(([tag]) => tag);
}
function searchDocs(raw, tab = "all") {
	const trimmed = raw.trim();
	if (trimmed === "*") {
		const parsed = parseQuery("*");
		const hits = CORPUS.filter((doc) => tab === "all" || doc.kind === tab).sort((a, b) => a.hops - b.hops || a.lastHeardMin - b.lastHeardMin || a.title.localeCompare(b.title)).map((doc) => ({
			doc,
			score: 1,
			snippet: doc.snippet
		}));
		return {
			hits,
			parsed,
			related: relatedFrom(hits, parsed),
			terms: []
		};
	}
	if (!trimmed) return {
		hits: [],
		parsed: parseQuery(""),
		related: [],
		terms: []
	};
	const parsed = parseQuery(trimmed);
	const hits = rank(CORPUS, parsed, tab);
	return {
		hits,
		parsed,
		didYouMean: hits.length === 0 ? suggestionFor(trimmed, tab) : void 0,
		related: relatedFrom(hits, parsed),
		terms: highlightTerms(parsed)
	};
}
function suggest(raw) {
	const q = raw.trim();
	if (q.length < 1) return [];
	return searchDocs(q, "all").hits.slice(0, 6);
}
function nearestFieldNode() {
	const nodes = CORPUS.filter((doc) => doc.kind === "node" && doc.id !== "ear");
	nodes.sort((a, b) => a.hops - b.hops || b.snr - a.snr);
	return nodes[0] ?? CORPUS[0];
}
function SearchBox({ initial = "", size = "bar", autoFocus = false, onSubmit, onNearest }) {
	const formId = `lookout-${(0, import_react.useId)().replace(/:/g, "")}`;
	const boxId = (0, import_react.useId)();
	const inputRef = (0, import_react.useRef)(null);
	const [value, setValue] = (0, import_react.useState)(initial);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)(-1);
	const [hits, setHits] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setValue(initial);
	}, [initial]);
	(0, import_react.useEffect)(() => {
		if (!autoFocus) return;
		if (window.matchMedia("(min-width: 768px)").matches) inputRef.current?.focus();
	}, [autoFocus]);
	(0, import_react.useEffect)(() => {
		setHits(suggest(value));
		setActive(-1);
	}, [value]);
	function commit(next) {
		const query = next.trim();
		if (!query) return;
		setOpen(false);
		onSubmit(query);
	}
	const hero = size === "hero";
	const listId = `${boxId}-list`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: hero ? "w-full max-w-xl" : "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			id: formId,
			role: "search",
			onSubmit: (event) => {
				event.preventDefault();
				if (active >= 0 && hits[active]) commit(hits[active].doc.title);
				else commit(value);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex items-center gap-2 border border-line bg-card shadow-sm transition-colors focus-within:border-signal ${hero ? "h-14 rounded-full px-5" : "h-11 rounded-full px-4"}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "size-5 shrink-0 text-muted",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value,
							"aria-label": "Search the mesh",
							"aria-autocomplete": "list",
							"aria-controls": listId,
							"aria-expanded": open && hits.length > 0,
							placeholder: hero ? "Search nodes, channels, places, agents" : "Search the mesh",
							className: `min-w-0 flex-1 bg-transparent text-ink outline-none placeholder:text-muted ${hero ? "text-lg" : "text-base"}`,
							onChange: (event) => {
								setValue(event.target.value);
								setOpen(true);
							},
							onFocus: () => setOpen(true),
							onKeyDown: (event) => {
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
							}
						}),
						value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Clear search",
							className: "grid size-11 shrink-0 place-items-center rounded-full text-muted hover:bg-paper hover:text-ink",
							onClick: () => {
								setValue("");
								setOpen(false);
								inputRef.current?.focus();
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					]
				}), open && hits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					id: listId,
					role: "listbox",
					className: "absolute z-30 mt-2 max-h-80 w-full overflow-auto rounded-2xl border border-line bg-card py-1 text-left shadow-md",
					children: hits.map((hit, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						role: "option",
						"aria-selected": index === active,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: `flex w-full items-center justify-between gap-3 px-4 py-3 text-left ${index === active ? "bg-paper" : "hover:bg-paper"}`,
							onMouseEnter: () => setActive(index),
							onClick: () => commit(hit.doc.title),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-ink",
								children: hit.doc.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-sm text-muted",
								children: KIND_LABEL[hit.doc.kind]
							})]
						})
					}, hit.doc.id))
				})]
			})
		}), hero && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap justify-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				form: formId,
				className: "h-11 min-w-40 rounded-full bg-signal px-5 text-on-signal",
				children: "Search the mesh"
			}), onNearest && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onNearest,
				className: "h-11 min-w-40 rounded-full border border-line bg-card px-5 text-ink",
				children: "Nearest signal"
			})]
		})]
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M6.5 22.5a9.5 9.5 0 0 1 19 0",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.7",
				strokeLinecap: "round",
				opacity: "0.45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10.5 22.5a5.5 5.5 0 0 1 11 0",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16",
				cy: "22.5",
				r: "2",
				fill: "currentColor"
			})
		]
	});
}
function Wordmark({ size = "lg" }) {
	const text = size === "lg" ? "text-5xl sm:text-7xl" : "text-xl sm:text-2xl";
	const mark = size === "lg" ? "size-9 sm:size-12" : "size-6";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "Lookout home",
		className: `inline-flex items-center gap-2 font-display tracking-tight text-ink ${text}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: `shrink-0 text-signal ${mark}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lookout" })]
	});
}
function TopBar({ query = "" }) {
	const navigate = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-line bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchBox, {
					size: "bar",
					initial: query,
					onSubmit: (q) => {
						remember(q);
						navigate({
							to: "/search",
							search: {
								q,
								tab: "all"
							}
						});
					}
				})
			})]
		})
	});
}
function Foot() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-auto border-t border-line px-4 py-4 text-sm text-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Field index for MeshWorld. Queries stay on this radio." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-wrap gap-x-4 gap-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						className: "hover:text-ink",
						children: "About the index"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/search",
						search: {
							q: "*",
							tab: "all"
						},
						className: "hover:text-ink",
						children: "Browse signals"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://meshworld.org",
						className: "hover:text-ink",
						children: "MeshWorld"
					})
				]
			})]
		})
	});
}
//#endregion
export { SearchBox as a, getDoc as c, nearestFieldNode as d, readRecent as f, PROTOCOL_LABEL as i, heardLabel as l, searchDocs as m, Foot as n, TopBar as o, remember as p, KIND_LABEL as r, Wordmark as s, CORPUS as t, hopsLabel as u };

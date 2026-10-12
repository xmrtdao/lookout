import assert from "node:assert/strict";
import { CORPUS } from "./corpus.ts";
import { nearestFieldNode, searchDocs } from "./search.ts";

const ids = CORPUS.map((doc) => doc.id);
assert.equal(new Set(ids).size, ids.length, "duplicate ids");
for (const doc of CORPUS) {
  for (const rel of doc.related) {
    assert.ok(ids.includes(rel), `${doc.id} related missing ${rel}`);
  }
}

const eliza = searchDocs("eliza").hits;
assert.ok(eliza.length >= 2);
assert.ok(eliza[0].doc.id === "eliza" || eliza[0].doc.id === "eliza-dev");

const ridge = searchDocs("proto:meshcore repeater").hits;
assert.equal(ridge[0]?.doc.id, "ridge-repeater");

const hops = searchDocs("hops:0").hits;
assert.ok(hops.length >= 1);
assert.ok(hops.every((hit) => hit.doc.hops === 0));
assert.ok(hops.some((hit) => hit.doc.id === "ear"));

const sar = searchDocs("channel:sar").hits;
assert.ok(sar.some((hit) => hit.doc.id === "ch-sar"));
assert.ok(sar.every((hit) => hit.doc.kind === "channel" || hit.doc.title.toLowerCase().includes("sar") || hit.doc.tags.includes("sar")));

const phrase = searchDocs('"proof of participation"').hits;
assert.equal(phrase[0]?.doc.id, "proof-of-participation");

const caps = searchDocs("cap:python").hits.map((hit) => hit.doc.id);
assert.ok(caps.includes("eliza-dev"));
assert.ok(caps.includes("hermes"));

const typo = searchDocs("meshtasic");
assert.equal(typo.hits.length, 0);
assert.match(typo.didYouMean ?? "", /meshtastic/i);

const storm = searchDocs("storm").hits;
assert.equal(storm[0]?.doc.id, "storm-watch");

assert.equal(nearestFieldNode().id, "south-gate");

const priv = searchDocs("private channel").hits;
assert.ok(priv.some((hit) => hit.doc.id === "private-means-private" || hit.doc.id === "ch-homestead"));

console.log("lookout search ok", CORPUS.length, "docs");

import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("PL501 authority resource matches the approved packet and link contract", async () => {
  const [data, view, sitemap] = await Promise.all([
    read("app/resources/resourceData.ts"),
    read("app/resources/ResourceView.tsx"),
    read("app/sitemap.ts"),
  ]);

  for (const exact of [
    '"slug": "cannabis-dispensary-vs-weed-dispensary"',
    '"seoTitle": "Cannabis vs Weed Dispensary Guide | Planets 59"',
    '"description": "Learn the difference between cannabis dispensary, weed dispensary and cannabis store terminology, plus how near-me searches relate in Brampton."',
    '"title": "Cannabis Dispensary or Weed Dispensary — Which Term Should You Use?"',
    '"href": "/weed-dispensary-brampton"',
    '"href": "/resources/cannabis-dispensary-vs-weed-dispensary"',
    '"question": "Is cannabis the same word as weed?"',
    '"question": "What is the role of the local store page?"',
  ]) assert.ok(data.includes(exact), exact);

  assert.ok(view.includes("Frequently Asked Questions"));
  assert.ok(view.includes("<h3>{faq.question}</h3>"));
  assert.ok(sitemap.includes("RESOURCE_PAGES.map"));
});


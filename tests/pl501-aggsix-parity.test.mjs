import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { resolveDocumentTitle } from "../app/lib/gbp-location.ts";

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

const tierPage = read("app/[tier]/page.tsx");
const tierCopy = read("app/lib/tierSeoContent.ts");
const pillars = read("app/lib/pillarPages.ts");
const local = read("app/lib/gbp-location.ts");
const layout = read("app/layout.tsx");
const home = read("app/HomePage.tsx");
const navbar = read("app/components/Navbar.tsx");
const ageCss = read("app/components/AgeGate.module.css");
const city = read("app/weed-dispensary-brampton/page.tsx");
const robots = read("app/robots.ts");
const sitemap = read("app/sitemap.ts");
const cigs = read("app/native-cigarettes-torbram/page.tsx");
const vapes = read("app/nicotine-vape-torbram/page.tsx");
const hours = read("app/24-hour-dispensary-torbram/page.tsx");

const CORRIDOR = /Torbram|Unit 59|Airport Road/;

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "node_modules") continue;
      walk(full, acc);
    } else if (/\.(tsx|ts|mjs|css)$/.test(entry) && !entry.endsWith(".json")) {
      acc.push(full);
    }
  }
  return acc;
}

test("flower tier titles and H1s carry Torbram corridor tokens", () => {
  for (const title of [
    "Exotic Weed on Torbram at Unit 59 | PLANETS 59",
    "Premium Weed on Torbram near Airport Road | PLANETS 59",
    "AAA+ Weed at Torbram Unit 59 | PLANETS 59",
    "AA Weed on the Torbram Corridor | PLANETS 59",
    "Budget Weed at Torbram and Steeles | PLANETS 59",
  ]) {
    assert.ok(tierCopy.includes(title), title);
    assert.equal(title.split("PLANETS 59").length - 1, 1);
  }
  for (const h1 of [
    "Exotic Weed on Torbram at Unit 59",
    "Premium Weed on Torbram near Airport Road",
    "AAA+ Weed at Torbram Unit 59",
    "AA Weed on the Torbram Corridor",
    "Budget Weed at Torbram and Steeles",
  ]) {
    assert.match(tierCopy, new RegExp(h1.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(h1, CORRIDOR);
    assert.doesNotMatch(h1, /^Exotic Weed$|^Premium Weed$|^Nicotine Vape$/);
  }
  assert.match(tierPage, /TIER_H1\[tierInfo\.key\]/);
  assert.match(pillars, /Native Cigarettes at PLANETS 59 on Torbram/);
  assert.match(pillars, /Nicotine Vape at PLANETS 59 on Torbram/);
  assert.match(cigs, /The numbered bay, not the arterial/);
  assert.match(vapes, /One civic address, two vape lists/);
  assert.doesNotMatch(`${cigs}\n${vapes}\n${tierCopy}`, /Toronto dispensary|weed dispensary toronto/i);
});

test("each tier route exposes CollectionPage, ItemList, and FAQPage", () => {
  assert.match(tierPage, /"@type": "CollectionPage"/);
  assert.match(tierPage, /"@type": "ItemList"/);
  assert.match(tierPage, /numberOfItems: flowers\.length/);
  assert.match(tierPage, /"@type": "FAQPage"/);
  assert.match(tierPage, /about: \{ "@id": STORE_ID \}/);
  assert.doesNotMatch(tierPage, /"@type": "Offer"/);
  assert.match(local, /"@type": "CannabisStore"/);
});

test("document title names PLANETS 59 once", () => {
  assert.match(layout, /template: "%s \| PLANETS 59"/);
  assert.match(layout, /resolveDocumentTitle\(\)/);
  assert.deepEqual(resolveDocumentTitle("Exotic Weed on Torbram at Unit 59 | PLANETS 59"), {
    absolute: "Exotic Weed on Torbram at Unit 59 | PLANETS 59",
  });
  assert.deepEqual(resolveDocumentTitle("Foo | PLANETS 59 | PLANETS 59"), {
    absolute: "Foo | PLANETS 59",
  });
  assert.equal(resolveDocumentTitle("Staff Photo"), "Staff Photo");
  const doubled = "Native Cigarettes on Torbram | PLANETS 59 | PLANETS 59";
  const resolved = resolveDocumentTitle(doubled);
  assert.equal(typeof resolved, "object");
  assert.equal(resolved.absolute.split("PLANETS 59").length - 1, 1);
});

test("flower copy does not use 3.5g or 7g", () => {
  const root = new URL("..", import.meta.url).pathname;
  const files = walk(path.join(root, "app"));
  const offenders = [];
  for (const file of files) {
    if (file.endsWith(".json")) continue;
    const text = readFileSync(file, "utf8");
    if (/3\.5\s?g/i.test(text) || /\b7\s?g\b/i.test(text)) offenders.push(file);
  }
  assert.deepEqual(offenders, []);
});

test("24h hub stays only because site and schema hours are 24h", () => {
  assert.match(local, /hoursLabel: "Open 24 Hours"/);
  assert.match(local, /opens: "00:00"/);
  assert.match(local, /closes: "23:59"/);
  assert.match(pillars, /href: PILLAR_PATHS\.hours/);
  assert.match(pillars, /24-hour Torbram walk-in/);
  assert.match(hours, /HOURS_PILLAR/);
  assert.doesNotMatch(hours, /notFound\(/);
  assert.match(home, /Open 24 Hours/);
});

test("homepage hub includes visit plus the corridor owners", () => {
  for (const token of [
    "PILLAR_PATHS.weedDispensary",
    "PILLAR_PATHS.hours",
    "PILLAR_PATHS.delivery",
    "PILLAR_PATHS.nativeCig",
    "PILLAR_PATHS.nicVape",
    "PILLAR_PATHS.visit",
  ]) {
    assert.match(pillars, new RegExp(token.replace(".", "\\.")));
  }
  assert.match(home, /PillarHubCards/);
  assert.match(home, /nicotine vape, and visit/);
});

test("generic Brampton city page is noindex and canonicals to Torbram", () => {
  assert.match(city, /index: false/);
  assert.match(city, /follow: true/);
  assert.match(city, /weed-dispensary-torbram/);
  assert.doesNotMatch(city, /canonical: "https:\/\/www\.planets59\.com\/weed-dispensary-brampton"/);
  assert.doesNotMatch(sitemap, /\/weed-dispensary-brampton/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /sitemap: "https:\/\/www\.planets59\.com\/sitemap\.xml"/);
  assert.match(local, /STORE_ORIGIN = "https:\/\/www\.planets59\.com"/);
});

test("mobile age-gate is contained and the nav has a hamburger label", () => {
  assert.match(ageCss, /max-width: 100%/);
  assert.match(ageCss, /min-width: 0/);
  assert.match(ageCss, /flex-direction: column/);
  assert.match(navbar, /aria-label=\{menuOpen \? "Close menu" : "Open menu"\}/);
  assert.match(navbar, /aria-label="Choose a menu"/);
  assert.match(navbar, /<path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" \/>/);
  assert.match(navbar, /aria-label="Site menu"/);
});

test("public corridor copy stays PLANETS 59 at Unit 59", () => {
  const surface = [tierCopy, pillars, cigs, vapes, city, home].join("\n");
  assert.doesNotMatch(surface, /Planet 60|\bP60\b|\bPNY\b|sister store|our other locations|\bAthena\b|\bour fleet\b|Ottawa|Gatineau|ByWard|Jane Finch/i);
  assert.doesNotMatch(surface, /medical cannabis|prescription|healing|reserve|First Nation/i);
  assert.match(local, /8500 Torbram Rd Unit 59/);
  assert.match(local, /\+1 \(289\) 536-7493/);
});

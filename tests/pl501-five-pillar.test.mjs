import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const pillars = read("app/lib/pillarPages.ts");
const weed = read("app/weed-dispensary-torbram/page.tsx");
const hours = read("app/24-hour-dispensary-torbram/page.tsx");
const delivery = read("app/weed-delivery-torbram/page.tsx");
const cigs = read("app/native-cigarettes-torbram/page.tsx");
const vapes = read("app/nicotine-vape-torbram/page.tsx");
const city = read("app/weed-dispensary-brampton/page.tsx");
const cityOwner = read("app/components/WeedOwnerPage.tsx");
const hub = read("app/components/PillarHubCards.tsx");
const chrome = read("app/components/PillarLanding.tsx");
const home = read("app/HomePage.tsx");
const footer = read("app/components/Footer.tsx");
const sitemap = read("app/sitemap.ts");
const visit = read("app/visit/page.tsx");
const faq = read("app/faq/page.tsx");
const navbar = read("app/components/Navbar.tsx");

const h1s = [
  "24-Hour Dispensary Open Now on Torbram Road",
  "Weed Delivery from Torbram Unit 59",
  "Native Cigarettes at PLANETS 59 on Torbram",
  "Nicotine Vape at PLANETS 59 on Torbram",
  "Weed Dispensary at PLANETS 59 on Torbram",
];

test("fifth pillar is the Torbram neighbourhood weed-dispensary owner", () => {
  assert.match(pillars, /weedDispensary: "\/weed-dispensary-torbram"/);
  assert.match(pillars, /Weed Dispensary at PLANETS 59 on Torbram/);
  assert.match(pillars, /Weed dispensary on Torbram/);
  assert.match(pillars, /Unit 59 neighbourhood owner/);
  assert.match(pillars, /not a city-wide list/);
  assert.match(weed, /WEED_DISPENSARY_PILLAR/);
  assert.match(weed, /WEED_DISPENSARY_FAQS/);
  assert.match(weed, /canonical: pillarUrl\(WEED_DISPENSARY_PILLAR\.path\)/);
  assert.match(chrome, /faqPageJsonLd\(faqs, pageUrl\)/);
  assert.match(chrome, /id="faq"/);
});

test("fifth-pillar H1, FAQ, and hub card stay unique", () => {
  assert.equal(new Set(h1s).size, h1s.length);
  assert.match(cityOwner, /24-Hour Cannabis Dispensary in Brampton/);
  assert.doesNotMatch(cityOwner, /Weed Dispensary at PLANETS 59 on Torbram/);
  assert.match(pillars, /Is PLANETS 59 the weed dispensary on Torbram at Unit 59\?/);
  assert.match(pillars, /Does this neighbourhood page list every Brampton weed dispensary\?/);
  const ownerFaqBlock = pillars.slice(
    pillars.indexOf("export const WEED_DISPENSARY_FAQS"),
    pillars.indexOf("export const PILLAR_HUB_CARDS"),
  );
  assert.doesNotMatch(ownerFaqBlock, /Is PLANETS 59 a 24-hour dispensary on Torbram Road\?/);
  assert.doesNotMatch(ownerFaqBlock, /24-Hour Dispensary Open Now on Torbram Road/);
  assert.match(hub, /PILLAR_HUB_CARDS/);
  assert.match(pillars, /href: PILLAR_PATHS\.weedDispensary/);
});

test("identity stays PLANETS 59 / Unit 59; no city-wide spam", () => {
  assert.match(weed, /8500 Torbram Rd Unit 59/);
  assert.match(pillars, /8500 Torbram Rd Unit 59/);
  assert.match(pillars, /\+1 \(289\) 536-7493/);
  assert.match(weed, /not a Brampton-wide shop list/);
  assert.match(pillars, /It is not a city-wide Brampton dispensary directory/);
  assert.match(pillars, /does not rank shops, invent a city directory/);
  assert.doesNotMatch(weed, /sister store|our other locations|Athena|Queen West|Parkdale|Jane Finch|The Planet 60|Planet X|\bP60\b|Vaughan|Caledon|Etobicoke/i);
  assert.doesNotMatch(pillars, /medical cannabis|prescription|patient|doctor/i);
  assert.match(city, /index: false/);
  assert.match(city, /weed-dispensary-torbram/);
});

test("fifth pillar is linked from hub chrome and does not touch the menu swimlane", () => {
  assert.match(home, /nicotine vape, and visit/);
  assert.match(footer, /href="\/weed-dispensary-torbram"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-dispensary-torbram/);
  assert.match(visit, /Five Torbram starting points/);
  assert.match(visit, /href="\/weed-dispensary-torbram"/);
  assert.match(faq, /neighbourhood weed dispensary page/);
  assert.match(navbar, /href: "\/weed-dispensary-torbram", label: "Dispensary"/);
  assert.match(hours, /PILLAR_PATHS\.weedDispensary/);
  assert.match(delivery, /PILLAR_PATHS\.weedDispensary/);
  assert.match(cigs, /PILLAR_PATHS\.weedDispensary/);
  assert.match(vapes, /PILLAR_PATHS\.weedDispensary/);
  const stack = [weed, pillars, hub, chrome].join("\n");
  assert.doesNotMatch(stack, /flowers\.json|items\.json|prebuild-stock|adcInventory/);
});

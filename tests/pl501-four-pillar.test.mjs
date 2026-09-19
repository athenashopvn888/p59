import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const hours = read("app/24-hour-dispensary-torbram/page.tsx");
const delivery = read("app/weed-delivery-torbram/page.tsx");
const cigs = read("app/native-cigarettes-torbram/page.tsx");
const vapes = read("app/nicotine-vape-torbram/page.tsx");
const pillars = read("app/lib/pillarPages.ts");
const hub = read("app/components/PillarHubCards.tsx");
const chrome = read("app/components/PillarLanding.tsx");
const home = read("app/HomePage.tsx");
const footer = read("app/components/Footer.tsx");
const sitemap = read("app/sitemap.ts");
const visit = read("app/visit/page.tsx");
const owner = read("app/components/WeedOwnerPage.tsx");
const faq = read("app/faq/page.tsx");
const items = read("app/items/[category]/page.tsx");

const publicSurface = [
  hours,
  delivery,
  cigs,
  vapes,
  pillars,
  hub,
  chrome,
  home,
  footer,
  visit,
  owner,
  faq,
].join("\n");

test("four neighbourhood LPs exist with unique H1s and FAQPage", () => {
  assert.match(pillars, /path: "\/24-hour-dispensary-torbram"/);
  assert.match(pillars, /path: "\/weed-delivery-torbram"/);
  assert.match(pillars, /path: "\/native-cigarettes-torbram"/);
  assert.match(pillars, /path: "\/nicotine-vape-torbram"/);
  assert.match(hours, /24-Hour Dispensary Open Now on Torbram Road/);
  assert.match(delivery, /Weed Delivery from Torbram Unit 59/);
  assert.match(cigs, /Native Cigarettes at PLANETS 59 on Torbram/);
  assert.match(vapes, /Nicotine Vape at PLANETS 59 on Torbram/);
  assert.match(chrome, /id="faq"/);
  assert.match(chrome, /faqPageJsonLd\(faqs, pageUrl\)/);
  assert.match(hours, /HOURS_FAQS/);
  assert.match(delivery, /DELIVERY_FAQS/);
  assert.match(cigs, /NATIVE_CIG_FAQS/);
  assert.match(vapes, /NIC_VAPE_FAQS/);
});

test("homepage hub cards point at all four pillars", () => {
  assert.match(home, /PillarHubCards/);
  assert.match(home, /24-hour, weed delivery, Native cigarettes, and nic-vape/);
  assert.match(home, /slug: "native-cigarettes-torbram"/);
  assert.match(home, /slug: "nicotine-vape-torbram"/);
  assert.match(hub, /PILLAR_HUB_CARDS/);
  assert.match(pillars, /href: PILLAR_PATHS\.hours/);
  assert.match(pillars, /href: PILLAR_PATHS\.delivery/);
  assert.match(pillars, /href: PILLAR_PATHS\.nativeCig/);
  assert.match(pillars, /href: PILLAR_PATHS\.nicVape/);
});

test("hours and sold claims stay true", () => {
  assert.match(pillars, /Walk-in at Unit 59 is open 24 hours/);
  assert.match(pillars, /10 a\.m\. to 10 p\.m\./);
  assert.match(delivery, /\$60 product minimum/);
  assert.match(delivery, /\$10 delivery fee/);
  assert.match(delivery, /does not invent a kilometre radius/);
  assert.match(cigs, /does not replace the live menu or invent stock/);
  assert.match(vapes, /They are not stock promises/);
  assert.match(vapes, /Nicotine is addictive/);
  assert.doesNotMatch(publicSurface, /24-hour courier|24 hour delivery|overnight drop-off is guaranteed/i);
});

test("NAP stays Unit 59 / Brampton / live phone; corridor only", () => {
  assert.match(chrome, /pillarNapLines/);
  assert.match(pillars, /8500 Torbram Rd Unit 59/);
  assert.match(pillars, /\+1 \(289\) 536-7493/);
  assert.match(footer, /href="\/24-hour-dispensary-torbram"/);
  assert.match(footer, /href="\/weed-delivery-torbram"/);
  assert.match(footer, /href="\/native-cigarettes-torbram"/);
  assert.match(footer, /href="\/nicotine-vape-torbram"/);
  assert.match(sitemap, /\$\{BASE\}\/24-hour-dispensary-torbram/);
  assert.match(sitemap, /\$\{BASE\}\/weed-delivery-torbram/);
  assert.match(sitemap, /\$\{BASE\}\/native-cigarettes-torbram/);
  assert.match(sitemap, /\$\{BASE\}\/nicotine-vape-torbram/);
  assert.match(visit, /Four Torbram starting points/);
  assert.match(owner, /24-hour-dispensary-torbram/);
  assert.match(faq, /24-hour Torbram page/);
  assert.match(items, /native-cigarettes-torbram/);
  assert.match(items, /nicotine-vape-torbram/);
  assert.doesNotMatch(
    publicSurface,
    /sister store|our other locations|Athena|Queen West|Parkdale|Jane Finch|The Planet 60|Planet X|\bP60\b|Vaughan|Caledon|Etobicoke/i,
  );
});

test("adults 19+ retail voice; no medical or invented inventory", () => {
  assert.match(hours, /Adults 19\+/);
  assert.match(delivery, /Adults 19\+/);
  assert.match(cigs, /Adults 19\+/);
  assert.match(vapes, /Adults 19\+/);
  assert.doesNotMatch(publicSurface, /medical cannabis|prescription|patient|doctor/i);
  assert.doesNotMatch(publicSurface, /#1 (Native|dispensary)|guaranteed in stock|always in stock/i);
});

test("menu swimlane files are not imported by the pillar stack", () => {
  const stack = [hours, delivery, cigs, vapes, pillars, hub, chrome].join("\n");
  assert.doesNotMatch(stack, /flowers\.json|items\.json|prebuild-stock|adcInventory/);
});

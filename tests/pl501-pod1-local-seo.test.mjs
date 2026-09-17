import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

const local = read("app/lib/gbp-location.ts");
const layout = read("app/layout.tsx");
const home = read("app/page.tsx");
const homeClient = read("app/HomePage.tsx");
const visit = read("app/visit/page.tsx");
const owner = read("app/weed-dispensary-brampton/page.tsx");
const coverage = read("app/components/DeliveryCoverage.tsx");
const sitemap = read("app/sitemap.ts");
const footer = read("app/components/Footer.tsx");
const navbar = read("app/components/Navbar.tsx");
const robots = read("app/robots.ts");
const contact = read("app/contact/page.tsx");
const faq = read("app/faq/page.tsx");
const ownerPage = read("app/components/WeedOwnerPage.tsx");

const publicSurface = [
  local,
  layout,
  home,
  homeClient,
  visit,
  owner,
  coverage,
  footer,
  navbar,
  contact,
  faq,
  ownerPage,
].join("\n");

test("PL501 keeps CannabisStore on the homepage origin and matching FAQPage blocks", () => {
  assert.match(local, /"@type": "CannabisStore"/);
  assert.match(local, /url: `\$\{STORE_ORIGIN\}\/`/);
  assert.match(local, /telephone: gbpLocation\.phoneIntl/);
  assert.match(local, /8500 Torbram Rd Unit 59/);
  assert.match(local, /\+12895367493/);
  assert.match(layout, /cannabisStoreJsonLd/);
  assert.doesNotMatch(layout, /"@type": "Store"/);
  assert.match(home, /faqPageJsonLd\(HOME_FAQS/);
  assert.match(visit, /faqPageJsonLd\(VISIT_FAQS/);
  assert.match(homeClient, /HOME_FAQS\.map/);
  assert.match(visit, /VISIT_FAQS\.map/);
});

test("homepage remains the visit hub and /visit is a unique Torbram Unit 59 route guide", () => {
  assert.match(home, /canonical: STORE_ORIGIN/);
  assert.match(homeClient, /href="\/visit"/);
  assert.match(homeClient, /Torbram \/ Airport Road/);
  assert.match(homeClient, /Unit 59/);
  assert.match(homeClient, /gbpLocation\.mapEmbedUrl/);
  assert.match(homeClient, /Homepage NAP hub/);
  assert.match(visit, /canonical: `\$\{STORE_ORIGIN\}\/visit`/);
  assert.match(visit, /robots: \{ index: true, follow: true \}/);
  assert.match(visit, /How to visit PLANETS 59 at 8500 Torbram Rd Unit 59/);
  assert.match(visit, /14 Torbram/);
  assert.match(visit, /Torbram Rd at 8500 Torbram Rd/);
  assert.match(visit, /Airport Road/);
  assert.match(navbar, /href: "\/visit", label: "Visit"/);
  assert.match(footer, /href="\/visit"/);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
});

test("NAP stays Unit 59 / Brampton / live phone across hub surfaces", () => {
  assert.match(footer, /8500 Torbram Rd Unit 59/);
  assert.match(footer, /\+1 \(289\) 536-7493/);
  assert.match(homeClient, /8500 Torbram Rd Unit 59/);
  assert.match(visit, /8500 Torbram Rd Unit 59/);
  assert.match(ownerPage, /8500 Torbram Rd Unit 59/);
  assert.match(contact, /8500 Torbram Rd Unit 59/);
  assert.match(layout, /canonical: "https:\/\/www\.planets59\.com"/);
  assert.doesNotMatch(layout, /canonical: "https:\/\/www\.planets59\.com\/visit"/);
});

test("standalone Torbram Unit 59 copy has no sister, fleet, or P60 language", () => {
  assert.doesNotMatch(
    publicSurface,
    /sister store|our other locations|Athena|Queen West|Parkdale|Jane Finch|The Planet 60|Planet X|\bP60\b/i,
  );
  assert.doesNotMatch(visit, /GBP Website|point GBP/i);
  assert.match(coverage, /Brampton delivery from PLANETS 59 Unit 59/);
  assert.doesNotMatch(coverage, /geoRadius|Vaughan|Caledon|Etobicoke/);
});

test("GBP Website target stays the homepage; /visit is supporting and crawlable", () => {
  assert.match(homeClient, /homepage is the visit hub/);
  assert.match(robots, /allow: "\/"/);
  assert.doesNotMatch(robots, /disallow: "\/visit"/);
  const corridor = local.slice(local.indexOf("HOME_CORRIDOR_COPY"), local.indexOf("export const HOME_FAQS"));
  const words = corridor.replace(/[^A-Za-z0-9'’.-]+/g, " ").trim().split(/\s+/).filter(Boolean).length;
  assert.ok(words >= 220 && words <= 380, `expected corridor copy around 220–350 words, got ${words}`);
});

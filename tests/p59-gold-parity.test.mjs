import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("gold-site promo strip, weed tier image, cigarette and BB banners are on the homepage stack", () => {
  const banner = read("app/components/FleetAnnouncementBanner.tsx");
  const strip = read("app/components/FlowerBogoStrip.tsx");
  const deals = read("app/lib/flowerDeals.ts");
  assert.match(deals, /TOP WEED TIER SPECIAL/);
  assert.match(deals, /Buy 2g Get 1g FREE/);
  assert.match(deals, /Buy 3g Get 3g FREE/);
  assert.match(strip, /href="\/aaa-weed"/);
  for (const marker of ["data-exotic-tier-banner", "data-cigarette-deal", "data-bb-light-deal", "data-cig-mix-banner", "data-bb-premium-banner", "data-belmont-mix-match-banner"]) {
    assert.ok(banner.includes(marker), marker);
  }
  assert.ok(fs.existsSync(new URL("../public/banners/top-weed-tier-p59.webp", import.meta.url)));
});

test("top three tiers carry Buy 2g Get 1g and Buy 3g Get 3g deal cards", () => {
  const products = read("app/lib/products.ts");
  assert.equal((products.match(/BOGO_BUY_2_GET_1/g) || []).length >= 4, true);
  assert.match(products, /price: 40, grams: 3/);
  assert.match(products, /price: 60, grams: 6/);
  const tier = read("app/[tier]/page.tsx");
  assert.match(tier, /formatAsLowAsAfterPromos/);
  assert.match(tier, /Pay <strong>/);
  const card = read("app/components/FlowerCard.tsx");
  assert.match(card, /formatPayEquals/);
});

test("delivery pricing FAQ, guides index and nav link exist", () => {
  assert.match(read("app/faq/page.tsx"), /Delivery uses bulk pricing/);
  assert.match(read("app/delivery/DeliveryCatalog.tsx"), /Delivery prices apply\./);
  assert.match(read("app/guides/page.tsx"), /CollectionPage/);
  assert.match(read("app/components/Navbar.tsx"), /href: "\/guides"/);
  assert.match(read("app/sitemap.ts"), /\/guides`/);
});

test("no 3.5 wording in the new promo and FAQ copy", () => {
  for (const file of ["app/lib/flowerDeals.ts", "app/faq/page.tsx", "app/guides/page.tsx", "app/components/FleetAnnouncementBanner.tsx"]) {
    assert.doesNotMatch(read(file), /3\.5/, file);
  }
});
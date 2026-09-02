import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(path, "utf8");
const config = read("next.config.ts");
const products = read("app/lib/products.ts");
const tierPage = read("app/[tier]/page.tsx");
const tierCopy = read("app/lib/tierSeoContent.ts");
const home = read("app/page.tsx");
const nav = read("app/components/Navbar.tsx");
const footer = read("app/components/Footer.tsx");
const delivery = read("app/delivery/DeliveryCatalog.tsx");
const deliveryPage = read("app/delivery/page.tsx");
const resources = read("app/resources/resourceData.ts");
const seoPages = read("app/lib/seoPages.ts");
const sitemap = read("app/sitemap.ts");

const tiers = [
  ["exotic", "exotic-weed", "Exotic Weed"],
  ["premium", "premium-weed", "Premium Weed"],
  ["aaa", "aaa-weed", "AAA+ Weed"],
  ["aa", "aa-weed", "AA Weed"],
  ["budget", "budget-weed", "Budget Weed"],
];

test("tier owners use Tier Name plus Weed and weed-bearing canonicals", () => {
  for (const [legacy, canonical, label] of tiers) {
    assert.match(config, new RegExp(`source: "/${legacy}", destination: "/${canonical}", permanent: true`));
    assert.ok(products.includes(`name: "${label}"`));
    assert.ok(products.includes(`slug: "${canonical}"`));
    assert.match(tierCopy, new RegExp(label.replace("+", "\\+")));
  }
  assert.match(tierPage, /canonical: `https:\/\/www\.planets59\.com\/\$\{tierSlug\}`/);
});

test("legacy Weed campaign routes redirect directly to sole canonicals", () => {
  const expected = [
    ["/delivery", "/weed-delivery-brampton"],
    ["/resources/flower-guide", "/resources/weed-flower-guide"],
    ["/resources/value-guide", "/resources/weed-value-guide"],
    ["/info/brampton-weed-dispensary", "/weed-dispensary-brampton"],
    ["/info/york-weed-dispensary", "/weed-dispensary-brampton"],
  ];
  for (const [source, destination] of expected) {
    assert.ok(config.includes(`source: "${source}", destination: "${destination}", permanent: true`));
  }
  assert.doesNotMatch(seoPages, /"slug": "brampton-weed-dispensary"/);
});

test("Weed Delivery acquisition surfaces use the canonical route and name", () => {
  assert.match(deliveryPage, /Weed Delivery Brampton \| PLANETS 59/);
  assert.match(deliveryPage, /planets59\.com\/weed-delivery-brampton/);
  assert.match(delivery, /PLANETS 59 Weed Delivery in Brampton/);
  assert.match(nav, /href="\/weed-delivery-brampton"/);
  assert.match(nav, /<span>Weed Delivery<\/span>/);
  assert.match(footer, /href="\/weed-delivery-brampton">Weed Delivery/);
  assert.match(home, /href="\/weed-delivery-brampton"/);
  assert.match(sitemap, /\$\{BASE\}\/weed-delivery-brampton/);
});

test("nicotine and THC Vape categories remain distinct", () => {
  assert.match(products, /"VAPE PENS": \{[\s\S]*?name: "Nicotine Vape", slug: "vapes"/);
  assert.match(products, /"VAPE DISPOSABLE": \{[\s\S]*?name: "THC Vape", slug: "vape-disposables"/);
  assert.match(products, /Nicotine products are for adults 19\+ and contain nicotine, which is addictive/);
  assert.match(nav, /href: "\/items\/vapes", label: "Nicotine Vape"/);
  assert.match(nav, /href: "\/items\/vape-disposables", label: "THC Vape"/);
});

test("supporting Weed resources are sole self-canonical owners", () => {
  assert.match(resources, /"slug": "weed-flower-guide"/);
  assert.match(resources, /"slug": "weed-value-guide"/);
  assert.doesNotMatch(resources, /"slug": "flower-guide"/);
  assert.doesNotMatch(resources, /"slug": "value-guide"/);
});

test("evergreen public copy omits reversed tiers and known workflow debt", () => {
  const publicCopy = [home, tierCopy, resources].join("\n");
  assert.doesNotMatch(publicCopy, /\bWeed (?:Exotic|Premium|AAA\+?|AA|Budget)\b/i);
  assert.doesNotMatch(publicCopy, /The redesign keeps|The public nav now points|Free evening street parking is available/i);
});

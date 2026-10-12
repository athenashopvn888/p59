import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("audited FAQ deep link and server-rendered homepage ranges stay wired", () => {
  const faq = read("app/faq/page.tsx");
  const page = read("app/page.tsx");
  const home = read("app/HomePage.tsx");
  assert.match(faq, /a: "No\. Delivery orders always use delivery prices, and store prices only apply to in-store purchases\./);
  assert.match(faq, /Delivery uses bulk pricing/);
  assert.match(faq, /id=\{FAQ_IDS\[faq\.q\]\}/);assert.match(faq, /"delivery-price-rule"/);assert.match(faq, /"store-price-on-delivery"/);
  assert.match(page, /export const dynamic = "force-dynamic"/);
  assert.match(page, /(?:getLiveMenu|fetchLiveProducts)/);
  assert.match(home, /storeTierRange\((?:initialFlowers|__menu\.flowers|liveFlowers)/);
});

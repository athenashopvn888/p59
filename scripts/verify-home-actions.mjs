import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const home = readFileSync("app/page.tsx", "utf8");
const homeCss = readFileSync("app/page.module.css", "utf8");
const landing = readFileSync("app/components/GBPLandingPage.tsx", "utf8");
const landingCss = readFileSync("app/components/GBPLandingPage.module.css", "utf8");

for (const source of [home, landing]) {
  assert.match(source, /href="\/exotic-weed"[\s\S]*?EXOTIC WEED/, "Store Menu must target /exotic-weed");
  assert.match(source, /href="\/weed-delivery-brampton"[\s\S]*?WEED DELIVERY/, "Weed Delivery must target /weed-delivery-brampton");
  assert.match(source, /PLANETS 59 WEED DELIVERY/, "Weed Delivery headline is required");
  assert.match(source, /Weed Delivery serves Brampton/, "Published PLANETS 59 delivery area is required");
  assert.match(source, /LIVE ORDER/, "Delivery announcement must explain dispatcher connection");
  assert.doesNotMatch(source, /CALL STORE|Call Store/i, "Landing/home Call Store CTA must be absent");
}
assert.doesNotMatch(landing, /href=\{`tel:[\s\S]{0,120}className=\{`\$\{styles\.btn\}/, "Landing page cannot contain a tel button");
assert.match(homeCss, /\.homeMenuCta\s*\{[\s\S]*?min-height:\s*44px/, "Home CTAs need 44px touch targets");
assert.match(homeCss, /\.homeMenuActions\s*\{[\s\S]*?repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "Home CTAs need a non-overflowing pair");
assert.match(landingCss, /\.btn\s*\{[\s\S]*?min-height:\s*44px/, "Landing CTAs need 44px touch targets");

console.log("PLANETS 59 home and landing action check passed.");

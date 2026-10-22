import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("hidden cigarette 302s are installed from the same gate as the proxy", () => {
  const redirects = readFileSync("app/lib/cigaretteRedirects.ts", "utf8");
  const config = readFileSync("next.config.ts", "utf8");
  const catalog = JSON.parse(readFileSync("app/lib/cigaretteRedirectCatalog.json", "utf8")) as {
    slug: string;
  }[];
  const slugs = new Set(catalog.map((item) => item.slug));
  assert.match(redirects, /export function hiddenCigaretteRedirects/);
  assert.match(redirects, /statusCode: 302/);
  assert.match(redirects, /destination: VAPE_PAGE_PATH/);
  assert.match(redirects, /cigaretteRedirectCatalog/);
  assert.match(config, /routes\.push\(\.\.\.hiddenCigaretteRedirects\(\)\)/);
  for (const slug of ["grabba", "rolled-gold-lights", "bb-full-carton"]) {
    assert.equal(slugs.has(slug), true, slug);
  }
  assert.equal(slugs.has("backwoods-assorted-flavors-20-25"), true);
});

import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import {
  CIG_WORDING_FALLBACK,
  cigarettePublicHeaders,
  readCigaretteTvHeader,
  reconcileSurfaceItems,
  snapshotCigaretteSurfaces,
} from "../app/lib/cigDecision.ts";
import { isRealCigaretteItem } from "../app/lib/cigMarkers.ts";
import { cigaretteBoardTitle, visibleBoardItems } from "../app/tv2/cigaretteBoard.ts";

const carton = { category: "CIGARETTES", name: "BB FULL CARTON", slug: "bb-full-carton" };
const vape = { category: "VAPE PENS", name: "Mango Ice", slug: "mango-ice" };
const kept = [
  { category: "CIGARETTES", name: "BACKWOOD HONEY", slug: "backwood-honey" },
  { category: "CIGARETTES", name: "GRAPE CIGARILLO", slug: "grape-cigarillo" },
  { category: "CIGARETTES", name: "RAW PAPER", slug: "raw-paper" },
  { category: "CIGARETTES", name: "ZYN POUCH", slug: "zyn-pouch" },
  { category: "CIGARETTES", name: "VELO", slug: "velo" },
  { category: "CIGARETTES", name: "HEMP WRAP", slug: "hemp-wrap" },
];

const cards = [
  { id: "VAPES", filter: (item: { category?: string }) => item.category === "VAPE PENS" },
  { id: "CIGARETTES", filter: (item: { category?: string }) => item.category === "CIGARETTES" },
];

test("a true TV flag shows the cigarette card and real cigarette items", () => {
  const surfaces = snapshotCigaretteSurfaces({
    cig: { on: true, webOn: false, tvOn: true },
    items: [vape, carton, ...kept],
    codedShow: false,
  });
  assert.equal(surfaces.tv.show, true);
  assert.equal(cigaretteBoardTitle(true, surfaces.wording), "🚬 CIGARETTES");
  const shelf = visibleBoardItems([vape, carton, ...kept], "CIGARETTES", cards[1].filter, false, true);
  assert.ok(shelf.some((item) => item.slug === carton.slug));
  for (const item of kept) assert.ok(shelf.some((entry) => entry.slug === item.slug), item.slug);
  const shown = reconcileSurfaceItems([vape, ...kept], [vape, carton, ...kept], true);
  assert.ok(shown.some((item) => item.slug === carton.slug));
});

test("a false TV flag keeps wraps and pouches and uses the wraps heading", () => {
  const surfaces = snapshotCigaretteSurfaces({
    cig: { on: true, webOn: false, tvOn: false, wording: { wrapsTitle: "🍂 WRAPS & POUCHES" } },
    items: [vape, carton, ...kept],
    codedShow: false,
  });
  assert.equal(surfaces.tv.show, false);
  assert.equal(cigaretteBoardTitle(false, surfaces.wording), "🍂 WRAPS & POUCHES");
  assert.equal(cigaretteBoardTitle(false, CIG_WORDING_FALLBACK), "🍂 WRAPS & POUCHES");
  const shelf = visibleBoardItems([vape, carton, ...kept], "CIGARETTES", cards[1].filter, false, false);
  assert.equal(shelf.some((item) => item.slug === carton.slug), false);
  for (const item of kept) {
    assert.equal(isRealCigaretteItem(item), false, item.slug);
    assert.ok(shelf.some((entry) => entry.slug === item.slug), item.slug);
  }
  const hidden = reconcileSurfaceItems([vape, carton, ...kept], [carton, ...kept], false);
  assert.equal(hidden.some((item) => item.slug === carton.slug), false);
  for (const item of kept) assert.ok(hidden.some((entry) => entry.slug === item.slug), item.slug);
  const daytime = visibleBoardItems([carton, ...kept], "CIGARETTES", cards[1].filter, true, false);
  assert.equal(daytime.length, 0);
});

test("the website stays hidden when the TV flag is on", () => {
  const live = snapshotCigaretteSurfaces({
    cig: { on: true, webOn: false, tvOn: true },
    items: [carton, ...kept],
    codedShow: true,
  });
  assert.equal(live.web.show, false);
  assert.equal(live.tv.show, true);
  const forced = snapshotCigaretteSurfaces({
    cig: { on: true, webOn: true, tvOn: true },
    items: [carton],
    codedShow: true,
    envRaw: "false",
  });
  assert.equal(forced.web.show, false);
  assert.equal(forced.web.reason, "env");
  assert.equal(forced.tv.show, false);
  const missing = snapshotCigaretteSurfaces({ cig: null, items: [carton], errored: true, codedShow: false });
  assert.equal(missing.web.show, false);
  assert.equal(missing.tv.show, true);
  for (const file of ["app/HomePage.tsx", "app/sitemap.ts", "app/components/Footer.tsx", "app/faq/page.tsx", "app/components/Navbar.tsx"]) {
    assert.match(readFileSync(new URL(`../${file}`, import.meta.url), "utf8"), /SHOW_CIGARETTES/);
  }
  assert.match(readFileSync(new URL("../app/lib/liveMenu.ts", import.meta.url), "utf8"), /isHiddenCigaretteProduct/);
  const banner = readFileSync(new URL("../app/components/fleet/FleetAnnouncementBanner.tsx", import.meta.url), "utf8");
  assert.match(banner, /const showCigarettes = cigarettes\.web/);
});

test("TV boards read the live header and do not build the card list from the coded switch", () => {
  const tv2 = readFileSync(new URL("../app/tv2/page.tsx", import.meta.url), "utf8");
  const tv = readFileSync(new URL("../app/tv/page.tsx", import.meta.url), "utf8");
  const route = readFileSync(new URL("../app/api/tv-data/route.ts", import.meta.url), "utf8");
  const feed = readFileSync(new URL("../app/lib/cigaretteFeed.ts", import.meta.url), "utf8");
  assert.match(tv2, /readCigaretteTvHeader\(res\.headers\)/);
  assert.match(tv2, /visibleBoardItems\(items, card\.id, card\.filter, daytime, tvCig\.show\)/);
  assert.match(tv2, /cigaretteBoardTitle\(tvCig\.show, tvCig\.wording\)/);
  assert.match(tv2, /fetch\("\/api\/tv-data\?type=items"\)/);
  assert.match(tv, /readCigaretteTvHeader\(iRes\.headers\)/);
  assert.match(tv, /fetch\("\/api\/tv-data\?type=items"\)/);
  assert.doesNotMatch(tv2, /SHOW_CIGARETTES/);
  assert.doesNotMatch(tv, /SHOW_CIGARETTES/);
  assert.match(route, /reconcileSurfaceItems\(body, snap\.items, snap\.tv\.show\)/);
  assert.doesNotMatch(route, /SHOW_CIGARETTES|isHiddenCigaretteProduct|type === "cig"/);
  assert.match(feed, /codedShow: SHOW_CIGARETTES/);
  assert.match(feed, /getCigaretteDataset/);
});

test("tv-data cigarette headers follow the TV flag and the page can read them", () => {
  const headers = cigarettePublicHeaders({
    web: false,
    tv: true,
    wording: { ...CIG_WORDING_FALLBACK, tv2BoardTitle: "FEED BOARD", wrapsTitle: "🍂 WRAPS & POUCHES" },
  });
  assert.equal(headers["x-tv-data-cig-tv"], "1");
  assert.equal(headers["x-tv-data-cig-web"], "0");
  const open = readCigaretteTvHeader({ get: (name: string) => headers[name] ?? null });
  assert.equal(open.show, true);
  assert.equal(open.wording.tv2BoardTitle, "FEED BOARD");
  assert.equal(open.wording.wrapsTitle, "🍂 WRAPS & POUCHES");
  const closed = readCigaretteTvHeader({ get: (name: string) => (name === "x-tv-data-cig-tv" ? "0" : null) });
  assert.equal(closed.show, false);
  assert.equal(closed.wording.wrapsTitle, "🍂 WRAPS & POUCHES");
});

test("daytime overlap still shows the cigarette shelf while the TV flag is on", () => {
  const shelf = visibleBoardItems([carton, ...kept, vape], "CIGARETTES", cards[1].filter, true, true);
  assert.ok(shelf.some((item) => item.slug === carton.slug));
  for (const item of kept) assert.ok(shelf.some((entry) => entry.slug === item.slug), item.slug);
  assert.equal(shelf.some((item) => item.slug === vape.slug), false);
});

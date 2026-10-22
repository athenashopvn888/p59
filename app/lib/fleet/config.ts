import type { Nap, ResolvedBanner, ResolvedPage } from "./types.ts";

/**
 * The only store-specific fleet file. Other stores replace this module
 * and leave the rest of app/lib/fleet and app/components/fleet as-is.
 */
export const FLEET_STORE_CODE = "PL501";
export const FLEET_STORE_NAME = "PLANETS 59";
export const FLEET_AREA = "Brampton";
export const FLEET_DOMAIN = "www.planets59.com";
export const FLEET_DOMAINS = ["www.planets59.com", "planets59.com"] as const;
export const FLEET_ORIGIN = "https://www.planets59.com";

/** Public blob origin. Objects live at /{storeCode}/manifest.json and /{storeCode}/articles/. */
export const FLEET_BLOB_ORIGIN = "https://dhaah0upvlpukv56.public.blob.vercel-storage.com";

export const FLEET_COLORS = {
  banner: "#111827",
  bannerText: "#ffffff",
} as const;

/**
 * Digits or formatted numbers. An article containing any of these is dropped.
 * Delivery-desk numbers are not stored here; sheet copy that names that desk is rejected in the resolver.
 */
export const FLEET_BLOCKED_PHONES: readonly string[] = [];

export const FLEET_ARTICLES_PATH = "/articles";

/** Page and spot names for the six TV2 category cards. Spot is the card name. */
export const TV2_PAGE = "TV2";
export const TV2_CARDS = [
  "PREROLLS_ADDONS",
  "VAPES",
  "EDIBLES",
  "CONCENTRATES",
  "CIGARETTES",
  "MAGIC",
] as const;

export const TV_PAGE = "TV";
export const TV_FULLSCREEN_SPOTS = [
  "Fullscreen promo 1",
  "Fullscreen promo 2",
  "Fullscreen promo 3",
] as const;

/** Fort York Cannabis takeover defaults: 5s on screen, once a minute, 5s first preview, 650ms slide. */
export const TV_PROMO_SHOW_SECONDS = 5;
export const TV_PROMO_EVERY_MINUTES = 1;
export const TV_PROMO_INITIAL_DELAY_MS = 5_000;
export const TV_PROMO_SLIDE_MS = 650;

export function defaultManifestUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/manifest.json`;
}

export function articlesIndexUrl(storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/index.json`;
}

export function articleBodyUrl(slug: string, storeCode = FLEET_STORE_CODE): string {
  return `${FLEET_BLOB_ORIGIN}/${storeCode}/articles/${encodeURIComponent(slug)}.json`;
}

/** Coded NAP from the live Unit 59 pages. Values match the site; they are not rewritten. */
export const CODED_NAP: Nap = {
  name: "PLANETS 59",
  street: "8500 Torbram Rd Unit 59",
  city: "Brampton",
  province: "ON",
  postalCode: "L6T 5C6",
  cityLine: "Brampton, ON L6T 5C6",
  area: "Torbram / Airport Road",
  intersection: "Torbram Rd & Steeles Ave E",
  areaLine: "Torbram Rd & Steeles Ave E, Torbram / Airport Road",
  phoneDisplay: "+1 (289) 536-7493",
  phoneTel: "+12895367493",
  hours: "Open 24 Hours",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=PLANETS%2059&query_place_id=ChIJj4B2l5Y9K4gRorxT85ql9Sg",
  mapsEmbedUrl: "https://www.google.com/maps?q=8500%20Torbram%20Rd%20Unit%2059%2C%20Brampton%2C%20ON%20L6T%205C6&z=16&output=embed",
  lat: "43.7231",
  lng: "-79.69274",
  schemaName: "Planets 59 Dispensary Weed Delivery",
  website: "https://www.planets59.com",
};

const STORE_AREA = "Torbram Road, Brampton";

export const CODED_BANNERS: ResolvedBanner[] = [
  {
    id: "weed",
    page: "Home",
    spot: "Top banner",
    href: "/exotic-weed",
    categoryName: "Exotic Weed",
    hidden: false,
    render: "image",
    image: "/banners/core-top-weed-tier.webp",
    codedImage: "/banners/core-top-weed-tier.webp",
    alt: `${FLEET_STORE_NAME} in ${STORE_AREA} — Exotic, Premium and AAA+ top weed tiers`,
    title: `${FLEET_STORE_NAME} top weed tiers — Exotic, Premium and AAA+`,
    textBar: "Exotic, Premium and AAA+ weed",
    caption: "Top 3 tiers only (Exotic, Premium, AAA+): Buy 2g Get 1g FREE · Buy 3g Get 3g FREE (6g)",
  },
  {
    id: "vapes",
    page: "Home",
    spot: "Promo banner 2",
    href: "/items/vapes",
    categoryName: "Nicotine Vapes",
    hidden: false,
    render: "image",
    image: "/banners/core-vapes-nicotine-thc.webp",
    codedImage: "/banners/core-vapes-nicotine-thc.webp",
    alt: `${FLEET_STORE_NAME} in ${STORE_AREA} — nicotine vapes and THC vapes`,
    title: `${FLEET_STORE_NAME} nicotine vapes and THC vapes`,
    textBar: "Nicotine vapes + THC vapes",
    caption: "Nicotine vapes + THC vapes",
  },
  {
    id: "cigarettes",
    page: "Home",
    spot: "Promo banner 3",
    href: "/items/cigarettes",
    categoryName: "Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/native-cigarette-offer-20260822.webp",
    codedImage: "/banners/native-cigarette-offer-20260822.webp",
    alt: `${FLEET_STORE_NAME} in ${STORE_AREA} — 2 packs for $5 mix and match and $25 carton cigarette offer`,
    title: `${FLEET_STORE_NAME} cigarette offer — 2 packs $5 mix and match, $25 carton`,
    textBar: "2 packs $5 mix & match · $25 carton",
    caption: "2 packs $5 mix & match · $25 carton",
  },
  {
    id: "premium-cigarettes",
    page: "Home",
    spot: "Promo banner 4",
    href: "/items/cigarettes",
    categoryName: "Premium Cigarettes",
    hidden: false,
    render: "image",
    image: "/banners/core-premium-bb-marlboro-belmont.webp",
    codedImage: "/banners/core-premium-bb-marlboro-belmont.webp",
    alt: `${FLEET_STORE_NAME} in ${STORE_AREA} — BB Full Flavor and Lights 2 packs for $5, Marlboro and Belmont $10 per pack`,
    title: `${FLEET_STORE_NAME} premium cigarettes — BB 2 packs $5, Marlboro and Belmont $10 per pack`,
    textBar: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack",
    caption: "BB Full Flavor + Lights — 2 packs $5 · Marlboro & Belmont — $10/pack",
  },
];

export const CODED_PAGES: Record<string, ResolvedPage> = {
  Home: {
    description: "PLANETS 59 is the walk-in cannabis store at 8500 Torbram Rd Unit 59 in northeast Brampton, on the Torbram / Airport Road corridor. Open 24 hours. Adults 19+. Call +1 (289) 536-7493.",
    metaTitle: "",
    metaDescription: "PLANETS 59 is the walk-in cannabis store at 8500 Torbram Rd Unit 59 in northeast Brampton, on the Torbram / Airport Road corridor. Open 24 hours. Adults 19+. Call +1 (289) 536-7493.",
  },
  Contact: {
    description: "Visit PLANETS 59 at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. We are open 24 hours daily. Walk-ins welcome.",
    metaTitle: "Contact Us — PLANETS 59 | 8500 Torbram Rd Unit 59, Brampton",
    metaDescription: "Visit PLANETS 59 at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. We are open 24 hours daily. Walk-ins welcome.",
  },
};

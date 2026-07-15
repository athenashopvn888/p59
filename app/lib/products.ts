/* -- Product & Item Types -- */
export interface FlowerProduct {
  sku: string;
  name: string;
  slug: string;
  tier: string;
  type: "indica" | "sativa" | "hybrid";
  isHot: boolean;
  isSale: boolean;
  thc: string;
  price3g: PricePoint | null;
  price5g: PricePoint | null;
  price14g: PricePoint | null;
  price28g: PricePoint | null;
  image: string;
}

export interface PricePoint {
  regular: number;
  sale: number | null;
}

export interface ItemProduct {
  sku: string;
  name: string;
  slug: string;
  category: string;
  type: string;
  thc: string;
  mg: string;
  price: string;
  image: string;
  promoImage: string | null;
}

/* ── Data imports (static fallback) ── */
import flowersJson from "./flowers.json";
import itemsJson from "./items.json";

export const allFlowers: FlowerProduct[] = flowersJson as FlowerProduct[];
export const allItems: ItemProduct[] = itemsJson as ItemProduct[];

/* ── Live stock fetch from Apps Script ── */
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || "";

interface LiveStockResponse {
  flowers: FlowerProduct[];
  items: ItemProduct[];
  storeCode?: string;
  stockDate?: string;
}

/**
 * Fetch live stock-filtered products from Apps Script endpoint.
 * Used at build time (getStaticProps / generateStaticParams).
 * Falls back to static JSON if endpoint not configured.
 */
export async function fetchLiveProducts(): Promise<{
  flowers: FlowerProduct[];
  items: ItemProduct[];
  isLive: boolean;
  stockDate: string | null;
}> {
  if (!APPS_SCRIPT_URL) {
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }

  try {
    const res = await fetch(`${APPS_SCRIPT_URL}?store=PL501`, {
      next: { revalidate: 300 }, // Cache for 5 min during build
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: LiveStockResponse = await res.json();
    return {
      flowers: data.flowers || allFlowers,
      items: data.items || allItems,
      isLive: true,
      stockDate: data.stockDate || null,
    };
  } catch (err) {
    console.warn("[products] Live fetch failed, using static data:", err);
    return { flowers: allFlowers, items: allItems, isLive: false, stockDate: null };
  }
}

export const TIER_CONFIG: Record<
  string,
  {
    name: string; slug: string; color: string; icon: string; tagline: string; banner: string;
    unitPrice: number; /* $/g */
    deal3g: { label: string; total: string; price: number } | null; /* 3g bundle pricing */
    deal6g: { label: string; total: string; price: number } | null; /* 6g bundle pricing (top 3 only) */
  }
> = {
  EXOTIC: {
    name: "Exotic",
    slug: "exotic",
    color: "#f59e0b",
    icon: "\uD83D\uDD25",
    tagline: "Explore the current Exotic flower menu",
    banner: "/banners/exotics_banner.webp",
    unitPrice: 20,
    deal3g: { label: "3g bundle", total: "3G", price: 40 },
    deal6g: { label: "6g bundle", total: "6G", price: 60 },
  },
  PREMIUM: {
    name: "Premium",
    slug: "premium",
    color: "#a78bfa",
    icon: "\uD83D\uDC8E",
    tagline: "Explore the current Premium flower menu",
    banner: "/banners/premium_banner.webp",
    unitPrice: 15,
    deal3g: { label: "3g bundle", total: "3G", price: 30 },
    deal6g: { label: "6g bundle", total: "6G", price: 45 },
  },
  "AAA+": {
    name: "AAA+",
    slug: "aaa",
    color: "#22d3ee",
    icon: "\u26A1",
    tagline: "Explore the current AAA+ flower menu",
    banner: "/banners/aaa_plus_banner.webp",
    unitPrice: 10,
    deal3g: { label: "3g bundle", total: "3G", price: 20 },
    deal6g: { label: "6g bundle", total: "6G", price: 30 },
  },
  AA: {
    name: "AA",
    slug: "aa",
    color: "#34d399",
    icon: "\u2726",
    tagline: "Explore the current AA flower menu",
    banner: "/banners/aa_banner.webp",
    unitPrice: 4,
    deal3g: null,
    deal6g: null,
  },
  BUDGET: {
    name: "Budget",
    slug: "budget",
    color: "#94a3b8",
    icon: "\uD83D\uDCB0",
    tagline: "Shreds & value OZs \u00B7 From $40/oz",
    banner: "/banners/budget_banner.webp",
    unitPrice: 3,
    deal3g: { label: "$10 / 3g Special", total: "3G", price: 10 },
    deal6g: null,
  },
};

/* ── Item category config ── */
export interface CategoryInfo {
  name: string; slug: string; color: string; icon: string; banner?: string;
  seoTitle: string; seoIntro: string; seoDescription: string;
  faqs: { q: string; a: string }[];
}

export const CATEGORY_CONFIG: Record<string, CategoryInfo> = {
  EDIBLES: {
    banner: "/banners/edibles_prerolls_more_banner.webp",
    name: "Edibles", slug: "edibles", color: "#f97316", icon: "🍬",
    seoTitle: "Cannabis Edibles Brampton — Gummies, Chocolates & Drinks",
    seoIntro: "Browse edible listings at PLANETS 59 in Brampton. Compare product names, package details, listed details, and current menu information before choosing.",
    seoDescription: "Use the edibles category to compare current edible listings at PLANETS 59. Product names, package details, prices, and listings can change, so use the current menu or ask staff before visiting.",
    faqs: [
      { q: "What cannabis edibles do you carry?", a: "Use the current menu to compare edible names, package details, prices, and listing details." },
      { q: "Where can I find item details?", a: "Check the current menu and product package for item-specific details." },
      { q: "Can I buy edibles at PLANETS 59?", a: "Yes! Visit us at 8500 Torbram Rd #59, Brampton. We're open daily from 10:00 AM to 01:00 AM with a full edibles selection in store." },
    ],
  },
  "VAPE PENS": {
    banner: "/banners/01_Vape_Pens.webp",
    name: "THC Vape", slug: "vapes", color: "#8b5cf6", icon: "💨",
    seoTitle: "Vape Pens Brampton — THC & Nicotine Cartridges",
    seoIntro: "Compare vape listings at PLANETS 59 in Brampton by product name, format, listed details, and current menu details.",
    seoDescription: "Vape shoppers should use the current menu first, then ask staff if a cartridge, disposable, battery, or format detail needs a current answer. PLANETS 59 is located at 8500 Torbram Rd #59 in Brampton.",
    faqs: [
      { q: "What vape formats may be listed?", a: "The category may include 510-thread THC cartridges, nicotine vape pods, disposable vapes, and compatible batteries. Check the current menu." },
      { q: "Do you list vape batteries?", a: "The menu may list 510-thread batteries and pod systems. Check the current category for details." },
    ],
  },
  "VAPE DISPOSABLE": {
    banner: "/banners/02_Vape_Disposable.webp",
    name: "Nic Vape", slug: "vape-disposables", color: "#a78bfa", icon: "💨",
    seoTitle: "Disposable Vapes Brampton — THC Disposable Pens",
    seoIntro: "Use the disposable vape category at PLANETS 59 for current product names, formats, and menu details.",
    seoDescription: "Disposable vape listings are easiest to compare inside their own category. Check the current menu and ask staff if a detail matters before choosing.",
    faqs: [
      { q: "How long does a disposable vape last?", a: "Most disposable THC vapes contain 0.5g-1g of distillate and last between 100-300 puffs depending on usage." },
      { q: "Are disposable vapes rechargeable?", a: "Most are designed for single use, but some models include a USB-C charging port to ensure you can use the full cartridge." },
    ],
  },
  CONCENTRATES: {
    banner: "/banners/03_Concentrates.webp",
    name: "Concentrates", slug: "concentrates", color: "#f59e0b", icon: "💎",
    seoTitle: "Cannabis Concentrates Brampton — Shatter, Wax, Hash & Live Resin",
    seoIntro: "Compare concentrates at PLANETS 59 in Brampton by product type, name, listed details, and current menu details.",
    seoDescription: "Concentrate shoppers should stay inside the concentrate category first, then compare current listing details and ask staff when a format question needs a current answer.",
    faqs: [
      { q: "What concentrate formats may be listed?", a: "The category may include shatter, wax, budder, live resin, rosin, hash, kief, and THC diamonds. Check the current menu." },
      { q: "How are concentrate formats listed?", a: "Check the current category and product package for format-specific details." },
    ],
  },
  PREROLLS: {
    banner: "/banners/04_Pre_Rolls.webp", name: "Pre-Rolls", slug: "prerolls", color: "#22c55e", icon: "🚬",
    seoTitle: "Pre-Rolls Brampton — Ready-to-Smoke Cannabis Joints",
    seoIntro: "Shop pre-rolls at PLANETS 59 by comparing current product name, format, package details, and listed details.",
    seoDescription: "Pre-rolls should be compared inside the pre-roll category instead of mixed into flower, edibles, vapes, or concentrates. Use the current menu for details that change.",
    faqs: [
      { q: "What pre-roll formats may be listed?", a: "The category may include singles, 3-packs, multi-packs, and infused pre-rolls. Check the current menu." },
      { q: "Are your pre-rolls made with quality flower?", a: "Yes! Our pre-rolls are filled with ground flower from our regular menu tiers — not shake or trim." },
    ],
  },
  "ADD ONS": {
    banner: "/banners/05_Accessories.webp",
    name: "Accessories", slug: "add-ons", color: "#34d399", icon: "➕",
    seoTitle: "Cannabis Accessories Brampton — Grinders, Papers, Lighters & More",
    seoIntro: "Browse accessories at PLANETS 59 and compare current menu details before visiting.",
    seoDescription: "Accessory listings are practical add-ons for the visit. Check the current menu for what is listed and ask staff when a specific item matters.",
    faqs: [
      { q: "What accessories do you sell?", a: "We carry grinders, rolling papers, filter tips, lighters, rolling trays, storage jars, and more." },
    ],
  },
  "MAGIC & OTHERS": {
    name: "Magic Stuff", slug: "magic", color: "#64748b", icon: "*",
    seoTitle: "Magic Stuff - Specialty Items",
    seoIntro: "Browse current menu for listed specialty products. Listings may vary by store.",
    seoDescription: "Current specialty items are listed when they are carried on the menu. Product listings may vary by store and by day. Check the current menu for current selection.",
    faqs: [
      { q: "What specialty items are listed?", a: "Selection varies by store and by day. Check the current menu for listed specialty products." },
      { q: "Do listings vary by location?", a: "Yes. Specialty item listings may vary by store, so please check the current menu for this location." },
    ],
  },
  CIGARETTES: {
    banner: "/banners/06_Cigarettes.webp",
    name: "Cigarettes", slug: "cigarettes", color: "#78716c", icon: "CG",
    seoTitle: "Native Cigarettes Brampton | PLANETS 59",
    seoIntro: "PLANETS 59 lists Native smokes in Brampton. Current cigarette menu brands include Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights, with $25/carton pricing shown where listed.",
    seoDescription: "Use the cigarette category to compare current Native smoke listings at PLANETS 59. Brands, carton options, and prices can change, so check the current menu or ask staff before visiting.",
    faqs: [
      { q: "Does PLANETS 59 list Native cigarettes?", a: "Check the cigarette category for current Native smoke listings and brand names." },
      { q: "What brands are listed?", a: "Current menu brands include Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights. Confirm current options before visiting." },
      { q: "Are $25 carton listings always current?", a: "No. Where $25 carton-style listings are shown, confirm the current price and selection through the menu or staff." },
    ],
  },
};

/* ── Helper functions ── */
export function getFlowersByTier(tier: string): FlowerProduct[] {
  return allFlowers.filter(
    (f) => f.tier.toUpperCase() === tier.toUpperCase()
  );
}

export function getFlowerBySlug(slug: string): FlowerProduct | undefined {
  return allFlowers.find((f) => f.slug === slug);
}

export function getItemsByCategory(category: string): ItemProduct[] {
  return allItems.filter(
    (i) => i.category.toUpperCase() === category.toUpperCase()
  );
}

export function getTierFromSlug(
  slug: string
): { key: string; config: (typeof TIER_CONFIG)[string] } | undefined {
  const entry = Object.entries(TIER_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getCategoryFromSlug(
  slug: string
): { key: string; config: (typeof CATEGORY_CONFIG)[string] } | undefined {
  const entry = Object.entries(CATEGORY_CONFIG).find(
    ([, v]) => v.slug === slug
  );
  if (!entry) return undefined;
  return { key: entry[0], config: entry[1] };
}

export function getLowestPrice(flower: FlowerProduct): number | null {
  const prices = [flower.price3g, flower.price5g, flower.price14g, flower.price28g]
    .filter((p): p is PricePoint => p !== null)
    .map((p) => p.sale ?? p.regular);
  return prices.length ? Math.min(...prices) : null;
}

export function formatPrice(p: PricePoint | null): string {
  if (!p) return "—";
  if (p.sale !== null) return `$${p.sale}`;
  return `$${p.regular}`;
}

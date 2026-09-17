const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";

const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  absoluteTitle?: boolean;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: readonly { name: string; image: string; sourceSlug?: string }[];
    disclosure: string;
    theme?: "cigarettes" | "nicotine";
    menuHref?: string;
    primaryLabel?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    warning?: string;
  };
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    "slug": "cheap-weed-brampton",
    "title": "PLANETS 59 Cheap Weed and Budget Weed Guide",
    "metaDescription": "A value-minded PLANETS 59 guide for cheap weed, budget weed, affordable weed, and flower tier shopping in Brampton.",
    "h1": "PLANETS 59 Cheap Weed and Budget Weed Guide",
    "icon": "$",
    "heroTagline": "Value shopping with current menu checks",
    "sections": [
      {
        "heading": "Start With Budget Weed And AA Weed",
        "body": "If value-minded flower shopping is the mission, start with Budget Weed and AA Weed before exploring the rest of the menu."
      },
      {
        "heading": "Compare The Current Menu",
        "body": "Look at the product name, format and information presented while browsing. Ask PLANETS 59 staff when one detail matters to your visit."
      },
      {
        "heading": "Know When To Move Up",
        "body": "If Budget Weed or AA Weed does not fit the visit, explore AAA+ Weed, Premium Weed or Exotic Weed next."
      }
    ],
    "faqs": [
      {
        "q": "Where should value shoppers start at PLANETS 59?",
        "a": "Start with Budget Weed and AA Weed, then explore the product information presented with each flower collection."
      },
      {
        "q": "Does affordable weed mean guessing?",
        "a": "No. Compare the collection, product name, format and other information presented while browsing. Ask staff if anything is unclear."
      },
      {
        "q": "Where can shoppers ask about one product?",
        "a": "Ask PLANETS 59 staff when one product detail is important to your visit."
      }
    ]
  },
  {
    "slug": "native-cigarettes-brampton",
    "title": "PLANETS 59 Native Cigarettes Resource",
    "metaDescription": "PLANETS 59 Native cigarettes resource with brand names shown on the menu and $25 carton notes where listed.",
    "h1": "PLANETS 59 Native Cigarettes Resource",
    "icon": "#",
    "heroTagline": "$25 carton notes and brand names where listed",
    "heroPreview": {
      "eyebrow": "PLANETS 59 · 8500 Torbram Rd Unit 59, Brampton",
      "intro": "Cigarette category and visit information for Torbram Road",
      "products": NATIVE_HERO_PRODUCTS,
      "disclosure": NATIVE_HERO_DISCLOSURE
    },
    "sections": [
      {
        "heading": "Start With The Cigarette Category",
        "body": "The cigarette menu currently lists Native smoke options at $25/carton, including Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights. Check the current menu or ask staff before making the trip."
      },
      {
        "heading": "Keep Cannabis And Smokes Separate",
        "body": "If you are also shopping flower, pre-rolls, edibles, vapes, or concentrates, compare those categories separately. It keeps the visit cleaner."
      },
      {
        "heading": "Confirm What Matters Today",
        "body": "Specific brands, carton options, and prices can change. Use this resource for the shopping path, then confirm current details with the menu or staff."
      }
    ],
    "faqs": [
      {
        "q": "Does PLANETS 59 list Native cigarette options?",
        "a": "The current cigarette menu lists Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights. Confirm current options before visiting."
      },
      {
        "q": "Are $25 carton listings always current?",
        "a": "No. This page points shoppers toward current menu listings where $25 carton-style options are shown. Confirm current price and listings before choosing."
      },
      {
        "q": "Where should shoppers start?",
        "a": "Open the cigarette category, then use the store page for directions and listed hours."
      }
    ]
  },
  {
    "slug": "weed-store-near-mississauga",
    "title": "Visiting PLANETS 59 From Mississauga | Brampton Store",
    "absoluteTitle": true,
    "metaDescription": "Coming from Mississauga? PLANETS 59 is at 8500 Torbram Rd Unit 59 in Brampton, near Steeles Ave E. The Brampton storefront is open 24 hours daily.",
    "h1": "Visiting PLANETS 59 From Mississauga",
    "icon": ">",
    "heroTagline": "Coming from Mississauga? This PLANETS 59 location is in Brampton, not Mississauga.",
    "banner": "/banners/01_welcome_to_planets59.webp",
    "sections": [
      {
        "heading": "PLANETS 59 Brampton Store",
        "body": "PLANETS 59 is at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, near Steeles Avenue East. The Brampton storefront is open 24 hours daily. Use the Unit 59 visit guide and the Brampton cannabis dispensary page for complete store and visit details."
      },
      {
        "heading": "Planning the Trip From Mississauga",
        "body": "Use your current map or transit service for up-to-date travel information before leaving. You can browse the current PLANETS 59 menu before planning the trip."
      },
      {
        "heading": "Delivery Is Separate From Store Hours",
        "body": "Brampton delivery runs from 10 a.m. to 10 p.m. Availability outside Brampton can vary with driver coverage; contact PLANETS 59 to confirm before relying on delivery."
      }
    ],
    "faqs": [
      {
        "q": "Is PLANETS 59 located in Mississauga?",
        "a": "No. PLANETS 59 is located at 8500 Torbram Rd Unit 59 in Brampton, near Steeles Avenue East."
      },
      {
        "q": "Is the Brampton store open 24 hours?",
        "a": "Yes. The PLANETS 59 storefront in Brampton is open 24 hours daily."
      },
      {
        "q": "Does PLANETS 59 deliver to Mississauga?",
        "a": "Published delivery information covers Brampton from 10 a.m. to 10 p.m. Availability outside Brampton may vary with driver coverage; contact PLANETS 59 to confirm."
      }
    ]
  },
  {
    "slug": "nicotine-vapes-brampton",
    "title": "Nicotine Vapes in Brampton | PLANETS 59",
    "absoluteTitle": true,
    "metaDescription": "Adults 19+: review six nicotine vape product pages from PLANETS 59 in Brampton, then check /items/vapes for the current category. Nicotine is addictive.",
    "h1": "Nicotine Vapes at PLANETS 59 in Brampton",
    "icon": "NV",
    "heroTagline": "Adults 19+ · Nicotine is addictive.",
    "heroPreview": {
      "eyebrow": "PLANETS 59 • BRAMPTON • ADULTS 19+",
      "intro": "Searching for nicotine vapes near me in Brampton? This adult-only PLANETS 59 guide features six live-checked VAPE PENS product pages. Compare their supported names, then use /items/vapes for the current nicotine category. Product details can change. Nicotine is addictive.",
      "products": [
        { "name": "GEEK PROMAX – 5% | 30K PUFFS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg", "sourceSlug": "geek-promax-5-30k-puffs" },
        { "name": "GEEK UNIVERSE 25k PUFFS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp", "sourceSlug": "geek-universe-25k-puffs" },
        { "name": "NEXA PIX | 30K PUFFS | MANY FLAVORS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp", "sourceSlug": "nexa-pix-30k-puffs-many-flavors" },
        { "name": "OVNS 10000 – 5% | 10K PUFFS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg", "sourceSlug": "ovns-10000-5-10k-puffs" },
        { "name": "OVNS DISPOSABLE – 5% | 8ML | MANY FLAVORS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp", "sourceSlug": "ovns-disposable-5-8ml-many-flavors" },
        { "name": "OVNS PIONEER – 5% | 22K PUFFS", "image": "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp", "sourceSlug": "ovns-pioneer-5-22k-puffs" }
      ],
      "disclosure": "Featured cards are live-checked starting points, not guarantees of current stock, price or availability.",
      "theme": "nicotine",
      "menuHref": "/items/vapes",
      "primaryLabel": "Browse Nicotine Vapes",
      "secondaryLabel": "Compare the Six Featured Items",
      "secondaryHref": "#featured-vapes",
      "identityStrip": "PLANETS 59 | Brampton | Adults 19+ | Nicotine is addictive.",
      "featuredHeading": "Six Live-Checked PLANETS 59 Vape Cards",
      "featuredIntro": "This shortlist contains six live-checked Geek, NEXA and OVNS VAPE PENS product pages. Use each card for its supported display name, then rely on /items/vapes for the current PLANETS 59 category listing.",
      "warning": "Adults 19+. Nicotine is addictive."
    },
    "sections": [
      {
        "heading": "Read Each Product Format Carefully",
        "body": "One featured page explicitly identifies an OVNS disposable. Keep that description attached only to that product and do not apply the disposable label to another featured item by assumption."
      },
      {
        "heading": "Puff Counts Identify Listings",
        "body": "Several featured names include puff counts. Use those numbers to distinguish the listings, not as guarantees of duration, performance or superiority."
      },
      {
        "heading": "Keep Nicotine and Cannabis Vape Routes Separate",
        "body": "This adult-only PLANETS 59 guide uses VAPE PENS products under /items/vapes. THC and cannabis vape products under /items/vape-disposables are excluded."
      },
      {
        "heading": "Review the Current Brampton Category",
        "body": "Before choosing, open /items/vapes and the individual product page for current supported details. This guide does not claim prices, stock or guaranteed availability."
      }
    ],
    "faqs": [
      {
        "q": "Where should I check PLANETS 59’s current nicotine selection?",
        "a": "Use /items/vapes. The six featured cards are live-checked starting points while the current category listing controls selection information."
      },
      {
        "q": "Does every featured item use the same format?",
        "a": "No format should be assumed. One featured page explicitly identifies an OVNS disposable. Read each current product page for its supported format and details."
      },
      {
        "q": "Does this page include cannabis vapes?",
        "a": "No. It covers nicotine products from the VAPE PENS category for adults 19+. THC and cannabis vape products under /items/vape-disposables are excluded."
      }
    ]
  }
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}

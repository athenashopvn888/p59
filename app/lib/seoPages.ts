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
      "eyebrow": "PLANETS 59 · 8500 Torbram Rd #59, Brampton",
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
    "title": "Weed Store Near Mississauga | PLANETS 59",
    "metaDescription": "Looking for a weed store near Mississauga? Use PLANETS 59 in Brampton for store-page checks, menu categories, and visit planning before making the trip.",
    "h1": "Weed Store Near Mississauga",
    "icon": ">",
    "heroTagline": "Mississauga-to-Brampton visit notes",
    "banner": "/banners/01_welcome_to_planets59.webp",
    "sections": [
      {
        "heading": "Confirm The Right Store Page",
        "body": "Open the PLANETS 59 store page first. Confirm directions, listed hours, and current menu details before visiting."
      },
      {
        "heading": "Choose The Product Category",
        "body": "Flower, pre-rolls, edibles, vapes, concentrates, cigarettes, and accessories all shop differently. Pick the category first, then compare current product details."
      },
      {
        "heading": "Use Staff For The Close Call",
        "body": "If one detail decides the visit, ask staff. That is the cleanest way to handle current product questions."
      }
    ],
    "faqs": [
      {
        "q": "What is the best first step?",
        "a": "Open the PLANETS 59 store page, then use the current menu category that matches the visit."
      },
      {
        "q": "Should shoppers rely on old blog prices?",
        "a": "No. Use the current menu or staff for details that change."
      },
      {
        "q": "What categories can shoppers compare?",
        "a": "Browse flower, pre-rolls, edibles, vapes, concentrates, accessories, and cigarettes where listed, then confirm current details on the menu."
      }
    ]
  },
  {
    "slug": "dispensary-near-me-brampton",
    "title": "Cannabis Dispensary Near Me in Brampton | PLANETS 59",
    "metaDescription": "Use PLANETS 59 when searching for a cannabis dispensary near me in Brampton; compare menu categories and confirm current details before visiting.",
    "h1": "Cannabis Dispensary Near Me in Brampton",
    "icon": "o",
    "heroTagline": "Store page first, menu category second",
    "banner": "/banners/01_welcome_to_planets59.webp",
    "sections": [
      {
        "heading": "Make The Search Useful",
        "body": "PLANETS 59 gives nearby Brampton shoppers a clear path to the store page, menu categories, and visit-planning resources."
      },
      {
        "heading": "Compare Categories Naturally",
        "body": "Use normal shopping language: cannabis dispensary in Brampton, cheap weed, budget weed, premium flower, pre-rolls, edibles, vapes, and concentrates. The point is to help the shopper, not stuff a sentence."
      },
      {
        "heading": "Check Current Details",
        "body": "For product names, prices, and listings, use the current menu or ask staff. This page is for orientation and visit planning."
      }
    ],
    "faqs": [
      {
        "q": "Is PLANETS 59 useful for a near-me cannabis search?",
        "a": "Yes. Use the store page to confirm PLANETS 59, then open the menu category that matches your visit."
      },
      {
        "q": "Can shoppers browse before visiting?",
        "a": "Yes. Use the current menu and resources section before heading over."
      },
      {
        "q": "What should shoppers avoid?",
        "a": "Avoid guessing from old examples. Confirm current details with the menu or staff."
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

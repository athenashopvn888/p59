export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    "slug": "",
    "title": "PLANETS 59 Resources",
    "seoTitle": "PLANETS 59 Resources | Menu and Shopping Guides",
    "description": "Resource guides for shopping the PLANETS 59 menu in Brampton, including flower, value, pre-rolls, cigarettes, and current-menu checks.",
    "eyebrow": "Resource Centre",
    "intro": "Use this resource centre to shop PLANETS 59 with less noise. Choose the product category, compare what matters, then use the current menu or staff for details that can change.",
    "cards": [
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Pick the category first, then compare the details that matter."
      },
      {
        "title": "Weed Flower Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed in plain language."
      },
      {
        "title": "Weed Value Guide",
        "href": "/resources/weed-value-guide",
        "text": "A practical path for cheap weed, budget weed, and affordable flower."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Current cigarette brands and $25 carton notes where listed."
      }
    ],
    "sections": [
      {
        "heading": "Shop The Menu By Lane",
        "body": "Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes should not all be compared the same way. Start with the category that matches the visit, then compare the current listings inside that lane.",
        "bullets": [
          "Use the store page for address, directions, and listed hours.",
          "Use category pages to compare the current menu category.",
          "Ask staff when one current detail matters."
        ]
      },
      {
        "heading": "Local Notes For Torbram and Steeles / Brampton",
        "body": "PLANETS 59 serves adult shoppers around Torbram and Steeles / Brampton. This resource section keeps the visit simple: confirm the store, choose a category, and check current details."
      }
    ]
  },
  {
    "slug": "menu-guide",
    "title": "How To Shop The PLANETS 59 Menu",
    "seoTitle": "PLANETS 59 Menu Guide | Brampton Cannabis Shopping Tips",
    "description": "How to shop the PLANETS 59 menu by category, with practical notes for flower, pre-rolls, edibles, vapes, concentrates, and value shopping.",
    "eyebrow": "Menu Guide",
    "intro": "The fastest way through a menu is to choose the product type before comparing products. That keeps the visit focused whether you want flower, pre-rolls, edibles, vapes, concentrates, or cigarettes.",
    "cards": [
      {
        "title": "Weed Flower Guide",
        "href": "/resources/weed-flower-guide",
        "text": "Compare flower tiers without mixing in other categories."
      },
      {
        "title": "Weed Value Guide",
        "href": "/resources/weed-value-guide",
        "text": "Start with the right value lane before scrolling everywhere."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Use the cigarette category for current $25 carton listings."
      }
    ],
    "sections": [
      {
        "heading": "Choose The Category First",
        "body": "If you want flower, start with flower. If you want pre-rolls, stay in pre-rolls. If the visit is about edibles, vapes, concentrates, or accessories, open that section and compare there first."
      },
      {
        "heading": "Check What Is Current",
        "body": "Use this guide for the shopping method, then use the current menu and staff for details that change. Product names, prices, and listings can move."
      }
    ]
  },
  {
    "slug": "weed-flower-guide",
    "title": "PLANETS 59 Weed Flower Guide",
    "seoTitle": "PLANETS 59 Weed Flower Guide | Brampton",
    "description": "Compare Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed at PLANETS 59 in Brampton.",
    "eyebrow": "Weed Flower Guide",
    "intro": "Weed flower gets easier to explore when you compare one collection at a time. Exotic Weed and Premium Weed sit in different collections from AAA+ Weed, AA Weed and Budget Weed.",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Explore the PLANETS 59 Exotic Weed collection."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "Explore the PLANETS 59 Premium Weed collection."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "Explore the PLANETS 59 AAA+ Weed collection."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "Explore the PLANETS 59 AA Weed collection."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Explore the PLANETS 59 Budget Weed collection."
      }
    ],
    "sections": [
      {
        "heading": "Compare Tier, Then Details",
        "body": "Open one Weed flower collection, then compare the product name, format and information presented with each listing."
      },
      {
        "heading": "Value Does Not Need Guesswork",
        "body": "Budget Weed and AA Weed are two value-minded flower collections. If a product choice feels close, ask PLANETS 59 staff before choosing."
      }
    ]
  },
  {
    "slug": "weed-value-guide",
    "title": "PLANETS 59 Weed Value Guide",
    "seoTitle": "PLANETS 59 Weed Value Guide | Budget Weed in Brampton",
    "description": "A practical value guide for comparing cheap weed, budget weed, affordable weed, and menu categories at PLANETS 59.",
    "eyebrow": "Weed Value Guide",
    "intro": "Value-minded Weed shopping starts by choosing a useful flower collection and knowing when Budget Weed, AA Weed or another collection makes more sense.",
    "cards": [
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "The first stop for cheap weed and affordable weed comparisons."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "A simple value lane for flower shoppers."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this when comparing more than flower."
      }
    ],
    "sections": [
      {
        "heading": "Start With Budget And AA",
        "body": "If value-minded flower shopping is the point, start with Budget Weed and AA Weed before exploring the rest of the menu."
      },
      {
        "heading": "Read The Menu Notes",
        "body": "Compare the product name, format and information presented while browsing. If one detail is unclear, ask PLANETS 59 staff."
      }
    ]
  },
  {
    "slug": "pre-roll-guide",
    "title": "PLANETS 59 Pre-Roll Guide",
    "seoTitle": "PLANETS 59 Pre-Roll Guide | Brampton Cannabis Menu Tips",
    "description": "How to compare pre-rolls at PLANETS 59 without mixing them up with flower, edibles, THC vapes, and concentrates.",
    "eyebrow": "Pre-Roll Guide",
    "intro": "Pre-rolls are their own lane. Compare them like pre-rolls, not like loose flower, edibles, vapes, or concentrates.",
    "cards": [
      {
        "title": "Pre-Rolls",
        "href": "/items/prerolls",
        "text": "Open the current pre-roll category."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this if you are still choosing between categories."
      }
    ],
    "sections": [
      {
        "heading": "Compare Format First",
        "body": "Check whether the listing is a single, pack, infused option, or another format shown on the menu. Then compare listed details and price before choosing."
      },
      {
        "heading": "Keep It Separate",
        "body": "If the visit turns into flower, edibles, vapes, or concentrates, switch categories. Do not force one pre-roll decision to carry the whole menu."
      }
    ]
  },
  {
    "slug": "native-smokes",
    "title": "PLANETS 59 Native Smokes Resource",
    "seoTitle": "PLANETS 59 Native Smokes | $25 Carton Notes",
    "description": "PLANETS 59 Native smokes resource with cigarette brand names shown on the menu and $25 carton notes where listed.",
    "eyebrow": "Native Smokes",
    "intro": "PLANETS 59 shoppers looking for cheap Native cigarettes at $25/carton can use this page as a cleaner starting point where those listings are shown on the current cigarette menu. Brand names currently listed include Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Cigarettes Guide",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Brand notes and a clean shopping checklist."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-brampton",
        "text": "Use the store page for directions and listed hours, then check the current menu for products."
      }
    ],
    "sections": [
      {
        "heading": "Brands Listed On The Menu",
        "body": "The cigarette menu currently lists Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights. Each listed carton is shown at $25/carton in the current menu. Confirm current options before choosing.",
        "bullets": [
          "Rolled Gold Full",
          "Rolled Gold Lights",
          "BB Full Carton",
          "BB Lights Carton",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "Canadian Full",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Lights",
          "Canadian Menthol",
          "Nexus Full",
          "Nexus Lights",
          "Playfare Ultra Lights",
          "Putters",
          "Time Full",
          "Time Lights"
        ]
      },
      {
        "heading": "$25 Carton Notes",
        "body": "Where the menu lists $25 carton-style Native cigarettes, this resource points shoppers to the cigarette category first. Prices and listings can change, so confirm the current listing or ask staff."
      },
      {
        "heading": "Keep The Visit Simple",
        "body": "If you are also shopping cannabis, keep the cigarette decision separate from flower, pre-rolls, edibles, vapes, and concentrates. One lane at a time keeps the visit smooth."
      }
    ]
  },
  {
    "slug": "native-smokes/native-cigarettes-guide",
    "title": "PLANETS 59 Native Cigarettes Guide",
    "seoTitle": "PLANETS 59 Native Cigarettes Guide | Brands and Carton Notes",
    "description": "A shopper-friendly Native cigarettes guide for PLANETS 59, including brand names shown on the menu and $25 carton notes where listed.",
    "eyebrow": "Native Cigarettes Guide",
    "intro": "If Native cigarettes are part of the stop, start with the cigarette category and compare the current listings. PLANETS 59 currently lists Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights at $25/carton in the cigarette menu.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Return to the short brand overview."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-brampton",
        "text": "Use the store page for directions and listed hours, then check the current menu for products."
      }
    ],
    "sections": [
      {
        "heading": "Compare The Brand Names",
        "body": "Look for the brand name first, then compare posted price and any listing details. Current menu brands include Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights.",
        "bullets": [
          "Rolled Gold Full",
          "Rolled Gold Lights",
          "BB Full Carton",
          "BB Lights Carton",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "Canadian Full",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Lights",
          "Canadian Menthol",
          "Nexus Full",
          "Nexus Lights",
          "Playfare Ultra Lights",
          "Putters",
          "Time Full",
          "Time Lights"
        ]
      },
      {
        "heading": "Ask If The Shelf Matters",
        "body": "When a specific full, light, menthol, or carton option matters, ask staff before choosing. That is better than guessing from any resource page."
      },
      {
        "heading": "Use The Cigarette Category",
        "body": "Open the cigarette category before the trip. It is the cleanest public path for current Native smokes information at this store."
      }
    ]
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}

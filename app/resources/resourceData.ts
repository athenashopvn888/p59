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
        "title": "Flower Guide",
        "href": "/resources/flower-guide",
        "text": "Compare Exotic, Premium, AAA+, AA, and Budget in plain language."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
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
        "body": "PLANETS 59 serves adult shoppers around Torbram and Steeles / Brampton. This resource section keeps the visit simple: right store, right category, right next step."
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
        "title": "Flower Guide",
        "href": "/resources/flower-guide",
        "text": "Compare flower tiers without mixing in other categories."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
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
        "body": "Use this guide for the shopping method, then use the current menu and staff for details that change. Product names, prices, and availability can move."
      }
    ]
  },
  {
    "slug": "flower-guide",
    "title": "PLANETS 59 Flower Guide",
    "seoTitle": "PLANETS 59 Flower Guide | Exotic, Premium, Budget",
    "description": "Compare exotic flower, premium flower, budget weed, cheap weed, and affordable weed at PLANETS 59.",
    "eyebrow": "Flower Guide",
    "intro": "Flower gets easier when you compare one tier at a time. Exotic and Premium sit in different lanes from AAA+, AA, and Budget, so start with the lane that matches the visit.",
    "cards": [
      {
        "title": "Exotic Flower",
        "href": "/exotic",
        "text": "Start here for the higher shelf flower lane."
      },
      {
        "title": "Premium Flower",
        "href": "/premium",
        "text": "A strong lane for shoppers comparing quality and value."
      },
      {
        "title": "AAA+ Flower",
        "href": "/aaa",
        "text": "A clear middle lane for flower comparison."
      },
      {
        "title": "AA Flower",
        "href": "/aa",
        "text": "A straight value-minded flower lane."
      },
      {
        "title": "Budget Flower",
        "href": "/budget",
        "text": "Start here when cheap weed or affordable weed is the goal."
      }
    ],
    "sections": [
      {
        "heading": "Compare Tier, Then Details",
        "body": "Open the tier, then compare the current product name, format, weight, posted price, and item notes. That gives shoppers a clean decision path."
      },
      {
        "heading": "Value Does Not Need Guesswork",
        "body": "Budget and AA are the right first stops for low-spend flower shopping. If the details are thin or the choice feels close, ask staff before choosing."
      }
    ]
  },
  {
    "slug": "value-guide",
    "title": "PLANETS 59 Value Guide",
    "seoTitle": "PLANETS 59 Value Guide | Cheap Weed and Budget Weed",
    "description": "A practical value guide for comparing cheap weed, budget weed, affordable weed, and menu categories at PLANETS 59.",
    "eyebrow": "Value Guide",
    "intro": "Good value shopping is not just chasing the lowest number. It is choosing the right category, checking the current details, and knowing when Budget, AA, or another lane makes more sense.",
    "cards": [
      {
        "title": "Budget Flower",
        "href": "/budget",
        "text": "The first stop for cheap weed and affordable weed comparisons."
      },
      {
        "title": "AA Flower",
        "href": "/aa",
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
        "body": "If low spend is the point, start in Budget and AA before jumping across the rest of the menu. That keeps the comparison honest and quick."
      },
      {
        "heading": "Read The Menu Notes",
        "body": "Compare product name, format, size, and posted price. If one detail is unclear, use staff for the answer instead of guessing from old copy."
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
        "body": "Check whether the listing is a single, pack, infused option, or another format shown on the menu. Then compare posted notes and price before choosing."
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
        "text": "Use the store page for directions, menu paths, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Brands Listed On The Menu",
        "body": "The cigarette menu currently lists Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights. Each listed carton is shown at $25/carton in the current menu data. Confirm current options before choosing.",
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
        "body": "Where the menu lists $25 carton-style Native cigarettes, this resource points shoppers to the cigarette category first. Prices and availability can change, so confirm the current listing or ask staff."
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
    "intro": "If Native cigarettes are part of the stop, start with the cigarette category and compare the current listings. PLANETS 59 currently lists Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights at $25/carton in the cigarette menu data.",
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
        "text": "Use the store page for directions, menu paths, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Compare The Brand Names",
        "body": "Look for the brand name first, then compare posted price and any item notes. Current menu brands include Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights.",
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

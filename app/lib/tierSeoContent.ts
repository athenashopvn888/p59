export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  "EXOTIC": {
    "seoTitle": "Exotic Cannabis Flower Brampton | PLANETS 59",
    "seoIntro": "Use the Exotic flower lane at PLANETS 59 to compare higher-shelf listings by current product name, format, weight, posted price, and item notes.",
    "sections": [
      {
        "heading": "Start With The Exotic Lane",
        "body": "Exotic flower is easiest to compare when shoppers stay inside the tier first. Open the current Exotic menu, then compare the listed product details before choosing."
      },
      {
        "heading": "Check Current Pricing",
        "body": "The homepage shows Exotic flower in the $10-$12/g lane. Menu details can change, so confirm the current listing or ask staff before making the trip."
      },
      {
        "heading": "Torbram Visit Notes",
        "body": "PLANETS 59 is located at 8500 Torbram Rd #59 in Brampton. Use the store page for address, hours, directions, and current menu categories."
      }
    ],
    "faqs": [
      {
        "q": "How should shoppers compare Exotic flower?",
        "a": "Open the Exotic tier and compare current product name, format, weight, price, and item notes."
      },
      {
        "q": "Are Exotic prices always the same?",
        "a": "No. Use the current menu or staff for details that can change."
      }
    ]
  },
  "PREMIUM": {
    "seoTitle": "Premium Cannabis Flower Brampton | PLANETS 59",
    "seoIntro": "Use the Premium flower lane at PLANETS 59 for shoppers comparing quality and value without jumping across every category.",
    "sections": [
      {
        "heading": "Premium Flower In Its Own Lane",
        "body": "Premium flower should be compared inside the Premium tier first. That keeps the visit focused and avoids mixing flower decisions with edibles, vapes, or concentrates."
      },
      {
        "heading": "Use Current Menu Details",
        "body": "The homepage shows Premium flower in the $7-$10/g lane. Confirm current names, prices, formats, and availability on the menu or with staff."
      }
    ],
    "faqs": [
      {
        "q": "Where should Premium shoppers start?",
        "a": "Start with the Premium tier page, then compare the current listings."
      },
      {
        "q": "Can menu details change?",
        "a": "Yes. Product names, prices, and availability can move."
      }
    ]
  },
  "AAA+": {
    "seoTitle": "AAA+ Cannabis Flower Brampton | PLANETS 59",
    "seoIntro": "Use the AAA+ lane at PLANETS 59 for a middle flower tier with clear current-menu comparison.",
    "sections": [
      {
        "heading": "Compare AAA+ Clearly",
        "body": "AAA+ works best as its own comparison lane. Open the tier, read the current product details, and ask staff when a close call needs a current answer."
      },
      {
        "heading": "Check The Posted Lane",
        "body": "The homepage shows AAA+ flower in the $5-$6/g lane. Confirm the current item page before choosing."
      }
    ],
    "faqs": [
      {
        "q": "What should shoppers compare in AAA+?",
        "a": "Compare current product name, format, weight, posted price, and notes."
      },
      {
        "q": "Should shoppers use old examples?",
        "a": "No. Use the current menu for details that change."
      }
    ]
  },
  "AA": {
    "seoTitle": "AA Cannabis Flower Brampton | PLANETS 59",
    "seoIntro": "Use the AA flower lane at PLANETS 59 for straightforward value-minded flower comparison.",
    "sections": [
      {
        "heading": "AA Is A Value Lane",
        "body": "AA flower gives value-minded shoppers a clean place to start before moving into other tiers. Compare the current item notes and price before choosing."
      },
      {
        "heading": "Confirm The Current Listing",
        "body": "The homepage shows AA flower in the $4/g lane. Current products and package details can change."
      }
    ],
    "faqs": [
      {
        "q": "Where should value flower shoppers start?",
        "a": "AA and Budget are practical first stops for value-minded flower shopping."
      },
      {
        "q": "Are details fixed?",
        "a": "No. Confirm current menu details before visiting."
      }
    ]
  },
  "BUDGET": {
    "seoTitle": "Budget Cannabis Brampton | Cheap Weed at PLANETS 59",
    "seoIntro": "Use the Budget lane at PLANETS 59 when cheap weed or affordable flower is the goal.",
    "sections": [
      {
        "heading": "Start With Budget",
        "body": "Budget flower is the cleanest first stop for shoppers focused on low spend. Compare the current product name, format, size, and item notes."
      },
      {
        "heading": "Check Current Value Details",
        "body": "The homepage shows Budget flower from $3/g. Value ounces or other formats should be confirmed on the current menu or with staff."
      }
    ],
    "faqs": [
      {
        "q": "What is the first value lane?",
        "a": "Start with Budget, then compare AA if you want another value-minded tier."
      },
      {
        "q": "Where can shoppers confirm current prices?",
        "a": "Use the current menu or ask staff before making the trip."
      }
    ]
  }
};

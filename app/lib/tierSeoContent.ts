export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_SEO: Record<string, TierSeoData> = {
  "EXOTIC": {
    "seoTitle": "Exotic Weed & Cannabis Flower in Brampton",
    "seoIntro": "Explore the Exotic Weed collection at PLANETS 59 and compare the product information presented with each flower listing.",
    "sections": [
      {
        "heading": "Start With Exotic Weed",
        "body": "Exotic Weed is easiest to compare when shoppers stay within this flower collection first. Review the names, formats and details presented while browsing."
      },
      {
        "heading": "Compare The Collection",
        "body": "Use the Exotic Weed page to compare its flower listings, then ask PLANETS 59 staff when one product detail matters to your visit."
      },
      {
        "heading": "Torbram Visit Notes",
        "body": "Use the PLANETS 59 store page for location and visit information, then return to Exotic Weed when this is the flower collection you want to explore."
      }
    ],
    "faqs": [
      {
        "q": "How should shoppers compare Exotic Weed?",
        "a": "Open the Exotic Weed collection and compare the product information presented with each listing."
      },
      {
        "q": "Where can I ask about one Exotic Weed item?",
        "a": "Ask PLANETS 59 staff when one item detail is important to your visit."
      }
    ]
  },
  "PREMIUM": {
    "seoTitle": "Premium Weed & Cannabis Flower in Brampton",
    "seoIntro": "Explore the Premium Weed collection at PLANETS 59 without mixing the comparison into unrelated cannabis categories.",
    "sections": [
      {
        "heading": "Premium Weed In Its Own Collection",
        "body": "Premium Weed is easier to explore within its own flower collection. That keeps the visit focused and avoids mixing flower decisions with edibles, vapes or concentrates."
      },
      {
        "heading": "Review The Product Information",
        "body": "Compare the names, formats and details presented with the Premium Weed listings, and ask staff when a product question needs clarification."
      }
    ],
    "faqs": [
      {
        "q": "Where should Premium Weed shoppers start?",
        "a": "Start with the Premium Weed page, then compare the information presented with its flower listings."
      },
      {
        "q": "Can Premium Weed listings change?",
        "a": "Yes. Ask staff when one item is the reason for your visit."
      }
    ]
  },
  "AAA+": {
    "seoTitle": "AAA+ Weed & Cannabis Flower in Brampton",
    "seoIntro": "Explore the AAA+ Weed collection at PLANETS 59 as a focused place to compare flower listings.",
    "sections": [
      {
        "heading": "Compare AAA+ Weed Clearly",
        "body": "AAA+ Weed works best as its own flower collection. Review the information presented with each listing and ask staff when a close choice needs clarification."
      },
      {
        "heading": "Stay Within The Collection",
        "body": "Use the AAA+ Weed page to compare its flower listings before moving to a different PLANETS 59 collection."
      }
    ],
    "faqs": [
      {
        "q": "What should shoppers compare in AAA+ Weed?",
        "a": "Compare the product name, format and other information presented with each AAA+ Weed listing."
      },
      {
        "q": "Where can shoppers ask about AAA+ Weed?",
        "a": "Ask PLANETS 59 staff when a specific product detail matters."
      }
    ]
  },
  "AA": {
    "seoTitle": "AA Weed & Cannabis Flower in Brampton",
    "seoIntro": "Explore the AA Weed collection at PLANETS 59 for a straightforward flower comparison.",
    "sections": [
      {
        "heading": "Start With AA Weed",
        "body": "AA Weed gives flower shoppers a clear place to start before moving into another collection. Compare the information presented with each listing."
      },
      {
        "heading": "Review The Flower Listings",
        "body": "Use the AA Weed page to compare its flower listings and ask staff when one item detail is important."
      }
    ],
    "faqs": [
      {
        "q": "Where can value-minded flower shoppers start?",
        "a": "AA Weed and Budget Weed are two distinct PLANETS 59 flower collections to explore."
      },
      {
        "q": "Can AA Weed listings change?",
        "a": "Yes. Ask staff when one item is the reason for your visit."
      }
    ]
  },
  "BUDGET": {
    "seoTitle": "Budget Weed & Cannabis Flower in Brampton",
    "seoIntro": "Explore the Budget Weed collection at PLANETS 59 when value-minded flower shopping is your starting point.",
    "sections": [
      {
        "heading": "Start With Budget Weed",
        "body": "Budget Weed is a focused first stop for value-minded flower shoppers. Compare the product information presented with each listing."
      },
      {
        "heading": "Compare The Collection",
        "body": "Use the Budget Weed page to compare its flower listings before exploring AA Weed or another PLANETS 59 collection."
      }
    ],
    "faqs": [
      {
        "q": "Where can value-minded shoppers start?",
        "a": "Start with Budget Weed, then explore AA Weed if you want another flower collection."
      },
      {
        "q": "Where can shoppers ask about one Budget Weed item?",
        "a": "Ask PLANETS 59 staff when one item detail is important to your visit."
      }
    ]
  }
};

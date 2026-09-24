export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const TIER_H1: Record<string, string> = {
  EXOTIC: "Exotic Weed on Torbram at Unit 59",
  PREMIUM: "Premium Weed on Torbram near Airport Road",
  "AAA+": "AAA+ Weed at Torbram Unit 59",
  AA: "AA Weed on the Torbram Corridor",
  BUDGET: "Budget Weed at Torbram and Steeles",
};

export const TIER_META_DESCRIPTION: Record<string, string> = {
  EXOTIC:
    "Exotic Weed at PLANETS 59, Unit 59 on Torbram Road in northeast Brampton. Top flower band for the Torbram / Airport Road walk-in. Adults 19+.",
  PREMIUM:
    "Premium Weed on Torbram near Airport Road at PLANETS 59 Unit 59. The band under Exotic Weed for this northeast Brampton counter. Adults 19+.",
  "AAA+":
    "AAA+ Weed at Torbram Unit 59 at PLANETS 59. Everyday-plus flower between Premium Weed and AA Weed on the Torbram corridor. Adults 19+.",
  AA:
    "AA Weed on the Torbram corridor at PLANETS 59 Unit 59. Daily flower between AAA+ Weed and Budget Weed near Steeles Avenue East. Adults 19+.",
  BUDGET:
    "Budget Weed at Torbram and Steeles at PLANETS 59 Unit 59. Value flower for the Torbram / Airport Road walk-in, under AA Weed. Adults 19+.",
};

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: {
    seoTitle: "Exotic Weed on Torbram at Unit 59 | PLANETS 59",
    seoIntro:
      "Exotic Weed is the top flower collection at PLANETS 59 inside Unit 59 of the plaza at civic 8500 on Torbram Road. Adults already on the Torbram / Airport Road stretch use this tier for the loudest jars at this counter — not a Brampton-wide exotic directory.",
    sections: [
      {
        heading: "Top flower band at the Torbram plaza bay",
        body: "Exotic Weed sits at the top of the flower wall inside Unit 59. Shoppers who turn off Airport Road onto Torbram, or who are already walking the numbered bays at civic 8500, use this collection when they want the headliner jars rather than a mid-shelf pick.",
      },
      {
        heading: "How Exotic Weed sits beside the other four collections",
        body: "Premium Weed is the step under this tier, then AAA+ Weed, AA Weed, and Budget Weed. Stay on Exotic Weed when the stop is specifically the top band at this Torbram door. Move to a sibling collection when the spend or style should change.",
      },
    ],
    faqs: [
      {
        q: "What makes Exotic Weed different from Premium Weed at Unit 59?",
        a: "Exotic Weed is the top flower band at this Torbram counter. Premium Weed is the collection directly under it for shoppers who want a strong jar without stepping all the way into Exotic.",
      },
      {
        q: "Who usually shops Exotic Weed on Torbram Road?",
        a: "Adults already on the Torbram / Airport Road corridor near Steeles Avenue East who came for the loudest flower this Unit 59 counter puts out — not a city-wide catalogue.",
      },
      {
        q: "Which other flower collections sit under Exotic Weed?",
        a: "Premium Weed, AAA+ Weed, AA Weed, and Budget Weed. Each collection is a separate band at this Torbram walk-in.",
      },
    ],
  },
  PREMIUM: {
    seoTitle: "Premium Weed on Torbram near Airport Road | PLANETS 59",
    seoIntro:
      "Premium Weed is the polished flower collection at PLANETS 59 for people who reach Unit 59 from Airport Road. It is the band under Exotic Weed at this Torbram counter, not a city premium list.",
    sections: [
      {
        heading: "Polished flower west of Airport Road",
        body: "Premium Weed is for adults who finish the approach on Torbram Road and want a refined jar without jumping to Exotic Weed. The plaza face is civic 8500. Unit 59 is the bay. Airport Road is the arterial you use to get here, not a second storefront.",
      },
      {
        heading: "Premium Weed beside Exotic, AAA+, AA, and Budget",
        body: "Exotic Weed sits above this tier. AAA+ Weed, AA Weed, and Budget Weed sit below it. Use Premium Weed when that upper-middle band is the point of the Torbram stop.",
      },
    ],
    faqs: [
      {
        q: "When is Premium Weed the better pick than Exotic Weed on Torbram?",
        a: "Choose Premium Weed when you want a polished jar at Unit 59 without stepping into the Exotic Weed band. Exotic Weed stays the top collection.",
      },
      {
        q: "Is Premium Weed a Torbram collection or a Brampton-wide list?",
        a: "It is the Premium Weed collection for this Unit 59 walk-in on Torbram Road, near Airport Road and Steeles Avenue East. It is not a city directory.",
      },
      {
        q: "Which collections sit beside Premium Weed?",
        a: "Exotic Weed above, then AAA+ Weed, AA Weed, and Budget Weed below.",
      },
    ],
  },
  "AAA+": {
    seoTitle: "AAA+ Weed at Torbram Unit 59 | PLANETS 59",
    seoIntro:
      "AAA+ Weed is the everyday-plus flower collection at PLANETS 59 Unit 59. It sits between Premium Weed and AA Weed for Torbram walk-ins. Adults 19+.",
    sections: [
      {
        heading: "Everyday-plus flower inside Unit 59",
        body: "AAA+ Weed is the workhorse-plus band at the numbered bay on Torbram Road. Shoppers coming from Steeles Avenue East or down from the Airport Road spine use it when they want a heavier jar that is still not Premium Weed or Exotic Weed.",
      },
      {
        heading: "Where AAA+ Weed sits on the flower wall",
        body: "Premium Weed and Exotic Weed sit above AAA+ Weed. AA Weed and Budget Weed sit below it. Stay here when that middle band is the reason for the Unit 59 stop.",
      },
    ],
    faqs: [
      {
        q: "What does AAA+ Weed cover at the Torbram counter?",
        a: "AAA+ Weed is the middle flower band at Unit 59 — heavier jars that sit under Premium Weed and above AA Weed.",
      },
      {
        q: "Is AAA+ Weed closer to AA Weed or to Premium Weed?",
        a: "It sits between them. Choose AAA+ Weed when AA Weed feels too light and Premium Weed is more jar than you want for this Torbram stop.",
      },
      {
        q: "Can I compare AAA+ Weed with the other Unit 59 collections?",
        a: "Yes. Exotic Weed, Premium Weed, AA Weed, and Budget Weed are the sibling collections at this same Torbram door.",
      },
    ],
  },
  AA: {
    seoTitle: "AA Weed on the Torbram Corridor | PLANETS 59",
    seoIntro:
      "AA Weed is the daily-driver flower collection at PLANETS 59 on the Torbram corridor. Familiar jars at Unit 59, between AAA+ Weed and Budget Weed. Adults 19+.",
    sections: [
      {
        heading: "Daily flower on the Torbram face",
        body: "AA Weed is the collection northeast Brampton walk-ins use when they want a reliable jar at civic 8500 without climbing into AAA+ Weed. It is written for people already on Torbram Road, not a city-wide AA list.",
      },
      {
        heading: "AA Weed versus Budget Weed and AAA+ Weed",
        body: "Budget Weed sits under AA Weed for the value band. AAA+ Weed, Premium Weed, and Exotic Weed sit above it. Stay here when a steady daily jar at Unit 59 is the point.",
      },
    ],
    faqs: [
      {
        q: "What is AA Weed for Torbram corridor shoppers?",
        a: "AA Weed is the daily-driver flower collection at Unit 59 — familiar jars for walk-ins who are not shopping Budget Weed or AAA+ Weed.",
      },
      {
        q: "How is AA Weed different from Budget Weed at this door?",
        a: "Budget Weed is the value band under AA Weed. AA Weed is the step up for shoppers who want a steadier daily jar without moving into AAA+ Weed.",
      },
      {
        q: "Where else can I browse flower besides AA Weed?",
        a: "Budget Weed sits below. AAA+ Weed, Premium Weed, and Exotic Weed sit above, all at the same Torbram Unit 59 counter.",
      },
    ],
  },
  BUDGET: {
    seoTitle: "Budget Weed at Torbram and Steeles | PLANETS 59",
    seoIntro:
      "Budget Weed is the value flower collection at PLANETS 59 where Torbram Road meets Steeles Avenue East. It is the lowest band at Unit 59, under AA Weed. Adults 19+.",
    sections: [
      {
        heading: "Value flower at the Torbram and Steeles crossing",
        body: "Budget Weed is the lowest flower band at this Unit 59 counter. Shoppers who meet Steeles Avenue East and turn onto Torbram Road use it when the stop is about the value jars, kept separate from AA Weed.",
      },
      {
        heading: "Budget Weed under AA, AAA+, Premium, and Exotic",
        body: "AA Weed is the next band up, then AAA+ Weed, Premium Weed, and Exotic Weed. Budget Weed stays the narrow owner for value flower at this Torbram plaza bay.",
      },
    ],
    faqs: [
      {
        q: "What is Budget Weed at PLANETS 59 on Torbram?",
        a: "Budget Weed is the value flower collection at Unit 59 — the lowest band, kept separate from AA Weed so shoppers can compare without mixing the two.",
      },
      {
        q: "Is Budget Weed only for people already at Steeles and Torbram?",
        a: "That crossing is the landmark, but Budget Weed is for any adult 19+ walking into Unit 59 who wants the value band at this counter.",
      },
      {
        q: "Which collections sit above Budget Weed?",
        a: "AA Weed, AAA+ Weed, Premium Weed, and Exotic Weed. Each is a separate flower band at this Torbram shop.",
      },
    ],
  },
};

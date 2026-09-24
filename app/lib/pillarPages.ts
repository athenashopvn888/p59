import { STORE_ORIGIN, gbpLocation, type StoreFaq } from "./gbp-location";

/** Five-pillar neighbourhood LPs for the Torbram / Unit 59 corridor only. */
export const PILLAR_PATHS = {
  hours: "/24-hour-dispensary-torbram",
  delivery: "/weed-delivery-torbram",
  nativeCig: "/native-cigarettes-torbram",
  nicVape: "/nicotine-vape-torbram",
  weedDispensary: "/weed-dispensary-torbram",
  deliveryCatalog: "/weed-delivery-brampton",
  storePage: "/weed-dispensary-brampton",
  visit: "/visit",
  cigMenu: "/items/cigarettes",
  nicVapeMenu: "/items/vapes",
  thcVapeMenu: "/items/vape-disposables",
  cigInfo: "/info/native-cigarettes-brampton",
  nicVapeInfo: "/info/nicotine-vapes-brampton",
} as const;

export const CORRIDOR_TAGS = [
  "Torbram Road",
  "Airport Road",
  "Steeles Avenue East",
  "Unit 59",
  "northeast Brampton",
] as const;

export const HOURS_PILLAR = {
  path: PILLAR_PATHS.hours,
  title: "24-Hour Dispensary Open Now on Torbram | PLANETS 59",
  h1: "24-Hour Dispensary Open Now on Torbram Road",
  description:
    "Open now: PLANETS 59 at 8500 Torbram Rd Unit 59 is a 24-hour walk-in on the Torbram / Airport Road corridor in northeast Brampton. Adults 19+. Call +1 (289) 536-7493.",
  kicker: "Open now / 24h near me · Torbram Unit 59 · Adults 19+",
  lede:
    "PLANETS 59 lists Open 24 Hours at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. This page owns overnight and open-now walk-in for the Torbram / Airport Road corridor. It is not a city-wide Brampton 24-hour directory. Name, phone, map, and the same hours stay on the homepage visit hub. Delivery is a separate 10 a.m.–10 p.m. window.",
};

export const DELIVERY_PILLAR = {
  path: PILLAR_PATHS.delivery,
  title: "Weed Delivery from Torbram Unit 59 | PLANETS 59",
  h1: "Weed Delivery from Torbram Unit 59",
  description:
    "PLANETS 59 Weed Delivery is dispatched from 8500 Torbram Rd Unit 59. Brampton ordering runs 10 a.m.–10 p.m. The dispatcher confirms range. Adults 19+. Call +1 (289) 536-7493.",
  kicker: "Neighbourhood delivery · Torbram / Brampton · Adults 19+",
  lede:
    "Weed delivery from PLANETS 59 starts at the Unit 59 walk-in on Torbram Road. Published ordering hours are 10 a.m. to 10 p.m. daily — not 24-hour courier. Browse the Brampton delivery menu, then use LIVE ORDER so the dispatcher can confirm whether a Brampton address is in range.",
};

export const NATIVE_CIG_PILLAR = {
  path: PILLAR_PATHS.nativeCig,
  title: "Native Cigarettes on Torbram | PLANETS 59",
  h1: "Native Cigarettes at PLANETS 59 on Torbram",
  description:
    "Native cigarettes at PLANETS 59, 8500 Torbram Rd Unit 59 in northeast Brampton. Walk in 24 hours for the cigarette category. Adults 19+. Check the current menu. Call +1 (289) 536-7493.",
  kicker: "Torbram Unit 59 · Cigarette category · Adults 19+",
  lede:
    "PLANETS 59 lists Native cigarettes in the cigarette category at 8500 Torbram Rd Unit 59. This neighbourhood page owns Torbram / Airport Road cigarette walk-in intent. It does not replace the live menu or invent stock. Tobacco and nicotine products are addictive.",
};

export const NIC_VAPE_PILLAR = {
  path: PILLAR_PATHS.nicVape,
  title: "Nicotine Vape on Torbram | PLANETS 59",
  h1: "Nicotine Vape at PLANETS 59 on Torbram",
  description:
    "Nicotine vapes at PLANETS 59, 8500 Torbram Rd Unit 59. Dedicated /items/vapes category, kept separate from THC vapes. Adults 19+. Nicotine is addictive. Call +1 (289) 536-7493.",
  kicker: "Torbram Unit 59 · Adults 19+ · Nicotine is addictive",
  lede:
    "PLANETS 59 keeps nicotine vapes in a dedicated category at Unit 59 on Torbram Road. Use this page for Torbram / Airport Road nic-vape walk-in intent, then open /items/vapes for current names. THC vapes stay on a different list. Nicotine is addictive.",
};

export const WEED_DISPENSARY_PILLAR = {
  path: PILLAR_PATHS.weedDispensary,
  title: "Weed Dispensary on Torbram | PLANETS 59",
  h1: "Weed Dispensary at PLANETS 59 on Torbram",
  description:
    "PLANETS 59 is the neighbourhood weed dispensary at 8500 Torbram Rd Unit 59 on the Torbram / Airport Road corridor in northeast Brampton. Adults 19+. Call +1 (289) 536-7493.",
  kicker: "Neighbourhood weed dispensary · Torbram Unit 59 · Adults 19+",
  lede:
    "PLANETS 59 is the walk-in weed dispensary at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. This page owns Torbram / Airport Road / Unit 59 weed-dispensary intent. It is not a city-wide Brampton dispensary directory. Name, phone, map, and hours stay on the homepage visit hub.",
};

export const HOURS_FAQS: StoreFaq[] = [
  {
    q: "Is PLANETS 59 a 24-hour dispensary on Torbram Road?",
    a: "Yes. The walk-in at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6 is open 24 hours daily. That is the same listing as the homepage hours card. Adults 19+ with government photo ID.",
  },
  {
    q: "If I searched 24 hour dispensary near me, is this the Unit 59 door?",
    a: "Only if you mean the Torbram / Airport Road corridor in northeast Brampton near Steeles Avenue East. Match civic 8500 and Unit 59. This is not a city-wide Brampton 24-hour directory.",
  },
  {
    q: "Can adults 19+ walk in after midnight?",
    a: "Yes. No appointment is required at 3 a.m. or 3 p.m. Staff still check government photo ID at the Unit 59 door. Call +1 (289) 536-7493 if one listing is the only reason for the trip.",
  },
  {
    q: "Is 24-hour for walk-in or for PLANETS 59 delivery?",
    a: "24-hour is walk-in only. Weed delivery from Unit 59 runs 10 a.m. to 10 p.m. and is not a 24-hour courier. Use the Torbram weed delivery page for courier hours.",
  },
  {
    q: "Can I walk in 24 hours for Native cigarettes or nicotine vapes?",
    a: "Yes, when those categories are listed. The 24-hour clock is the Torbram walk-in. Use the Native cigarettes or nicotine vape neighbourhood pages for the category path, then confirm the live menu.",
  },
];

export const DELIVERY_FAQS: StoreFaq[] = [
  {
    q: "Does PLANETS 59 offer weed delivery from Torbram Unit 59?",
    a: "Yes. PLANETS 59 Weed Delivery is dispatched from 8500 Torbram Rd Unit 59. Published ordering hours are 10 a.m. to 10 p.m. daily. The dispatcher confirms whether a Brampton address is in range. Adults 19+.",
  },
  {
    q: "Is Torbram weed delivery open 24 hours like the store?",
    a: "No. Walk-in at Unit 59 is open 24 hours. Delivery is a separate courier window from 10 a.m. to 10 p.m. A 24-hour search is for the door, not overnight drop-off.",
  },
  {
    q: "How do I start a PLANETS 59 delivery order?",
    a: "Open the Brampton weed delivery menu, note the flower names you want, then use LIVE ORDER to reach the PLANETS 59 dispatcher. New customers complete ID review in Web Chat. The dispatcher confirms availability, the $60 product minimum, the $10 fee, and drop-off details.",
  },
  {
    q: "Which addresses can request delivery from Unit 59?",
    a: "Published coverage is Brampton. This page does not invent a kilometre radius or a list of other cities. The dispatcher confirms the destination before an order is accepted.",
  },
  {
    q: "Where is delivery dispatched from?",
    a: "Orders leave the walk-in store at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, on the Torbram / Airport Road corridor. Call +1 (289) 536-7493 if you need the pin confirmed.",
  },
];

export const NATIVE_CIG_FAQS: StoreFaq[] = [
  {
    q: "Does PLANETS 59 sell Native cigarettes on Torbram?",
    a: "Yes. PLANETS 59 lists Native cigarettes in the cigarette category at 8500 Torbram Rd Unit 59. Open the current cigarette menu, then walk in. Brands and carton notes can change. Adults 19+.",
  },
  {
    q: "Where do I buy Native cigarettes in the Torbram / Airport Road corridor?",
    a: "The walk-in counter is PLANETS 59 at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. Call +1 (289) 536-7493 if one listing is the reason for the trip.",
  },
  {
    q: "Are listed cigarette brands or $25 cartons guaranteed?",
    a: "No. The cigarette category may show carton-style listings and brand names such as BB Lights, Canadian Lights, or Canadian Classics Silver when they are posted. Confirm today’s names and prices on the live menu or with staff.",
  },
  {
    q: "Is this a medical or ranking page for Native cigarettes?",
    a: "No. This is a retail neighbourhood page for adults 19+ at the Unit 59 counter. It does not make medical claims, rank the store, or invent reviews. Tobacco and nicotine products are addictive.",
  },
  {
    q: "Do nicotine pouches or grabba have their own Torbram landing pages?",
    a: "No. When pouches or grabba are listed, they appear on the cigarette category menu. This page owns Native cigarette neighbourhood intent for Torbram Unit 59.",
  },
];

export const NIC_VAPE_FAQS: StoreFaq[] = [
  {
    q: "Does PLANETS 59 sell nicotine vapes on Torbram?",
    a: "Yes. Nicotine vapes have a dedicated category, separate from THC vapes. Open /items/vapes for current names, then walk in at 8500 Torbram Rd Unit 59. Adults 19+. Nicotine is addictive.",
  },
  {
    q: "Where should a Torbram nicotine vape search go?",
    a: "Use this neighbourhood page for Torbram / Airport Road intent, then the nicotine vape menu for listings. The pin is 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. Call +1 (289) 536-7493 before a special trip.",
  },
  {
    q: "Are nicotine vapes the same as THC vapes at PLANETS 59?",
    a: "No. Nicotine vapes stay under /items/vapes. THC and cannabis vapes stay under /items/vape-disposables. Compare those lists separately.",
  },
  {
    q: "Are Geek, NEXA, or OVNS listings guaranteed in stock?",
    a: "No. Those names appear on the live nicotine vape menu when posted. This page does not promise stock, puff-count performance, or a price. Check the current category before you travel.",
  },
  {
    q: "Does PLANETS 59 have a separate nicotine pouches landing page?",
    a: "No. Pouches, when listed, sit on the cigarette category. This page is for the sold nicotine vape category only.",
  },
];

export const WEED_DISPENSARY_FAQS: StoreFaq[] = [
  {
    q: "Is PLANETS 59 the weed dispensary on Torbram at Unit 59?",
    a: "Yes. PLANETS 59 is the walk-in weed dispensary at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, on the Torbram / Airport Road corridor. Adults 19+ with government photo ID.",
  },
  {
    q: "If I searched weed dispensary near me on this corridor, is this the Unit 59 door?",
    a: "Only if you mean the Torbram / Airport Road stretch in northeast Brampton near Steeles Avenue East. Match civic 8500 and Unit 59. This URL is not a city-wide Brampton weed-dispensary list.",
  },
  {
    q: "Does this neighbourhood page list every Brampton weed dispensary?",
    a: "No. It owns one storefront: PLANETS 59 at Unit 59. It does not rank shops, invent a city directory, or speak for other Brampton doors.",
  },
  {
    q: "How is this URL different from the 24-hour Torbram page?",
    a: "This page owns neighbourhood weed-dispensary identity for Unit 59. The 24-hour page owns overnight / open-now walk-in. Both use the same door, phone, and hours. The homepage remains the NAP hub.",
  },
  {
    q: "Does the Torbram weed dispensary page replace the live menu?",
    a: "No. Browse current flower tiers and categories on the homepage. This page does not invent stock, prices, or a second shop. Call +1 (289) 536-7493 if one listing is the only reason for the trip.",
  },
];

export const PILLAR_HUB_CARDS = [
  {
    href: PILLAR_PATHS.weedDispensary,
    label: "Weed dispensary on Torbram",
    blurb: "Unit 59 neighbourhood owner. Corridor only — not a city-wide list.",
  },
  {
    href: PILLAR_PATHS.hours,
    label: "24-hour Torbram walk-in",
    blurb: "Open now at Unit 59. Walk-in is 24 hours; delivery is not.",
  },
  {
    href: PILLAR_PATHS.delivery,
    label: "Weed delivery from Unit 59",
    blurb: "Brampton courier 10 a.m.–10 p.m. Dispatcher confirms range.",
  },
  {
    href: PILLAR_PATHS.nativeCig,
    label: "Native cigarettes on Torbram",
    blurb: "Cigarette category at the Unit 59 counter. Adults 19+.",
  },
  {
    href: PILLAR_PATHS.nicVape,
    label: "Nicotine vape on Torbram",
    blurb: "Dedicated nic-vape shelf, separate from THC vapes.",
  },
  {
    href: PILLAR_PATHS.visit,
    label: "Visit Unit 59",
    blurb: "Plaza parking on Torbram and Brampton Transit route 14.",
  },
] as const;

export function pillarUrl(path: string) {
  return `${STORE_ORIGIN}${path}`;
}

export function pillarNapLines() {
  return {
    storeName: gbpLocation.storeName,
    address: gbpLocation.address,
    streetAddress: gbpLocation.streetAddress,
    phone: gbpLocation.phone,
    phoneIntl: gbpLocation.phoneIntl,
    hours: gbpLocation.hoursLabel,
    origin: STORE_ORIGIN,
  };
}

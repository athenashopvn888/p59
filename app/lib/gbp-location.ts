/** PL501 PLANETS 59 — standalone Torbram Unit 59 facts. Live-GBP-first NAP; FMD phone is fallback. */
export const STORE_ORIGIN = "https://www.planets59.com";
export const STORE_ID = `${STORE_ORIGIN}/#store`;
export const GBP_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=PLANETS%2059&query_place_id=ChIJj4B2l5Y9K4gRorxT85ql9Sg";
export const STOREFRONT_IMAGE = `${STORE_ORIGIN}/wp-content/uploads/2026/04/7Clmh.jpg`;

export type StoreFaq = { q: string; a: string };

export const gbpLocation = {
  storeName: "PLANETS 59",
  domain: "www.planets59.com",
  city: "Brampton",
  province: "ON",
  country: "CA",
  slug: "weed-dispensary-brampton",
  address: "8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6",
  streetAddress: "8500 Torbram Rd Unit 59",
  postalCode: "L6T 5C6",
  phone: "+1 (289) 536-7493",
  phoneIntl: "+12895367493",
  neighborhood: "Torbram / Airport Road",
  nearbyAreas: [
    "Torbram Road",
    "Airport Road",
    "Steeles Avenue East",
    "northeast Brampton",
    "Bramalea",
  ],
  products: [
    "Flower",
    "Pre-rolls",
    "Edibles",
    "THC vapes",
    "Concentrates",
    "Shatter",
    "CBD oils",
    "Accessories",
  ],
  menuUrl: "/",
  visitUrl: "/visit",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=8500+Torbram+Rd+Unit+59,+Brampton,+ON+L6T+5C6",
  mapEmbedUrl:
    "https://www.google.com/maps?q=8500%20Torbram%20Rd%20Unit%2059%2C%20Brampton%2C%20ON%20L6T%205C6&z=16&output=embed",
  latitude: "43.7231",
  longitude: "-79.69274",
  hours: ["Open 24 Hours"],
  hoursLabel: "Open 24 Hours",
  seoTitle: "PLANETS 59 | Torbram Unit 59 Dispensary, Brampton",
  metaDescription:
    "PLANETS 59 is the walk-in cannabis store at 8500 Torbram Rd Unit 59 in northeast Brampton, on the Torbram / Airport Road corridor. Open 24 hours. Adults 19+. Call +1 (289) 536-7493.",
  localLandmarks: ["Torbram Road", "Steeles Avenue East", "Airport Road"],
  introVariant:
    "PLANETS 59 is a walk-in cannabis store at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, in the Torbram / Airport Road corridor of northeast Brampton. Use this homepage for the name, address, phone and hours, and the Unit 59 visit guide for plaza wayfinding.",
  neighborhoodDescription:
    "Unit 59 sits in the multi-unit plaza at civic 8500 Torbram Road, at the Torbram and Steeles Avenue East crossing, west of Airport Road in northeast Brampton.",
  parkingNote:
    "Plaza parking faces the numbered bays along Torbram Road; park, then walk to Unit 59",
  transitNote:
    "Brampton Transit route 14 Torbram stops at Torbram Rd at 8500 Torbram Rd, on the same street as the plaza",
  sectionTitle: "Torbram / Airport Road · Unit 59",
};

/** Homepage corridor copy around the menu. Unique to 8500 Torbram Rd Unit 59. */
export const HOME_CORRIDOR_COPY = [
  "PLANETS 59 occupies Unit 59 inside the multi-unit plaza at 8500 Torbram Rd, Brampton, ON L6T 5C6. Torbram Road is the last street. The plaza sits in northeast Brampton at the Torbram and Steeles Avenue East crossing, west of the Airport Road industrial-retail spine. This is not an Airport Road civic number and not a mall corridor. Adults 19+ walk in at the Unit 59 bay; no appointment is required.",
  "If you are already on Airport Road, meet Steeles Avenue East, turn onto Torbram Road, and hunt civic 8500. Highway 407 and Highway 410 both feed Torbram for this approach. Once you are in the plaza, ignore neighbouring unit numbers and look for PLANETS 59 at Unit 59. Mapping apps sometimes print the same door as 8500 Torbram Rd #59 — that hash mark is this bay, not a second store.",
  "Brampton Transit route 14 Torbram serves the stop named Torbram Rd at 8500 Torbram Rd, on this same street. Schedules move; check a live Brampton Transit trip rather than treating these sentences as a timetable. After you park in the plaza lot that faces the units, walk the numbered bays until Unit 59. Overnight visits use that same Torbram-facing door; listed hours are 24 hours daily.",
  "This homepage is the PLANETS 59 visit hub for Unit 59. The store name, Torbram address, phone, 24-hour hours, map, and directions belong here. Use the Unit 59 visit guide when you need the last turn from Airport Road or Steeles. Call +1 (289) 536-7493 if one listing decides the trip. Browse current flower tiers and categories on this page; listings can change. Brampton delivery is a separate dispatcher window from 10 a.m. to 10 p.m. and does not replace walking into Unit 59.",
];

export const HOME_FAQS: StoreFaq[] = [
  {
    q: "Where is PLANETS 59 Unit 59 in Brampton?",
    a: "PLANETS 59 is at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, in the Torbram / Airport Road corridor of northeast Brampton near Steeles Avenue East. Call +1 (289) 536-7493.",
  },
  {
    q: "What are the hours at 8500 Torbram Rd Unit 59?",
    a: "The PLANETS 59 storefront at Unit 59 is open 24 hours daily. Walk in anytime — no appointment needed. Adults 19+ must bring government photo ID.",
  },
  {
    q: "How do I tell Unit 59 apart from other bays at 8500 Torbram Rd?",
    a: "Civic 8500 is a numbered plaza. Look for the PLANETS 59 sign on the Torbram-facing bays and match Unit 59. Some maps print the same door as #59. Do not enter a neighbouring unit number.",
  },
  {
    q: "Do I need ID to walk into PLANETS 59?",
    a: "Yes. PLANETS 59 serves adults 19+ only. Bring valid government-issued photo ID to the Unit 59 door.",
  },
  {
    q: "Does PLANETS 59 deliver from this Torbram storefront?",
    a: "Brampton delivery is a separate PLANETS 59 dispatcher service from Unit 59. Ordering hours are 10 a.m. to 10 p.m. daily. Walk-in at Unit 59 remains open 24 hours. The dispatcher confirms whether an address is in range.",
  },
];

export const VISIT_FAQS: StoreFaq[] = [
  {
    q: "How do I reach Unit 59 from Airport Road or Steeles Avenue East?",
    a: "From Airport Road, reach Steeles Avenue East, turn onto Torbram Road, and look for civic 8500. From Steeles, turn onto Torbram and stay on that street until the plaza. Unit 59 is a numbered bay on the Torbram face, not a storefront on Airport Road.",
  },
  {
    q: "Which Brampton Transit route stops at 8500 Torbram Rd?",
    a: "Route 14 Torbram stops at Torbram Rd at 8500 Torbram Rd, on the same street as the plaza. Live arrivals change; use a current Brampton Transit trip planner rather than treating this page as a timetable.",
  },
  {
    q: "Where do I park, and which door is Unit 59?",
    a: "Plaza parking sits in front of the numbered bays along Torbram Road. Park, then walk the unit numbers until PLANETS 59 at Unit 59. There is no advertised rear public counter on this site.",
  },
  {
    q: "Why do some maps say 8500 Torbram Rd #59?",
    a: "Unit 59 and #59 describe the same PLANETS 59 bay at civic 8500 Torbram Road. Use either label to find this door. Do not treat a different unit number in the same plaza as PLANETS 59.",
  },
  {
    q: "What should I bring for a Unit 59 walk-in?",
    a: "Bring government-issued photo ID. PLANETS 59 is for adults 19+ only. Call +1 (289) 536-7493 if one listing is the reason you are coming. Menu listings on the website can change.",
  },
];

export function faqPageJsonLd(faqs: StoreFaq[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function cannabisStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CannabisStore",
        "@id": STORE_ID,
        name: gbpLocation.storeName,
        description:
          "Walk-in cannabis store at 8500 Torbram Rd Unit 59 in northeast Brampton, on the Torbram / Airport Road corridor. Open 24 hours daily. Adults 19+.",
        url: `${STORE_ORIGIN}/`,
        telephone: gbpLocation.phoneIntl,
        image: STOREFRONT_IMAGE,
        address: {
          "@type": "PostalAddress",
          streetAddress: gbpLocation.streetAddress,
          addressLocality: gbpLocation.city,
          addressRegion: gbpLocation.province,
          postalCode: gbpLocation.postalCode,
          addressCountry: gbpLocation.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: Number(gbpLocation.latitude),
          longitude: Number(gbpLocation.longitude),
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        sameAs: [GBP_MAPS_URL],
        hasMap: GBP_MAPS_URL,
        areaServed: [
          { "@type": "Place", name: "Torbram / Airport Road, Brampton" },
          { "@type": "City", name: "Brampton" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${STORE_ORIGIN}/#website`,
        url: `${STORE_ORIGIN}/`,
        name: gbpLocation.storeName,
      },
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

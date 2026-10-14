import strainGuideData from "./strainGuides.json";

/** PL501 strain guides (50). Educational only: no prices, no potency numbers, no stock promises. Lineage is "commonly reported". */
export type StrainGuide = { slug: string; name: string; type: string; group: "indica" | "sativa" | "hybrid"; lineage: string; aroma: string; note: string; intro: string; about: string; tip: string; faq: { q: string; a: string }; compare: string[]; local: string; closer: string; h1: string; title: string; description: string };

export const STRAIN_GUIDE_STORE = {
  "code": "PL501",
  "name": "PLANETS 59",
  "domain": "www.planets59.com",
  "street": "8500 Torbram Rd Unit 59",
  "address": "8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6",
  "area": "Brampton",
  "near": "Torbram Road",
  "phone": "+1 (289) 536-7493",
  "hours": "open 24 hours",
  "delivery": true,
  "menuHref": "/"
} as const;

export const STRAIN_GUIDES = strainGuideData as StrainGuide[];
export const getStrainGuide = (slug: string) => STRAIN_GUIDES.find((guide) => guide.slug === slug);

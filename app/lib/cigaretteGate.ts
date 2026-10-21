import { SHOW_CIGARETTES } from "./siteConfig";

/**
 * Rolling papers, Backwoods, and cigarillos stay visible.
 * Nicotine vapes mis-filed under the cigarette category stay visible too.
 */
export function isKeptWithCigarettesHidden(name: string, slug: string): boolean {
  const blob = `${name} ${slug}`.toLowerCase();
  if (blob.includes("backwood")) return true;
  if (blob.includes("cigarillo")) return true;
  if (/\brolling papers?\b|\braw papers?\b/.test(blob)) return true;
  if (/\bzpods?\b|\bnvape\b|\bn-vape\b|\be-?liquid\b/.test(blob) && !blob.includes("cigarette")) return true;
  return false;
}

export function isHiddenCigaretteProduct(item: { name?: string; slug?: string; category?: string }): boolean {
  if (SHOW_CIGARETTES) return false;
  const name = String(item.name || "");
  const slug = String(item.slug || "");
  if (isKeptWithCigarettesHidden(name, slug)) return false;
  return String(item.category || "").toUpperCase() === "CIGARETTES";
}

export function isHiddenCigaretteGuide(guide: { slug: string; lane: string }): boolean {
  if (SHOW_CIGARETTES) return false;
  if (guide.lane !== "native_cig") return false;
  if (guide.slug.includes("backwood") || guide.slug.includes("cigarillo")) return false;
  return true;
}

export function isHiddenResourceSlug(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return slug === "native-smokes" || slug.startsWith("native-smokes/");
}

export function isHiddenSeoSlug(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return slug === "native-cigarettes-brampton" || slug === "native-cigarettes-york";
}

export function isHiddenCigaretteCategorySlug(slug: string): boolean {
  if (SHOW_CIGARETTES) return false;
  return slug === "cigarettes";
}

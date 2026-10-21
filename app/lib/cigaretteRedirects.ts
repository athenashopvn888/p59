import { DELIVERY_GUIDE_REGISTRY } from "./deliveryGuideRegistry";
import itemsJson from "./items.json";
import { isHiddenCigaretteGuide, isHiddenCigaretteProduct } from "./cigaretteGate";
import { SHOW_CIGARETTES } from "./siteConfig";

type CatalogItem = { name: string; slug: string; category: string };

const HIDDEN_ITEM_SLUGS = new Set(
  (itemsJson as CatalogItem[]).filter((item) => isHiddenCigaretteProduct(item)).map((item) => item.slug),
);

const HIDDEN_GUIDE_SLUGS = new Set(
  DELIVERY_GUIDE_REGISTRY.filter((guide) => isHiddenCigaretteGuide(guide)).map((guide) => guide.slug),
);

const STATIC_CIGARETTE_PATHS = new Set([
  "/cigarettes",
  "/items/cigarettes",
  "/native-cigarettes-torbram",
  "/info/native-cigarettes-brampton",
  "/info/native-cigarettes-york",
  "/resources/native-smokes",
  "/resources/native-smokes/native-cigarettes-guide",
]);

function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

/** True when this request should 302 to the vape page. */
export function isCigaretteRedirectPath(pathname: string): boolean {
  if (SHOW_CIGARETTES) return false;
  const path = normalizePath(pathname);
  if (STATIC_CIGARETTE_PATHS.has(path)) return true;
  if (path.startsWith("/resources/native-smokes/")) return true;
  if (path.startsWith("/cigarettes/") || path.startsWith("/items/cigarettes/")) return true;
  const itemMatch = path.match(/^\/item\/([^/]+)$/);
  if (itemMatch) return HIDDEN_ITEM_SLUGS.has(decodeURIComponent(itemMatch[1]));
  const guideMatch = path.match(/^\/guides\/([^/]+)$/);
  if (guideMatch) return HIDDEN_GUIDE_SLUGS.has(decodeURIComponent(guideMatch[1]));
  return false;
}

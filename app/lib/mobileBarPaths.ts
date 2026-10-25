/** Routes checked against app pages and next.config redirects. */
export const MOBILE_BAR_MENU_HREF = "/exotic-weed";
export const MOBILE_BAR_DELIVERY_HREF = "/weed-delivery-brampton";
export const MOBILE_BAR_HOURS_HREF = "/hours";

const HIDDEN_PATHS = ["/tv", "/tv2"] as const;

/** In-store boards. The bar is omitted so it never covers the TV layout. */
export function isMobileBarHiddenPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return HIDDEN_PATHS.some((hidden) => path === hidden || path.startsWith(`${hidden}/`));
}

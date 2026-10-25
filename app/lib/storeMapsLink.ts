import { GBP_MAPS_URL, gbpLocation } from "./gbp-location.ts";
import { FULL_NAME_NAP } from "./fullNameNap.ts";

/**
 * Maps links already published for this store.
 * Short GBP pins come first, then the place-id pin, then the address directions URL.
 */
export const CONFIGURED_MAP_LINKS = [
  FULL_NAME_NAP.mapsUrl,
  GBP_MAPS_URL,
  gbpLocation.directionsUrl,
] as const;

const SHORT_PIN = /maps\.app\.goo\.gl|goo\.gl\/maps/i;
const PLACE_PIN = /place_id|query_place_id|\/maps\/place\//i;

/** Prefer a maps.app.goo.gl / GBP pin. Otherwise directions to the store address. */
export function storeMapsHref(links: readonly string[] = CONFIGURED_MAP_LINKS): string {
  const shortPin = links.find((url) => SHORT_PIN.test(url));
  if (shortPin) return shortPin;
  const placePin = links.find((url) => PLACE_PIN.test(url));
  if (placePin) return placePin;
  const directions = links.find((url) => /google\.com\/maps\/dir/i.test(url));
  if (directions) return directions;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gbpLocation.address)}`;
}

export const STORE_MAPS_HREF = storeMapsHref();

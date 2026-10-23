import { isRealCigaretteItem } from "../lib/cigMarkers.ts";
import type { CigaretteWording } from "../lib/cigDecision.ts";
import { isNicotineItem } from "../tv/flashMessages.ts";

/** Off-board heading. Matches the sheet wraps title and the current TV2 card. */
export function cigaretteBoardTitle(show: boolean, wording: Pick<CigaretteWording, "tv2BoardTitle" | "wrapsTitle">): string {
  return show ? wording.tv2BoardTitle : wording.wrapsTitle;
}

/**
 * Cigarette shelf follows the live TV flag.
 * While the flag is off, real cigarettes drop and wraps, papers, and pouches stay.
 * Daytime still hides nicotine products, except the cigarette shelf itself while the flag is on
 * (the 8:00–9:00 Toronto overlap is inside the sheet window).
 */
export function visibleBoardItems<T extends { category?: string; name?: string; slug?: string }>(
  items: T[],
  cardId: string,
  matches: (item: T) => boolean,
  daytime: boolean,
  tvShow: boolean,
): T[] {
  return items.filter(matches).filter((item) => {
    if (daytime && isNicotineItem(item)) {
      const cigaretteShelf = (item.category || "").toUpperCase() === "CIGARETTES";
      if (cardId === "CIGARETTES" && tvShow && cigaretteShelf) return true;
      return false;
    }
    if (cardId === "CIGARETTES" && !tvShow && isRealCigaretteItem(item)) return false;
    return true;
  });
}

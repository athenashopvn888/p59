import { cache } from "react";
import {
  snapshotCigaretteSurfaces,
  cigarettePublicHeaders,
  publicWebsiteCigaretteFlag,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
  reconcileSurfaceItems,
} from "./cigDecision";
import { allFlowers, allItems, type ItemProduct } from "./products";
import { SHOW_CIGARETTES, cigaretteEnvHardOff } from "./siteConfig";
import { getCigaretteDataset } from "./tvStock";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
  items: ItemProduct[];
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

type CigaretteDataset = {
  source?: string;
  items?: ItemProduct[];
  cig?: unknown;
};

function snapshotFrom(cig: unknown, items: ItemProduct[], live: boolean, errored: boolean): CigaretteSnapshot {
  const surfaces = snapshotCigaretteSurfaces({
    cig,
    items,
    errored,
    codedShow: SHOW_CIGARETTES,
  });
  return { ...surfaces, live, items };
}

/** Live sheet flag. TV reads tvOn and hides when the feed errors or the block is missing. Web is the coded switch in front of webOn, and stays off on a feed error or a missing block. A last-good cig block still inside the kit cache is not an error. */
export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshotFrom(null, [], false, false);
  try {
    const dataset = await getCigaretteDataset({
      staticFlowers: allFlowers,
      staticItems: allItems,
    }) as CigaretteDataset;
    const live = dataset?.source === "live";
    const items = Array.isArray(dataset?.items) ? dataset.items : allItems;
    const cig = dataset?.cig ?? null;
    return snapshotFrom(cig, items.length ? items : allItems, live, !live && !cig);
  } catch {
    return snapshotFrom(null, allItems, false, true);
  }
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return {
    web: publicWebsiteCigaretteFlag(snap.web, SHOW_CIGARETTES),
    tv: snap.tv.show,
    wording: snap.wording,
  };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  const state = toPublicCigaretteState(snap);
  return cigarettePublicHeaders({
    web: SHOW_CIGARETTES ? state.web : false,
    tv: state.tv,
    wording: state.wording,
  });
}

export { reconcileSurfaceItems };

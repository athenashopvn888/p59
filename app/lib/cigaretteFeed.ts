import { cache } from "react";
import {
  snapshotCigaretteSurfaces,
  cigarettePublicHeaders,
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

/** Live sheet flag. TV reads tvOn. Web reads webOn, and a missing feed stays on the coded website switch. */
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
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export function snapshotHeaders(snap: CigaretteSnapshot): Record<string, string> {
  return cigarettePublicHeaders({ web: snap.web.show, tv: snap.tv.show, wording: snap.wording });
}

export { reconcileSurfaceItems };

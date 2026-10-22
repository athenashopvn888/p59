import { cache } from "react";
import {
  CIG_WORDING_FALLBACK,
  type CigaretteSurfaceDecision,
  type CigaretteWording,
  reconcileSurfaceItems,
} from "./cigDecision";
import { SHOW_CIGARETTES, cigaretteEnvHardOff } from "./siteConfig";

export type CigaretteSnapshot = {
  web: CigaretteSurfaceDecision & { wording: CigaretteWording };
  tv: CigaretteSurfaceDecision & { wording: CigaretteWording };
  guides: CigaretteSurfaceDecision;
  wording: CigaretteWording;
  live: boolean;
};

export type PublicCigaretteState = {
  web: boolean;
  tv: boolean;
  wording: CigaretteWording;
};

function snapshot(show: boolean, reason: CigaretteSurfaceDecision["reason"]): CigaretteSnapshot {
  const wording = { ...CIG_WORDING_FALLBACK };
  const surface = { show, reason, wording };
  return {
    web: surface,
    tv: { ...surface },
    guides: { show, reason },
    wording,
    live: false,
  };
}

/**
 * This store has no live cigarette dataset. A missing feed stays on the coded
 * SHOW_CIGARETTES behaviour, which is what the existing redirect gate already uses.
 * An explicit env off stays off. Do not fail open to a visible cigarette page.
 */
export async function readCigaretteFeed(): Promise<CigaretteSnapshot> {
  if (cigaretteEnvHardOff()) return snapshot(false, "env");
  return snapshot(SHOW_CIGARETTES, SHOW_CIGARETTES ? "on" : "missing");
}

export const getCigaretteSnapshot = cache(readCigaretteFeed);

export function toPublicCigaretteState(snap: CigaretteSnapshot): PublicCigaretteState {
  return { web: snap.web.show, tv: snap.tv.show, wording: snap.wording };
}

export { reconcileSurfaceItems };

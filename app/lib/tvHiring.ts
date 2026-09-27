/**
 * Per-store hiring ribbon config for the in-store TV boards.
 * Set this to null to hide the ribbon. No sheet or API lookup.
 * PL501 hiring is off.
 */
export type TvHiringConfig = {
  store: string;
  headline: string;
  role: string;
  cta: string;
  url: string;
  displayUrl: string;
};

export const tvHiring: TvHiringConfig | null = null;

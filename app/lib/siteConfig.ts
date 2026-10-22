/**
 * Site-wide cigarette and tobacco visibility.
 * Defaults off. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore
 * every gated surface exactly as it was.
 */
export const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES === "true";

/** Nicotine vape menu. Hidden cigarette URLs 302 here. */
export const VAPE_PAGE_PATH = "/items/vapes";

function hardOffRaw(raw: string | undefined): string | undefined {
  if (raw != null) return raw;
  return process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES;
}

/** Explicit false / 0 / no / off. An empty value is not a hard override. */
export function cigaretteEnvHardOff(raw: string | undefined = hardOffRaw(undefined)): boolean {
  if (raw == null || raw.trim() === "") return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}

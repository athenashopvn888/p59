/**
 * Site-wide cigarette and tobacco visibility.
 * Defaults off. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore
 * every gated surface exactly as it was.
 */
export const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES === "true";

/** Nicotine vape menu. Hidden cigarette URLs 302 here. */
export const VAPE_PAGE_PATH = "/items/vapes";

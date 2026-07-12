/* -- Auto-generated strain effects & SEO descriptions -- */

interface StrainEffects {
  effects: { emoji: string; label: string }[];
  description: string;
  metaDescription: string;
}

const INDICA_EFFECTS = [
  { emoji: "\uD83D\uDECB\uFE0F", label: "Couch Lock" },
  { emoji: "\uD83D\uDE0C", label: "Relax" },
  { emoji: "\uD83C\uDF19", label: "Sleepy" },
];

const SATIVA_EFFECTS = [
  { emoji: "\u26A1", label: "Energize" },
  { emoji: "\uD83C\uDFA8", label: "Creative" },
  { emoji: "\uD83C\uDFAF", label: "Focus" },
];

const HYBRID_EFFECTS = [
  { emoji: "\u2696\uFE0F", label: "Balanced" },
  { emoji: "\uD83D\uDE04", label: "Uplifting" },
  { emoji: "\uD83C\uDF3F", label: "Calm" },
];

const TIER_DESCRIPTIONS: Record<string, string> = {
  EXOTIC: "ultra-rare, top-shelf exotic",
  PREMIUM: "premium connoisseur-grade",
  "AAA+": "heavy-hitting AAA+",
  AA: "quality daily-driver AA",
  BUDGET: "value-packed budget",
};

export function getStrainData(
  name: string,
  type: "indica" | "sativa" | "hybrid",
  tier: string,
  thc: string
): StrainEffects {
  const typeLabel =
    type === "indica" ? "Indica" : type === "sativa" ? "Sativa" : "Hybrid";
  const tierDesc = TIER_DESCRIPTIONS[tier] || tier.toLowerCase();
  const effects =
    type === "indica"
      ? INDICA_EFFECTS
      : type === "sativa"
      ? SATIVA_EFFECTS
      : HYBRID_EFFECTS;

  const description = `${name} is listed as a ${tierDesc} ${typeLabel} strain${
    thc ? ` with ${thc} THC shown in the current menu data` : ""
  }. Use the item page to compare current format, weight, posted price, and notes before choosing. Available in-store at PLANETS 59, Brampton.`;

  const metaDescription = `${name} - ${tierDesc} ${typeLabel}${
    thc ? ` with ${thc} THC shown` : ""
  }. Compare current menu details at PLANETS 59 in Brampton before visiting.`;

  return { effects, description, metaDescription };
}

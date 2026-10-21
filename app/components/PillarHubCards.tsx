import Link from "next/link";
import { PILLAR_HUB_CARDS, PILLAR_PATHS } from "../lib/pillarPages";
import styles from "./PillarHubCards.module.css";
import { SHOW_CIGARETTES } from "../lib/siteConfig";

const CIGARETTE_HUB_HEADING = "Torbram weed, 24-hour walk-in, delivery, Native cigarettes, nicotine vape, and visit";

export default function PillarHubCards({
  currentPath = "",
  heading = CIGARETTE_HUB_HEADING,
}: {
  currentPath?: string;
  heading?: string;
}) {
  const visibleHeading = SHOW_CIGARETTES || heading !== CIGARETTE_HUB_HEADING
    ? heading
    : "Torbram weed, 24-hour walk-in, delivery, nicotine vape, and visit";
  const cards = PILLAR_HUB_CARDS.filter((card) => card.href !== currentPath && (SHOW_CIGARETTES || card.href !== PILLAR_PATHS.nativeCig));

  if (!cards.length) return null;

  return (
    <nav className={styles.hub} aria-label={visibleHeading}>
      <p className={styles.kicker}>{visibleHeading}</p>
      <div className={styles.grid}>
        {cards.map((card) => (
          <Link className={styles.card} href={card.href} key={card.href}>
            <span>{card.label}</span>
            <small>{card.blurb}</small>
          </Link>
        ))}
      </div>
    </nav>
  );
}

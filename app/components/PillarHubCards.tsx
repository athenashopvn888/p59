import Link from "next/link";
import { PILLAR_HUB_CARDS } from "../lib/pillarPages";
import styles from "./PillarHubCards.module.css";

export default function PillarHubCards({
  currentPath = "",
  heading = "Torbram weed, 24-hour walk-in, delivery, Native cigarettes, nicotine vape, and visit",
}: {
  currentPath?: string;
  heading?: string;
}) {
  const cards = PILLAR_HUB_CARDS.filter((card) => card.href !== currentPath);

  if (!cards.length) return null;

  return (
    <nav className={styles.hub} aria-label={heading}>
      <p className={styles.kicker}>{heading}</p>
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

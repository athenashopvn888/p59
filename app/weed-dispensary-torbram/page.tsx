import type { Metadata } from "next";
import Link from "next/link";
import { PillarLanding } from "../components/PillarLanding";
import styles from "../components/pillarLanding.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  PILLAR_PATHS,
  WEED_DISPENSARY_FAQS,
  WEED_DISPENSARY_PILLAR,
  pillarUrl,
} from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: WEED_DISPENSARY_PILLAR.title },
  description: WEED_DISPENSARY_PILLAR.description,
  alternates: { canonical: pillarUrl(WEED_DISPENSARY_PILLAR.path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: WEED_DISPENSARY_PILLAR.title,
    description: WEED_DISPENSARY_PILLAR.description,
    url: pillarUrl(WEED_DISPENSARY_PILLAR.path),
  },
};

export default function WeedDispensaryTorbramPage() {
  return (
    <PillarLanding
      pageUrl={pillarUrl(WEED_DISPENSARY_PILLAR.path)}
      currentPath={WEED_DISPENSARY_PILLAR.path}
      kicker={WEED_DISPENSARY_PILLAR.kicker}
      h1={WEED_DISPENSARY_PILLAR.h1}
      lede={WEED_DISPENSARY_PILLAR.lede}
      faqs={WEED_DISPENSARY_FAQS}
      faqHeading="Torbram weed dispensary — quick answers"
      primaryHref={PILLAR_PATHS.visit}
      primaryLabel="Unit 59 visit guide"
    >
      <section>
        <h2 className={styles.sectionTitle}>Neighbourhood owner, not a city directory</h2>
        <p>
          If you searched “weed dispensary,” “weed dispensary near me,” or
          “cannabis dispensary” around Torbram Road, Airport Road, or Steeles
          Avenue East, this is the PLANETS 59 door at{" "}
          {gbpLocation.address} — not a Brampton-wide shop list. Stay on
          Torbram Road, match civic 8500, then walk to Unit 59.
        </p>
        <p>
          Adults 19+ can walk in during listed hours. Staff still check
          government photo ID. This URL does not rank other stores, invent a
          second PLANETS 59, or treat every Brampton neighbourhood as this
          counter.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Identity at Unit 59 on Torbram</h2>
        <p>
          The public name is PLANETS 59. The legal door is 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6. Call{" "}
          <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a> if
          one listing is the only reason for the trip. Neighbouring unit
          numbers in the same plaza are not this store. Airport Road is the
          next arterial, not the civic number.
        </p>
        <p>
          Name, phone, map, and Open 24 Hours stay on the homepage visit hub.
          The{" "}
          <Link href={PILLAR_PATHS.visit}>Unit 59 visit guide</Link> covers the
          last turn. A separate Brampton store-details page still lives at{" "}
          <Link href={PILLAR_PATHS.storePage}>/weed-dispensary-brampton</Link>;
          this neighbourhood LP owns Torbram / Unit 59 weed-dispensary intent.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>What this page does not replace</h2>
        <p>
          Browse current flower tiers and categories on the homepage. This
          page does not invent stock, prices, or a menu swimlane. Overnight /
          open-now walk-in stays on the{" "}
          <Link href={PILLAR_PATHS.hours}>24-hour Torbram page</Link>. Courier
          hours stay on{" "}
          <Link href={PILLAR_PATHS.delivery}>weed delivery from Torbram</Link>.
        </p>
        <p>
          Native cigarettes and nicotine vapes keep their own neighbourhood
          pages. Adults 19+ retail only — no medical claims.
        </p>
      </section>
    </PillarLanding>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PillarLanding } from "../components/PillarLanding";
import styles from "../components/pillarLanding.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  HOURS_FAQS,
  HOURS_PILLAR,
  PILLAR_PATHS,
  pillarUrl,
} from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: HOURS_PILLAR.title },
  description: HOURS_PILLAR.description,
  alternates: { canonical: pillarUrl(HOURS_PILLAR.path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: HOURS_PILLAR.title,
    description: HOURS_PILLAR.description,
    url: pillarUrl(HOURS_PILLAR.path),
  },
};

export default function TwentyFourHourTorbramPage() {
  return (
    <PillarLanding
      pageUrl={pillarUrl(HOURS_PILLAR.path)}
      currentPath={HOURS_PILLAR.path}
      kicker={HOURS_PILLAR.kicker}
      h1={HOURS_PILLAR.h1}
      lede={HOURS_PILLAR.lede}
      faqs={HOURS_FAQS}
      faqHeading="Open now / 24-hour Torbram — quick answers"
      primaryHref="/"
      primaryLabel="Homepage map and hours"
    >
      <section>
        <h2 className={styles.sectionTitle}>Open now on this Torbram block</h2>
        <p>
          If you searched “dispensary open now,” “24 hour weed near me,” or
          “24-hour dispensary near me” around Torbram Road, Airport Road, or
          Steeles Avenue East, this is the Unit 59 door — not a Brampton-wide
          open-now list. Stay on Torbram Road and match civic 8500. The homepage
          hours card is the live listing; this URL is the open-now owner for
          this corridor.
        </p>
        <p>
          Adults 19+ can walk in without an appointment at any hour we list as
          open. Staff still check photo ID after midnight. If you are not on
          this stretch, do not treat a generic near-me result as this storefront.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>What open 24 hours means at Unit 59</h2>
        <p>
          Listed hours are the same night and day: {gbpLocation.hoursLabel.toLowerCase()},
          seven days a week. This is still a retail counter — not a medical
          office, and not a second shop on Airport Road. Neighbouring unit
          numbers in the same plaza are not PLANETS 59.
        </p>
        <p>
          Overnight visits use the same Torbram-facing door as daytime. Park in
          the plaza lot that faces the numbered bays, then walk to Unit 59.
          Some maps print this door as 8500 Torbram Rd #59 — that hash mark is
          this bay.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>What the overnight counter can browse</h2>
        <p>
          The overnight counter is the same menu lanes as daytime: flower tiers,
          pre-rolls, edibles, vapes, concentrates, accessories, and listed
          cigarettes. Names and posted prices move. Call{" "}
          <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a> if
          one item is the only reason to come out. No medical claims — adult
          retail only.
        </p>
        <p>
          Prefer the last-turn notes? Use the{" "}
          <Link href={PILLAR_PATHS.visit}>Unit 59 visit guide</Link>. Courier
          hours stay on{" "}
          <Link href={PILLAR_PATHS.delivery}>weed delivery from Torbram</Link>.
          Native cigarettes and nicotine vapes have their own neighbourhood
          pages. The{" "}
          <Link href={PILLAR_PATHS.weedDispensary}>Torbram weed dispensary page</Link>{" "}
          owns neighbourhood identity, not a city-wide list. This URL stays
          the 24-hour / open-now owner.
        </p>
      </section>
    </PillarLanding>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PillarLanding } from "../components/PillarLanding";
import styles from "../components/pillarLanding.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  NATIVE_CIG_FAQS,
  NATIVE_CIG_PILLAR,
  PILLAR_PATHS,
  pillarUrl,
} from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: NATIVE_CIG_PILLAR.title },
  description: NATIVE_CIG_PILLAR.description,
  alternates: { canonical: pillarUrl(NATIVE_CIG_PILLAR.path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: NATIVE_CIG_PILLAR.title,
    description: NATIVE_CIG_PILLAR.description,
    url: pillarUrl(NATIVE_CIG_PILLAR.path),
  },
};

export default function NativeCigarettesTorbramPage() {
  return (
    <PillarLanding
      pageUrl={pillarUrl(NATIVE_CIG_PILLAR.path)}
      currentPath={NATIVE_CIG_PILLAR.path}
      kicker={NATIVE_CIG_PILLAR.kicker}
      h1={NATIVE_CIG_PILLAR.h1}
      lede={NATIVE_CIG_PILLAR.lede}
      faqs={NATIVE_CIG_FAQS}
      faqHeading="FAQ: Native cigarettes Torbram"
      primaryHref={PILLAR_PATHS.cigMenu}
      primaryLabel="Open the cigarette menu"
    >
      <section>
        <h2 className={styles.sectionTitle}>Native cigarettes at the Unit 59 counter</h2>
        <p>
          PLANETS 59 at {gbpLocation.streetAddress} lists Native cigarettes in
          the cigarette category. Neighbours on Torbram Road, Airport Road, and
          Steeles Avenue East can walk in at {gbpLocation.address} any hour —
          open 24 hours daily. This is a retail counter page for adults 19+,
          not a medical page and not a ranking claim.
        </p>
        <p>
          Tobacco and nicotine products are addictive. Bring valid government
          photo ID. Brand names, carton notes, and posted prices can change. Use
          the <Link href={PILLAR_PATHS.cigMenu}>cigarette menu</Link> for
          today’s listings, then confirm at the Torbram counter.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>The numbered bay, not the arterial</h2>
        <p>
          After you park in the Torbram-facing lot at civic 8500, walk the
          unit numbers until the bay marked 59. That single counter is the
          only cigarette door this page describes. Airport Road gets you to
          Steeles Avenue East; it does not host a second PLANETS 59 cigarette
          counter. A pin that lands on a neighbouring bay in the same building
          is the wrong door.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>How to shop the Torbram cigarette category</h2>
        <p>
          Open the cigarette category first. Listings may include carton-style
          Native smoke names such as BB Lights, BB Full, Canadian Lights,
          Canadian Full, or Canadian Classics Silver when those lines are
          posted. Only trust what the live menu still shows.
        </p>
        <p>
          Keep flower, pre-rolls, edibles, THC vapes, and concentrates on
          separate lists. Nicotine pouches and grabba, when listed, sit on the
          same cigarette category rather than a second neighbourhood LP. Call{" "}
          {gbpLocation.phone} if one carton or brand is the whole reason for
          the trip.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Walk-in hours versus delivery</h2>
        <p>
          Cigarette walk-in is 24 hours at Unit 59. Delivery is a separate 10
          a.m.–10 p.m. courier and is not a 24-hour smoke drop-off. A late-night
          cigarette visit should use the{" "}
          <Link href={PILLAR_PATHS.hours}>24-hour Torbram FAQ</Link> for hours
          truth, then this page for the category path.
        </p>
        <p>
          An older product-card resource still lives at{" "}
          <Link href={PILLAR_PATHS.cigInfo}>Native Cigarettes Brampton</Link>.
          Nicotine vapes stay on the{" "}
          <Link href={PILLAR_PATHS.nicVape}>Torbram nicotine vape page</Link>.
          Neighbourhood weed-dispensary identity stays on the{" "}
          <Link href={PILLAR_PATHS.weedDispensary}>Torbram weed dispensary page</Link>.
        </p>
      </section>
    </PillarLanding>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PillarLanding } from "../components/PillarLanding";
import styles from "../components/pillarLanding.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  DELIVERY_FAQS,
  DELIVERY_PILLAR,
  PILLAR_PATHS,
  pillarUrl,
} from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: DELIVERY_PILLAR.title },
  description: DELIVERY_PILLAR.description,
  alternates: { canonical: pillarUrl(DELIVERY_PILLAR.path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: DELIVERY_PILLAR.title,
    description: DELIVERY_PILLAR.description,
    url: pillarUrl(DELIVERY_PILLAR.path),
  },
};

export default function WeedDeliveryTorbramPage() {
  return (
    <PillarLanding
      pageUrl={pillarUrl(DELIVERY_PILLAR.path)}
      currentPath={DELIVERY_PILLAR.path}
      kicker={DELIVERY_PILLAR.kicker}
      h1={DELIVERY_PILLAR.h1}
      lede={DELIVERY_PILLAR.lede}
      faqs={DELIVERY_FAQS}
      faqHeading="Torbram weed delivery — quick answers"
      primaryHref={PILLAR_PATHS.deliveryCatalog}
      primaryLabel="Browse Brampton delivery menu"
    >
      <section>
        <h2 className={styles.sectionTitle}>What this delivery page covers</h2>
        <p>
          Use this URL when you searched weed delivery or cannabis delivery
          around Torbram Road, Airport Road, or Steeles Avenue East in northeast
          Brampton. Orders leave PLANETS 59 at {gbpLocation.address}. This page
          is not a GTA delivery directory and does not invent a kilometre
          radius.
        </p>
        <p>
          The dispatcher confirms whether a Brampton address can be served
          before an order is accepted. Adults 19+ only. Availability outside
          Brampton is not claimed here.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>How to start a Unit 59 delivery order</h2>
        <p>
          Open the{" "}
          <Link href={PILLAR_PATHS.deliveryCatalog}>Brampton weed delivery menu</Link>{" "}
          to note flower names and weights. Published terms on that catalog are
          a <strong>$60 product minimum</strong> and a{" "}
          <strong>$10 delivery fee</strong>. Use LIVE ORDER to reach the PLANETS
          59 dispatcher. New customers complete the private ID step in Web Chat.
        </p>
        <p>
          Delivery hours are 10 a.m. to 10 p.m. daily. That window is separate
          from the 24-hour walk-in. Posted names move; do not treat a screenshot
          as a stock promise. If one item is the only reason to order, wait for
          the dispatcher or call{" "}
          <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a>.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Walk-in stays a different clock</h2>
        <p>
          Prefer the counter? Unit 59 is listed Open 24 Hours. The{" "}
          <Link href={PILLAR_PATHS.hours}>24-hour Torbram dispensary page</Link>{" "}
          owns overnight / open-now intent. The{" "}
          <Link href={PILLAR_PATHS.visit}>visit guide</Link> covers the last turn
          from Airport Road or Steeles.
        </p>
        <p>
          Native cigarettes and nicotine vapes are sold at the walk-in counter
          and have their own neighbourhood pages. This URL does not replace
          those shelves and does not promise a 24-hour smoke or vape drop-off.
        </p>
      </section>
    </PillarLanding>
  );
}

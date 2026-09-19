import type { Metadata } from "next";
import Link from "next/link";
import { PillarLanding } from "../components/PillarLanding";
import styles from "../components/pillarLanding.module.css";
import { gbpLocation } from "../lib/gbp-location";
import {
  NIC_VAPE_FAQS,
  NIC_VAPE_PILLAR,
  PILLAR_PATHS,
  pillarUrl,
} from "../lib/pillarPages";

export const metadata: Metadata = {
  title: { absolute: NIC_VAPE_PILLAR.title },
  description: NIC_VAPE_PILLAR.description,
  alternates: { canonical: pillarUrl(NIC_VAPE_PILLAR.path) },
  robots: { index: true, follow: true },
  openGraph: {
    title: NIC_VAPE_PILLAR.title,
    description: NIC_VAPE_PILLAR.description,
    url: pillarUrl(NIC_VAPE_PILLAR.path),
  },
};

export default function NicotineVapeTorbramPage() {
  return (
    <PillarLanding
      pageUrl={pillarUrl(NIC_VAPE_PILLAR.path)}
      currentPath={NIC_VAPE_PILLAR.path}
      kicker={NIC_VAPE_PILLAR.kicker}
      h1={NIC_VAPE_PILLAR.h1}
      lede={NIC_VAPE_PILLAR.lede}
      faqs={NIC_VAPE_FAQS}
      faqHeading="FAQ: nicotine vape Torbram"
      primaryHref={PILLAR_PATHS.nicVapeMenu}
      primaryLabel="Browse nicotine vapes"
    >
      <section>
        <h2 className={styles.sectionTitle}>Nicotine vape at Unit 59 on Torbram</h2>
        <p>
          PLANETS 59 keeps nicotine vapes in a dedicated category at{" "}
          {gbpLocation.streetAddress}. People searching nicotine vape around
          Torbram Road, Airport Road, or Steeles Avenue East should pin{" "}
          {gbpLocation.address} first, then open{" "}
          <Link href={PILLAR_PATHS.nicVapeMenu}>/items/vapes</Link>. Adults 19+.
          Nicotine is addictive.
        </p>
        <p>
          The walk-in counter is open 24 hours daily. Delivery is a separate 10
          a.m.–10 p.m. window and is not a 24-hour nic-vape courier. Call{" "}
          {gbpLocation.phone} if one listed device is the reason you are coming
          in.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Keep nicotine vapes separate from THC vapes</h2>
        <p>
          Nicotine vapes live under /items/vapes. THC and cannabis vapour
          products live under{" "}
          <Link href={PILLAR_PATHS.thcVapeMenu}>/items/vape-disposables</Link>.
          Do not treat those two lists as one shelf.
        </p>
        <p>
          The live nic-vape menu may show names such as Geek Promax, Geek
          Universe, NEXA PIX, or OVNS formats when those lines are posted.
          Those names identify listings. They are not stock promises,
          puff-count guarantees, or a claim that one device is better than
          another.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Torbram walk-in for nic vape</h2>
        <p>
          Arrive on Torbram Road, match civic 8500, and walk to Unit 59. Plaza
          parking faces the numbered bays. This is the PLANETS 59 counter in
          northeast Brampton — not an Airport Road civic number and not a
          second Brampton shop.
        </p>
        <p>
          For overnight walk-in, use the{" "}
          <Link href={PILLAR_PATHS.hours}>24-hour Torbram FAQ</Link>. Native
          cigarettes stay on the{" "}
          <Link href={PILLAR_PATHS.nativeCig}>Torbram Native cigarettes page</Link>.
          A product-card resource still lives at{" "}
          <Link href={PILLAR_PATHS.nicVapeInfo}>Nicotine Vapes Brampton</Link>.
        </p>
      </section>
    </PillarLanding>
  );
}

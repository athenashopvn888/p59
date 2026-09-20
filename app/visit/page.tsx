import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { JsonLd } from "../lib/jsonLd";
import {
  STORE_ORIGIN,
  VISIT_FAQS,
  faqPageJsonLd,
  gbpLocation,
} from "../lib/gbp-location";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: { absolute: "Visit PLANETS 59 at Torbram Unit 59, Brampton" },
  description:
    "How to reach PLANETS 59 at 8500 Torbram Rd Unit 59: Torbram from Airport Road and Steeles, Brampton Transit 14, plaza parking, and the Unit 59 door. Adults 19+.",
  alternates: {
    canonical: `${STORE_ORIGIN}/visit`,
  },
  openGraph: {
    title: "Visit PLANETS 59 at Torbram Unit 59, Brampton",
    description:
      "Unit 59 wayfinding for 8500 Torbram Rd: Torbram / Airport Road approach, parking, and the numbered plaza door.",
    url: `${STORE_ORIGIN}/visit`,
  },
  robots: { index: true, follow: true },
};

export default function VisitPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(VISIT_FAQS, `${STORE_ORIGIN}/visit`)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>Torbram / Airport Road · Unit 59 · Adults 19+</p>
          <h1 className={styles.pageTitle}>How to visit PLANETS 59 at 8500 Torbram Rd Unit 59</h1>
          <p className={styles.lede}>
            This page is the last-turn guide for one numbered bay on Torbram Road in northeast
            Brampton. The homepage remains the visit hub with the same name, address, phone, and hours.
          </p>

          <section className={styles.nap} aria-labelledby="visit-nap-title">
            <h2 id="visit-nap-title" className={styles.sectionTitle}>Name, address, phone, hours</h2>
            <dl className={styles.napList}>
              <div>
                <dt>Store</dt>
                <dd>{gbpLocation.storeName}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{gbpLocation.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${gbpLocation.phoneIntl}`}>{gbpLocation.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>{gbpLocation.hoursLabel}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>
                  <Link href="/">{STORE_ORIGIN}/</Link>
                </dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <a
                className={styles.primary}
                href={gbpLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open directions
              </a>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
              <a className={styles.secondary} href={`tel:${gbpLocation.phoneIntl}`}>
                Call Unit 59
              </a>
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Unit 59 is a numbered Torbram plaza bay</h2>
            <p>
              PLANETS 59 is a single walk-in counter at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6.
              Civic 8500 is a multi-unit industrial-retail plaza. The legal address and the public door
              are on Torbram Road. Do not look for an Airport Road civic number, a mall interior unit,
              or a different bay in the same building.
            </p>
            <p>
              Finish the last few hundred metres here. Hours, the live menu, and the same NAP stay on
              the homepage. This URL is a how-to-arrive guide only.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>From Airport Road and Steeles Avenue East</h2>
            <p>
              Drivers already on Airport Road typically meet Steeles Avenue East first, then turn onto
              Torbram Road and hunt civic 8500. Airport Road is the next major north-south arterial
              east of this plaza; it is a corridor landmark, not the storefront street. From Steeles
              Avenue East, turn onto Torbram and stay on Torbram until the plaza face.
            </p>
            <p>
              Highway 407 and Highway 410 both feed Torbram Road for this northeast Brampton approach.
              Once you are inside the lot, read the unit numbers on the building. Unit 59 is the
              PLANETS 59 bay. Neighbouring numbers in the same plaza are not this store.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Finding the Unit 59 door</h2>
            <p>
              Park in the plaza lot that faces the numbered bays along Torbram Road, then walk to
              Unit 59. Look for the PLANETS 59 sign on that bay. Some maps print the same door as
              8500 Torbram Rd #59 — Unit 59 and #59 are the same PLANETS 59 entrance. There is no
              appointment window. Walk in during listed hours, which are 24 hours daily. Adults 19+
              must show government-issued photo ID before purchase.
            </p>
            <p>
              If you are using a rideshare, ask the driver for 8500 Torbram Road, Unit 59 — not a
              pin on Airport Road and not a neighbouring unit. You should see the plaza frontage on
              Torbram when you get out.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Brampton Transit on Torbram Road</h2>
            <p>
              Brampton Transit route 14 Torbram stops at Torbram Rd at 8500 Torbram Rd. That stop is
              on the same street as the plaza. After you alight, walk to civic 8500 and match Unit 59
              on the building face. Live stop times change; confirm the current trip in a Brampton
              Transit planner rather than treating this paragraph as a timetable.
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Five Torbram starting points</h2>
            <p>
              After you know the Unit 59 door, pick the lane that matches the
              visit. The neighbourhood weed dispensary page owns Torbram /
              Unit 59 dispensary identity — not a city-wide Brampton list. The
              24-hour page owns overnight walk-in. Weed delivery from Torbram
              is a separate 10 a.m.–10 p.m. courier. Native cigarettes and
              nicotine vapes have their own neighbourhood pages that point at
              the live categories.
            </p>
            <p>
              <Link href="/weed-dispensary-torbram">Weed dispensary on Torbram</Link>
              {" · "}
              <Link href="/24-hour-dispensary-torbram">24-hour Torbram walk-in</Link>
              {" · "}
              <Link href="/weed-delivery-torbram">Weed delivery from Unit 59</Link>
              {" · "}
              <Link href="/native-cigarettes-torbram">Native cigarettes</Link>
              {" · "}
              <Link href="/nicotine-vape-torbram">Nicotine vape</Link>
            </p>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>What to bring, and what this page does not promise</h2>
            <p>
              Bring photo ID. Debit and cash are accepted in store. Browse flower tiers, pre-rolls,
              edibles, vapes, and concentrates on the homepage menu before you travel; listings can
              change and this guide does not claim inventory, prices, or wait times. Delivery
              ordering from this store is a separate Brampton path, available daily from 10:00 a.m.
              to 10:00 p.m. through the delivery menu, with details confirmed by the dispatcher.
            </p>
          </section>

          <div className={styles.mapWrap}>
            <iframe
              title="Map of PLANETS 59 at 8500 Torbram Rd Unit 59, Brampton"
              src={gbpLocation.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <section>
            <h2 className={styles.sectionTitle}>Unit 59 arrival questions</h2>
            {VISIT_FAQS.map((faq) => (
              <details key={faq.q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{faq.q}</summary>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </details>
            ))}
          </section>
        </article>
        <Footer />
      </main>
    </>
  );
}

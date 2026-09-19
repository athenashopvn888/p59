import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PillarHubCards from "./PillarHubCards";
import { JsonLd } from "../lib/jsonLd";
import { faqPageJsonLd, type StoreFaq } from "../lib/gbp-location";
import { CORRIDOR_TAGS, pillarNapLines } from "../lib/pillarPages";
import styles from "./pillarLanding.module.css";

export function PillarLanding({
  pageUrl,
  currentPath,
  kicker,
  h1,
  lede,
  faqs,
  faqHeading,
  primaryHref,
  primaryLabel,
  children,
}: {
  pageUrl: string;
  currentPath: string;
  kicker: string;
  h1: string;
  lede: string;
  faqs: StoreFaq[];
  faqHeading: string;
  primaryHref: string;
  primaryLabel: string;
  children: ReactNode;
}) {
  const nap = pillarNapLines();

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs, pageUrl)} />
      <main className={styles.main}>
        <Navbar />
        <article className={styles.content}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 className={styles.pageTitle}>{h1}</h1>
          <p className={styles.lede}>{lede}</p>

          <section className={styles.nap} aria-labelledby="pillar-nap-title">
            <h2 id="pillar-nap-title" className={styles.sectionTitle}>
              Name, address, phone, hours
            </h2>
            <dl className={styles.napList}>
              <div>
                <dt>Store</dt>
                <dd>{nap.storeName}</dd>
              </div>
              <div>
                <dt>Address</dt>
                <dd>{nap.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${nap.phoneIntl}`}>{nap.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Walk-in hours</dt>
                <dd>{nap.hours}</dd>
              </div>
            </dl>
            <div className={styles.actions}>
              <Link className={styles.primary} href={primaryHref}>
                {primaryLabel}
              </Link>
              <Link className={styles.secondary} href="/">
                Homepage visit hub
              </Link>
              <Link className={styles.secondary} href="/visit">
                Unit 59 visit guide
              </Link>
            </div>
          </section>

          {children}

          <div className={styles.areaList} aria-label="Torbram Unit 59 corridor">
            {CORRIDOR_TAGS.map((tag) => (
              <span className={styles.areaTag} key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.hubWrap}>
            <PillarHubCards currentPath={currentPath} />
          </div>

          <section id="faq">
            <h2 className={styles.sectionTitle}>{faqHeading}</h2>
            {faqs.map((faq) => (
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

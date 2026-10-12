import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DELIVERY_GUIDE_REGISTRY, DELIVERY_GUIDE_STORE } from "../lib/deliveryGuideRegistry";
import { resolveDocumentTitle } from "../lib/gbp-location";
import guideStyles from "./[slug]/guide.module.css";
import styles from "./index.module.css";

const BASE = `https://${DELIVERY_GUIDE_STORE.domain}`;

export const metadata: Metadata = {
  title: resolveDocumentTitle("Guides | PLANETS 59 Brampton"),
  description: "Brand and product guides from PLANETS 59 in Brampton: Native cigarette brands and nicotine vapes, with links to the in-store menu and weed delivery.",
  alternates: { canonical: `${BASE}/guides` },
};

const GROUPS = [
  { lane: "native_cig", title: "Native cigarette guides", blurb: "Brand-by-brand notes on the Native cigarettes on the Unit 59 counter. Adults 19+." },
  { lane: "nic_vape", title: "Nicotine vape guides", blurb: "Nicotine vape brands on the dedicated nic-vape shelf, kept separate from THC vapes. Adults 19+. Nicotine is addictive." },
] as const;

export default function GuidesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE}/guides` }] },
      {
        "@type": "CollectionPage",
        "@id": `${BASE}/guides#webpage`,
        url: `${BASE}/guides`,
        name: "PLANETS 59 guides",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: DELIVERY_GUIDE_REGISTRY.length,
          itemListElement: DELIVERY_GUIDE_REGISTRY.map((guide, index) => ({ "@type": "ListItem", position: index + 1, name: guide.h1, url: `${BASE}/guides/${guide.slug}` })),
        },
      },
    ],
  };

  return (
    <main className={guideStyles.main}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Navbar />
      <article className={guideStyles.article}>
        <nav className={guideStyles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Guides</span></nav>
        <header className={guideStyles.hero}><h1>PLANETS 59 Guides</h1></header>
        <section className={guideStyles.section} aria-label="All PLANETS 59 guides">
          <p className={styles.intro}>
            Short guides for shoppers at PLANETS 59, 8500 Torbram Rd Unit 59 in Brampton. Pick a brand to see what it is and where to find it on the menu. For flower, start with the <Link href="/exotic-weed">store menu tiers</Link>. For orders to your door, see <Link href="/weed-delivery-brampton">weed delivery in Brampton</Link>.
          </p>
          {GROUPS.map((group) => {
            const guides = DELIVERY_GUIDE_REGISTRY.filter((guide) => guide.lane === group.lane);
            if (guides.length === 0) return null;
            return (
              <div key={group.lane}>
                <h2 className={styles.groupTitle}>{group.title}</h2>
                <p className={styles.intro}>{group.blurb}</p>
                <ul className={styles.list}>
                  {guides.map((guide) => (
                    <li key={guide.slug}><Link href={`/guides/${guide.slug}`}>{guide.h1}</Link></li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      </article>
      <Footer />
    </main>
  );
}

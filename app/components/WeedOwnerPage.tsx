import Link from "next/link";
import styles from "./WeedOwnerPage.module.css";

const flowerCollections = [
  ["Exotic Weed", "/exotic-weed"], ["Premium Weed", "/premium-weed"], ["AAA+ Weed", "/aaa-weed"],
  ["AA Weed", "/aa-weed"], ["Budget Weed", "/budget-weed"],
] as const;

const extraCategories = [
  ["Edibles", "/items/edibles"],
  ["THC Vape", "/items/vape-disposables"],
  ["Resources", "/resources"],
] as const;

const faqs = [
  ["Where is PLANETS 59 located?", "PLANETS 59 is located at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, in the Torbram / Airport Road corridor near Steeles Avenue East."],
  ["Is PLANETS 59 open 24 hours?", "Yes. The PLANETS 59 storefront at Unit 59 is open 24 hours daily."],
  ["What are the delivery hours?", "Brampton delivery runs from 10 a.m. to 10 p.m. Delivery hours are separate from storefront hours."],
  ["Is this location in Mississauga?", "No. PLANETS 59 is at 8500 Torbram Rd Unit 59 in Brampton. Customers coming from Mississauga can use the visitor guide and current map or transit information to plan the trip."],
  ["Where can I browse the flower collections?", "Use the Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed pages to browse the five PLANETS 59 flower collections."],
] as const;

export function WeedOwnerPage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": "https://www.planets59.com/weed-dispensary-brampton/#webpage", url: "https://www.planets59.com/weed-dispensary-brampton", name: "24-Hour Weed Dispensary in Brampton | PLANETS 59", description: "Visit PLANETS 59 at 8500 Torbram Rd Unit 59 in Brampton, near Steeles Ave E. Store open 24 hours daily. Brampton delivery runs 10 a.m.–10 p.m.", about: { "@id": "https://www.planets59.com/#store" }, mainEntity: { "@id": "https://www.planets59.com/#store" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.planets59.com/" },
      { "@type": "ListItem", position: 2, name: "Brampton Cannabis Dispensary", item: "https://www.planets59.com/weed-dispensary-brampton" },
    ] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ];

  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className={styles.hero}>
      <p className={styles.eyebrow}>PLANETS 59 · Torbram / Airport Road · Unit 59</p>
      <h1>24-Hour Cannabis Dispensary in Brampton</h1>
      <p>PLANETS 59 is a Brampton cannabis store at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6, in the Torbram / Airport Road corridor near Steeles Avenue East. The storefront is open 24 hours daily. Whether you already know which part of the menu you want to explore or simply need the store location before heading out, this page brings the essential Brampton visit information together in one place.</p>
      <div className={styles.actions}><Link href="/visit" className={styles.primary}>Unit 59 visit guide</Link><Link href="/weed-dispensary-torbram" className={styles.secondary}>Torbram weed dispensary</Link><Link href="/24-hour-dispensary-torbram" className={styles.secondary}>24-hour Torbram FAQ</Link><Link href="/weed-delivery-torbram" className={styles.secondary}>Torbram weed delivery</Link></div>
    </header>
    <section className={styles.section}><h2>Visit PLANETS 59 on Torbram Road</h2><address className={styles.address}><strong>PLANETS 59</strong><br />8500 Torbram Rd Unit 59<br />Brampton, ON L6T 5C6<br /><a href="tel:+12895367493">+1 289-536-7493</a><br />Open 24 Hours Daily</address><p>Use the <Link href="/visit">Unit 59 visit guide</Link> for plaza wayfinding, then check a current map or transit service before leaving.</p></section>
    <section className={styles.section}><h2>Browse the Five Weed Collections</h2><div className={styles.cards}>{flowerCollections.map(([title, href]) => <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>Explore the PLANETS 59 {title} collection.</p><span>Explore →</span></Link>)}</div><div className={styles.cards}>{extraCategories.map(([title, href]) => <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>Open the current PLANETS 59 {title} page.</p><span>Explore →</span></Link>)}</div><p>Each collection has its own page. Use the current collection and product pages for the information shown at the time you browse. You can also explore the existing PLANETS 59 categories for pre-rolls, edibles, THC vapes, concentrates and other menu sections without mixing those formats into the flower collections.</p></section>
    <section className={styles.section}><h2>Store Hours and Delivery Hours Are Different</h2><p>The PLANETS 59 storefront is open 24 hours daily. Brampton delivery is a separate service and runs from 10 a.m. to 10 p.m. Use the <Link href="/weed-delivery-brampton">Brampton delivery page</Link> for current service information. Availability outside Brampton can vary with driver coverage; contact PLANETS 59 to confirm before relying on delivery.</p></section>
    <section className={styles.section}><h2>Coming From Mississauga?</h2><p>Coming from Mississauga? This PLANETS 59 location is in Brampton, not Mississauga. Read the guide for customers <Link href="/info/weed-store-near-mississauga">visiting from Mississauga</Link>, then use your current map or transit service to plan the trip.</p></section>
    <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
  </main>;
}

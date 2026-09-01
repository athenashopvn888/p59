import Link from "next/link";
import styles from "./WeedOwnerPage.module.css";

const discovery = [
  ["Budget Flower", "Explore the verified Budget section.", "/budget"],
  ["Exotic Flower", "Explore the verified Exotic section.", "/exotic"],
  ["Edibles", "Explore the verified Edibles category.", "/items/edibles"],
  ["Disposable Vapes", "Explore the verified vape-disposables category.", "/items/vape-disposables"],
  ["PLANETS 59 Resources", "Explore cannabis shopping information.", "/resources"],
] as const;
const faqs = [
  ["Where is PLANETS 59?", "PLANETS 59 is located at 8500 Torbram Rd Unit 59, Brampton, ON L6T 5C6."],
  ["Is PLANETS 59 open 24 hours?", "Yes. PLANETS 59 is open 24 hours a day, seven days a week."],
  ["What cannabis categories can I explore?", "The verified routes on this page include Budget flower, Exotic flower, Edibles and Disposable Vapes."],
  ["What is the difference between weed and cannabis?", "Weed is common conversational terminology. Cannabis is the broader term."],
  ["What are bud and flower?", "Bud is a common informal word for cannabis flower. Flower is the category term for dried cannabis flower."],
  ["Does Budget mean a current deal?", "No. Budget is a verified browsing category. It does not by itself establish a current sale, discount, promotion or specific price."],
  ["Does PLANETS 59 have a specific product called Planet Weed?", "PLANETS 59 is the store brand. A phrase containing planet and weed does not by itself establish a specific product or strain. Call +1 289-536-7493 for a particular item."],
  ["How can I ask about one specific item?", "Call +1 289-536-7493."],
  ["Do I need to be 19+?", "Yes."],
] as const;

export function WeedOwnerPage() {
  const schema = { "@context": "https://schema.org", "@type": "Store", name: "PLANETS 59", url: "https://www.planets59.com/weed-dispensary-brampton/", telephone: "+12895367493", address: { "@type": "PostalAddress", streetAddress: "8500 Torbram Rd Unit 59", addressLocality: "Brampton", addressRegion: "ON", postalCode: "L6T 5C6", addressCountry: "CA" }, openingHours: "Mo-Su 00:00-24:00" };
  return <main className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Brampton Store Information · Adults 19+</p>
      <h1>PLANETS 59 — Weed Dispensary in Brampton</h1>
      <p>Local store and cannabis-category information for 8500 Torbram Rd Unit 59.</p>
      <div className={styles.actions}><Link href="/" className={styles.primary}>Explore PLANETS 59</Link><a href="tel:+12895367493" className={styles.secondary}>Call +1 289-536-7493</a></div>
    </header>
    <section className={styles.section}>
      <h2>Weed and Cannabis at PLANETS 59</h2>
      <p>PLANETS 59 is located at 8500 Torbram Rd Unit 59 in Brampton and is open 24 hours a day, seven days a week.</p>
      <p>Adults 19+ can begin with flower categories or focus on formats such as edibles and disposable vapes. The broad PLANETS 59 shopping experience remains centered on the main store experience, while these category choices give shoppers more specific places to start.</p>
      <p>For one particular item, call <a href="tel:+12895367493">+1 289-536-7493</a> before making a special trip.</p>
    </section>
    <section className={styles.section}>
      <h2>Find Your Weed at PLANETS 59</h2>
      <div className={styles.cards}>{discovery.map(([title, description, href]) => <Link href={href} className={styles.card} key={href}><h3>{title}</h3><p>{description}</p><span>Explore →</span></Link>)}</div>
      <p className={styles.note}>These links do not confirm current stock, a specific product, price, deal or promotion.</p>
    </section>
    <section className={styles.section}>
      <h2>Weed, Cannabis, Bud and Flower — Different Starting Points</h2>
      <div className={styles.terms}><div><h3>Weed</h3><p>Common everyday terminology for cannabis.</p></div><div><h3>Cannabis</h3><p>The broader term covering flower, edibles, vapes and other formats.</p></div><div><h3>Bud</h3><p>A casual term commonly used for cannabis flower.</p></div><div><h3>Flower</h3><p>Dried cannabis flower.</p></div></div>
      <p>A broad Weed or Cannabis question can become more useful once a shopper chooses between flower or another format such as edibles or vapes.</p>
    </section>
    <section className={styles.section}>
      <h2>PLANETS 59 — Open 24 Hours in Brampton</h2>
      <address className={styles.address}><strong>PLANETS 59</strong><br />8500 Torbram Rd Unit 59<br />Brampton, ON L6T 5C6<br /><a href="tel:+12895367493">+1 289-536-7493</a><br />Open 24 Hours · 7 Days a Week</address>
      <p>Adults 19+. Call ahead if one specific item is the reason for your visit.</p>
    </section>
    <section className={styles.section} id="faq"><h2>Frequently Asked Questions</h2><div className={styles.faqs}>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
  </main>;
}

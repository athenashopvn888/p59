import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — PLANETS 59 | Brampton Dispensary Questions",
  description:
    "Frequently asked questions about PLANETS 59 in Brampton. Hours, location, products, pricing, bundle offers, and everything you need to know before visiting.",
  alternates: {
    canonical: "https://www.planets59.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is PLANETS 59 located?", a: "We are located at 8500 Torbram Rd #59, Brampton, ON L6T 5C6. We're easily accessible by TTC bus routes and close to major highways like the 401." },
      { q: "What are your hours?", a: "We are open daily from 10:00 AM to 01:00 AM. Walk in anytime — no appointment needed." },
      { q: "Is there parking nearby?", a: "Yes. Free street parking is listed nearby on surrounding streets in the evenings. We're also easily accessible by local transit." },
      { q: "How far are you from Mississauga?", a: "We're just 5 minutes from the highways and central transit routes. We are centrally located and easy to reach." },
      { q: "What's the best way to get to PLANETS 59?", a: "We're easily accessible by car, bus, or foot. We are easily accessible by car, local transit, or bus routes. Free parking is listed on surrounding streets." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products do you carry?", a: "We list cannabis flower tiers plus edibles, vape pens, disposable vapes, concentrates, pre-rolls, Native cigarettes, accessories, and resources. Use the current menu for products and listings." },
      { q: "Do you have a current menu?", a: "Yes. Our online menu at planets59.com lists current menu items and prices. Check it before visiting because the selection can change." },
      { q: "What are your flower tiers?", a: "The menu groups flower into Exotic, Premium, AAA+, AA, and Budget tiers. Each tier page shows its current prices and menu items." },
      { q: "Do you sell edibles?", a: "Yes! We carry a variety of edibles including gummies, chocolates, baked goods, and more. THC content varies. Check our current menu for current listings." },
      { q: "Do you sell vapes?", a: "The menu includes categories for disposable vapes, refillable vape pens, nicotine vapes, and THC vapes. Check the current listings before visiting." },
      { q: "Do you sell native cigarettes?", a: "The current cigarette menu lists Native smoke brands including Rolled Gold Full, Rolled Gold Lights, BB Full Carton, BB Lights Carton, Canadian Classics Original, Canadian Classics Silver, Canadian Full, Canadian Goose Full, Canadian Goose Lights, Canadian Lights, Canadian Menthol, Nexus Full, Nexus Lights, Playfare Ultra Lights, Putters, Time Full, Time Lights, with $25/carton pricing where listed. Confirm current options before visiting." },
    ],
  },
  {
    title: "💰 Pricing & Bundle Offers",
    faqs: [
      { q: "What is the cheapest weed you sell?", a: "Our Budget tier starts at $3/g with value ounces from $40. Our AA tier is $4/g. These are the most competitive prices you'll find in Brampton." },
      { q: "What bundle pricing do you offer?", a: "Flower bundle pricing includes a 3g total option — the 3g total is shown clearly before purchase. Our Exotic, Premium, and AAA+ tiers also offer 6g bundle pricing, with 6g total pricing." },
      { q: "Do you have ounce options?", a: "The menu lists ounce options and prices when offered. Check the relevant flower tier for current details." },
      { q: "How does bundle pricing work?", a: "The 3g bundle pricing applies to every tier automatically. The 6g bundle pricing applies to Exotic, Premium, and AAA+ tiers. These are our standard everyday bundle offers." },
      { q: "How does the tier pricing work?", a: "Each flower strain is graded into one of five quality tiers. The tier determines the per-gram price. This transparent system means you always know exactly what you're paying — no confusing markups or inconsistent pricing." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! PLANETS 59 is walk-in only. Just show up anytime — we are open daily from 10:00 AM to 01:00 AM." },
      { q: "Can I order online?", a: "Currently, PLANETS 59 is an in-store shopping experience only. You can browse the current menu online before visiting." },
      { q: "Do you offer delivery?", a: "Delivery is coming soon! Visit our delivery page to sign up for email notifications when we launch our delivery service." },
      { q: "What payment methods do you accept?", a: "We accept cash and debit. No credit cards at this time." },
      { q: "Can staff help me compare menu items?", a: "Yes. Staff can help you compare current categories, formats, package details, and listed prices." },
      { q: "Is there a minimum purchase?", a: "No minimum purchase required. You can buy as little as 1 gram." },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ page
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className={styles.main}>
        <Navbar />

        {/* FAQ Banner */}
        <section style={{ width: "100%", overflow: "hidden", marginTop: "92px" }}>
          <img
            src="/banners/07_FAQ.webp"
            alt="PLANETS 59 FAQ — Your Questions Answered"
            style={{ width: "100%", height: "auto", display: "block", objectFit: "contain" }}
          />
        </section>

        <div className={styles.content}>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about PLANETS 59 — Brampton&apos;s premium dispensary at 8500 Torbram Rd #59 in Brampton.
          </p>

          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{cat.title}</h2>
              {cat.faqs.map((faq) => (
                <details key={faq.q} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.q}</summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          ))}

          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaText}>
              Use the current menu for live product details, or visit us at 8500 Torbram Rd #59, Brampton during listed hours.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

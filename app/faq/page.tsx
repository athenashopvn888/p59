import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ — PLANETS 59 | Brampton Dispensary Questions",
  description:
    "Frequently asked questions about PLANETS 59 in Brampton, including store information, current menu categories and Weed Delivery.",
  alternates: {
    canonical: "https://www.planets59.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    title: "📍 Location & Hours",
    faqs: [
      { q: "Where is PLANETS 59 located?", a: "We are located at 8500 Torbram Rd #59, Brampton, ON L6T 5C6. Use your preferred maps or transit service for current directions and travel information." },
      { q: "What are your hours?", a: "We are open 24 hours daily. Walk in anytime — no appointment needed." },
      { q: "Is there parking nearby?", a: "Check current local parking signs and restrictions before your visit." },
      { q: "How can I plan a visit?", a: "Use your preferred maps or transit service for current directions and travel information." },
      { q: "What's the best way to get to PLANETS 59?", a: "Use your preferred maps or transit service for current directions and travel information." },
    ],
  },
  {
    title: "🌿 Products & Menu",
    faqs: [
      { q: "What products are shown on the menu?", a: "Use the current menu to browse the categories and product information presented by PLANETS 59." },
      { q: "Do you have a current menu?", a: "Use the online menu at planets59.com for the product information presented while you browse." },
      { q: "What are your flower tiers?", a: "The menu groups flower into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed tiers. Use each tier page for the current menu information presented there." },
      { q: "Where can I browse edibles?", a: "Check the current Edibles menu for the product information presented while you browse." },
      { q: "Where can I browse vapes?", a: "Use the separate Nicotine Vape and THC Vape categories for the product information presented in each menu." },
      { q: "Where can I find Native smoke information?", a: "Explore the Native Smokes section for the information currently presented there." },
    ],
  },
  {
    title: "Menu Information",
    faqs: [
      { q: "Where can I find current product information?", a: "Use the current menu and the relevant category page for the information presented while you browse." },
      { q: "Where can I compare flower tiers?", a: "Use the Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed pages to compare the current menu information presented for each tier." },
      { q: "Where can I find current flower information?", a: "Check the relevant flower tier page for the current menu information presented there." },
      { q: "Can menu information change?", a: "Use the current menu when browsing because product information can change." },
      { q: "How are the flower tiers organized?", a: "Flower is organized into Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, and Budget Weed categories." },
    ],
  },
  {
    title: "🛒 Shopping & Experience",
    faqs: [
      { q: "Do I need an appointment?", a: "No! PLANETS 59 is walk-in only. Just show up anytime — we are open 24 hours daily." },
      { q: "Can I order online?", a: "Use the Weed Delivery menu to browse, then select LIVE ORDER to connect with the PLANETS 59 dispatcher. The dispatcher confirms availability and next steps." },
      { q: "Do you offer Weed Delivery?", a: "Use the PLANETS 59 Weed Delivery page and LIVE ORDER for the current information presented while you browse." },
      { q: "What payment methods do you accept?", a: "Check the current checkout or in-store information for available payment options." },
      { q: "Can staff help me compare menu items?", a: "Yes. Staff can help you compare current categories, formats, package details, and listed prices." },
      { q: "Where can I find current Weed Delivery terms?", a: "Check the Weed Delivery page and LIVE ORDER for the current terms presented there." },
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
            Everything you need to know about PLANETS 59 at 8500 Torbram Rd #59 in Brampton.
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


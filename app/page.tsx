"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DeliveryBanner from "./components/DeliveryBanner";
import FlowerCard from "./components/FlowerCard";
import { allFlowers } from "./lib/products";
import Papa from "papaparse";

/* -- Bento Mosaic Config -- */
const BENTO_TIERS = [
  {
    name: "EXOTIC WEED",
    slug: "exotic-weed",
    price: "$10-$12/g",
    banner: "/banners/exotics_banner.webp",
    className: styles.bentoExotic,
  },
  {
    name: "PREMIUM WEED",
    slug: "premium-weed",
    price: "$7-$10/g",
    banner: "/banners/premium_banner.webp",
    className: styles.bentoPremium,
  },
  {
    name: "AAA+ WEED",
    slug: "aaa-weed",
    price: "$5-$6/g",
    banner: "/banners/aaa_plus_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "AA WEED",
    slug: "aa-weed",
    price: "$4/g",
    banner: "/banners/aa_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "BUDGET WEED",
    slug: "budget-weed",
    price: "$3/g",
    banner: "/banners/budget_banner.webp",
    className: styles.bentoTile,
  },
  {
    name: "EDIBLES - PREROLLS - MORE",
    slug: "items/edibles",
    price: "Shop Tiers",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    className: styles.bentoEdibles,
  },
];

/* -- Explore Categories Config (New Banners) -- */
const EXPLORE_CATEGORIES = [
  { name: "Nicotine Vape", slug: "items/vapes", banner: "/banners/01_Vape_Pens.webp" },
  { name: "THC Vape", slug: "items/vape-disposables", banner: "/banners/02_Vape_Disposable.webp" },
  { name: "Concentrates", slug: "items/concentrates", banner: "/banners/03_Concentrates.webp" },
  { name: "Pre-Rolls", slug: "items/prerolls", banner: "/banners/04_Pre_Rolls.webp" },
  { name: "Accessories", slug: "items/add-ons", banner: "/banners/05_Accessories.webp" },
  { name: "Cigarettes", slug: "items/cigarettes", banner: "/banners/native-cigarette-offer-20260822.webp" },
  { name: "Magic Stuff", slug: "items/magic", banner: "/banners/09_Magic_Stuff.webp" },
  { name: "Resources", slug: "resources", banner: "/banners/01_welcome_to_planets59.webp" },
]

/* -- Local FAQs for Jane St -- */
const LOCAL_FAQS = [
  {
    q: "What are the hours for PLANETS 59?",
    a: "PLANETS 59 at 8500 Torbram Rd #59, Brampton is open 24 hours daily. Walk in anytime - no appointment needed.",
  },
  {
    q: "What cannabis products do you carry?",
    a: "Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed, plus separate categories for edibles, pre-rolls, Nicotine Vape, THC Vape and concentrates.",
  },
  {
    q: "Where is PLANETS 59 located?",
    a: "We are located at 8500 Torbram Rd #59, Brampton, ON L6T 5C6. Use the current menu and visit in person during listed hours. Check current local parking signs and restrictions before your visit.",
  },
  {
    q: "Where can value-minded flower shoppers start?",
    a: "Start with Budget Weed, then explore AA Weed or another PLANETS 59 flower collection. Product information is presented as you browse.",
  },
];

interface Review {
  name: string;
  comment: string;
  date: string;
}

interface ReviewStats {
  total: number;
  avg: number;
}

export default function HomePage() {
  const [featuredStrains, setFeaturedStrains] = useState<any[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsStats, setReviewsStats] = useState<ReviewStats | null>(null);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [welcomeBannerError, setWelcomeBannerError] = useState(false);
  const welcomeBannerSrc: string = "/banners/01_welcome_to_planets59.webp";
  const hasWelcomeBanner = welcomeBannerSrc && welcomeBannerSrc !== "/banners/" && !welcomeBannerSrc.includes("HERO_BANNER") && !welcomeBannerSrc.includes("WELCOME_BANNER") && welcomeBannerSrc !== "";

  /* -- 1. Fetch Client-Side Google Reviews -- */
  useEffect(() => {
    const STORE_KEY = "PL501";
    const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSu6iy9W3YKRzBYo_r96rXcbJsAOzlkzn5Rw9QMFnE0NbYSBgPxKX8kPRZNC9QcffZYj57155esmnqH/pub?gid=1555782756&single=true&output=csv";

    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Review feed returned ${r.status}`);
        return r.text();
      })
      .then((raw) => {
        const rows = Papa.parse<Record<string, string>>(raw, {
          header: true,
          skipEmptyLines: true,
        }).data;

        const reviewsPool: Review[] = [];
        let totalVal: number | null = null;
        let avgVal: number | null = null;
        let hasStats = false;

        rows.forEach((row) => {
          if (row.StoreKey !== STORE_KEY) return;

          const rn = row.ReviewerName || "";
          if (rn === "__STATS__") {
            const parsedTotal = parseInt(row.Comment || "", 10);
            const parsedAvg = parseFloat(row.CreateTime || "");
            if (Number.isFinite(parsedTotal) && Number.isFinite(parsedAvg)) {
              totalVal = parsedTotal;
              avgVal = parsedAvg;
              hasStats = true;
            }
            return;
          }

          const comment = row.Comment || "";
          if (!comment || comment.length < 10) return;
          const name = rn || "Customer";
          const dateStr = row.CreateTime || "";
          reviewsPool.push({ name, comment, date: dateStr });
        });

        setReviews(reviewsPool.slice(0, 6));
        if (hasStats && totalVal !== null && avgVal !== null) {
          setReviewsStats({ total: totalVal, avg: avgVal });
        }
        setReviewsLoading(false);
      })
      .catch((err) => {
        console.warn("Reviews fetch failed:", err);
        setReviewsLoading(false);
      });
  }, []);

  /* -- 2. Build Featured Strains -- */
  useEffect(() => {
    const pool = [...allFlowers].filter((f) => f.image);
    // Shuffle pool securely
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const picked: typeof pool = [];
    const tierCounts: Record<string, number> = {};

    for (const f of pool) {
      if (picked.length >= 8) break;
      const tc = tierCounts[f.tier] || 0;
      if (tc >= 2) continue; // max 2 per tier
      if (picked.some((p) => p.name === f.name)) continue; // avoid exact duplicates
      picked.push(f);
      tierCounts[f.tier] = tc + 1;
    }

    setFeaturedStrains(picked);
  }, []);

  return (
    <main className={styles.main}>
      {/* -- NAVBAR -- */}
      <Navbar />

      <DeliveryBanner />

      {/* -- WELCOME BANNER -- */}
      {hasWelcomeBanner && !welcomeBannerError && (
        <section className={styles.welcomeBannerSection}>
          <div className={styles.welcomeBannerContainer}>
            <img
              src={welcomeBannerSrc}
              alt="Welcome to PLANETS 59 - Premium Brampton Cannabis Dispensary"
              className={styles.welcomeBannerImg}
              onError={() => setWelcomeBannerError(true)}
            />
          </div>
        </section>
      )}

      <section className={styles.hiringBannerSection} aria-label="PLANETS 59 hiring">
        <div className={styles.hiringBanner}>
          <div className={styles.hiringBannerCopy}>
            <span className={styles.hiringBannerLabel}>Now Hiring</span>
            <h2>Budtenders / Managers Wanted At PLANETS 59</h2>
            <p>
              Torbram #59 needs reliable people with clean customer energy, steady availability, and the confidence to learn the menu. Online applications only. If we think you may be a good fit, we will contact you.
            </p>
          </div>
          <Link href="/careers/budtender" className={styles.hiringBannerButton}>
            Apply Online
          </Link>
        </div>
      </section>

      {/* -- BENTO MOSAIC HERO -- */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroStars} />

        <div className={styles.heroContent}>
          {/* Brand branding */}
          <div className={styles.brandBlock}>
            <img src="/storeFavicon.webp" alt="PLANETS 59 Icon" style={{ height: "60px", width: "60px", objectFit: "contain", borderRadius: "8px", marginBottom: "8px" }} />
            <h1 className={styles.brandTitle}>PLANETS 59</h1>
            <p className={styles.brandSub}>Torbram #59 Brampton Menu Stop</p>
            <div className={styles.brandBadge}>Open 24 Hours</div>
            <aside className={styles.homeDeliveryNotice} aria-labelledby="home-delivery-title">
              <h2 id="home-delivery-title">PLANETS 59 WEED DELIVERY</h2>
              <p>PLANETS 59 Weed Delivery serves Brampton daily from 10 a.m. to 10 p.m. Browse the flower delivery menu and use LIVE ORDER to connect with the PLANETS 59 dispatcher.</p>
            </aside>
            <div className={styles.homeMenuActions} aria-label="Choose a PLANETS 59 menu">
              <Link href="/exotic-weed" className={styles.homeMenuCta}>EXPLORE EXOTIC WEED</Link>
              <Link href="/weed-delivery-brampton" className={`${styles.homeMenuCta} ${styles.homeDeliveryCta}`}>EXPLORE WEED DELIVERY</Link>
            </div>
          </div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            {BENTO_TIERS.map((tier) => (
              <Link
                key={tier.slug}
                href={`/${tier.slug}`}
                className={`${styles.bentoTile} ${tier.className}`}
              >
                <div
                  className={styles.bentoTileBg}
                  style={{ backgroundImage: `url('${tier.banner}')` }}
                />
                <div className={styles.bentoTileOverlay} />
                <div className={styles.bentoTileContent}>
                  <span className={styles.bentoLabel}>{tier.name}</span>
                  <span className={styles.bentoPrice}>{tier.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- EXPLORE CATEGORIES -- */}
      <section className={styles.identitySection} aria-label="PLANETS 59 local identity">
        <div className={styles.container}>
          <div className={styles.identityGrid}>
            <div className={styles.identityIntro}>
              <p className={styles.identityTag}>Torbram #59, open 24 hours</p>
              <h2 className={styles.identityTitle}>A Brampton menu stop open around the clock.</h2>
              <p className={styles.identityText}>
                Explore PLANETS 59 through distinct flower collections, cannabis categories and shopper guides tied to the Torbram and Steeles store.
              </p>
            </div>
            <div className={styles.identityCard}>
              <span>8500 Torbram Rd #59</span>
              <p>Store information stays tied to the Brampton address, listed hours, contact details, and store page.</p>
            </div>
            <div className={styles.identityCard}>
              <span>24-hour store</span>
              <p>Open 24 hours daily, with browsing built around quick lane choices.</p>
            </div>
            <div className={styles.identityCard}>
              <span>Shopper guides</span>
              <p>Choose a Weed collection or cannabis category that interests you, then use the PLANETS 59 guides for more context.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection} id="menu">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore Categories</h2>
            <p className={styles.sectionSubtitle}>
              Choose the category that matches the visit, then use the current menu and resources before heading over.
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {EXPLORE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryCardBg}
                  style={{ backgroundImage: `url('${cat.banner}')` }}
                />
                <div className={styles.categoryCardOverlay} />
                <div className={styles.categoryCardContent}>
                  <h3 className={styles.categoryCardName}>
                    {cat.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- FEATURED PRODUCTS -- */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Strains</h2>
            <p className={styles.sectionSubtitle}>
              A quick look at flower options from the store menu. Open the item page for current details before choosing.
            </p>
          </div>

          <div className={styles.featuredScroll}>
            {featuredStrains.map((strain, i) => (
              <div key={`${strain.sku}-${i}`} className={styles.scrollItem}>
                <FlowerCard flower={strain} tierKey={strain.tier} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- SEO PANEL WRITE-UP -- */}
      <section className={styles.seoSection}>
        <div className={styles.container}>
          <div className={styles.seoPanel}>
            <h2 className={styles.seoPanelTitle}>Torbram #59 Menu Planning, Open 24 Hours</h2>
            <p className={styles.seoPanelText}>
              PLANETS 59 is a Brampton cannabis dispensary at 8500 Torbram Rd #59 near Steeles Ave E. Start with the store information, then choose the collection that fits your visit.
            </p>
            <p className={styles.seoPanelText}>
              Explore Exotic Weed, Premium Weed, AAA+ Weed, AA Weed, Budget Weed, pre-rolls, edibles, Nicotine Vape, THC Vape, concentrates, accessories, cigarettes or Resources.
            </p>
            <p className={styles.seoPanelText}>
              Use the current category pages and staff for listed product names, prices, and package details. Resources give shoppers a practical way to compare menu sections.
            </p>
          </div>
        </div>
      </section>

      {/* -- CLIENT-SIDE GOOGLE REVIEWS SHOWCASE -- */}
      <section className={styles.resourceBand} aria-label="PLANETS 59 resources">
        <div className={styles.container}>
          <div className={styles.resourceBandInner}>
            <div>
              <p className={styles.identityTag}>Resource Centre</p>
              <h2>Guides for PLANETS 59 shoppers.</h2>
              <p>Explore Weed flower collections, value-minded shopping, pre-rolls and Native smokes with practical category-by-category guidance.</p>
            </div>
            <div className={styles.resourceActions}>
              <Link href="/resources">Open Resources</Link>
              <Link href="/resources/native-smokes">Native Smokes</Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsHeader}>
            <h2 className={styles.sectionTitle}>Customer Feedback</h2>
            {reviewsStats && (
              <div className={styles.reviewsStarsSummary}>
                <span className={styles.reviewsStars}>{"\u2605\u2605\u2605\u2605\u2605"}</span>
                <span className={styles.reviewsAvg}>
                  {reviewsStats.avg.toFixed(1)}
                </span>
                <span className={styles.reviewsCount}>
                  ({reviewsStats.total} reviews)
                </span>
              </div>
            )}
          </div>

          <div className={styles.reviewsGrid}>
            {reviewsLoading ? (
              <div className={styles.reviewsLoading}>Loading customer feedback...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.reviewsLoading}>
                Customer feedback is unavailable right now.
              </div>
            ) : (
              reviews.map((rv, idx) => (
                <div key={idx} className={styles.rvCard}>
                  <div className={styles.rvTop}>
                    <div className={styles.rvAvatar}>
                      {rv.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.rvMeta}>
                      <span className={styles.rvName}>{rv.name}</span>
                      {rv.date && (
                        <span className={styles.rvDate}>
                          {new Date(rv.date).toLocaleDateString("en-CA", {
                            year: "numeric",
                            month: "short",
                          })}
                        </span>
                      )}
                    </div>
                    <span className={styles.rvStars}>*****</span>
                  </div>
                  <p className={styles.rvText}>
                    {rv.comment.length > 180 ? `${rv.comment.substring(0, 177)}...` : rv.comment}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className={styles.reviewCtaRow}>
          </div>
        </div>
      </section>

      {/* -- FAQS SECTION -- */}
      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle} style={{ textAlign: "center", marginBottom: "32px" }}>
            Frequently Asked Questions
          </h2>
          {LOCAL_FAQS.map((faq, i) => (
            <details key={i} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>{faq.q}</summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.weedDiscovery} aria-labelledby="weed-discovery-heading">
        <div className={styles.container}>
          <h2 id="weed-discovery-heading">Explore Weed &amp; Cannabis at PLANETS 59</h2>
          <p>PLANETS 59 is open 24 hours at 8500 Torbram Rd Unit 59 in Brampton. Adults 19+ can choose a more specific starting point based on the cannabis format they want to explore.</p>
          <div className={styles.weedDiscoveryLinks}>
            <Link href="/budget-weed">Budget Weed</Link><Link href="/exotic-weed">Exotic Weed</Link><Link href="/items/edibles">Edibles</Link><Link href="/items/vape-disposables">THC Vape</Link>
          </div>
          <Link href="/weed-dispensary-brampton" className={styles.storeInfoLink}>Explore PLANETS 59 Weed in Brampton</Link>
        </div>
      </section>

      {/* -- STORE LOCATION GRID -- */}
      <section className={styles.storeSection} id="contact">
        <div className={styles.container}>
          <div className={styles.storeGrid}>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Location</h3>
              <p className={styles.storeCardText}>
                8500 Torbram Rd #59
                <br />
                Brampton, ON L6T 5C6
                <br />
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Hours</h3>
              <p className={styles.storeCardText}>
                Open 7 Days a Week
                <br />
                <span className={styles.storeHighlight}>Open 24 Hours</span>
              </p>
            </div>
            <div className={styles.storeCard}>
              <h3 className={styles.storeCardTitle}>Walk In</h3>
              <p className={styles.storeCardText}>
                No appointment needed
                <br />
                <span className={styles.storeHighlight}>Torbram Rd & Steeles Ave E, Brampton</span>
              </p>
            </div>
          </div>

          {/* Map wrapper */}
          <div className={styles.mapWrap}>
          </div>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <Footer />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BudtenderApplicationForm from "./BudtenderApplicationForm";
import styles from "./budtender.module.css";

export const metadata: Metadata = {
  title: { absolute: "Budtender And Manager Application | PLANETS 59" },
  description: "Apply online for budtender or manager opportunities at PLANETS 59 on Torbram Rd in Brampton.",
  alternates: { canonical: "https://www.planets59.com/careers/budtender" },
};

export default function BudtenderCareersPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>PLANETS 59 Careers</span>
          <h1>Join The Torbram #59 Team</h1>
          <p>
            PLANETS 59 is taking applications from budtender and manager candidates who bring reliability, clean communication, and the kind of calm focus that helps a Brampton retail floor run smooth.
          </p>
          <p className={styles.onlineOnly}>Online applications only. Please do not call the store about hiring. If we think you may be a good fit, we will contact you.</p>
          <div className={styles.heroActions}>
            <a href="#application" className={styles.primaryAction}>Start Application</a>
            <Link href="/" className={styles.secondaryAction}>Back Home</Link>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <span>Good Fit Signals</span>
          <strong>Reliable, friendly, steady under pressure.</strong>
          <p>Tell us how you handle people, pace, cash, menu questions, and team energy when the store gets moving.</p>
        </aside>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.contentGrid}>
          <aside className={styles.infoPanel}>
            <h2>After You Apply</h2>
            <p>We review online applications first and reach out when your availability, experience, and answers line up with what the store needs.</p>
          </aside>
          <section id="application" className={styles.formPanel} aria-label="PLANETS 59 application form">
            <div className={styles.formIntro}>
              <span className={styles.eyebrow}>Apply Online</span>
              <h2>Tell Us What You Bring</h2>
              <p>Selfie photo is required before the form can submit.</p>
            </div>
            <BudtenderApplicationForm />
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}

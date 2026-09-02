import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.brand}>PLANETS 59</div>
            <p className={styles.desc}>
              Your local cannabis dispensary at 8500 Torbram Rd #59, Brampton. Visit
              PLANETS 59 for flower, edibles, vapes, pre-rolls, cigarettes, and menu resources.
              Open 24 Hours.
            </p>
            <div className={styles.buttons}>
              <Link href="/resources" className={styles.btnPrimary}>Open Resources</Link>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact Info</h3>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Address:</span>
              <span>8500 Torbram Rd #59</span>
              <span>Brampton, ON L6T 5C6</span>
              <span>Canada</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Phone:</span>
              <span>+1 (289) 536-7493</span>
            </div>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Hours:</span>
              <span className={styles.highlight}>Open 24 Hours</span>
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <nav className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/exotic-weed">Exotic Weed</Link>
              <Link href="/premium-weed">Premium Weed</Link>
              <Link href="/aaa-weed">AAA+ Weed</Link>
              <Link href="/aa-weed">AA Weed</Link>
              <Link href="/budget-weed">Budget Weed</Link>
              <Link href="/items/edibles">Edibles</Link>
              <Link href="/items/cigarettes">Cigarettes</Link>
              <Link href="/items/vapes">Nicotine Vape</Link>
              <Link href="/resources">Resources</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/weed-delivery-brampton">Weed Delivery</Link>
              <Link href="/info/cheap-weed-brampton">Cheap Weed Brampton</Link>
              <Link href="/info/native-cigarettes-brampton">Native Cigarettes Brampton</Link>
              <Link href="/info/nicotine-vapes-brampton">Nicotine Vapes Brampton</Link>
              <Link href="/info/weed-store-near-mississauga">Mississauga Visit Notes</Link>
              <Link href="/info/dispensary-near-me-brampton">Dispensary Near Me Brampton</Link>
              <Link href="/weed-dispensary-brampton">PLANETS 59 Weed Dispensary in Brampton</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>(c) {new Date().getFullYear()} PLANETS 59. Must be 19+ to enter. Please follow applicable laws and product labels.</p>
        </div>
      </div>
    </footer>
  );
}

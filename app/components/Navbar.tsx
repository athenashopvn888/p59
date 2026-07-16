"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navbar.module.css";

const FLOWER_LINKS = [
  { href: "/exotic", label: "Exotic" },
  { href: "/premium", label: "Premium" },
  { href: "/aaa", label: "AAA+" },
  { href: "/aa", label: "AA" },
  { href: "/budget", label: "Budget" },
];

const CATEGORY_LINKS = [
  { href: "/items/edibles", label: "Edibles" },
  { href: "/items/prerolls", label: "Pre-Rolls" },
  { href: "/items/vapes", label: "Nic Vape" },
  { href: "/items/vape-disposables", label: "THC Vape" },
  { href: "/items/concentrates", label: "Concentrates" },
  { href: "/items/magic", label: "Magic Stuff" },
  { href: "/items/cigarettes", label: "Cigarettes" },
  { href: "/items/add-ons", label: "Accessories" },
];

const GUIDE_LINKS = [
  { href: "/careers/budtender", label: "Hiring" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const menuGridRef = useRef<HTMLDivElement>(null);
  const [canAdvance, setCanAdvance] = useState(false);
  const menuLinks = [...FLOWER_LINKS, ...CATEGORY_LINKS];
  const isStoreMenuActive = menuLinks.some((link) => pathname === link.href);
  const isDeliveryActive = pathname === "/delivery";
  const updateScrollState = useCallback(() => { const menuGrid = menuGridRef.current; if (!menuGrid) return; setCanAdvance(menuGrid.scrollWidth - menuGrid.clientWidth - menuGrid.scrollLeft > 2); }, []);
  useEffect(() => { const menuGrid = menuGridRef.current; if (!menuGrid) return; updateScrollState(); menuGrid.addEventListener("scroll", updateScrollState, { passive: true }); window.addEventListener("resize", updateScrollState); const resizeObserver = new ResizeObserver(updateScrollState); resizeObserver.observe(menuGrid); if (menuGrid.firstElementChild) resizeObserver.observe(menuGrid.firstElementChild); return () => { menuGrid.removeEventListener("scroll", updateScrollState); window.removeEventListener("resize", updateScrollState); resizeObserver.disconnect(); }; }, [pathname, updateScrollState]);
  const advanceMenuGrid = () => { const menuGrid = menuGridRef.current; if (!menuGrid) return; const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; menuGrid.scrollBy({ left: Math.max(180, menuGrid.clientWidth * 0.75), behavior: reduceMotion ? "auto" : "smooth" }); };

  return (
    <nav className={styles.navbar} id="main-nav">
      <div className={styles.topBar}>
        <Link href="/" className={styles.logo}>
          <img src="/storeFavicon.webp" alt="PLANETS 59 Logo" className={styles.logoMark} />
          <span className={styles.brandStack}>
            <span className={styles.brandName}>PLANETS 59</span>
            <span className={styles.brandMeta}>Brampton menu hub</span>
          </span>
        </Link>

        <div className={styles.topBarRight}>
          <Link
            href="/exotic"
            className={`${styles.primaryTab} ${isStoreMenuActive ? styles.primaryTabActive : ""}`}
          >
            <span>Store Menu</span>
            <small>Browse</small>
          </Link>
          <Link
            href="/delivery"
            className={`${styles.primaryTab} ${styles.deliveryTab} ${isDeliveryActive ? styles.primaryTabActive : ""}`}
          >
            <span>Delivery Menu</span>
            <small>Soon</small>
          </Link>
          <Link href="/resources" className={styles.resourcesBtn}>Resources</Link>
          <Link href="/careers/budtender" className={styles.resourcesBtn}>Hiring</Link>
          <span className={styles.open}>
            <span className={styles.dot}></span>
            Open Now
          </span>
        </div>
      </div>

      <div className={styles.menuShell}>
        <div ref={menuGridRef} id="store-menu-scrollbar" className={styles.menuGrid} aria-label="Store menu categories">
          <div className={styles.menuScroller}>
          <span className={styles.trackLabel}>Flower</span>
          {FLOWER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.trackLink} ${pathname === link.href ? styles.trackLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <span className={styles.trackDivider}></span>
          <span className={styles.trackLabel}>Products</span>
          {CATEGORY_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.trackLink} ${pathname === link.href ? styles.trackLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <span className={styles.trackDivider}></span>
          <span className={styles.trackLabel}>Help</span>
          {GUIDE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.trackLink} ${pathname === link.href ? styles.trackLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
        {canAdvance && <button type="button" className={styles.menuAdvance} aria-label="Show more store menu categories" aria-controls="store-menu-scrollbar" onClick={advanceMenuGrid}><span aria-hidden="true">›</span></button>}
      </div>
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import styles from "./DeliveryBanner.module.css";

export default function DeliveryBanner() {
  return (
    <section className={styles.section} aria-label="PLANETS 59 Weed Delivery">
      <Link className={styles.link} href="/weed-delivery-brampton" aria-label="Explore PLANETS 59 Weed Delivery">
        <Image
          className={styles.image}
          src="/delivery/p59-delivery-banner.webp"
          alt="PLANETS 59 Weed Delivery in Brampton"
          width={1774}
          height={887}
          sizes="(max-width: 520px) calc(100vw - 16px), (max-width: 1488px) calc(100vw - 48px), 1440px"
          priority
        />
      </Link>
    </section>
  );
}

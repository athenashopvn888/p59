import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — PLANETS 59 | Brampton",
  description: "Get notified when PLANETS 59 launches same-day weed delivery across Brampton and surrounding areas.",
  alternates: {
    canonical: "https://planets59.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}

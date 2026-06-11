import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Cannabis Blog & Guides — PLANETS 59 | Brampton",
  description: "Read the latest strain reviews, dosing guides, and cannabis news from PLANETS 59 in Brampton.",
  alternates: {
    canonical: "https://planets59.com/blog",
  },
};

export default function BlogPage() {
  return <BlogContent />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceView from "../ResourceView";
import { getResourcePage, presentResourcePage, RESOURCE_PAGES } from "../resourceData";
import { isHiddenResourceSlug } from "../../lib/cigaretteGate";

type ResourceRouteProps = {
  params: Promise<{ slug?: string[] }>;
};

function routeSlug(slug?: string[]) {
  return (slug || []).join("/");
}

export function generateStaticParams() {
  return RESOURCE_PAGES.filter((page) => page.slug).map((page) => ({ slug: page.slug.split("/") }));
}

export async function generateMetadata({ params }: ResourceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page || isHiddenResourceSlug(page.slug)) return {};
  const visible = presentResourcePage(page);
  return {
    title: { absolute: visible.seoTitle },
    description: visible.description,
    alternates: { canonical: "https://www.planets59.com/resources/" + page.slug },
  };
}

export default async function ResourcePage({ params }: ResourceRouteProps) {
  const { slug } = await params;
  const page = getResourcePage(routeSlug(slug));
  if (!page || isHiddenResourceSlug(page.slug)) notFound();
  return <ResourceView page={presentResourcePage(page)} />;
}

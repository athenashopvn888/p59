import type { Metadata } from "next";
import ResourceView from "./ResourceView";
import { presentResourcePage, RESOURCE_HOME } from "./resourceData";

const resourceHome = presentResourcePage(RESOURCE_HOME);

export const metadata: Metadata = {
  title: { absolute: resourceHome.seoTitle },
  description: resourceHome.description,
  alternates: { canonical: "https://www.planets59.com/resources" },
};

export default function ResourcesPage() {
  return <ResourceView page={resourceHome} />;
}

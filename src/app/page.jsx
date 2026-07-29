import HomePage from "../legacy-pages/Heropage";
import JsonLd from "../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../lib/seo";

export const metadata = buildMetadata("home");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <HomePage />
    </>
  );
}

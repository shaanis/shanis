import AboutPage from "../../legacy-pages/AboutPage";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata = buildMetadata("about");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <AboutPage />
    </>
  );
}

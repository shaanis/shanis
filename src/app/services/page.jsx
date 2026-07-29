import ServicePage from "../../legacy-pages/ServicePage";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata = buildMetadata("services");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <ServicePage />
    </>
  );
}

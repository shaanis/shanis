import TestimonialPage from "../../legacy-pages/TestimonialPage";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata = buildMetadata("testimonials");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Testimonials", path: "/testimonials" }])} />
      <TestimonialPage />
    </>
  );
}

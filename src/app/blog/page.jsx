import BlogPage from "../../legacy-pages/BlogPage";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata = buildMetadata("blog");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <BlogPage />
    </>
  );
}

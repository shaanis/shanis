import ProjectPage from "../../legacy-pages/ProjectPage";
import JsonLd from "../../components/JsonLd";
import { buildMetadata, breadcrumbSchema } from "../../lib/seo";

export const metadata = buildMetadata("projects");

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      <ProjectPage />
    </>
  );
}

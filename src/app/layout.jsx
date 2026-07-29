import "../app-globals.css";
import AppShell from "../components/AppShell";
import JsonLd from "../components/JsonLd";
import { buildMetadata, personSchema, websiteSchema } from "../lib/seo";

export const metadata = buildMetadata("home");

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

import { siteConfig, pageSeo } from "../lib/seo";
import { posts } from "../lib/posts";

export default function sitemap() {
  const staticPages = Object.values(pageSeo).map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: page.path === "/" || page.path === "/blog" || page.path === "/projects" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/projects" ? 0.95 : 0.85,
  }));

  const blogPages = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate || "2026-06-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}

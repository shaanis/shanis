import BlogDetail from "../../../legacy-pages/BlogDetail";
import JsonLd from "../../../components/JsonLd";
import { buildMetadata, breadcrumbSchema, blogPostingSchema } from "../../../lib/seo";
import { getPostBySlug, posts } from "../../../lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata("blog");

  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: `${post.title} | Mohammed Shanis Blog`,
    description: post.seoDescription || post.desc,
    type: "article",
    image: post.image,
    keywords: [post.title, post.category, "Mohammed Shanis blog", "React developer Kerala", "MERN stack", "Node.js developer"],
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <>
      {post && <JsonLd data={blogPostingSchema(post)} />}
      {post && (
        <JsonLd
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ])}
        />
      )}
      <BlogDetail />
    </>
  );
}

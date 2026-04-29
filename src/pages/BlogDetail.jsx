import { useParams } from "react-router-dom";
import { posts } from "../data/posts";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <div className="text-white p-10">Not found</div>;

  return (
    <div className="bg-[#080808] text-white min-h-screen px-6 py-24">

      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.desc} />

        <link rel="canonical" href={`https://yourdomain.com/blog/${slug}`} />

        {/* OG */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.desc} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {post.title}
        </h1>

        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="rounded-2xl mb-10"
        />

        <p className="text-gray-400 leading-relaxed">
          {post.content}
        </p>

      </div>
    </div>
  );
};

export default BlogDetail;
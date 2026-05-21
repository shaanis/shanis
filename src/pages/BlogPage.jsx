import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";

/* ================= DATA ================= */
const postsData = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    category: "Development",
    date: "Aug 2025",
    desc: "Learn how to structure scalable backend systems using Node, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    slug: "scalable-mern-apps",
  },
  {
    id: 2,
    title: "Tailwind CSS v4: The Future of Styling",
    category: "Styling",
    date: "Sep 2025",
    desc: "Deep dive into the zero-runtime engine and the new CSS-first configuration.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    slug: "tailwind-v4",
  },
  {
    id: 3,
    title: "Optimizing Node.js for High Traffic",
    category: "Backend",
    date: "Oct 2025",
    desc: "Strategies for worker threads, clustering, and caching.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    slug: "node-performance",
  },
  {
    id: 4,
    title: "Modern UI with Bootstrap 5 & React",
    category: "Styling",
    date: "Nov 2025",
    desc: "Customizing Bootstrap to build premium UI.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    slug: "bootstrap-react-ui",
  },
  {
    id: 5,
    title: "React Server Components Explained",
    category: "Development",
    date: "Dec 2025",
    desc: "Moving beyond CSR with server-driven UI.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    slug: "react-server-components",
  },
  {
    id: 6,
    title: "Mastering GSAP for Premium UI",
    category: "UI/UX",
    date: "Jul 2025",
    desc: "Create cinematic animations using GSAP.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    slug: "gsap-animations",
  },
];

/* ================= COMPONENT ================= */
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Development", "UI/UX", "Backend", "Styling"];

  /* ✅ Optimized filtering */
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return postsData;
    return postsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#080808] text-[#e5e5e5] min-h-screen font-sans selection:bg-white selection:text-black">

      {/* ================= SEO ================= */}
      <SEO {...seoData.blog} />

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[0%] w-[30%] h-[30%] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-32 pb-20">

        {/* ================= HEADER ================= */}
        <header className="mb-16 md:mb-20">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-4 md:mb-6"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">
              Technical Journal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter mb-6 md:mb-8"
          >
            Design <span className="italic font-serif font-light text-white/60">&</span> Code.
          </motion.h1>

          <div className="flex flex-col gap-6 md:flex-row md:items-end justify-between">

            <p className="max-w-xl text-sm md:text-lg text-gray-400 leading-relaxed">
              Deep dives into <span className="text-white">Full Stack Engineering</span>, 
              scalable systems, and modern UI development.
            </p>

            {/* CATEGORY FILTER */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-label={`Filter ${cat}`}
                  className={`flex-shrink-0 px-4 md:px-6 py-2 rounded-full border text-[10px] md:text-[11px] uppercase tracking-widest transition-all duration-500 ${
                    activeCategory === cat
                      ? "bg-white text-black border-white"
                      : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </header>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">

          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, i) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`
                  group relative rounded-[2rem] overflow-hidden 
                  bg-[#0c0c0c] border border-white/[0.05] flex flex-col 
                  hover:border-white/20 transition-colors duration-500

                  ${i === 0 
                    ? "col-span-1 md:col-span-8 h-[420px] md:h-[550px]" 
                    : "col-span-1 md:col-span-4 h-[360px] md:h-[550px]"
                  }
                `}
              >
                <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-20" aria-label={post.title} />

                {/* IMAGE */}
                <div className="relative h-full overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale opacity-60 md:opacity-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-5 md:p-10 w-full">

                  <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-5">
                    <span className="text-[10px] text-white/40">{post.date}</span>
                    <span className="h-[1px] w-4 md:w-6 bg-white/20"></span>
                    <span className="text-[10px] text-white/80">{post.category}</span>
                  </div>

                  <h2 className={`font-bold leading-[1.1] mb-3 md:mb-5 tracking-tight ${
                    i === 0 ? "text-2xl md:text-5xl" : "text-lg md:text-2xl"
                  }`}>
                    {post.title}
                  </h2>

                  <p className="text-gray-500 text-xs md:text-sm max-w-sm line-clamp-2 md:line-clamp-3">
                    {post.desc}
                  </p>

                </div>

              </motion.article>
            ))}
          </AnimatePresence>

        </div>

        {/* ================= NEWSLETTER ================= */}
        <section className="mt-24 md:mt-40 p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05]">

          <div className="max-w-xl md:max-w-2xl mx-auto text-center">

            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tighter">
              Join the inner circle.
            </h2>

            <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-10">
              Monthly insights on MERN, UI/UX, and performance.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-white/[0.03] border border-white/10 rounded-full px-6 md:px-8 py-3 md:py-4 text-sm outline-none"
              />

              <button
                type="submit"
                className="bg-white text-black px-6 md:px-10 py-3 md:py-4 rounded-full text-xs font-bold uppercase tracking-widest"
              >
                Subscribe
              </button>
            </form>

          </div>
        </section>

      </main>

      {/* SCROLLBAR HIDE */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default BlogPage;
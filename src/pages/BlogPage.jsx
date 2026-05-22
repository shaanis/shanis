import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO";
import { seoData } from "../seo/seoConfig";

/* ================= DATA ================= */
const postsData = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    category: "Development",
    date: "Aug 2025",
    desc: "Learn how to structure scalable backend systems using Node, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=75&auto=format&fit=crop",
    slug: "scalable-mern-apps",
  },
  {
    id: 2,
    title: "Tailwind CSS v4: The Future of Styling",
    category: "Styling",
    date: "Sep 2025",
    desc: "Deep dive into the zero-runtime engine and the new CSS-first configuration.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=900&q=75&auto=format&fit=crop",
    slug: "tailwind-v4",
  },
  {
    id: 3,
    title: "Optimizing Node.js for High Traffic",
    category: "Backend",
    date: "Oct 2025",
    desc: "Strategies for worker threads, clustering, and caching.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&q=75&auto=format&fit=crop",
    slug: "node-performance",
  },
  {
    id: 4,
    title: "Modern UI with Bootstrap 5 & React",
    category: "Styling",
    date: "Nov 2025",
    desc: "Customizing Bootstrap to build premium UI.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=900&q=75&auto=format&fit=crop",
    slug: "bootstrap-react-ui",
  },
  {
    id: 5,
    title: "React Server Components Explained",
    category: "Development",
    date: "Dec 2025",
    desc: "Moving beyond CSR with server-driven UI.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=75&auto=format&fit=crop",
    slug: "react-server-components",
  },
  {
    id: 6,
    title: "Mastering GSAP for Premium UI",
    category: "UI/UX",
    date: "Jul 2025",
    desc: "Create cinematic animations using GSAP.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=75&auto=format&fit=crop",
    slug: "gsap-animations",
  },
];

const categories = ["All", "Development", "UI/UX", "Backend", "Styling"];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================= COMPONENT ================= */
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return postsData;
    return postsData.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#e5e5e5] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      <SEO {...seoData.blog} />

      {/* LIGHT BACKGROUND - optimized */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-6 md:pt-32">
        {/* HEADER */}
        <header className="mb-14 md:mb-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 flex items-center gap-2 md:mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 md:text-xs">
              Technical Journal
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.05 }}
            className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:mb-8 md:text-8xl"
          >
            Design{" "}
            <span className="font-serif font-light italic text-white/60">
              &
            </span>{" "}
            Code.
          </motion.h1>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <p className="max-w-xl text-sm leading-relaxed text-gray-400 md:text-lg">
              Deep dives into{" "}
              <span className="text-white">Full Stack Engineering</span>,
              scalable systems, and modern UI development.
            </p>

            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-label={`Filter ${cat}`}
                    className={`flex-shrink-0 rounded-full border px-4 py-2 text-[10px] uppercase tracking-widest transition-colors duration-200 md:px-6 md:text-[11px] ${
                      isActive
                        ? "border-white bg-white text-black"
                        : "border-white/10 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* GRID - removed AnimatePresence + layout for smoother performance */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.04 }}
              className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#0c0c0c] transition-colors duration-300 hover:border-white/20 ${
                index === 0
                  ? "col-span-1 h-[420px] md:col-span-8 md:h-[550px]"
                  : "col-span-1 h-[360px] md:col-span-4 md:h-[550px]"
              }`}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="absolute inset-0 z-20"
                aria-label={post.title}
              />

              <div className="relative h-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover opacity-60 transition-transform duration-500 ease-out md:opacity-50 md:group-hover:scale-[1.04] md:group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/25 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 md:p-10">
                <div className="mb-3 flex items-center gap-3 md:mb-5 md:gap-4">
                  <span className="text-[10px] text-white/40">
                    {post.date}
                  </span>
                  <span className="h-[1px] w-4 bg-white/20 md:w-6" />
                  <span className="text-[10px] text-white/80">
                    {post.category}
                  </span>
                </div>

                <h2
                  className={`mb-3 font-bold leading-[1.1] tracking-tight md:mb-5 ${
                    index === 0 ? "text-2xl md:text-5xl" : "text-lg md:text-2xl"
                  }`}
                >
                  {post.title}
                </h2>

                <p className="max-w-sm line-clamp-2 text-xs text-gray-500 md:line-clamp-3 md:text-sm">
                  {post.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* NEWSLETTER */}
        <section className="mt-24 rounded-[2rem] border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent p-6 md:mt-40 md:rounded-[3rem] md:p-12">
          <div className="mx-auto max-w-xl text-center md:max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold tracking-tighter md:mb-6 md:text-5xl">
              Join the inner circle.
            </h2>

            <p className="mb-6 text-sm text-gray-500 md:mb-10 md:text-base">
              Monthly insights on MERN, UI/UX, and performance.
            </p>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex flex-col gap-3 md:gap-4 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm outline-none transition-colors focus:border-white/30 md:px-8 md:py-4"
              />

              <button
                type="submit"
                className="rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white/90 md:px-10 md:py-4"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @media (max-width: 767px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const postsData = [
  {
    id: 1,
    title: "Building Scalable MERN Applications",
    category: "Development",
    date: "Aug 2025",
    desc: "Learn how to structure scalable backend systems using Node, Express, and MongoDB.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    slug: "scalable-mern-apps",
    readTime: "6 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "Introduction",
        text: "Building a scalable MERN application is not only about writing backend APIs and frontend components. It is about creating a clean architecture that can grow as your business, users, and features increase.",
      },
      {
        heading: "Folder Structure Matters",
        text: "A professional MERN application should have a clear separation between routes, controllers, models, middleware, services, and utilities. This makes the backend easier to maintain and debug.",
      },
      {
        heading: "Backend Scalability",
        text: "Use proper error handling, validation, authentication middleware, reusable services, and database indexing. MongoDB schemas should be designed carefully to avoid performance issues when data grows.",
      },
      {
        heading: "Frontend Architecture",
        text: "On the React side, split the project into pages, components, services, hooks, and context or Redux slices. This keeps the application clean and prevents large unmanageable files.",
      },
      {
        heading: "Final Thoughts",
        text: "Scalability starts from the first line of code. A clean structure, reusable logic, optimized APIs, and performance-focused UI will make your MERN project production-ready.",
      },
    ],
  },
  {
    id: 2,
    title: "Tailwind CSS v4: The Future of Styling",
    category: "Styling",
    date: "Sep 2025",
    desc: "Deep dive into the zero-runtime engine and the new CSS-first configuration.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    slug: "tailwind-v4",
    readTime: "5 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "Why Tailwind CSS Is Popular",
        text: "Tailwind CSS helps developers build fast, consistent, and responsive interfaces without writing large custom CSS files.",
      },
      {
        heading: "CSS First Workflow",
        text: "Modern Tailwind workflows focus more on native CSS variables, design tokens, and better performance while keeping utility-first development simple.",
      },
      {
        heading: "Building Premium UI",
        text: "With Tailwind, you can easily create glassmorphism, gradients, responsive layouts, dark themes, and professional SaaS interfaces.",
      },
    ],
  },
  {
    id: 3,
    title: "Optimizing Node.js for High Traffic",
    category: "Backend",
    date: "Oct 2025",
    desc: "Strategies for worker threads, clustering, and caching.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
    slug: "node-performance",
    readTime: "7 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "Performance Starts With Structure",
        text: "High traffic Node.js applications need proper API structure, optimized database queries, caching, and background processing.",
      },
      {
        heading: "Use Caching",
        text: "Frequently requested data should be cached using tools like Redis or in-memory caching depending on the project scale.",
      },
      {
        heading: "Avoid Blocking Code",
        text: "Node.js works best when the event loop is not blocked. Heavy CPU operations should be moved to worker threads or background jobs.",
      },
    ],
  },
  {
    id: 4,
    title: "Modern UI with Bootstrap 5 & React",
    category: "Styling",
    date: "Nov 2025",
    desc: "Customizing Bootstrap to build premium UI.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    slug: "bootstrap-react-ui",
    readTime: "4 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "Bootstrap Still Has Value",
        text: "Bootstrap is still useful for quickly building responsive layouts, forms, modals, navbars, and dashboards.",
      },
      {
        heading: "Customize the Default Look",
        text: "To make Bootstrap look modern, avoid the default style. Use custom spacing, typography, colors, and card layouts.",
      },
      {
        heading: "React Integration",
        text: "Bootstrap can be used with React components to quickly build admin panels, landing pages, and business dashboards.",
      },
    ],
  },
  {
    id: 5,
    title: "React Server Components Explained",
    category: "Development",
    date: "Dec 2025",
    desc: "Moving beyond CSR with server-driven UI.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    slug: "react-server-components",
    readTime: "8 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "What Are Server Components?",
        text: "React Server Components allow parts of the UI to be rendered on the server, reducing client-side JavaScript and improving performance.",
      },
      {
        heading: "Why It Matters",
        text: "For large applications, reducing client bundle size can improve loading speed, SEO, and user experience.",
      },
      {
        heading: "When To Use",
        text: "Use server components for data-heavy pages, blogs, dashboards, and pages where SEO and loading performance are important.",
      },
    ],
  },
  {
    id: 6,
    title: "Mastering GSAP for Premium UI",
    category: "UI/UX",
    date: "Jul 2025",
    desc: "Create cinematic animations using GSAP.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    slug: "gsap-animations",
    readTime: "6 min read",
    author: "Mohammed Shanis",
    content: [
      {
        heading: "Why GSAP?",
        text: "GSAP is one of the best animation libraries for creating smooth, cinematic, and scroll-based web animations.",
      },
      {
        heading: "ScrollTrigger",
        text: "ScrollTrigger helps create pinned sections, scrub animations, reveal effects, and advanced landing page interactions.",
      },
      {
        heading: "Premium Feel",
        text: "The key to premium animation is subtle movement, smooth easing, proper timing, and avoiding too many effects at once.",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const BlogDetail = () => {
  const { slug } = useParams();

  const post = postsData.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = postsData
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-orange-400 selection:text-black">
      <Helmet>
        <title>{post.title} | Mohammed Shanis Blog</title>
        <meta name="description" content={post.desc} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.desc} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.slug}`} />
      </Helmet>

      {/* Premium Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.07),transparent_28%),linear-gradient(to_bottom,#050505,#090909,#050505)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.18]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.72))]" />
      </div>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-12 pt-28 md:grid-cols-12 md:px-6 md:pt-28">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="md:col-span-7"
          >
            <motion.div variants={item}>
              <Link
                to="/blog"
                className="group mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 backdrop-blur-xl transition hover:border-orange-400/40 hover:text-white"
              >
                <span className="transition group-hover:-translate-x-1">←</span>
                Back to Journal
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="rounded-full bg-orange-400 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black">
                {post.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {post.date}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
                {post.readTime}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="max-w-5xl text-[3rem] font-black leading-[0.9] tracking-[-0.08em] text-white sm:text-6xl md:text-7xl lg:text-[6.4rem]"
            >
              {post.title}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-base leading-8 text-white/50 md:text-xl md:leading-9"
            >
              {post.desc}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-5 border-l border-white/10 pl-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-sm font-black text-black">
                  MS
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-white/35">Full Stack Developer</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-fit rounded-full bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-black transition hover:bg-orange-400"
              >
                Work with me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-orange-400/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl backdrop-blur-xl md:rounded-[2.8rem]">
                <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] md:h-[640px] md:rounded-[2.2rem]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale transition duration-1000 hover:scale-105 hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                      Article Summary
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Practical insights for building better modern web applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 -top-3 hidden rounded-3xl border border-white/10 bg-white p-5 text-black shadow-2xl md:block">
                <p className="text-3xl font-black">{post.content.length}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/50">
                  Sections
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Article Body */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-6 md:py-24">
          {/* Sticky Sidebar */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-28 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                In this article
              </p>

              <div className="space-y-3">
                {post.content.map((block, index) => (
                  <a
                    key={block.heading}
                    href={`#section-${index + 1}`}
                    className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition hover:bg-white/[0.05]"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-[10px] font-bold text-white/35 group-hover:border-orange-400 group-hover:text-orange-400">
                      {index + 1}
                    </span>
                    <span className="text-sm text-white/55 group-hover:text-white">
                      {block.heading}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="md:col-span-8 lg:col-span-9">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0b]/80 backdrop-blur-xl md:rounded-[3rem]">
              {post.content.map((block, index) => (
                <motion.section
                  id={`section-${index + 1}`}
                  key={block.heading}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative border-b border-white/[0.08] p-6 last:border-b-0 md:p-12"
                >
                  <div className="absolute right-8 top-8 text-6xl font-black tracking-[-0.08em] text-white/[0.025] md:text-8xl">
                    0{index + 1}
                  </div>

                  <div className="relative">
                    <span className="mb-6 inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-300">
                      Section 0{index + 1}
                    </span>

                    <h2 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                      {block.heading}
                    </h2>

                    <p className="mt-7 max-w-3xl text-base leading-8 text-white/55 md:text-lg md:leading-9">
                      {block.text}
                    </p>
                  </div>
                </motion.section>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-10 overflow-hidden rounded-[2rem] border border-orange-400/20 bg-orange-400 p-1 md:rounded-[3rem]"
            >
              <div className="rounded-[1.75rem] bg-[#080808] p-6 md:rounded-[2.7rem] md:p-10">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-orange-300">
                      Build something premium
                    </p>
                    <h3 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">
                      Need a modern website?
                    </h3>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
                      I build scalable, responsive, and animated web apps using
                      React, Node.js, MongoDB, Tailwind CSS, GSAP, and modern UI systems.
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="rounded-full bg-white px-8 py-4 text-center text-[10px] font-black uppercase tracking-[0.22em] text-black transition hover:bg-orange-200"
                  >
                    Contact Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </article>
        </section>

        {/* Related Posts */}
        <section className="mx-auto max-w-7xl px-5 pb-24 md:px-6 md:pb-32">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-orange-300">
                Continue Reading
              </p>
              <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
                More Articles
              </h2>
            </div>

            <Link
              to="/blog"
              className="w-fit rounded-full border border-white/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white/50 transition hover:border-white/30 hover:text-white"
            >
              View all posts
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {relatedPosts.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${item.slug}`}
                  className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 transition hover:-translate-y-2 hover:border-orange-400/40 hover:bg-white/[0.06]"
                >
                  <div className="relative h-64 overflow-hidden rounded-[1.5rem]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/35">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-black leading-tight tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/45">
                      {item.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-300">
                      Read article
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetail;
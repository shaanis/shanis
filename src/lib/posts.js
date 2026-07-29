export const posts = [
  {
    title: "Building Scalable MERN Applications",
    slug: "scalable-mern-apps",
    category: "Development",
    date: "Aug 2025",
    isoDate: "2025-08-01",
    desc: "Learn how to structure scalable backend systems using Node, Express, and MongoDB.",
    seoDescription:
      "Learn how to build scalable MERN applications with clean backend architecture, optimized React structure, reusable services, MongoDB indexing, and production-ready coding practices.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
  {
    title: "Tailwind CSS v4: The Future of Styling",
    slug: "tailwind-v4",
    category: "Styling",
    date: "Sep 2025",
    isoDate: "2025-09-01",
    desc: "Deep dive into the zero-runtime engine and the new CSS-first configuration.",
    seoDescription:
      "Explore Tailwind CSS styling workflows for building responsive, premium, and consistent user interfaces with utility classes, design tokens, modern CSS, and fast frontend development.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
  {
    title: "Optimizing Node.js for High Traffic",
    slug: "node-performance",
    category: "Backend",
    date: "Oct 2025",
    isoDate: "2025-10-01",
    desc: "Strategies for worker threads, clustering, and caching.",
    seoDescription:
      "Discover practical Node.js performance techniques for high-traffic applications, including API optimization, caching, background jobs, worker threads, and scalable backend structure.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
  {
    title: "Modern UI with Bootstrap 5 & React",
    slug: "bootstrap-react-ui",
    category: "Styling",
    date: "Nov 2025",
    isoDate: "2025-11-01",
    desc: "Customizing Bootstrap to build premium UI.",
    seoDescription:
      "Learn how to create modern React interfaces with Bootstrap 5 by customizing layouts, forms, cards, spacing, typography, responsive components, and premium UI patterns.",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
  {
    title: "React Server Components Explained",
    slug: "react-server-components",
    category: "Development",
    date: "Dec 2025",
    isoDate: "2025-12-01",
    desc: "Moving beyond CSR with server-driven UI.",
    seoDescription:
      "Understand React Server Components, how they reduce client-side JavaScript, improve loading speed, support SEO-friendly pages, and help build better modern React apps.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
  {
    title: "Mastering GSAP for Premium UI",
    slug: "gsap-animations",
    category: "UI/UX",
    date: "Jul 2025",
    isoDate: "2025-07-01",
    desc: "Create cinematic animations using GSAP.",
    seoDescription:
      "Learn how to use GSAP and ScrollTrigger to create smooth cinematic web animations, pinned sections, reveal effects, premium landing pages, and scroll-based UI experiences.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=75&auto=format&fit=crop",
    author: "Mohammed Shanis",
  },
];

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}

export const siteConfig = {
  name: "Mohammed Shanis",
  url: "https://shanis.in",
  title: "Mohammed Shanis | Full Stack Developer in Kerala",
  description:
    "Mohammed Shanis is a Full Stack Developer from Kerala building MERN stack websites, React apps, Node.js backends, SaaS platforms, and SEO-friendly web solutions.",
  author: "Mohammed Shanis",
  locale: "en_IN",
  image: "/m1.png",
  keywords: [
    "Mohammed Shanis",
    "Full Stack Developer Kerala",
    "MERN Stack Developer Kerala",
    "React Developer Kerala",
    "Node.js Developer Kerala",
    "Freelance Web Developer Kerala",
    "SEO friendly website developer",
    "Portfolio website developer Kerala",
  ],
};

export const pageSeo = {
  home: {
    path: "/",
    title: "Mohammed Shanis | Full Stack Developer in Kerala",
    description:
      "Hire Mohammed Shanis, a Full Stack Developer in Kerala building fast, responsive, SEO-friendly MERN stack websites, React apps, Node.js APIs, SaaS products, and portfolio websites.",
  },
  about: {
    path: "/about",
    title: "About Mohammed Shanis | Full Stack Developer Kerala",
    description:
      "Learn about Mohammed Shanis, a Kerala-based Full Stack Developer skilled in React, Next.js, Node.js, MongoDB, Express, Flutter, Tailwind CSS, GSAP, and modern SEO-friendly web development.",
  },
  projects: {
    path: "/projects",
    title: "Projects | Mohammed Shanis - MERN, React & SaaS Work",
    description:
      "Explore full stack projects by Mohammed Shanis including MERN stack apps, React websites, Node.js APIs, SaaS platforms, CRM systems, booking apps, Flutter apps, and premium UI projects.",
  },
  services: {
    path: "/services",
    title: "Web Development Services Kerala | Mohammed Shanis",
    description:
      "Hire Mohammed Shanis for React frontend development, MERN stack web apps, Node.js backend systems, SaaS development, UI/UX implementation, and SEO-friendly business websites in Kerala.",
  },
  contact: {
    path: "/contact",
    title: "Contact Mohammed Shanis | Freelance Web Developer Kerala",
    description:
      "Contact Mohammed Shanis for freelance web development, MERN stack projects, React websites, Node.js backend systems, SaaS platforms, and SEO-friendly business websites.",
  },
  testimonials: {
    path: "/testimonials",
    title: "Testimonials | Mohammed Shanis Full Stack Developer",
    description:
      "Read client reviews and testimonials for Mohammed Shanis, covering full stack development, modern website design, React apps, Node.js APIs, project delivery, and technical expertise.",
  },
  blog: {
    path: "/blog",
    title: "Web Development Blog | Mohammed Shanis",
    description:
      "Read web development articles by Mohammed Shanis covering React, Next.js, Node.js, MERN stack, Tailwind CSS, GSAP, SEO, performance optimization, and modern developer guides.",
  },
};

export function buildMetadata(keyOrData) {
  const data = typeof keyOrData === "string" ? pageSeo[keyOrData] : keyOrData;
  const url = `${siteConfig.url}${data.path || ""}`;
  const title = data.title;
  const description = data.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: data.keywords || siteConfig.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    alternates: { canonical: url },
    openGraph: {
      type: data.type || "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: data.image || siteConfig.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.image || siteConfig.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammed Shanis",
    url: siteConfig.url,
    image: `${siteConfig.url}/m1.png`,
    jobTitle: "Full Stack Developer",
    worksFor: { "@type": "Organization", name: "Freelance" },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Flutter",
      "Tailwind CSS",
      "GSAP",
      "SEO-friendly websites",
    ],
    sameAs: ["https://github.com/shaanis"],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@type": "Person", name: siteConfig.name },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function blogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.desc,
    image: post.image,
    datePublished: post.isoDate || "2025-08-01",
    dateModified: post.isoDate || "2025-08-01",
    author: { "@type": "Person", name: post.author || siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };
}

import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://shanis.in";
const DEFAULT_IMAGE = `${SITE_URL}/preview.jpg`;

const SEO = ({
  title = "Mohammed Shanis | Full Stack Developer Kerala",
  description = "Mohammed Shanis is a full stack developer in Kerala building MERN stack, React, Node.js, MongoDB, and SEO-friendly modern websites.",
  url = SITE_URL,
  image = DEFAULT_IMAGE,
  type = "website",
}) => {
  const siteName = "Mohammed Shanis Portfolio";

  const finalUrl = url || SITE_URL;
  const finalImage = image || DEFAULT_IMAGE;

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: siteName,
    alternateName: "Mohammed Shanis",
    url: SITE_URL,
    description:
      "Portfolio website of Mohammed Shanis, a full stack developer in Kerala specializing in MERN stack, React, Node.js, MongoDB, Flutter, UI/UX, and modern web development.",
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Mohammed Shanis",
    alternateName: "Shanis",
    url: SITE_URL,
    jobTitle: "Full Stack Developer",
    image: `${SITE_URL}/profile.jpg`,
    description:
      "Mohammed Shanis is a full stack developer from Kerala specializing in MERN stack, React, Node.js, MongoDB, Flutter, UI/UX, and modern web development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kuttippuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    knowsAbout: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Flutter",
      "Firebase",
      "Tailwind CSS",
      "GSAP",
      "Full Stack Development",
      "Web Development",
      "UI/UX Design",
    ],
    sameAs: [
      "https://github.com/shaanis",
      "https://www.linkedin.com/in/mohammed-shanis-p-14893032b/",
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content="Mohammed Shanis" />
      <meta name="publisher" content="Mohammed Shanis" />

      <link rel="canonical" href={finalUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:secure_url" content={finalImage} />
      <meta property="og:image:alt" content="Mohammed Shanis Portfolio Preview" />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content="Mohammed Shanis Portfolio Preview" />

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
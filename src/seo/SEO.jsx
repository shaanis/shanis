import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url, image }) => {
  const siteName = "Mohammed Shanis Portfolio";
  const finalUrl = url || "https://shanis.in";
  const finalImage = image || "https://shanis.in/preview.jpg";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={finalUrl} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
};

export default SEO;
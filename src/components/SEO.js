import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../images/favicon.ico";
import { latinCharacters } from "helpers/latinCharacters";

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        url
        title
        description
        twitterUsername
        locale
        name
      }
    }
  }
`;

export const Seo = () => {
  const { site } = useStaticQuery(query);
  const { name, url, title, locale, description, twitterUsername } = site.siteMetadata;

  return (
    <Helmet title={title} htmlAttributes={{ lang: "en" }}>
      <link rel="icon" href={favicon} />
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />

      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={name} />
      <meta property="og:description" content={description} />

      <meta name="twitter:site" content={twitterUsername} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;700&family=Sacramento&display=swap&text=${latinCharacters}`} />
      <link rel="preload" as="style" href={`https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Open+Sans:wght@400;700&family=Sacramento&display=swap&text=${latinCharacters}`} />

    </Helmet>
  );
};

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import favicon from "../img/favicon.ico";

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

export const SEO = () => {
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />

    </Helmet>
  );
};

module.exports = {
  siteMetadata: {
    name: "Garelochhead Community Council",
    title: "Garelochhead Community Council | Official Website",
    url: "https://garelochhead.info/",
    description: "On these pages, we aim to offer easy access to the recent and current activities of the Garelochhead Community Council, as well as useful links to what’s happening in general in and around Garelochhead. Our features include: Business Listings, Past Meeting's Minutes and Current News.",
    twitterUsername: "@GarelochheadCC",
    locale: "en_GB"
  },
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/media`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};

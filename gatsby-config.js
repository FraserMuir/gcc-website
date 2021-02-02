const path = require("path");

module.exports = {
  siteMetadata: {
    name: "Garelochhead Community Council",
    title: "Garelochhead Community Council | Official Website",
    url: "https://hardcore-northcutt-08c153.netlify.app/",
    description:
      "On these pages, we aim to offer easy access to the recent and current activities of the Garelochhead Community Council, as well as useful links to what’s happening in general in and around Garelochhead. Our features include: Business Listings, Past Meeting's Minutes and Current News.",
    twitterUsername: "@GarelochheadCC",
    locale: "en_GB",
  },
  flags: {
    DEV_SSR: false,
    FAST_REFRESH: true,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),

        app: path.join(__dirname, "src/app"),
        components: path.join(__dirname, "src/components"),
        data: path.join(__dirname, "src/data"),
        helpers: path.join(__dirname, "src/helpers"),
        images: path.join(__dirname, "src/images"),
        styles: path.join(__dirname, "src/styles"),
      },
    },
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
        path: `${__dirname}/src/app/pages`,
        name: "app",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/app/widgets`,
        name: "app",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
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
        modulePath: `${__dirname}/src/app/cms.js`,
      },
    },
    "gatsby-plugin-netlify",
  ],
};

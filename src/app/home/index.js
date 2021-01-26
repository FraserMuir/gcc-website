import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/Layout";
import { Image } from "../../components/Image";

import { Home } from "./Home";

const HomePage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview}>
      <Image heading imageData={markdownRemark.frontmatter.image} />
      <Home {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        main {
          content
          heading
          signature
          link {
            path
            text
          }
        }
      }
    }
  }
`;

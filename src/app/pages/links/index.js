import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { Links } from "./Links";

const LinksPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <Links {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default LinksPage;

export const pageQuery = graphql`
  query LinksPage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

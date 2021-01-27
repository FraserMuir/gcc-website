import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { News } from "./News";

const NewsPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <News {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPage($slug: String) {
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

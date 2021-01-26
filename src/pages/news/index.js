import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/Layout";
import { Image } from "../../components/Image";

import { News } from "./News";

export default ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview}>
      <Image heading imageData={markdownRemark.frontmatter.image} />
      <News {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String) {
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

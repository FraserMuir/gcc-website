import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/Layout";

import { Gallery } from "./Gallery";

const GalleryPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <Gallery {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default GalleryPage

export const pageQuery = graphql`
  query GalleryPage($slug: String) {
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

import React from "react";
import { graphql } from "gatsby";

import { Gallery } from "./Gallery";

const GalleryPage = ({ data: { markdownRemark } }) => {
  return <Gallery {...markdownRemark} />;
};

export default GalleryPage;

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
        photos {
          photo {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
          date
          credit
        }
      }
    }
  }
`;

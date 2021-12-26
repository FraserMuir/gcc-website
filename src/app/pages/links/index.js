import React from "react";
import { graphql } from "gatsby";

import { Links } from "./Links";

const LinksPage = ({ data: { markdownRemark } }) => {
  return <Links {...markdownRemark} />;
};

export default LinksPage;

export const pageQuery = graphql`
  query LinksPage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
      }
    }
  }
`;

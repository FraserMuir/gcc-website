import React from "react";
import { graphql } from "gatsby";

import { News } from "./News";

const NewsPage = ({ data: { markdownRemark } }) => {
  return <News {...markdownRemark} />
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

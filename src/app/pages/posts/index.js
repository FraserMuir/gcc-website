import React from "react";
import { graphql } from "gatsby";

import { Posts } from "./Posts";

const PostsPage = ({ data: { markdownRemark } }) => {
  return <Posts {...markdownRemark} />;
};

export default PostsPage;

export const pageQuery = graphql`
  query PostsPage($slug: String) {
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
        body
      }
    }
  }
`;

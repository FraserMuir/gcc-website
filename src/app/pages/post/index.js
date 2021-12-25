import React from "react";
import { graphql } from "gatsby";

import { Post } from "./Post";

const PostPage = ({ data: { markdownRemark } }) => {
  return <Post {...markdownRemark} />;
};

export default PostPage;

export const pageQuery = graphql`
  query PostPage($slug: String) {
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

import React from "react";
import { graphql } from "gatsby";

import { Home } from "./Home";

const HomePage = ({ data: { markdownRemark } }) => {
  return <Home {...markdownRemark} />;
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
        welcomeWidget {
          heading
          body
          signature
          link {
            path
            text
          }
        }
        linksWidget {
          heading
          blurb
          image {
            childImageSharp {
              fluid(maxWidth: 320, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          path
        }
      }
    }
  }
`;

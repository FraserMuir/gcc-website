import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { Home } from "./Home";

const HomePage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <Home {...markdownRemark} />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query HomePage($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
          signature
          link {
            path
            text
          }
        }
      }
    }
  }
`;
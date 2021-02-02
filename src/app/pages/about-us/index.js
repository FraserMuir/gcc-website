import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { AboutUs } from "./AboutUs";

const AboutUsPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <AboutUs {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default AboutUsPage;

export const pageQuery = graphql`
  query AboutUsPage($slug: String) {
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

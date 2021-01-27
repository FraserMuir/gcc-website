import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components/Layout";

import { Events } from "./Events";

const EventsPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <Events {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query EventsPage($slug: String) {
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

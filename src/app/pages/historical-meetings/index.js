import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { HistoricalMeetings } from "./HistoricalMeetings";

const HistoricalMeetingsPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <HistoricalMeetings {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default HistoricalMeetingsPage;

export const pageQuery = graphql`
  query HistoricalMeetingsPage($slug: String) {
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

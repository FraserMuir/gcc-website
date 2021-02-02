import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { NextMeeting } from "./NextMeeting";

const NextMeetingPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <NextMeeting {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default NextMeetingPage;

export const pageQuery = graphql`
  query NextMeetingPage($slug: String) {
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

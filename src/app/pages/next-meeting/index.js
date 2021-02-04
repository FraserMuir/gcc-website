import React from "react";
import { graphql } from "gatsby";

import { NextMeeting } from "./NextMeeting";

const NextMeetingPage = ({ data: { markdownRemark } }) => {
  return <NextMeeting {...markdownRemark} />
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

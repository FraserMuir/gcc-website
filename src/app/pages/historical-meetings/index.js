import React from "react";
import { graphql } from "gatsby";

import { HistoricalMeetings } from "./HistoricalMeetings";

const HistoricalMeetingsPage = ({ data: { markdownRemark } }) => {
  return <HistoricalMeetings {...markdownRemark} />
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

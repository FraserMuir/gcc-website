import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { NextMeeting } from "./NextMeeting";

export const NextMeetingWidget = () => {
  const data = useStaticQuery(widgetQuery);
  return <NextMeeting {...data.markdownRemark} />
};

const widgetQuery = graphql`
  query NextMeetingWidget {
    markdownRemark(fields: { slug: { eq: "/next-meeting/" } }, frontmatter: { type: { eq: "widget" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 960, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date
        agenda {
          publicURL
        }
        string
      }
    }
  }
`;

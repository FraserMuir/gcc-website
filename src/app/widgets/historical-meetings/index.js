import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { HistoricalMeetings } from "./HistoricalMeetings";

export const HistoricalMeetingsWidget = () => {
  const data = useStaticQuery(widgetQuery);
  return <HistoricalMeetings {...data.markdownRemark} />
};

const widgetQuery = graphql`
  query HistoricalMeetingsWidget {
    markdownRemark(fields: { slug: { eq: "/historical-meetings/" } }, frontmatter: { type: { eq: "widget" } }) {
      frontmatter {
        meetings {
          date
          file {
            publicURL
          }
        }
      }
    }
  }
`;

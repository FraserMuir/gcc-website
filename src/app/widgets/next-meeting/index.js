import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const widgetQuery = graphql`
  query NextMeetingWidget {
    markdownRemark(fields: { slug: { eq: "/next-meeting/" } }, frontmatter: { type: { eq: "widget" } }) {
      frontmatter {
        date
        agenda {
          publicURL
        }
        string
      }
    }
  }
`;

export const NextMeetingWidget = () => {
  const data = useStaticQuery(widgetQuery);
  console.log(data);
  return <h1>Hii</h1>;
};

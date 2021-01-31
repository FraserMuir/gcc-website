import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const widgetQuery = graphql`
  query NextMeetingWidget {
    markdownRemark(fields: { slug: { eq: "/next-meeting/" } }, frontmatter: { type: { eq: "widget" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 40) {
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

export const NextMeetingWidget = () => {
  const data = useStaticQuery(widgetQuery);

  return <h1>Hii</h1>;
};

import React from "react";
import { graphql } from "gatsby";

import { Events } from "./Events";

const EventsPage = ({ data: { markdownRemark } }) => {
  return <Events {...markdownRemark} />;
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
        welcomeWidget {
          heading
          body
        }
      }
    }
  }
`;

import React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";

import { Layout } from "../components/Layout";

const EventsPage = ({ data: { markdownRemark: { frontmatter } }, preview }) => {
  const { image } = frontmatter;

  return (
    <Layout preview={preview}>
      <Image heading imageData={image} />
      <h1>Events</h1>
    </Layout>
  );
};

export default EventsPage;

export const pageQuery = graphql`
  query EventsPageTemplate($slug: String) {
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

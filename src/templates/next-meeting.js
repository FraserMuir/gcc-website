import React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";

import { Layout } from "../components/Layout";

const NextMeetingPage = ({ data: { markdownRemark: { frontmatter } }, preview }) => {
  const { image } = frontmatter;
  console.log(frontmatter);
  return (
    <Layout preview={preview}>
      <Image heading imageData={image} />
      <h1>Next Meeting</h1>
    </Layout>
  );
};

export default NextMeetingPage;

export const pageQuery = graphql`
  query NextMeetingPageTemplate($slug: String) {
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
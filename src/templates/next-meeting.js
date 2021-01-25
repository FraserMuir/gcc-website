import React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";

import { Layout } from "../components/Layout";

export const NextMeetingTemplate = ({ image }) => {
  return (
    <div>
      <Image imageData={image} style={{ minHeight: "30vh", height: "100%", maxHeight: "31em", minWidth: "100vw" }} className="blur" />
      <h1>hi</h1>
    </div>
  );
};
const NextMeetingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <NextMeetingTemplate image={frontmatter.image} />
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
        main {
          content
          heading
          signature
          link {
            path
            text
          }
        }
      }
    }
  }
`;

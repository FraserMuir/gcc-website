import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Image } from "../components/Image";

export const IndexPageTemplate = ({ image, title, content }) => (
  <div>
    <Image imageData={image} style={{ minHeight: "30vh", height: "100%", maxHeight: "31em", minWidth: "100vw" }} />
    <h1>Title {title}</h1>
    <p>Content {content}</p>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate image={frontmatter.image} title={frontmatter.title} content={frontmatter.content} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content
      }
    }
  }
`;

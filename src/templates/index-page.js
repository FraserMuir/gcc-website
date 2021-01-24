import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Image } from "../components/Image";

export const IndexPageTemplate = ({ image, main = {} }) => {
  console.log(image);
  return (
    <div>
      <Image imageData={image} style={{ minHeight: "30vh", height: "100%", maxHeight: "31em", minWidth: "100vw" }} />
      <h1>{main.heading}</h1>
      <p>{main.content}</p>
      <i>{main.signature}</i>
      <a href={main.link?.path}>{main.link?.text}</a>
    </div>
  );
};
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate image={frontmatter.image} main={frontmatter.main} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
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

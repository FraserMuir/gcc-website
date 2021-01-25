import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Image } from "../components/Image";

const IndexPage = ({ data: { markdownRemark: { frontmatter } }, preview }) => {
  const { image, main } = frontmatter;

  return (
    <Layout preview={preview}>
      <Image imageData={image} style={{ minHeight: "30vh", height: "100%", maxHeight: "31em", minWidth: "100vw" }} className="blur" />
      <h1>{main.heading}</h1>
      <p>{main.content}</p>
      <i>{main.signature}</i>
      <Image imageData={main.image} style={{ minHeight: "30vh", height: "100%", maxHeight: "31em", minWidth: "100vw" }} className="blur" />
      <a href={main.link?.path}>{main.link?.text}</a>
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

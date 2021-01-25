import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../components/Layout";
import { Image } from "../components/Image";

const IndexPage = ({ data: { markdownRemark: { frontmatter } }, preview }) => {
  const { image, main } = frontmatter;

  return (
    <Layout preview={preview}>
      <Image heading imageData={image} />
      <h1>{main.heading}</h1>
      <p>{main.content}</p>
      <i>{main.signature}</i>
      <Image heading imageData={main.image} />
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

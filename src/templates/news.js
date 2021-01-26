import React from "react";
import { graphql } from "gatsby";
import { Image } from "../components/Image";

import { Layout } from "../components/Layout";

const NewsPage = ({ data: { markdownRemark: { frontmatter } }, preview }) => {
  const { image } = frontmatter;

  return (
    <Layout preview={preview}>
      <Image heading imageData={image} />
      <h1>News</h1>
    </Layout>
  );
};

export default NewsPage;

export const pageQuery = graphql`
  query NewsPageTemplate($slug: String) {
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

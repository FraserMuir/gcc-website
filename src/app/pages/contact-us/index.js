import React from "react";
import { graphql } from "gatsby";

import { Layout } from "components/Layout";

import { ContactUs } from "./ContactUs";

const ContactUsPage = ({ data: { markdownRemark }, preview }) => {
  return (
    <Layout preview={preview} image={markdownRemark.frontmatter.image}>
      <ContactUs {...markdownRemark.frontmatter} />
    </Layout>
  );
};

export default ContactUsPage;

export const pageQuery = graphql`
  query ContactUsPage($slug: String) {
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

import React from "react";
import { Layout } from "components/Layout";

export const ContactUs = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>ContactUs</h1>
    </Layout>
  );
};

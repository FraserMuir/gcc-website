import React from "react";
import { Layout } from "components/Layout";

export const AboutUs = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>AboutUs</h1>
    </Layout>
  );
};

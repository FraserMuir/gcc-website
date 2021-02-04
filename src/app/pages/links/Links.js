import React from "react";
import { Layout } from "components/Layout";

export const Links = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>Links</h1>
    </Layout>
  );
};

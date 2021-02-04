import React from "react";
import { Layout } from "components/Layout";

export const Gallery = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>Gallery</h1>
    </Layout>
  );
};

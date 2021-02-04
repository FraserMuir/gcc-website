import React from "react";
import { Layout } from "components/Layout";

export const News = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>News</h1>
    </Layout>
  );
};

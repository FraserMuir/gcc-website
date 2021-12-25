import React from "react";

import { Layout } from "components/Layout";

export const Posts = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};
  console.log(frontmatter);
  return (
    <Layout preview={preview} image={image}>
      <h1>Posts</h1>
    </Layout>
  );
};
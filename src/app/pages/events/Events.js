import React from "react";
import { Layout } from "components/Layout";

export const Events = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>Events</h1>
    </Layout>
  );
};

import React from "react";
import { Layout } from "components/Layout";

export const HistoricalMeetings = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      <h1>HistoricalMeetings</h1>
    </Layout>
  );
};

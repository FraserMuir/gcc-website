import React from "react";
import { Layout } from "components/Layout";
import { HistoricalMeetingsWidget } from "app/widgets/historical-meetings";

export const HistoricalMeetings = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      {!preview && <HistoricalMeetingsWidget />}
    </Layout>
  );
};

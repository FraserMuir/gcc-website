import React from "react";
import { Layout } from "components/Layout";
import { HistoricalMeetingsWidget } from "app/widgets/historical-meetings";
import { Title } from "components/Title";

export const HistoricalMeetings = ({ frontmatter, preview }) => {
  const { image, title } = frontmatter || {};
  console.log(frontmatter);
  return (
    <Layout preview={preview} image={image}>
      <Title title={title} />
      {!preview && <HistoricalMeetingsWidget />}
    </Layout>
  );
};

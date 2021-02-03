import React from "react";
import { Layout } from "components/Layout";
import { NextMeetingWidget } from "app/widgets/next-meeting";

export const NextMeeting = ({ frontmatter, preview }) => {
  const { image } = frontmatter || {};

  return (
    <Layout preview={preview} image={image}>
      {!preview && <NextMeetingWidget />}{" "}
    </Layout>
  );
};

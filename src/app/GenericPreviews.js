import React from "react";
import { frontmatterWrapper } from "../helpers/frontmatterWrapper";

import home from "images/home.jpg";
import { Layout } from "components/Layout";

export const PagePreview = ({ entry, getAsset, component: Component }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return null;
  return <Component frontmatter={frontmatterWrapper(data, getAsset)} preview />;
};

export const WidgetPreview = ({ entry, getAsset, component: Component }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return null;
  return (
    <Layout preview image={{ url: home }}>
      <Component frontmatter={frontmatterWrapper(data, getAsset)} preview />
    </Layout>
  );
};

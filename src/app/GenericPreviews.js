import React from "react";
import { frontmatterWrapper } from "../helpers/frontmatterWrapper";

export const PagePreview = ({ entry, getAsset, component: Component }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return null;
  return <Component frontmatter={frontmatterWrapper(data, getAsset)} preview />;
};
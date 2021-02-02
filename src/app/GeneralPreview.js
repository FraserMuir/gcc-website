import React from "react";
import { frontmatterWrapper } from "../helpers/frontmatterWrapper";

export const GeneralPreview = ({ entry, getAsset, component: Component }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return null;
  console.log(data);
  return <Component frontmatter={frontmatterWrapper(data, getAsset)} preview />;
};
import React from "react";
import { frontmatterWrapper } from "../helpers/frontmatterWrapper";
import IndexPage from "../app/home";

export const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  if (!data) return null;

  return <IndexPage data={frontmatterWrapper(data, getAsset)} preview />;
};
const convertToAssets = (data, getAsset) => {
  for (const key in data) {
    if (typeof data[key] === "string" && data[key].startsWith("/")) {
      data[key] = getAsset(data[key]);
    } else if (data[key] === Object(data[key])) {
      convertToAssets(data[key], getAsset);
    }
  }
};

export const frontmatterWrapper = (data, getAsset) => {
  convertToAssets(data, getAsset);

  return {
    markdownRemark: {
      frontmatter: data,
    },
  };
};
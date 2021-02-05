export const getPublicUrl = (item = {}) => {
  if (item.childImageSharp) return item;
  return {
    url: item.publicURL || `${window.location.origin}/media/${item.path.split("/").slice(-1)[0]}`,
  };
};

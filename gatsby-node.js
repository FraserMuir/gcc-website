const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Create 404 page
  createPage({
    path: "/404",
    component: path.resolve(`src/app/pages/404.js`),
  });

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      if (!edge.node.frontmatter.templateKey) return null;

      let slug = edge.node.fields.slug;

      // Remove trailing slash
      if (slug.endsWith("/")) slug = slug.slice(0, -1);
      // Remove trailing index
      if (slug.endsWith("index")) slug = slug.replace("index", "");

      createPage({
        path: slug,
        component: path.resolve(`src/app/pages/${String(edge.node.frontmatter.templateKey)}/index.js`),
        // additional data can be passed via context
        context: {
          id,
          slug: edge.node.fields.slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

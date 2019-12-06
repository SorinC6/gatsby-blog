const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //Get the path to template
  const blogTemplate = path.resolve("./src/templates/blog-post.js");

  //Get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  //Create new Pages
  res.data.allMarkdownRemark.edges.forEach(edge => {
    //console.log(JSON.stringify(edge, undefined, 4));
    createPage({
      component: blogTemplate,
      path: edge.node.fields.slug,
      context: {
        slug: edge.node.fields.slug
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    //console.log(JSON.stringify(node, undefined, 4));
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

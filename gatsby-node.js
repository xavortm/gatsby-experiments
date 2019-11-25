/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    console.error(result.errors);
  }

  const { allWordpressPost, allWordpressPage } = result.data;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  const pageTemplate = path.resolve(`./src/templates/page.js`);

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id // This is used as $id in grapql
      }
    });
  });

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id // This is used as $id in grapql
      }
    });
  });
};

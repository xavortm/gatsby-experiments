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
  }
  `);
  
  const { allWordpressPost } = result.data
  
  const postTemplate = path.resolve(`./src/templates/post.js`);
  
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id, // This is used as $id in grapql
      },
    })
  })
}
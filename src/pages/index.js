import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostArchive from '../components/postArchive';
import Layout from '../components/layout';

function Homepage() {
  // This is where we grab the Data from Gatsby's local structure
  // Note! This is not dynamic! If content is updated on the server,
  // Gastby has to be rebuild.
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
      }
    }
  `);

  // Fill up all posts as react components.
  const postsList = data.allWordpressPost.edges.map(({ node }) => (
    <PostArchive key={node.id} {...node} />
  ));

  return (
    <Layout>
      <div className="posts-list">{postsList}</div>
    </Layout>
  );
}

export default Homepage;

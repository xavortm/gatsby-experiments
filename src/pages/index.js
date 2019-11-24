import React, { Component } from "react";
import { graphql } from "gatsby";

import PostArchive from '../components/postArchive';
import Layout from '../components/layout';

class Homepage extends Component {
  render() {
    const data = this.props.data;

    // Fill up all posts as react components.
    const postsList = data.allWordpressPost.edges.map(({ node }) => (
      <PostArchive key={node.id} {...node} />
    ));

    return (
      <Layout>
        <div className="posts-list">
          { postsList }
        </div>
      </Layout>
    );
  }
}

export default Homepage

// Grab all posts.
export const pageQuery = graphql`
query {
  allWordpressPost(sort: {fields: date, order: DESC}) {
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
`;
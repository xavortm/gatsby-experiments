import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import PostSingle from '../components/postSingle';

const Post = props => {
  // Data stores what we grab from the qeury above.
  const data = props.data.wordpressPost;

  // Easiest way to run a GraphQL query inside a function component.
  useStaticQuery(graphql`
    query($id: String) {
      wordpressPost(id: { eq: $id }) {
        title
        content
      }
    }
  `);

  return (
    <div>
      <PostSingle {...data}></PostSingle>
    </div>
  );
};

export default Post;

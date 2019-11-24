import React, { Component } from "react";

import PostSingle from "../components/postSingle";

class PostPage extends Component {
  render() {
    const post = this.props.data.wordpressPost;

    return (
      <PostSingle {...post}></PostSingle>
    )
  }
}

export default PostPage;

export const postQuery = graphql`
query($id: String!) {
  wordpressPost(id: { eq: $id }) {
    title,
    content
  }
}
`
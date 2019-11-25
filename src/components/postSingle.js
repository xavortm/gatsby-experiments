import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';

const PostSingle = props => {
  return (
    <Layout>
      <div className="entry">
        <h1 className="entry-title">{props.title}</h1>
        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </Layout>
  );
};

PostSingle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

PostSingle.defaultProps = {
  title: '',
  content: ''
};

export default PostSingle;

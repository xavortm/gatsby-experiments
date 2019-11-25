import React from 'react';
import PropTypes from 'prop-types';

import Layout from './layout';

const PageSingle = props => {
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

PageSingle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

PageSingle.defaultProps = {
  title: '',
  content: ''
};

export default PageSingle;

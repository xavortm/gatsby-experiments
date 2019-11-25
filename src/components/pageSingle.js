import React, { Component } from 'react';

import Layout from './layout';

class pageSingle extends Component {
  render() {
    return (
      <Layout>
        <div className="entry">
          <h1 className="entry-title">{this.props.title}</h1>
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: this.props.content }}
          ></div>
        </div>
      </Layout>
    );
  }
}

export default pageSingle;

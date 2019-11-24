/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react";
import { Link } from "gatsby";

class PostArchive extends Component {
  render() {
    return (
      <div className="entry">
        <h2 className="entry-title">
          <Link to={`/${this.props.slug}`}>{this.props.title}</Link>
        </h2>
        <div className="entry-excerpt" dangerouslySetInnerHTML={{__html: this.props.excerpt}}></div>
      </div>
    );
  }
}

export default PostArchive;
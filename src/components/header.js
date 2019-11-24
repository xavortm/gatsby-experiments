import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteMenuQuery {
      allWordpressWpApiMenusMenusItems {
        edges{
          node {
            slug
            name
            items {
              title
              url
              object_id
            }
          }
        }
      }
    }
  `);

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(prop => {
    return (
      // TODO: Make the URL actually work well
      <Link key={prop.object_id} to={prop.url}>{prop.title}</Link>
    )
  });

  return (
    <header className="site-header">
      <h1 className="site-title">
        <Link to="/">{siteTitle}</Link>
      </h1>

      { menuItems }
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header;
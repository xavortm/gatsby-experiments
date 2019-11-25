import { Link, useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteMenuQuery {
      allWordpressWpApiMenusMenusItems {
        edges {
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

  const menuItems = data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
    prop => {
      return (
        <li key={prop.object_id} className="menu-item">
          <Link to={prop.url}>{prop.title}</Link>
        </li>
      );
    }
  );

  return (
    <header className="site-header">
      <h1 className="site-title">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <ul className="site-navigation">{menuItems}</ul>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;

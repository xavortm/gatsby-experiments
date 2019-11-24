import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header">
    <h1 className="site-title">
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header

export const menusQuery = graphql`
query {
  allWordpressWpApiMenusMenusItems {
    edges{
      node {
        slug
        name
        items {
          title
          url
        }
      }
    }
  }
}
`
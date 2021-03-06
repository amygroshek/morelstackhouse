import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-lato"
import "typeface-muli"

import Header from "./molecules/header/header"
import Footer from "./molecules/footer/footer"
import "./../theme/styles.scss"
import "./layout.scss"

const Layout = ({ location, pageType, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          copyrightDate
          authorLink
          menu {
            path
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} location={location} menu={data.site.siteMetadata.menu} />
      <main className={`page-type-${pageType ? pageType : 'null'}`}>{children}</main>
      <Footer data={data} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

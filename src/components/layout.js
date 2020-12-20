/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import layoutStyles from "./layout.module.scss"

import MenuButton from "./buttons/menuButton"

const Layout = ({ children }) => {
  

  return (
    <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      
        <main>{children}</main>
        <MenuButton/>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.scss"


const Header = ({ siteTitle }) => (
  <header
    className={headerStyles.header}
  >
    <div
      style={{
        display:"flex",
        flexDirection:"flow",
        justifyContent:"space-between",
        alignItems:"center",
        
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link 
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            flexGrow:"1"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Link className={headerStyles.navtitle} activeClassName={headerStyles.navtitleActive} to="/about">About Us</Link>
      <Link className={headerStyles.navtitle} activeClassName={headerStyles.navtitleActive} to="/contact">Contact Us</Link>
      <Link className={headerStyles.navtitle} activeClassName={headerStyles.navtitleActive} to="/work">Our Work </Link>
      <i style={{justifyContent:"flex-end"}} class="fas fa-bars"></i>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

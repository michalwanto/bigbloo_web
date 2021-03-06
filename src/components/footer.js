import React from "react"
import {Link,graphql,useStaticQuery} from "gatsby"

import footerStyles from "./footer.module.scss"
import FooterButton from "./buttons/menuButton"

const Footer = ()=>{
const data = useStaticQuery(graphql`
query{
  site{
    siteMetadata{
      author
    }
  }
}
`)
    return(
      <div className={footerStyles.container}>
        <div className={footerStyles.divNavTitle}>
        <Link className={footerStyles.navtitle} activeClassName={footerStyles.navtitleActive} to="/about">About Us</Link>
        <Link className={footerStyles.navtitle} activeClassName={footerStyles.navtitleActive} to="/contact">Contact Us</Link>
        <Link className={footerStyles.navtitle} activeClassName={footerStyles.navtitleActive} to="/work">Our Work </Link>
        <Link className={footerStyles.navtitle} activeClassName={footerStyles.navtitleActive} to="/blog">Blogs</Link>
        </div>
        © {new Date().getFullYear()}, Built by {data.site.siteMetadata.author}
     </div>
    )
}
export default Footer
import { Link,graphql,useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import headerStyles from "./header.module.scss"


const Header = () =>{
const data =useStaticQuery(graphql`
query{
  site{
    siteMetadata{
      title
    }
  }
}
`)
return(
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
        {data.site.siteMetadata.title}
        </Link>
      </h1>
      <i style={{justifyContent:"flex-end"}} className="fas fa-bars"></i>
    </div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

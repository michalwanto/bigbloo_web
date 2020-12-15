import React from "react"
import {graphql,useStaticQuery} from "gatsby"

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

        <div>
            © {new Date().getFullYear()}, Built by {data.site.siteMetadata.author}
        </div>
    )
}
export default Footer
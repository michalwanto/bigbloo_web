import React from 'react'
import Layout from "../components/layout"
import {graphql} from "gatsby"

import blogStyles from "./blog.module.scss"

export const query = graphql`
query(
  $slug:String!
){
markdownRemark(
  fields:{
    slug:{
      eq:$slug
    }
  }
){
  excerpt
  html
  timeToRead
  frontmatter{
    title
    date
  }
  fields{
    slug
  }
}
}
`

const blogTemplate = (props) =>{

    return(
        <Layout>
        <div className={blogStyles.container}>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <h6>{props.data.markdownRemark.frontmatter.date}</h6>
            <p dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></p>
            </div>
        </Layout>
    )
}
export default blogTemplate
import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"

import SimpleCard from "../components/blog/blogCard"

const BlogPage =()=>{
  const data = useStaticQuery(graphql`
  query{
    allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title
          date
        }
        html
        excerpt
        
      }
    }  
  }
  }
  `) 
    return(
        <Layout>
        <p>This it the blog page</p>
        {data.allMarkdownRemark.edges.map(edge =>(
          <div>
          <SimpleCard title={edge.node.frontmatter.title} date={edge.node.frontmatter.date}  ></SimpleCard>
          </div>
          
          ))}
          
        
        </Layout>
    )
}

export default BlogPage
import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"

import blogCard from "../components/blog/blogCard"

const BlogPage =()=>{
  const data = useStaticQuery(graphql`
  query{
  allMarkdownRemark{
    edges{
      node{
        excerpt
        timeToRead
        html
        frontmatter{
          title
          date
        }
        fields{
          slug
        }
        
      }
    }
  }
  }
  `) 
    return(
        <Layout>
        {data.allMarkdownRemark.edges.map(edge =>(
          <div>
          <blogCard 
          title={edge.node.frontmatter.title} 
          date={edge.node.frontmatter.date} 
          slug={edge.node.fields.slug} 
          excerpt={edge.node.excerpt} 
          timeToRead={edge.node.timeToRead}

          
          ></blogCard>
          </div>
          
          ))}
          
        
        </Layout>
    )
}

export default BlogPage
import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"

import BlogCard from "../components/blog/blogCard"

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
        <div style={{
          display:'flex',
          "flexDirection":"row",
          "flexWrap":"wrap"
      }}>
        {data.allMarkdownRemark.edges.map(edge =>(
          
          <BlogCard 
          title={edge.node.frontmatter.title} 
          date={edge.node.frontmatter.date} 
          slug={edge.node.fields.slug} 
          excerpt={edge.node.excerpt} 
          timeToRead={edge.node.timeToRead}

          
          ></BlogCard>
          
          
          ))}
          </div>
          
        
        </Layout>
    )
}

export default BlogPage
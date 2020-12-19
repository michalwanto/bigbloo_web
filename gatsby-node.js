const path = require('path');
const blogTemplate = path.resolve('./src/templates/blog')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    
    if(node.internal.type === "MarkdownRemark"){
        
        const slug = path.basename(node.fileAbsolutePath, ".md")
        createNodeField({
            node,
            name:"slug",
            value:slug
        })
    }
  }
module.exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    const res = await graphql(`
    query{
        allMarkdownRemark{
          edges{
            node{
              excerpt
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
    res.data.allMarkdownRemark.edges.forEach(edge=>{
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogPostTemplate,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
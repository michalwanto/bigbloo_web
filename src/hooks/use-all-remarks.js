import {graphql, useStaticQuery} from "gatsby"

const useAllRemark = ()=>{
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
    
    return data
} 

export default useAllRemark

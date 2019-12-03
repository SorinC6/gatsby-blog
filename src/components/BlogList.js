import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(
        limit: 5
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark
  //console.log(edges)

  return (
    <div>
      <p>Archive Blogs</p>
      {edges.map(({ node }) => {
        return (
          <li key={node.frontmatter.slug}>
            <Link to={`/post${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </li>
        )
      })}
    </div>
  )
}

export default BlogList

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
    <>
      <p>Test</p>
      {edges.map(({ node }) => {
        return (
          <div key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            <p>{node.excerpt}</p>
          </div>
        )
      })}
    </>
  )
}

export default BlogList

import React from "react"
import styled from "styled-components"
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
    <aside>
      <h4>Archive Blogs</h4>
      <ArchiveList>
        {edges.map(({ node }) => {
          return (
            <li key={node.frontmatter.slug}>
              <Link to={`/post${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          )
        })}
      </ArchiveList>
    </aside>
  )
}

export default BlogList

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: purple;
  }
`

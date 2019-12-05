import React from "react"
import styled from "styled-components"
import BlogCard from "./~common/BlogCard"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query BlogPostQuery {
      allMarkdownRemark(
        limit: 10
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

  return (
    <Root>
      <SEO title="Home" />
      {edges.map(({ node }) => {
        return (
          <Post key={node.frontmatter.slug}>
            <Link to={`/post${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/post${node.frontmatter.slug}`} className="read-more">
              Read More
            </Link>
          </Post>
        )
      })}
    </Root>
  )
}

export default BlogList

const Post = styled(BlogCard)`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem !important;

  a {
    color: #000;
    text-decoration: none;
  }

  p {
    font-size: 0.8rem;
  }

  h2 {
    margin-bottom: 0;
  }

  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: purple;
  }
`

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

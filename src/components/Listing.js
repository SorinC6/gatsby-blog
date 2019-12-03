import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const Listing = () => {
  const data = useStaticQuery(graphql`
    query Test {
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
  console.log(edges)
  return (
    <div>
      <SEO title="List" />
      {edges.map(({ node }) => {
        return (
          <article key={node.frontmatter.slug}>
            <Link to={`/post${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
            <Link to={`/post${node.frontmatter.slug}`}>Read More</Link>
          </article>
        )
      })}
    </div>
  )
}

export default Listing

import React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

const PostLayout = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  return (
    <Layout>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      html
    }
  }
`

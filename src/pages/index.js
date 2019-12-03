import React from "react"
import Layout from "../components/layout"
import BlogList from "../components/BlogList"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <BlogList />
    </Layout>
  )
}

export default IndexPage

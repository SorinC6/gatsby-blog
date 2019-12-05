import React from "react"
import Layout from "../components/layout"
import Home from "../components/Home"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Home />
    </Layout>
  )
}

export default IndexPage

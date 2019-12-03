import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlogList from "./RightList"
import Header from "./header"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const fluid = data.file.childImageSharp.fluid

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Img fluid={fluid} />
      <MainLayout>
        <main>{children}</main>
        <BlogList />
        {/* <footer>© {new Date().getFullYear()}, Built with</footer> */}
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

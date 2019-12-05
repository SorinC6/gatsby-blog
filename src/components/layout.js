import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import RightList from "./RightList"
import Header from "./header"
import { GlobalStyle } from "./styles/global"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 1000px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { regex: "/homeBg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const fluid = data.file.childImageSharp.fluid

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />

      {location.pathname === "/" && <Img fluid={fluid} />}
      <MainLayout>
        <main>{children}</main>
        <RightList />
        {/* <footer>© {new Date().getFullYear()}, Built with</footer> */}
      </MainLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}
export default Layout

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
`

const MainImage = styled(Img)`
  margin-top: -60px;
  padding: 20px 0;
  z-index: -1;
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
      {location.pathname === "/" && <MainImage fluid={fluid} />}
      <MainLayout>
        <main>{children}</main>
        {/* <RightList /> */}
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

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import RightList from "./RightList"
import Header from "./header"
import { Spring } from "react-spring/renderprops"
import "./layout.css"

const MainLayout = styled.main`
  max-width: 80%;
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
      file(relativePath: { regex: "/bg/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  // const fluid = data.file.childImageSharp.fluid

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === "/" ? 100 : 200 }}
        to={{ height: location.pathname === "/" ? 200 : 100 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* {location.pathname === "/" && <Img fluid={fluid} />} */}
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

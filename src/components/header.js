import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { HamburgerSpin } from "react-animated-burgers"
import styled from "styled-components"
import Image from "gatsby-image"

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 100%;
  padding: 1rem;
  background: transparent;
  h1 {
    font-size: 20px;
  }

  a {
    text-decoration: none;
  }
`

const DesktopNavigation = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 20px;
  }
`

const Header = props => {
  const { logoData } = props
  console.log(logoData)
  return (
    <HeaderContainer>
      <div>
        <Image
          fixed={logoData.logo[0].image.childImageSharp.fixed}
          alt="logo"
          style={{
            height: "100px",
            background: "black",
            background: "rgba(0, 0, 0, 0.4)",
          }}
        />
      </div>
      {/* <img src={logo} alt="bar" /> */}
      <DesktopNavigation>
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        {/* <Link to="">Projects</Link>
        <Link to="/">About</Link> */}
      </DesktopNavigation>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

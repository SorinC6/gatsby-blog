import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
  width: 500px;
  display: flex;
  justify-content: space-between;

  a {
    font-size: 20px;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <DesktopNavigation>
      <Link>Home</Link>
      <Link>Projects</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </DesktopNavigation>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

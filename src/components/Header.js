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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  .active {
    color: darkslateblue;
    font-size: 21px;
  }

  h1 {
    font-size: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: white;
    font-family: "Courier";
    transition: 500ms all;

    &:hover {
      font-size: 21px;
    }
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
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
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

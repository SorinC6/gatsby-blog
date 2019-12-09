import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Footer = ({ logoData, location }) => {
  console.log(location)
  const isContactPage = location.pathname === "/contact/"
  return (
    <Root isContactPage={isContactPage}>
      <ImageWrapper
        isContactPage={isContactPage}
        fixed={logoData.logo[0].image.childImageSharp.fixed}
        alt="logo"
        style={{
          height: "100px",
        }}
      />
      <div>
        <p>
          Powerd by{" "}
          <a href="https://www.woopcode.com/" target="_blank">
            wwww.woopcode.com
          </a>
        </p>
      </div>
    </Root>
  )
}

export default Footer

const Root = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px;
  background: ${props =>
    props.isContactPage ? "rgba(100,149,237, 0.9)" : "#4296cb"};
  color: white;
  z-index: 200;
  p {
    font-style: bold;
    font-size: 18px;
    margin-right: 100px;
  }
  a {
    text-decoration: none;
    font-size: 20px;
    color: white;
    font-family: "Courier";
  }
`

const ImageWrapper = styled(Image)`
  visibility: ${props => (props.isContactPage ? "hidden" : "visible")};
  width: 36px;
  height: 32px;
`

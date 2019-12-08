import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"

const Footer = ({ logoData }) => {
  return (
    <Root>
      <ImageWrapper
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
  height: 100px;
  background: #4296cb;
  color: white;
  z-index: 200;

  p {
    font-style: bold;
    font-size: 18px;
    margin-right: 100px;
  }
  a {
    text-decoration: none;
    color: darkred;
    font-size: 20px;
  }
`

const ImageWrapper = styled(Image)`
  width: 36px;
  height: 32px;
`

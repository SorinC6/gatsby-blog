import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import { useSiteMetadata } from "../lib/hooks"

const Hero = ({ heroData, location }) => {
  const data = useSiteMetadata()
  console.log(data)
  // const { image } = data.image

  return (
    <Root>
      {/* <LeftSide>
        <h1>{heroData.heading}</h1>
        <p>{heroData.subheading}</p>
      </LeftSide> */}
      {location.pathname === "/" && (
        <ImageBox fluid={data.image} alt={heroData.heading} />
      )}
      {location.pathname === "/contact" && (
        <CostumImageBox fluid={data.header} alt={heroData.heading} />
      )}
    </Root>
  )
}

export default Hero

Hero.propTypes = {
  introData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    image: PropTypes.object,
  }),
}

const Root = styled.div`
  max-width: 100%;
  margin: 1rem auto;
`

const ImageBox = styled(Image)`
  margin-top: -100px;
  padding: 20px 0;
  z-index: -20;
  height: 1000px;
`

const CostumImageBox = styled(Image)`
  margin-top: -155px;
  padding: 20px 0;
  z-index: -20;
  height: 140px;
`

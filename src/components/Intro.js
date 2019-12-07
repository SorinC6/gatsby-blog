import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "gatsby-image"
import reactSVG from "../assets/react.svg"

const Intro = ({ introData }) => {
  return (
    <Root>
      <Stack>
        <img src={reactSVG} alt="skiils image" />
        <img src={reactSVG} alt="skiils image" />
        <img src={reactSVG} alt="skiils image" />
        <img src={reactSVG} alt="skiils image" />
        <img src={reactSVG} alt="skiils image" />
        <img src={reactSVG} alt="skiils image" />
      </Stack>
      <Description></Description>
    </Root>
  )
}

export default Intro

Intro.propTypes = {
  introData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    image: PropTypes.object,
  }),
}

const Root = styled.div`
  margin: 0 auto;
  margin-top: -200px;
  width: 1000px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 400px;
`

const Stack = styled.div``
const Description = styled.div``

const ImageBox = styled(Image)`
  width: 236px;
  height: 370px;

  @media (max-width: 400px) {
    display: none;
  }
`

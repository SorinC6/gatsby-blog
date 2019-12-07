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
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Description>
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

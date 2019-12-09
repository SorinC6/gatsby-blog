import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// import Image from "gatsby-image"
import ReactIcon from "../assets/logor.svg"
import GtasbyIcon from "../assets/logo.svg"
import ReduxIcon from "../assets/redux.svg"
import NodeIcon from '../assets/node.svg'
import NextIcon from '../assets/next.svg'

const Intro = () => {
  return (
    <Root>
      <Description>
        <p>
          💻 🇷🇴 Interested in all things related to web technologies 🗯 espacial
          in the React world 🌎🌎 Pasionate about building reusable components
          and all kind of weird animation 🌓 🇷🇴 . Curios, onest and really
          focused are just a few words in witch I can describe myself ,
          somethims spending to much time trying to make stuff look good in the
          browser 🐲 💪. Love to experiment with all things that React world can
          offered, staying in touch with the current changes in react, keep
          building and learning 🏋️‍♂️ 🏋️‍♂️
        </p>
      </Description>
      <Stack>
        <ReactIcon />
        <GtasbyIcon />
        <ReduxIcon />
        <NodeIcon />
        <NextIcon />
      </Stack>
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
  background-color: rgba(0, 0, 0, 0.4);
  height: 400px;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.3);
`

const Stack = styled.div`
display:flex;
padding:50px 70px;

justify-content:space-between;
  svg {
    color: blue;
    font-size: 20px;
    width:50px;
    height:50px
  }
`
const Description = styled.p`
  p {
    color: white;
    padding: 0 40px;
    padding-top: 50px;
    text-align: justify;
    text-justify: inter-word;
    font-size: 20px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 300;
    line-height: 1.5;
  }
`

const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  color: blue;
`

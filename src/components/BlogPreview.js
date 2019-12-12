import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PreviewCompatibleImage from "../lib/PreviewCompatibleImage"
import BlogCard from "./~common/BlogCard"
import Img from "gatsby-image"

const BlogPreview = ({ title, excerpt, image, date, index }) => {
  const imageObject = {
    image,
    childImageSharp: image.childImageSharp,
    alt: "title",
  }
  return (
    <BlogCard>
      <Root index={index}>
        <ImgeWrapper fluid={image.childImageSharp.fluid} />
        <CardInfo>
          <h6>{title} </h6>
          <p>{excerpt}</p>
          <p className="date">{date}</p>
        </CardInfo>
      </Root>
    </BlogCard>
  )
}

export default BlogPreview

BlogPreview.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  image: PropTypes.object,
}

const Root = styled.div`
  display: flex;
  flex-direction: ${props => (props.index % 2 === 0 ? "flex" : "row-reverse")};
  width: 800px;
  margin-bottom: 50px;
  transition: 1s all;

  @media (max-width: 800px) {
    width: 400px;
    flex-direction: column;
  }
  @media (max-width: 400px) {
    width: 300px;
    flex-direction: column;
    height: 285px;
  }

  &:hover {
    h6 {
      transform: translateY(-3px);
    }
  }
`

const ImgeWrapper = styled(Img)`
  border-radius: 2px;
  min-width: 350px;
  height: 240px;

  @media (max-width: 800px) {
    height: 100px;
  }
  @media (max-width: 400px) {
    min-width: 200px; 
  }
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-left: 70px;

  h6 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
    transition: 0.5s all;
  }

  p {
    color: grey;
    margin-bottom: 20px;
  }

  .date {
    color: lightgray;
  }
`

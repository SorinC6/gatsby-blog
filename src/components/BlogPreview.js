import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PreviewCompatibleImage from "../lib/PreviewCompatibleImage"
import BlogCard from "./~common/BlogCard"

const BlogPreview = ({ title, excerpt, image, date, index }) => {
  const imageObject = {
    image,
    childImageSharp: image.childImageSharp,
    alt: "title",
  }
  return (
    <BlogCard>
      <Root index={index}>
        <PreviewCompatibleImage imageInfo={imageObject} />
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
  &:hover {
    h6 {
      transform: translateY(-3px);
    }
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

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import PreviewCompatibleImage from "../lib/PreviewCompatibleImage"
import BlogCard from "./~common/BlogCard"

const BlogPreview = ({ title, excerpt, image, date }) => {
  const imageObject = {
    image,
    childImageSharp: image.childImageSharp,
    alt: "title",
  }
  return (
    <BlogCard>
      <Root>
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
  width: 800px;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-left: 70px;

  h6 {
    font-weight: 600;
    font-size: 20px;
  }

  p {
    color: grey;
  }

  .date {
    color: lightgray;
  }
`

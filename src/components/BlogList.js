import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import BlogPreview from "./BlogPreview";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from "gatsby";
//import { useSlug } from "../lib/hooks";

const BlogList = ({ blogData }) => {
  const [nrOfBlogsDesktop, setNumberOfBlogsDesktop] = useState(4);
  const [nrOfBlogsMobile, setNumberOfBlogsMobile] = useState(2);
  const [screenWidth, setScreenWidth] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let width = ref.current ? ref.current.offsetWidth : 0;
    setScreenWidth(width);
  }, []);
  const handleClick = () => {
    screenWidth > 400 && setNumberOfBlogsDesktop(nrOfBlogsDesktop + 4);
    screenWidth <= 400 && setNumberOfBlogsMobile(nrOfBlogsMobile + 2);
  };

  return (
    <>
      <Root ref={ref}>
        {blogData &&
          blogData.map((item, index) => {
            const { title, excerpt, image } = item.node.frontmatter;
            const { slug } = item.node.fields;
            if (index < nrOfBlogsDesktop && screenWidth > 400) {
              return (
                <Link to={slug} key={slug}>
                  <BlogPreview title={title} excerpt={excerpt} image={image} />
                </Link>
              );
            }
            if (index < nrOfBlogsMobile && screenWidth <= 400) {
              return (
                <Link to={slug} key={slug}>
                  <BlogPreview title={title} excerpt={excerpt} image={image} />
                </Link>
              );
            }
            return null;
          })}
      </Root>
      <Button handleClick={handleClick} />
    </>
  );
};

export default BlogList;

BlogList.propTypes = {
  blogData: PropTypes.arrayOf(PropTypes.object.isRequired)
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 200px;
  padding: 0 calc((100vw - 80vw) / 2);

  a {
    text-decoration: none;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`;

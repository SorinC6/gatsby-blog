import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "gatsby-image";

const Hero = ({ heroData }) => {
  return (
    <Root>
      <LeftSide>
        <h1>{heroData.heading}</h1>
        <p>{heroData.subheading}</p>
      </LeftSide>
      <ImageBox
        fluid={heroData.image.childImageSharp.fluid}
        alt={heroData.heading}
      />
    </Root>
  );
};

export default Hero;

Hero.propTypes = {
  introData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    image: PropTypes.object
  })
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 246px;

  @media (max-width: 400px) {
    margin-top: 176px;
  }
`;

const LeftSide = styled.div`
  max-width: 801px;
  h1 {
    color: #394e5d;
    font-size: 46px;
    margin-bottom: 20.5px;
    font-weight: 600;
  }

  p {
    text-align: left;
    max-width: 545px;
    color: #394e5d;
    font-size: 22px;
    font-weight: 300;
  }

  @media (max-width: 400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 32px;
      padding-left: 20px;
    }

    p {
      font-size: 18px;
      padding-left: 20px;
      width: 322px;
    }
  }
`;
const ImageBox = styled(Image)`
  width: 384px;
  height: 371px;
  margin-left: 106px;

  @media (max-width: 400px) {
    width: 262px;
    height: 253px;
    margin: 0;
    margin-top: 67px;
  }
`;

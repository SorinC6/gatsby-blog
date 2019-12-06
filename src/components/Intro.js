import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "gatsby-image";

const Intro = ({ introData }) => {
  return (
    <Root>
      <TopSection>{introData.heading}</TopSection>
      <MainSection>
        <ImageBox
          fluid={introData.image.childImageSharp.fluid}
          alt={introData.heading}
        />
        <RightSide>
          <h2>{introData.subheading}</h2>
          <p>{introData.description}</p>
        </RightSide>
      </MainSection>
    </Root>
  );
};

export default Intro;

Intro.propTypes = {
  introData: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subheading: PropTypes.string,
    image: PropTypes.object
  })
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 264.5px;
  @media (max-width: 400px) {
    margin-top: 39px;
  }
`;

const TopSection = styled.h2`
  text-align: center;
  color: #394e5d;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 400px) {
    font-size: 26px;
    text-align: left;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 983px;
  justify-content: center;
  align-items: center;
  margin-top: 55px;

  @media (max-width: 400px) {
    padding: 0 20px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 202px;

  h2 {
    width: 260px;
    text-align: left;
    color: #394e5d;
    font-size: 20px;
    font-weight: bold;
  }

  p {
    max-width: 445px;
    text-align: left;
    color: #182333;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 300;
  }

  @media (max-width: 400px) {
    margin-left: 0;
    padding: 0 20px;

    h2 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
      text-align: justify;
      text-justify: inter-word;
    }
  }
`;
const ImageBox = styled(Image)`
  width: 236px;
  height: 370px;

  @media (max-width: 400px) {
    display: none;
  }
`;

import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import PropTypes from "prop-types";
// import LogoSlider from "./LogoSlider";
// import SliderTest from "./BackgroundSlider";
import { Carousel } from "antd";

const LogoList = ({ logoData }) => {
  return (
    <>
      <Root>
        {logoData &&
          logoData.map((item, idx) => {
            return <Logo key={idx} image={item.image} link={item.link} />;
          })}
      </Root>
      <MobileView>
        <CarouselWrapper autoplay dots={true}>
          {logoData &&
            logoData.map((item, idx) => {
              return <Logo key={idx} image={item.image} link={item.link} />;
            })}
        </CarouselWrapper>
      </MobileView>
    </>
  );
};

export default LogoList;

LogoList.propTypes = {
  logoData: PropTypes.arrayOf(PropTypes.object)
};

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 145px;
  background: #f5f8fa no-repeat;
  margin-top: 231px;
  padding: 0 calc((100vw - 80vw) / 2);

  @media (max-width: 400px) {
    display: none;
  }
`;

const CarouselWrapper = styled(Carousel)`
  padding: 70px 0;
  background: #f5f8fa;
`;

const MobileView = styled.div`
  @media (min-width: 400px) {
    display: none;
  }
`;

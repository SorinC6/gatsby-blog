import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import styled from "styled-components";
import Logo from "./Logo";

export default class CustomSlider extends Component {
  render() {
    const settings = {
      arrowsBlock: false,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3
    };
    return (
      <SliderWrapper {...settings}>
        {this.props.logoData.map((logo, idx) => (
          <Logo key={idx} />
        ))}
      </SliderWrapper>
    );
  }
}
const SliderWrapper = styled(Slider)`
  display: none;
  @media (max-width: 400px) {
    display: block;
    vertical-align: middle;
    background: #f5f8fa 0% 0% no-repeat padding-box;
    padding: 70px 0;
  }
`;

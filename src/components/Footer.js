import React from "react";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

const Footer = () => {
  return (
    <Root>
      <SvgWrapper />
      <div>
        <p>All rights reserved ©</p>
      </div>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #4296cb;
  margin-top: 171px;
  color: white;

  p {
    font-style: bold;
    font-size: 14px;
    margin: 0;
    padding-left: 30px;
  }
`;

const SvgWrapper = styled(Icon)`
  width: 36px;
  height: 32px;
  margin-left: 144px;

  @media (max-width: 400px) {
    margin-left: 36px;
  }
`;

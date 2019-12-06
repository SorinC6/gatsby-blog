import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Logos from "../assets/logos.svg";

const Logo = ({ image, link }) => {
  return (
    <Root image={image}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Logos />
      </a>
    </Root>
  );
};

export default Logo;

Logo.propTypes = {
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

const Root = styled.div`
  font-size: 30px;
  a {
    display: flex;
    justify-content: center;
  }
`;

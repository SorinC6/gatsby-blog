import React from "react";
import styled from "styled-components";

const Button = ({ handleClick }) => {
  return (
    <Root>
      <Btn onClick={handleClick}>Read More</Btn>
    </Root>
  );
};

export default Button;

const Root = styled.div`
  text-align: center;
`;

const Btn = styled.button`
  width: 140px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #3d86bf;
  border-radius: 32px;
  color: #3d86bf;
  text-align: center;
  font-size: 14px;
  margin-top: 100px;
  cursor: pointer;
  transition: 500ms;
  outline: none;

  @media (max-width: 400px) {
    margin-top: 20px;
  }

  &:hover {
    background: #3d86bf;
    color: white;
  }
`;

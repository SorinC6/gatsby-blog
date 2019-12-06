import React, { useState } from "react";
import { Link } from "gatsby";
import { HamburgerSpin } from "react-animated-burgers";
import styled from "styled-components";
import Icon from "../assets/logo.svg";

const Header = () => {
  const [activ, setIsActiv] = useState(false);
  const toggleButton = () => {
    setIsActiv(!activ);
  };

  return (
    <>
      <Root>
        <Nav>
          <HamburgerMenu isActive={activ} toggleButton={toggleButton} />
          <NavLink to="/" activeClassName="current-page">
            Home <span>&#9686;</span>
          </NavLink>
          <NavLink to="/product" activeClassName="current-page">
            Products <span>&#9686;</span>
          </NavLink>
          <Icon />
          <NavLink to="/blog" activeClassName="current-page">
            Blog <span>&#9686;</span>
          </NavLink>
          <NavLink to="/contact" activeClassName="current-page">
            Contact <span>&#9686;</span>
          </NavLink>
        </Nav>
      </Root>
      {activ && (
        <MobileNavigation>
          <MobileLink to="/" activeClassName="current">
            <span>&#9679;</span>
            Home
          </MobileLink>
          <MobileLink to="/product" activeClassName="current">
            <span>&#9679;</span>
            Products
          </MobileLink>
          <MobileLink to="/blog" activeClassName="current">
            <span>&#9679;</span>
            Blog
          </MobileLink>
          <MobileLink to="/contact" activeClassName="current">
            <span>&#9679;</span>
            Contact
          </MobileLink>
        </MobileNavigation>
      )}
    </>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: #ffffff ;
  box-shadow: 0px 2px 12px #0000001d;

  a {
    font-weight: 600;
    text-decoration: none;
  }
`;

const Nav = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  font-size: 20px;
  justify-content: space-between;

  @media (max-width: 400px) {
    display: flex;
    justify-content: center;
    position: relative;
    a {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 82px;
  height: 24px;
  color: #394e5d;
  span {
    display: none;
    margin-top: -5px;
  }

  &:hover {
    color: #394e5d;
    span {
      display: block;
      transform: rotate(90deg);
      color: #4285bc;
      opacity: 43%;
    }
  }

  &.current-page {
    span {
      display: block;
      transform: rotate(90deg);
      color: #4285bc;
    }
  }
`;

const HamburgerMenu = styled(HamburgerSpin)`
  position: absolute;
  left: 0;
  outline: none;
  display: none;
  @media (max-width: 400px) {
    display: block;
  }
`;

const MobileNavigation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  height: 250px;
  width: 100%;
  height: 100vh;
  background: white;
  opacity: 0.9;
  z-index: 2;

  a {
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: bold;
    color: #394e5d;
  }
`;

const MobileLink = styled(Link)`
  display: flex;
  text-decoration: none;

  span {
    margin-right: 10px;
    visibility: hidden;
    color: #4285bc;
  }
  &.current {
    span {
      visibility: visible;
    }
  }
`;

import React from "react";
import { MobileIcon, Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.svg";

const Navbar = ({ toggle, isOpen }) => {
  return (
    <>
      <Nav isOpen={isOpen}>
        <NavbarContainer>
          <NavLogo to="/">
            <img alt="logo" src={logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

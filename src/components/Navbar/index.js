import React, { useState } from "react";
import { MobileIcon, Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../images/logo.svg";

const Navbar = ({ toggle, isOpen }) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Nav isOpen={isOpen} navbar={navbar}>
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

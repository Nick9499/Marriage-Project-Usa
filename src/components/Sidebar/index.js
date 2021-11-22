import React from "react";

import {
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SidebarSvg,
  SidebarMenuWrapper,
  ContactLink,
  Socials,
  MoreButton,
} from "./SidebarElements";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { ArrowForward } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    isOpen && (
      <SidebarContainer onClick={toggle}>
        <SidebarWrapper>
          <SidebarMenuWrapper>
            <SidebarMenu>
              <h4>Main Menu</h4>
              <SidebarLink to='/about' onClick={toggle}>
                About
              </SidebarLink>
              <SidebarLink to='/conference' onClick={toggle}>
                Conference
              </SidebarLink>
              <SidebarLink to='/programming' onClick={toggle}>
                Watch
              </SidebarLink>
              <SidebarLink to='/marriagehelp' onClick={toggle}>
                Marriage Help
              </SidebarLink>
              <SidebarLink to='/programming' onClick={toggle}>
                Shop
              </SidebarLink>
              <SidebarLink to='/give' onClick={toggle}>
                Give
              </SidebarLink>
            </SidebarMenu>

            <SidebarMenu>
              <h4>Additional Links</h4>
              <SidebarLink to='/' onClick={toggle}>
                XO Latino
              </SidebarLink>
              <SidebarLink to='/about' onClick={toggle}>
                XO Mediator Institute
              </SidebarLink>
              <SidebarLink to='/churches' onClick={toggle}>
                Churches
              </SidebarLink>
              <SidebarLink to='/about' onClick={toggle}>
                About Us
              </SidebarLink>
              <SidebarLink to='/jobcenter' onClick={toggle}>
                Job Center
              </SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
              <h4>Contact Us</h4>
              <ContactLink onClick={toggle}>
                <a href='tel:1234567890' className='links'>
                  1234567890
                </a>
              </ContactLink>
              <ContactLink onClick={toggle}>
                <a href='mailto:info@lol.com'>info@lol.com</a>
              </ContactLink>

              <Socials>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <ImInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>{" "}
                <span>
                  <FaYoutube />
                </span>{" "}
              </Socials>
            </SidebarMenu>
          </SidebarMenuWrapper>
          <SidebarSvg>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
                className='shape-fill'
              ></path>
            </svg>
          </SidebarSvg>
        </SidebarWrapper>
      </SidebarContainer>
    )
  );
};

export default Sidebar;

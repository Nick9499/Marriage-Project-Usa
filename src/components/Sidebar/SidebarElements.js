import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #0d0d0d;

  display: grid;

  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`;

export const Icon = styled.div`
  position: relative;
  top: 5.2rem;
  right: -1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
  position: relative;
  @media screen and (max-width: 768px) {
    margin-top: 13%;
    padding-left: 5%;
  }
`;

export const SidebarSvg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(145% + 1.3px);
    height: 150px;
    @media screen and (max-width: 768px) {
      height: 45px;
    }
  }
`;

export const SidebarMenuWrapper = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: space-around;

  align-items: flex-start;
  @media screen and (max-width: 767px) {
    flex-direction: column;

    padding-bottom: 5%;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 10%;
  }
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  h4 {
    color: #ffd111;
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 5%;
    h4 {
      font-size: 70%;
    }
  }
`;

export const SidebarLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-size: 160%;
  line-height: 200%;
  font-weight: bolder;
  &:hover {
    color: #007bc6;
    transition: all 1s;
  }
  @media screen and (max-width: 768px) {
    font-size: 110%;
  }
`;

export const ContactLink = styled.div`
  color: #fff;
  text-decoration: none;
  font-size: 160%;
  line-height: 200%;
  font-weight: bolder;

  a {
    text-decoration: none;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    font-size: 110%;
  }
`;

export const Socials = styled.div`
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  font-size: 160%;
  font-weight: bolder;
  margin-left: -25px;
  span {
    &:hover {
      color: #007bc6;
      transition: all 0.7s;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 110%;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled.div`
  white-space: nowrap;
  margin: 2%;
  margin-bottom: 30%;
  &:hover {
    opacity: 0.7;
    transform: translateY(-20%);
    transition: transform 0.2s ease-in;
  }
`;

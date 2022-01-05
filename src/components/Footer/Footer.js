import Button from "../Button/Button";
import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";

import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <FooterContaner>
      <FooterTop>
        <h2>Happily ever-learning</h2>
        <h2 className="small">
          Sign up for The Marriage Project Newsletter to receive weekly marriage
          advice.
        </h2>
        <input type="text" placeholder="you@email.com" />
        <Button footer white>
          SEND
        </Button>
      </FooterTop>
      <FooterMid>
        <Contact>
          <h5>Contact Us</h5>
          <p>
            <a href="tel:877-557-2008">877-557-2008 Main/Fax</a>
          </p>
          <p>
            <a href="mailto:info@themarriageproject.us">
              info@themarriageproject.us
            </a>
          </p>
          <h5>Stay Connected</h5>
          <Socials>
            <span>
              <Facebook fontSize="large" />
            </span>
            <span>
              {" "}
              <Instagram fontSize="large" />
            </span>
            <span>
              {" "}
              <Twitter fontSize="large" />
            </span>
            <span>
              {" "}
              <YouTube fontSize="large" />
            </span>
          </Socials>
        </Contact>
        <Give>
          <p>
            The Marriage Project is a 501(c)3 non profit ministry supported by
            donations. It is possible to equip the next generation for marriage
            success with a monthly contribution, partnership or donation to the
            Marriage Project. Please click GIVE below.
          </p>
          <Button footer url="/give" white>
            Give
          </Button>
        </Give>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </FooterMid>
      <FooterBottom>
        <small>Accredited by the ECFA Since 1996</small>
        <small>
          © Copyright 2021 The Marriage Project. All rights reserved.
        </small>
      </FooterBottom>
    </FooterContaner>
  );
};

export default Footer;

const FooterContaner = styled.div`
  background-color: #000;
  padding: 7%;
`;

const FooterTop = styled.div`
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  padding-bottom: 3%;
  padding-top: 5%;
  display: flex;
  justify-content: space-around;
  h2 {
    color: #fff;
    font-size: 110%;
    padding-right: 3%;
  }
  input {
    padding: 1%;
    outline: none;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    h2 {
      padding-bottom: 10%;
      font-size: 180%;
    }
    .small {
      font-size: 80%;
    }
    input {
      padding: 5%;
      margin-bottom: 5%;
    }
    Button {
      margin-bottom: 10% !important;
    }
  }
`;

const FooterMid = styled.div`
  margin-top: 5%;
  color: #fff;
  display: grid;
  grid-template-columns: 40% 30% 30%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

const Contact = styled.div`
  margin-left: 40%;

  h5 {
    font-size: 140%;
    color: yellow;
    padding-top: 7%;
    padding-bottom: 7%;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  p {
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 10%;
  }
`;
const Give = styled.div`
  margin-top: 5%;
  p {
    line-height: 200%;
    padding-bottom: 10%;
  }
`;
const Logo = styled.div`
  margin-top: 5%;
  img {
    width: 80%;
    padding-left: 12%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 10%;
  }
`;
const Socials = styled.div`
  margin-left: -3%;
  span {
    padding-left: 3%;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  small {
    color: #fff;
    margin-left: 10%;
    margin-top: 4%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

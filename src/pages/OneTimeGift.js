import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const OneTimeGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <OneTime>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h2>Give</h2>
        <h1>One-Time Gift</h1>
      </Banner>

      <One>
        <h2>
          When you donate to the Marriage Project, you're investing in your own
          marriage and promoting the notion that everyone has a 100% chance of
          success in marriage. You may make a one-time gift by clicking the
          button below today!
        </h2>
      </One>
      <Footer />
    </OneTime>
  );
};

export default OneTimeGift;

const OneTime = styled.div`
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 25vh;
  }
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/give-1.jpg");
  background-size: cover;
  h1 {
    padding-left: 6%;
    padding-top: 2%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
    padding-bottom: 5%;
  }
  h2 {
    font-size: 200%;
    color: #fff;
    font-weight: bold;
    padding: 7%;

    padding-bottom: 0%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
    }
  }
`;
const One = styled.div`
  position: relative;
  margin-top: 10%;

  h2 {
    padding: 3%;
    padding-bottom: 5%;
    color: #000;
    text-align: center;
    font-size: 150%;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 120%;
      padding: 10%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h2 {
      font-size: 130%;
    }
  }
`;

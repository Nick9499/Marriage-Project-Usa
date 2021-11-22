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
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h2>Give</h2>
        <h1>One-Time Gift</h1>
      </Banner>

      <One>
        <OneSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 751L45.5 749C91 747 182 743 273 736.3C364 729.7 455 720.3 546.2 717.8C637.3 715.3 728.7 719.7 819.8 725.3C911 731 1002 738 1093 734.2C1184 730.3 1275 715.7 1320.5 708.3L1366 701L1366 769L1320.5 769C1275 769 1184 769 1093 769C1002 769 911 769 819.8 769C728.7 769 637.3 769 546.2 769C455 769 364 769 273 769C182 769 91 769 45.5 769L0 769Z'
              fill='#ffffff'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </OneSvg>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/give-1.jpg");
  background-size: cover;
  height: 60vh;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 25vh;
  }
`;
const Banner = styled.div`
  h1 {
    padding-left: 6%;
    padding-top: 2%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
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
const OneSvg = styled.div`
  position: absolute;
  bottom: 125%;
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    bottom: 70%;
  }
`;

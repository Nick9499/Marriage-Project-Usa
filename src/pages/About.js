import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AboutContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>About</h1>
      <Mission>
        <h1>Our Mission</h1>
        <p>
          XO Marriage exists to help couples have a healthy and strong marriage.{" "}
          <br />
          We do this by hosting conferences, creating resources, and offering{" "}
          encouraging digital content.
        </p>
        <p>
          Our world-class speakers offer leading marriage advice to equip <br />
          couples with the necessary tools for a successful marriage. We believe{" "}
          that every marriage can thrive.
        </p>
        <AboutSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 173L45.5 168C91 163 182 153 273 139.2C364 125.3 455 107.7 546.2 99.5C637.3 91.3 728.7 92.7 819.8 107C911 121.3 1002 148.7 1093 153.7C1184 158.7 1275 141.3 1320.5 132.7L1366 124L1366 0L1320.5 0C1275 0 1184 0 1093 0C1002 0 911 0 819.8 0C728.7 0 637.3 0 546.2 0C455 0 364 0 273 0C182 0 91 0 45.5 0L0 0Z'
              fill='#f16d79'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </AboutSvg>
      </Mission>
      <Vision>
        <h1>Our Vision</h1>
        <p>
          To create a global appetite for healthy, strong and solid marriages
          using the original blueprint and design <br /> of what marriage should
          be. Changing divorce rates, abuse patterns and dysfunctional behaviors
          among the community. <br /> To partner with city and county
          organizations and churches offering appropriate resources and
          training.
        </p>
      </Vision>
      <History>
        <HistorySvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 669L45.5 655.5C91 642 182 615 273 594.3C364 573.7 455 559.3 546.2 567.3C637.3 575.3 728.7 605.7 819.8 620.2C911 634.7 1002 633.3 1093 626.5C1184 619.7 1275 607.3 1320.5 601.2L1366 595L1366 769L1320.5 769C1275 769 1184 769 1093 769C1002 769 911 769 819.8 769C728.7 769 637.3 769 546.2 769C455 769 364 769 273 769C182 769 91 769 45.5 769L0 769Z'
              fill='#2f905b'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </HistorySvg>

        <h1>Our History</h1>
        <HistoryList>
          <List>
            <h2>2001</h2>
            <p>
              Dr. Eddie Rivera, our Founder, and President almost lost his
              marriage. The reality that this was starting to become a norm for
              many couples hit home and he began the journey of education and
              studies in the area of marriage ministry.
            </p>
          </List>
          <List>
            <h2>2014</h2>
            <p>
              Bridgework counseling was established. A counseling service
              offering pre-marital and marital counseling, marriage therapy,
              family crisis counseling and relationship coaching.
            </p>
          </List>
          <List>
            <h2>2016</h2>
            <p>
              Dr. Eddie and wife Brendaliz Rivera launch a couples monthly event
              called “Uncovered”
            </p>
          </List>
          <List>
            <h2>2021</h2>
            <p>The Marriage Project was born</p>
          </List>
        </HistoryList>
      </History>
      <Footer />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/who.jpg");
  height: 75vh;
  background-size: cover;
  h1 {
    font-size: 400%;
    color: #fff;
    padding: 10%;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
    background-size: 100vw 40vh;
    background-repeat: no-repeat;
  }
`;
const Mission = styled.div`
  position: relative;
  background-color: #f16d79;
  height: 80vh;
  text-align: center;
  h1 {
    padding: 5%;
  }
  p {
    color: #fff;
    font-weight: bold;
    line-height: 240%;
    padding-bottom: 3%;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    margin-top: 20%;
    padding-top: 15%;
    height: 85vh;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    p {
      padding-left: 10%;
      padding-right: 10%;
      text-align: justify;
      padding-bottom: 7%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 40vh;
  }
`;
const AboutSvg = styled.div`
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: -68%;
    z-index: 100;
  }
`;
const Vision = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/11/about-parallax-bg-01.png");
  height: 80vh;
  text-align: center;
  h1 {
    padding: 5%;
  }
  p {
    color: #fff;
    font-weight: bold;
    line-height: 240%;
    padding-bottom: 3%;
  }
  @media screen and (max-width: 768px) {
    /* height: 50vh; */
    position: relative;
    padding-top: 15%;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    p {
      padding-left: 10%;
      padding-right: 10%;
      text-align: justify;
      padding-bottom: 10%;
    }
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
  }
  background-size: cover;
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 40vh;
  }
`;

const History = styled.div`
  position: relative;
  background-color: #2f905b;
  height: 130vh;
  h1 {
    padding: 5%;
    color: #000;
    padding-bottom: 0;
    text-align: center;
  }
  h2 {
    font-size: 200%;
  }
  p {
    font-weight: bold;
    line-height: 240%;
  }
  @media screen and (max-width: 768px) {
    height: 220vh;
    padding-top: 15%;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    p {
      padding-left: 10%;
      padding-right: 10%;
      text-align: justify;
      padding-bottom: 10%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 60vh;
  }
`;

const HistorySvg = styled.div`
  position: absolute;
  top: -80%;
  @media screen and (max-width: 768px) {
    top: -27%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: -75%;
  }
`;
const HistoryList = styled.div`
  padding: 15%;
  padding-top: 3%;
  display: grid;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding-bottom: 4%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    padding-top: 20%;
  }
  h2 {
    padding-bottom: 10%;
  }
  p {
    text-align: justify;
  }
`;

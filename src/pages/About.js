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
          The Marriage Project exists to help couples have a healthy and strong
          marriage. <br />
          We do this by hosting conferences, creating resources, and offering{" "}
          encouraging digital content.
        </p>
        <p>
          Our world-class speakers offer leading marriage advice to equip <br />
          couples with the necessary tools for a successful marriage. We believe{" "}
          that every marriage can thrive.
        </p>
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
  height: 100%;
  background-size: contain;
  h1 {
    font-size: 400%;
    color: #fff;
    padding: 10%;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
    background-size: 100% 60%;
    background-repeat: no-repeat;
  }
`;
const Mission = styled.div`
  position: relative;
  background-color: #f16d79;
  height: 100%;
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
  @media screen and (max-width: 767px) {
    position: relative;
    margin-top: 20%;
    padding-top: 15%;
    height: 110%;
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
    /* height: 40vh; */
  }
`;

const Vision = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/11/about-parallax-bg-01.png");
  height: 100%;
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
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  background-size: cover;
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    /* height: 40vh; */
    padding-bottom: 10%;
  }
`;

const History = styled.div`
  position: relative;
  background-color: #2f905b;
  height: 100%;
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
    height: 280%;
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
    /* height: 60vh; */
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

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./about.css";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AboutContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h1>About</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641635211">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </section>
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
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-top-1641635920">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </section>
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
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641636156">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"></path>
          </svg>
        </div>
      </section>
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
  /*  h1 {
    font-size: 400%;
    color: #fff;
    padding: 10%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 60%;
    background-repeat: no-repeat;
    h1 {
      padding-top: 30%;
      font-size: 300%;
    }
  } */
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/who.jpg");
  height: 400px;
  background-size: cover;
  background-position: 50% 30%;
  h1 {
    font-size: 400%;
    color: #fff;
    padding-left: 10%;
    padding-top: 100px;
  }
`;
const Mission = styled.div`
  position: relative;
  background-color: #f16d79;
  height: 100%;
  text-align: center;
  h1 {
    padding: 5%;
    color: #fff;
  }
  p {
    color: #fff;
    font-weight: bold;
    line-height: 240%;
    padding-bottom: 3%;
  }
  @media screen and (max-width: 767px) {
    position: relative;

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
  height: 700px;
  text-align: center;
  padding-top: 100px;
  h1 {
    padding: 5%;
    padding-top: 100px;
    color: #fff;
  }
  p {
    color: #fff;
    font-weight: bold;
    line-height: 240%;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    height: 750px;
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
    }
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  background-size: cover;
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    /* height: 40vh; */
    height: 600px;
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

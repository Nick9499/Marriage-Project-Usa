import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import ConferenceComponent from "../components/ConferenceComponent/ConferenceComponent";
import FeaturedComponents from "../components/featured/FeaturedComponents";
import WatchComponent from "../components/watchComponent/WatchComponent";
import Footer from "../components/Footer/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <HomeContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Hero>
        <h1>
          Helping marriages
          <br /> rewrite their love story
        </h1>
        <p>
          We believe that you can have a healthy and lasting relationship! Take
          the next
          <br /> step to strengthen your marriage.
        </p>
      </Hero>
      <AboutComponent />
      <ConferenceComponent />
      <FeaturedComponents />
      <WatchComponent />
      <Footer />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/homepage.jpg");
  height: 100vh;
  background-size: cover;
  background-blend-mode: darken;
  z-index: 100;
  @media screen and (max-width: 767px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
`;
const Hero = styled.div`
  position: relative;
  padding-top: 7%;
  padding-left: 10%;
  padding-bottom: 0%;
  h1 {
    color: #fff;
    font-size: 350%;
    font-weight: 500;
  }
  p {
    margin-top: 4%;
    color: #fff;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 170%;
      padding-bottom: 5%;
    }
  }
`;

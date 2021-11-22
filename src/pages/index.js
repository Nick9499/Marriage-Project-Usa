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
        <HomeSvg>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill-home'
            ></path>
          </svg>
        </HomeSvg>
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
    background-size: 100% 50%;
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
    font-size: 400%;
  }
  p {
    margin-top: 4%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
  }
`;
const HomeSvg = styled.div`
  position: absolute;
  bottom: -55%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(139% + 1.3px);
    height: 98px;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AboutComponent from "../components/AboutComponent/AboutComponent";
import ConferenceComponent from "../components/ConferenceComponent/ConferenceComponent";
import FeaturedComponents from "../components/featured/FeaturedComponents";
import WatchComponent from "../components/watchComponent/WatchComponent";
import Footer from "../components/Footer/Footer";
import "./home.css";
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
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641632424">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <AboutComponent />
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641633212">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <ConferenceComponent />
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641634686">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <FeaturedComponents />
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641635056">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <WatchComponent />
      <Footer />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  z-index: 100;
`;
const Hero = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/homepage.jpg");
  height: 130%;
  background-size: cover;
  background-blend-mode: darken;
  position: relative;
  padding-top: 10%;
  padding-left: 10%;
  padding-bottom: 5%;
  h1 {
    color: #fff;
    font-size: 350%;
    font-weight: 500;
  }
  p {
    padding-top: 4%;
    color: #fff;
    font-weight: 400;
    padding-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 100px;
    h1 {
      font-size: 150%;
      padding-bottom: 5%;
    }
    p {
      font-size: 90%;
    }
  }
`;

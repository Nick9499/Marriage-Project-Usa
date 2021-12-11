import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import { Height } from "@material-ui/icons";

const Podcast = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <PodcastContainer>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Podcast</h1>
      </Banner>
      <PodcastSection>
        <h1>The Marriage Project Partner Podcast Network</h1>
        <h2>
          Listen to weekly relationship advice from leading marriage experts!
        </h2>
      </PodcastSection>
      <Footer />
    </PodcastContainer>
  );
};

export default Podcast;

const PodcastContainer = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/network.jpg");
  background-size: cover;
  height: 100%;
  h1 {
    color: #fff;
    font-weight: 500;
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      padding-bottom: 20%;
    }
  }
`;
const PodcastSection = styled.div`
  background-color: #087dc2;
  h1 {
    color: #fff;
    padding-top: 5%;
    padding-bottom: 1%;
    text-align: center;
    font-weight: 500;
    font-size: 250%;
  }
  h2 {
    color: #fff;
    padding-top: 2%;
    padding-bottom: 10%;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 10%;
      font-size: 150%;
    }
    h2 {
      font-size: 120%;
      padding-bottom: 20%;
    }
  }
`;

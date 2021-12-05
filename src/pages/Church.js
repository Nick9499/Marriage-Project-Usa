import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const Church = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ChurchContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Churches</h1>
      <Simulcast>
        <h1>Simulcast</h1>
        <p>
          It's time for your community to host the world's largest marriage
          celebration. The Marriage Project Simulcast allows you to view the
          Marriage Project Conference live or on-demand and features fresh,
          inspiring information from today's most important marriage
          professionals.
        </p>

        <SimulcastSvg>
          <svg
            id="visual"
            viewBox="0 0 1366 768"
            width="100%"
            height="768"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <path
              d="M0 95L45.5 90.2C91 85.3 182 75.7 273 79.5C364 83.3 455 100.7 546.2 98.7C637.3 96.7 728.7 75.3 819.8 63.8C911 52.3 1002 50.7 1093 57.3C1184 64 1275 79 1320.5 86.5L1366 94L1366 0L1320.5 0C1275 0 1184 0 1093 0C1002 0 911 0 819.8 0C728.7 0 637.3 0 546.2 0C455 0 364 0 273 0C182 0 91 0 45.5 0L0 0Z"
              fill="#ffdd11"
              stroke-linecap="round"
              stroke-linejoin="miter"></path>
          </svg>
        </SimulcastSvg>
      </Simulcast>
      <Community>
        <h1>Marriage Project Now Community</h1>
        <p>
          Make the greatest marriage content available to every couple in your
          church or ministry. Create a robust, vibrant community that will have
          an influence on entire generations.
        </p>
        <CommunitySvg>
          <svg
            id="visual"
            viewBox="0 0 1366 768"
            width="100%"
            height="768"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <path
              d="M0 671L45.5 675.8C91 680.7 182 690.3 273 686.5C364 682.7 455 665.3 546.2 667.3C637.3 669.3 728.7 690.7 819.8 702.2C911 713.7 1002 715.3 1093 708.7C1184 702 1275 687 1320.5 679.5L1366 672L1366 769L1320.5 769C1275 769 1184 769 1093 769C1002 769 911 769 819.8 769C728.7 769 637.3 769 546.2 769C455 769 364 769 273 769C182 769 91 769 45.5 769L0 769Z"
              fill="#ff9933"
              stroke-linecap="round"
              stroke-linejoin="miter"></path>
          </svg>
        </CommunitySvg>
      </Community>
      <Partners>
        <PartnersSvg>
          <svg
            id="visual"
            viewBox="0 0 1366 768"
            width="100%"
            height="768"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <path
              d="M0 95L45.5 90.2C91 85.3 182 75.7 273 79.5C364 83.3 455 100.7 546.2 98.7C637.3 96.7 728.7 75.3 819.8 63.8C911 52.3 1002 50.7 1093 57.3C1184 64 1275 79 1320.5 86.5L1366 94L1366 0L1320.5 0C1275 0 1184 0 1093 0C1002 0 911 0 819.8 0C728.7 0 637.3 0 546.2 0C455 0 364 0 273 0C182 0 91 0 45.5 0L0 0Z"
              fill="#ff9933"
              stroke-linecap="round"
              stroke-linejoin="miter"></path>
          </svg>
        </PartnersSvg>
        <h1>Marriage Project Church Partners</h1>
        <p>
          We encourage healthy marriages in order to help congregations thrive.
          This is because the Marriage Project is the most effective
          marriage-focused organization. In order to maintain the church healthy
          into the next millennium, we must reestablish God centered marriages.
        </p>
      </Partners>
      <Wholesale>
        <h1>Wholesale</h1>
        <p>
          Your church, bookshop, small group, or company may benefit from
          Marriage Project Publishing's latest marriage materials by purchasing
          them. A variety of specialists and experienced leaders contribute to
          our leading material, which is designed to serve a wide audience by
          spreading the message of hope for marriage via many different voices.
        </p>
      </Wholesale>
      <Footer />
    </ChurchContainer>
  );
};

export default Church;

const ChurchContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/PHOTO-2021-02-12-17-00-10-4.jpg");
  background-size: cover;
  height: 90vh;
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
    p {
      font-weight: normal;
    }
  }
`;
const Simulcast = styled.div`
  margin-top: 5%;
  position: relative;
  background-color: #fd1;
  height: 100;
  margin-top: 15%;
  h1 {
    color: #000;
    font-weight: bold;
    text-align: center;
    padding-bottom: 3%;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    padding-bottom: 5%;
    font-weight: bold;
    line-height: 200%;
  }
  @media screen and (max-width: 768px) {
  }
`;
const SimulcastSvg = styled.div`
  position: absolute;
  z-index: 9;
  top: 98%;
  @media screen and (max-width: 768px) {
    top: 27%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: 70%;
  }
`;
const Community = styled.div`
  position: relative;

  z-index: 1;
  position: relative;
  padding-top: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/couple.png");
  background-size: cover;
  height: 90vh;
  h1 {
    font-size: 300%;
    text-align: center;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 200%;
  }
  @media screen and (max-width: 768px) {
    height: 50vh;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    height: 35vh;
  }
`;
const CommunitySvg = styled.div`
  position: absolute;
  top: -25%;
  @media screen and (max-width: 768px) {
    top: -20%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    top: -40%;
  }
`;
const Partners = styled.div`
  position: relative;
  background-color: #f93;
  h1 {
    font-size: 300%;
    text-align: center;
    font-weight: bold;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 200%;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
  }
`;
const PartnersSvg = styled.div`
  position: absolute;
  z-index: 9;
  top: 95%;
  @media screen and (max-width: 768px) {
    top: 30%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    top: 70%;
  }
`;
const Wholesale = styled(Partners)`
  background-color: #fff;
  h1,
  p {
    color: #000;
  }
`;

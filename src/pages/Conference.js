import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleAccordion from "../components/Accordion/Accordion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import { useHistory } from "react-router";

const Conference = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const history = useHistory();
  return (
    <ConferenceBody>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Conference</h1>
      <Invest>
        <h1>Investing in your marriage</h1>
        <p>
          When a man and a woman join together in marriage, their unique traits
          can either bring them together or pull them apart. The goal in
          marriage is to become a united force that creates a strong foundation
          for a healthy family dynamic in the future.
        </p>
        <p>
          As you become closer to God and each other, The Marriage Project
          Conference will reignite your connection and cultivate enduring love
          for each other.
        </p>
        <InvestSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 103L32.5 99.2C65 95.3 130 87.7 195 86.8C260 86 325 92 390 104.3C455 116.7 520 135.3 585.2 139C650.3 142.7 715.7 131.3 780.8 124.8C846 118.3 911 116.7 976 117.2C1041 117.7 1106 120.3 1171 124C1236 127.7 1301 132.3 1333.5 134.7L1366 137L1366 0L1333.5 0C1301 0 1236 0 1171 0C1106 0 1041 0 976 0C911 0 846 0 780.8 0C715.7 0 650.3 0 585.2 0C520 0 455 0 390 0C325 0 260 0 195 0C130 0 65 0 32.5 0L0 0Z'
              fill='#f47ca8'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </InvestSvg>
      </Invest>
      <Expect>
        <Body>
          <h1>What to Expect</h1>
          <p>
            During the Marriage Project Conference, you will find clarity of
            thought and restoration of hope which will help you to improve your
            relationship with your spouse and establish a strong basis for it.
          </p>
          <p>
            With access to an array of counselors, speakers and community
            leaders, you can be sure you will receive priceless guidance and
            valuable tools to assist you to a place of love and bliss again.
          </p>
        </Body>
        <Image>
          <img
            src='https://xomarriage.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-01-at-1.15.39-PM.png'
            alt='img4'
          />
        </Image>
        <ExpectSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 69L32.5 82.3C65 95.7 130 122.3 195 120.7C260 119 325 89 390 78C455 67 520 75 585.2 90.5C650.3 106 715.7 129 780.8 131.8C846 134.7 911 117.3 976 108.2C1041 99 1106 98 1171 106.8C1236 115.7 1301 134.3 1333.5 143.7L1366 153L1366 0L1333.5 0C1301 0 1236 0 1171 0C1106 0 1041 0 976 0C911 0 846 0 780.8 0C715.7 0 650.3 0 585.2 0C520 0 455 0 390 0C325 0 260 0 195 0C130 0 65 0 32.5 0L0 0Z'
              fill='#fc9e49'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </ExpectSvg>
      </Expect>
      <Church>
        <h1>
          Looking to host at your <br /> Church or Community organization?
        </h1>
        <p>
          Bring the world's largest marriage celebration to your city. Contact
          us for more information. The Marriage Project Simulcast allows you to
          view the Marriage Project Conference live or on-demand, with fresh,
          inspiring information from today's most important marriage
          professionals.
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/churches")}
        >
          LEARN MORE
        </Button>
      </Church>
      <SimpleAccordion />
      <Footer />
    </ConferenceBody>
  );
};

export default Conference;

const ConferenceBody = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/04/XOdayone031-1-scaled.jpg");
  background-size: cover;
  height: 85vh;

  h1 {
    color: #fff;
    padding: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    height: 150vh;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    background-size: contain;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    background-size: contain;
  }
`;
const Invest = styled.div`
  position: relative;
  background-color: #f47ca8;
  height: 80vh;
  h1 {
    text-align: center;
    padding-bottom: 3%;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 5%;
    padding-top: 0;
    padding-bottom: 3%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 20%;
    height: 60vh;
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    p {
      text-align: justify;
      padding-bottom: 10%;
      line-height: 140%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 30vh;
  }
`;

const InvestSvg = styled.div`
  z-index: 9;
  position: absolute;
  top: 90%;
  @media screen and (max-width: 768px) {
    top: 42%;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    top: 70%;
  }
`;
const Expect = styled.div`
  position: relative;
  padding: 5%;
  background-color: #fc9e49;
  height: 90vh;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
    grid-template-columns: 100%;
    gap: 0%;
    height: 110vh;
    p {
      text-align: justify;
      padding-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 50vh;
  }
`;

const ExpectSvg = styled.div`
  position: absolute;
  top: 90%;
  @media screen and (max-width: 768px) {
    top: 68%;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    top: 80%;
  }
`;
const Body = styled.div`
  h1 {
    margin-bottom: 0%;
  }
  p {
    margin-top: 0;
    margin-bottom: 5%;
    font-weight: bold;
    color: #fff;
    line-height: 240%;
  }
`;

const Image = styled.div`
  img {
    margin-top: 15%;
    width: 95%;
    border-radius: 10px;
  }
`;

const Church = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/10/home-image-06.png");
  height: 100vh;
  background-size: cover;
  h1 {
    margin-bottom: 0;
    font-size: 300%;
  }
  p {
    margin-top: -7%;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    font-weight: bold;
    line-height: 240%;
  }
  Button {
    margin-left: 10%;
    margin-top: 5%;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
    h1 {
      padding-top: 15%;
      font-size: 150%;
      margin-bottom: 5%;
    }
    p {
      text-align: justify;
      padding-bottom: 10%;
      line-height: 140%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 50vh;
  }
`;

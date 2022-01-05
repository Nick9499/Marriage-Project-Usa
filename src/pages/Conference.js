import Button from "../components/Button/Button";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleAccordion from "../components/Accordion/Accordion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const Conference = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
            src="https://xomarriage.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-01-at-1.15.39-PM.png"
            alt="img4"
          />
        </Image>
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
        <Button white url="/churches">
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
  height: 100%;
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
    height: 60%;
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
  @media screen and (max-width: 1366px) and (min-width: 1024px) {
    height: 80%;
  }
`;

const Expect = styled.div`
  position: relative;
  padding: 5%;
  background-color: #fc9e49;
  height: 120%;
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

    p {
      text-align: justify;
      padding-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
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
  height: 100%;
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
  }
`;

import Button from "../components/Button/Button";
import React, { useState } from "react";
import styled from "styled-components";
import SimpleAccordion from "../components/Accordion/Accordion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./conference.css";

const Conference = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ConferenceBody>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h1>Conference</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641639107">
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
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-top-1641639238">
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
            src="https://media.istockphoto.com/photos/and-then-you-came-along-and-turned-my-life-around-picture-id1300273437?b=1&k=20&m=1300273437&s=170667a&w=0&h=aBUwwJX9_OCJGcMnvbRpMo39AD3EHUbfsabWjs2iD4I="
            alt="img4"
          />
        </Image>
      </Expect>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-top-1641639909">
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
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641646172">
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
      <SimpleAccordion />
      <Footer />
    </ConferenceBody>
  );
};

export default Conference;

const ConferenceBody = styled.div`
  /* h1 {
    color: #fff;
    padding: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    height: 150vh;
    h1 {
      font-size: 300%;
      margin-bottom: 5%;
      padding-top: 100px;
    }
    background-size: contain;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    background-size: contain;
  } */
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/04/XOdayone031-1-scaled.jpg");
  background-size: cover;
  height: 400px;
  background-position: 50% 30%;
  h1 {
    color: #fff;
    padding: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    h1 {
      font-size: 300%;
      padding-top: 100px;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    h1 {
      padding-top: 150px;
    }
  }
`;
const Invest = styled.div`
  position: relative;
  background-color: #f47ca8;
  height: 100%;
  h1 {
    text-align: center;
    padding-bottom: 3%;
    color: #fff;
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
  height: 700px;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  h1 {
    padding-top: 200px;
    padding-bottom: 40px;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    height: 1070px;
    h1 {
      font-size: 200%;
      padding-top: 100px;
      margin-bottom: 5%;
    }
    grid-template-columns: 100%;
    gap: 0%;

    p {
      text-align: justify;
      padding-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    h1 {
      padding-top: 70px;
    }
    height: 600px;
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
  height: 600px;
  background-size: cover;

  h1 {
    color: #fff;
    padding-top: 150px;
    padding-left: 10%;
    font-size: 300%;
  }
  p {
    padding-top: 40px;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    font-weight: bold;
    line-height: 240%;
  }

  @media screen and (max-width: 768px) {
    height: 700px;
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
  }
`;

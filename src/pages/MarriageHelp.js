import Button from "../components/Button/Button";
import React, { useState } from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./mariageHelp.css";

const MarriageHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Marriage>
      <MarriageTitle>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Marriage Help</h1>
      </MarriageTitle>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641646504">
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
      <Desc>
        <h2>
          Marriage Project seeks to create the best marriage knowledge available
          in order to meet the needs of hurting couples.
        </h2>
      </Desc>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641646711">
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
      <Hope>
        <Image>
          <img
            src="https://xomarriage.com/wp-content/uploads/2021/02/marriage-help.jpg"
            alt="img5"
          />
        </Image>
        <HopeContent>
          <h1>Hope & Healing</h1>
          <p>
            Marriages can become better! We believe that the right guidance and
            a shared commitment to achievement can help even the most poisonous
            of relationships to repair and grow. Below are a variety of
            categories of resources that may be able to assist you in your
            healing and growing journey.
          </p>
        </HopeContent>
      </Hope>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641647091">
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
      <Referrals>
        <ReferralsContent>
          <h1>Referrals</h1>
          <p>
            For help in locating a screened Christian counselor, please contact
            one of our friends.
          </p>
          <Button url="/referrals">FIND REFERRALS</Button>
        </ReferralsContent>
        <Image2>
          <img
            src="https://xomarriage.com/wp-content/uploads/2021/03/referrals.jpg"
            alt="img6"
          />
        </Image2>
      </Referrals>
      <Footer />
    </Marriage>
  );
};

export default MarriageHelp;

const Marriage = styled.div`
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    height: 140%;
    background-repeat: no-repeat;
    h1 {
      padding-top: 100px;
      font-size: 300%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    h1 {
      padding-top: 120px;
    }
  }
`;

const MarriageTitle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/marriage-help-2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  height: 400px;
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    height: 300px;
  }
`;

const Desc = styled.div`
  background-color: #2f905b;
  height: 100%;
  h2 {
    text-align: center;
    padding: 10%;
    font-size: 150%;
  }
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 150%;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
  }
`;

const Hope = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/hope.jpg");
  height: 800px;
  background-size: cover;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    height: 1100px;
    grid-template-columns: 100%;

    background-repeat: no-repeat;
  }
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    img {
      margin-top: 10%;
    }
    height: 700px;
    background-repeat: no-repeat;
  }
`;

const Image = styled.div`
  img {
    margin-top: 200px;
    width: 100%;
    padding: 5%;
    border-radius: 40px;
  }
  @media screen and (max-width: 768px) {
    img {
      margin-top: 100px;
    }
  }
`;
const HopeContent = styled.div`
  margin-top: 200px;
  padding-bottom: 10%;
  padding-right: 5%;
  p {
    color: #fff;
    font-weight: bold;
    padding-left: 7%;
    line-height: 220%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    h1 {
      font-weight: bolder;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    padding-right: 5%;
    margin-top: 70px;
  }
`;
const Referrals = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 50% 50%;
  Button {
    margin-top: 3%;
    margin-left: 7%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    Button {
      margin-bottom: 5%;
    }
  }
`;

const ReferralsContent = styled.div`
  margin-bottom: 100px;
  h1 {
    color: #000;
  }
  p {
    font-weight: bold;
    padding-left: 7%;
  }
  @media screen and (max-width: 768px) {
    margin-top: -100px;
  }
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    margin-top: -100px;
  }
`;
const Image2 = styled.div`
  img {
    width: 100%;
    padding: 5%;
    border-radius: 40px;
  }
`;

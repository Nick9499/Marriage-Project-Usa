import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const Give = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <GiveContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Give</h1>
      <Support>
        <h2>
          Support Marriage Project's mission. It is possible to equip the next{" "}
          <br />
          generation for marriage success with a monthly contribution, <br />
          partnership or donation to the Marriage
        </h2>
        <SupportSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 98L32.5 104.5C65 111 130 124 195 127.7C260 131.3 325 125.7 390 113.2C455 100.7 520 81.3 585.2 83.3C650.3 85.3 715.7 108.7 780.8 108.2C846 107.7 911 83.3 976 75C1041 66.7 1106 74.3 1171 89.2C1236 104 1301 126 1333.5 137L1366 148L1366 0L1333.5 0C1301 0 1236 0 1171 0C1106 0 1041 0 976 0C911 0 846 0 780.8 0C715.7 0 650.3 0 585.2 0C520 0 455 0 390 0C325 0 260 0 195 0C130 0 65 0 32.5 0L0 0Z'
              fill='#f7902e'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </SupportSvg>
      </Support>
      <Partners>
        <h1>Marriage Project Partners</h1>
        <p>
          As a community of dedicated contributors, Marriage Project Partners{" "}
          are committed <br /> to seeing marriages flourish through the ministry
          of The Marriage Project. <br /> Donate any amount monthly to the
          Marriage Project to help families <br /> throughout the world find
          hope.
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/marriageprojectpartners")}
        >
          LEARN MORE
        </Button>
      </Partners>
      <OneTime>
        <OneTimeSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 733L45.5 715.8C91 698.7 182 664.3 273 659.2C364 654 455 678 546.2 691.7C637.3 705.3 728.7 708.7 819.8 704.8C911 701 1002 690 1093 692.2C1184 694.3 1275 709.7 1320.5 717.3L1366 725L1366 769L1320.5 769C1275 769 1184 769 1093 769C1002 769 911 769 819.8 769C728.7 769 637.3 769 546.2 769C455 769 364 769 273 769C182 769 91 769 45.5 769L0 769Z'
              fill='#ffd111'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </OneTimeSvg>

        <h1>One-time Gift</h1>
        <p>
          When you donate to the Marriage Project, you're investing in your own
          marriage and promoting the notion that everyone has a 100% chance of
          success in marriage. You may make a one-time gift by clicking the
          button below today!
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/onetimegift")}
        >
          GIVE TODAY!
        </Button>
        <MarriageProjectSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 31L45.5 35.2C91 39.3 182 47.7 273 60.8C364 74 455 92 546.2 96.8C637.3 101.7 728.7 93.3 819.8 82C911 70.7 1002 56.3 1093 64.2C1184 72 1275 102 1320.5 117L1366 132L1366 0L1320.5 0C1275 0 1184 0 1093 0C1002 0 911 0 819.8 0C728.7 0 637.3 0 546.2 0C455 0 364 0 273 0C182 0 91 0 45.5 0L0 0Z'
              fill='#ffd111'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </MarriageProjectSvg>
      </OneTime>
      <MarriageProject>
        <h1>Marriage Project Mentor program</h1>
        <p>
          Marriage Project mentor program is a network of relationship
          specialists that couples can turn to for practical, inspirational, and
          innovative methods to living a wonderful life of love.
        </p>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/marriageprojectmentorprogram")}
        >
          PARTNER WITH US
        </Button>
      </MarriageProject>
      <Footer />
    </GiveContainer>
  );
};

export default Give;

const GiveContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/shutterstock_548882503-scaled.jpg");
  background-size: cover;
  height: 75vh;
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    background-size: contain;
    h1 {
      font-size: 250%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    background-size: contain;
    height: 50vh;
  }
`;
const Support = styled.div`
  position: relative;
  text-align: center;

  background-color: #f7902e;
  h2 {
    font-size: 200%;
    margin-top: 9%;
    padding: 10%;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 130%;
    }
  }
`;
const SupportSvg = styled.div`
  position: absolute;
  top: 80%;
  @media screen and (max-width: 768px) {
    top: 1%;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    top: 75%;
  }
`;
const Partners = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://xomarriage.com/wp-content/uploads/2021/06/benjaminrobyn-jespersen-438379-unsplash-scaled.jpg");
  background-size: cover;
  height: 100vh;
  background-blend-mode: darken;
  h1 {
    padding-top: 10%;
    text-align: center;
  }
  p {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 120%;
    line-height: 240%;
  }
  Button {
    margin-left: 45%;
    margin-top: 2%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
    h1 {
      font-size: 150%;
      margin-top: 5%;
    }
    p {
      font-size: 100%;
      padding-bottom: 5%;
      font-weight: normal;
    }
    Button {
      margin-left: 35%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 50vh;
  }
`;
const OneTime = styled.div`
  position: relative;
  background-color: #ffd111;
  height: 70vh;
  h1 {
    text-align: center;
    color: #000;
    font-weight: bold;
    padding-bottom: 3%;
  }
  p {
    padding: 10%;
    padding-top: 0;
    text-align: center;
    padding-bottom: 2%;
  }
  Button {
    margin-left: 45%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 40vh;
    h1 {
      font-size: 150%;
      padding-bottom: 10%;
    }
    p {
      padding-bottom: 10%;
    }
    Button {
      margin-left: 35%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 30vh;
  }
`;
const OneTimeSvg = styled.div`
  position: absolute;
  bottom: 95%;
  @media screen and (max-width: 768px) {
    bottom: 13%;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    bottom: 75%;
  }
`;
const MarriageProject = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/10/home-image-05.jpg");
  background-size: cover;
  height: 90vh;
  h1 {
    padding-top: 10%;
    text-align: center;
  }
  p {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 120%;
    line-height: 240%;
    padding-left: 10%;
    padding-right: 10%;
  }
  Button {
    margin-left: 45%;
    margin-top: 2%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 70vh;
    h1 {
      font-size: 150%;
    }
    p {
      text-align: center;
      font-weight: 500;
      line-height: 200%;
    }
    Button {
      margin-top: 5%;
      margin-left: 25%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 50vh;
  }
`;

const MarriageProjectSvg = styled.div`
  position: absolute;
  top: 98%;
  @media screen and (max-width: 768px) {
    top: 13%;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    top: 75%;
  }
`;

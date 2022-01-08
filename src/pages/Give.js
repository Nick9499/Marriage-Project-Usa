import Button from "../components/Button/Button";
import React, { useState } from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./give.css";

const Give = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <GiveContainer>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Give</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641651492">
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
      <Support>
        <h2>
          Support Marriage Project's mission. It is possible to equip the next{" "}
          <br />
          generation for marriage success with a monthly contribution, <br />
          partnership or donation to the Marriage
        </h2>
      </Support>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-top-1641651628">
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
      <Partners>
        <h1>Marriage Project Partners</h1>
        <p>
          As a community of dedicated contributors, Marriage Project Partners{" "}
          are committed <br /> to seeing marriages flourish through the ministry
          of The Marriage Project. <br /> Donate any amount monthly to the
          Marriage Project to help families <br /> throughout the world find
          hope.
        </p>
        <div className="btn-container">
          <Button url="/marriageprojectpartners" white>
            LEARN MORE
          </Button>
        </div>
      </Partners>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641652032">
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
      <OneTime>
        <h1>One-time Gift</h1>
        <p>
          When you donate to the Marriage Project, you're investing in your own
          marriage and promoting the notion that everyone has a 100% chance of
          success in marriage. You may make a one-time gift by clicking the
          button below today!
        </p>
        <div className="btn-container">
          <Button url="/onetimegift">GIVE TODAY!</Button>
        </div>
      </OneTime>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-top-1641652101">
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
      <MarriageProject>
        <h1>Marriage Project Mentor program</h1>
        <p>
          Marriage Project mentor program is a network of relationship
          specialists that couples can turn to for practical, inspirational, and
          innovative methods to living a wonderful life of love.
        </p>
        <div className="btn-container">
          <Button white url="/marriageprojectmentorprogram">
            PARTNER WITH US
          </Button>
        </div>
      </MarriageProject>
      <Footer />
    </GiveContainer>
  );
};

export default Give;

const GiveContainer = styled.div`
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 100px;
      font-size: 250%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    h1 {
      padding-top: 100px;
    }
  }
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/shutterstock_548882503-scaled.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 30%;
  height: 400px;
  padding-bottom: 10%;
  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;
const Support = styled.div`
  text-align: center;
  height: 150px;

  background-color: #f7902e;
  h2 {
    font-size: 150%;
    font-weight: 600;

    padding: 10%;
    padding-top: 50px;
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 130%;
      padding-top: 0px;
    }
  }
`;

const Partners = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://xomarriage.com/wp-content/uploads/2021/06/benjaminrobyn-jespersen-438379-unsplash-scaled.jpg");
  background-size: cover;
  height: 700px;
  background-blend-mode: darken;
  padding-bottom: 5%;
  h1 {
    padding-top: 100px;
    text-align: center;
    font-weight: 500;
  }
  p {
    text-align: center;
    color: #fff;
    padding-left: 5%;
    padding-right: 5%;
    font-size: 120%;
    line-height: 240%;
  }
  Button {
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 800px;
    h1 {
      padding-top: 130px;
      font-size: 250%;
      /*  margin-top: 5%; */
    }
    p {
      font-size: 100%;
      padding-bottom: 5%;
      font-weight: normal;
    }
    Button {
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    height: 650px;
    h1 {
      padding-top: 130px;
    }
  }
`;
const OneTime = styled.div`
  position: relative;
  background-color: #ffd111;
  height: 300px;
  h1 {
    text-align: center;
    color: #000;
    font-weight: 500;
    padding-bottom: 3%;
  }
  p {
    padding: 10%;
    padding-top: 0;
    text-align: center;
    padding-bottom: 2%;
  }
  Button {
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
    h1 {
      padding-top: 0px;
      font-size: 200%;
      padding-bottom: 10%;
    }
    p {
      padding-bottom: 10%;
    }
    Button {
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
  }
`;

const MarriageProject = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  height: 600px;
  h1 {
    padding-top: 100px;
    text-align: center;
    font-weight: 500;
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
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 500px;
    h1 {
      font-size: 250%;
    }
    p {
      text-align: center;
      font-weight: 500;
      line-height: 200%;
    }
    Button {
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
  }
`;

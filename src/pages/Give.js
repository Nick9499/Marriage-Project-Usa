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
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Give</h1>
      </Banner>
      <Support>
        <h2>
          Support Marriage Project's mission. It is possible to equip the next{" "}
          <br />
          generation for marriage success with a monthly contribution, <br />
          partnership or donation to the Marriage
        </h2>
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
          variant="contained"
          color="primary"
          onClick={() => history.push("/marriageprojectpartners")}>
          LEARN MORE
        </Button>
      </Partners>
      <OneTime>
        <h1>One-time Gift</h1>
        <p>
          When you donate to the Marriage Project, you're investing in your own
          marriage and promoting the notion that everyone has a 100% chance of
          success in marriage. You may make a one-time gift by clicking the
          button below today!
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/onetimegift")}>
          GIVE TODAY!
        </Button>
      </OneTime>
      <MarriageProject>
        <h1>Marriage Project Mentor program</h1>
        <p>
          Marriage Project mentor program is a network of relationship
          specialists that couples can turn to for practical, inspirational, and
          innovative methods to living a wonderful life of love.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/marriageprojectmentorprogram")}>
          PARTNER WITH US
        </Button>
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
      font-size: 250%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
  }
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/shutterstock_548882503-scaled.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;
const Support = styled.div`
  text-align: center;

  background-color: #f7902e;
  h2 {
    font-size: 150%;
    font-weight: 600;

    padding: 10%;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 130%;
    }
  }
`;

const Partners = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)),
    url("https://xomarriage.com/wp-content/uploads/2021/06/benjaminrobyn-jespersen-438379-unsplash-scaled.jpg");
  background-size: cover;
  height: 100%;
  background-blend-mode: darken;
  h1 {
    padding-top: 10%;
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
    margin-left: 45%;
    margin-top: 2%;
    margin-bottom: 5%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      /*  margin-top: 5%; */
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
  }
`;
const OneTime = styled.div`
  position: relative;
  background-color: #ffd111;
  height: 50vh;
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
    margin-left: 45%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
    h1 {
      font-size: 200%;
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
    margin-left: 45%;
    margin-top: 2%;
    z-index: 9;
  }
  @media screen and (max-width: 768px) {
    height: 100vh;
    h1 {
      font-size: 250%;
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
  }
`;

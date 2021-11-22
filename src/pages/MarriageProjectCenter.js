import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import { Button } from "@material-ui/core";

const MarriageProjectCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MarriageCenter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h1> Marriage Project Mentor program</h1>
        <Button variant='contained' color='primary'>
          Donate Us
        </Button>
      </Banner>
      <Difference>
        <h1> Marriage Project Mentor program</h1>
        <p>
          Marriage Project mentor program is a network of relationship
          specialists that couples can turn to for practical, inspirational, and
          innovative methods to living a wonderful life of love.
        </p>
        <Image>
          <img
            src='https://xomarriage.com/wp-content/uploads/2020/12/marriage-center-860x600.jpg'
            alt='img6'
          />
        </Image>
        <DifferenceSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 641L45.5 640.8C91 640.7 182 640.3 273 650.5C364 660.7 455 681.3 546.2 698.3C637.3 715.3 728.7 728.7 819.8 720.7C911 712.7 1002 683.3 1093 670.7C1184 658 1275 662 1320.5 664L1366 666L1366 769L1320.5 769C1275 769 1184 769 1093 769C1002 769 911 769 819.8 769C728.7 769 637.3 769 546.2 769C455 769 364 769 273 769C182 769 91 769 45.5 769L0 769Z'
              fill='#aaeeff'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </DifferenceSvg>
      </Difference>
      <Purpose>
        <Item>
          <No>
            <h1>1</h1>
          </No>
          <Desc>
            <p>
              Ensure that marriage is recognized as the most important
              institution in the world.
            </p>
          </Desc>
        </Item>
        <Item>
          <No>
            <h1>2</h1>
          </No>
          <Desc>
            <p>Assemble a global coalition of pro-marriage groups.</p>
          </Desc>
        </Item>
        <Item>
          <No>
            <h1>3</h1>
          </No>
          <Desc>
            <p>
              Provides training and tools for pastors and other church leaders.
            </p>
          </Desc>
        </Item>
        <Item>
          <No>
            <h1>4</h1>
          </No>
          <Desc>
            <p>
              The ability to create and publish digital content (Podcasts,
              YouTube, Social Media)
            </p>
          </Desc>
        </Item>
      </Purpose>
      <Stand>
        <StandSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 137L57 128.2C114 119.3 228 101.7 341.8 101C455.7 100.3 569.3 116.7 683.2 118.5C797 120.3 911 107.7 1024.8 89.5C1138.7 71.3 1252.3 47.7 1309.2 35.8L1366 24L1366 0L1309.2 0C1252.3 0 1138.7 0 1024.8 0C911 0 797 0 683.2 0C569.3 0 455.7 0 341.8 0C228 0 114 0 57 0L0 0Z'
              fill='#aaeeff'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </StandSvg>
        <h1>Take a Stand for Marriage</h1>
        <p>
          Raising the criterion for marriage has broader implications than
          simply saving individual marriages. Protecting civilization as a whole
          is our mission. We want to see happy, healthy relationships amongst
          couples. As a society, we want children to grow up with both parents.
          We vow to preserve and advocate for the institution of marriage the
          way that God created it to be.
        </p>
      </Stand>
      <Footer />
    </MarriageCenter>
  );
};

export default MarriageProjectCenter;

const MarriageCenter = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/10/home-image-05.jpg");
  background-size: cover;
  height: 55vh;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 30vh;
  }
`;
const Banner = styled.div`
  h1 {
    padding: 7%;
    font-size: 300%;
    color: #fff;
    font-weight: bold;
    padding-bottom: 2%;
  }
  Button {
    margin-left: 7%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin-top: 10%;
      font-size: 200%;
      margin-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h1 {
      margin-top: 5%;
      font-size: 250%;
      margin-bottom: 3%;
    }
  }
`;
const Difference = styled.div`
  position: relative;
  margin-top: 15%;
  h1 {
    color: #000;
    font-size: 300%;
    text-align: center;
  }
  p {
    text-align: center;
    color: #000;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 240%;
    font-weight: bold;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
      margin-top: 20%;
      margin-bottom: 10%;
    }
    p {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h1 {
      font-size: 250%;
      margin-bottom: 3%;
    }
    p {
      padding-left: 15%;
      padding-right: 15%;
    }
  }
`;
const DifferenceSvg = styled.div`
  position: absolute;
  top: 25%;
  @media screen and (max-width: 768px) {
    top: 10%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: 15%;
  }
`;
const Image = styled.div`
  padding-left: 20%;
  img {
    width: 80%;
    border-radius: 15px;
  }
  margin-bottom: 10%;
`;
const Purpose = styled.div`
  background-color: #aef;
  height: 50vh;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 7%;
  gap: 5%;
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 30vh;
  }
`;
const Item = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: 0.3fr 0.3fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
const No = styled.div`
  h1 {
    color: #18c;
  }
`;
const Desc = styled.div`
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    p {
      font-size: 100%;
      word-break: break-all;
    }
  }
  p {
    font-weight: 600;
  }
`;

const Stand = styled.div`
  margin-top: 15%;
  position: relative;
  h1 {
    color: #000;
    font-weight: bold;
    text-align: center;
  }
  p {
    margin-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    font-weight: bold;
    line-height: 200%;
    padding-bottom: 5%;
  }
`;
const StandSvg = styled.div`
  position: absolute;
  top: -77%;
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: -93%;
  }
`;

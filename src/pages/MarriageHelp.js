import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const MarriageHelp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const history = useHistory();
  return (
    <Marriage>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Marriage Help</h1>
      <Desc>
        <h2>
          Marriage Project seeks to create the best marriage knowledge available
          in order to meet the needs of hurting couples.
        </h2>
        <DescSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 136L32.5 139.5C65 143 130 150 195 144.5C260 139 325 121 390 104.5C455 88 520 73 585.2 84C650.3 95 715.7 132 780.8 146C846 160 911 151 976 139.7C1041 128.3 1106 114.7 1171 101.3C1236 88 1301 75 1333.5 68.5L1366 62L1366 0L1333.5 0C1301 0 1236 0 1171 0C1106 0 1041 0 976 0C911 0 846 0 780.8 0C715.7 0 650.3 0 585.2 0C520 0 455 0 390 0C325 0 260 0 195 0C130 0 65 0 32.5 0L0 0Z'
              fill='#2f905b'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </DescSvg>
      </Desc>
      <Hope>
        <Image>
          <img
            src='https://xomarriage.com/wp-content/uploads/2021/02/marriage-help.jpg'
            alt='img5'
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
      <Referrals>
        <ReferralsSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 662L32.5 661.5C65 661 130 660 195 664.7C260 669.3 325 679.7 390 682.5C455 685.3 520 680.7 585.2 670.8C650.3 661 715.7 646 780.8 634.2C846 622.3 911 613.7 976 610.3C1041 607 1106 609 1171 614.7C1236 620.3 1301 629.7 1333.5 634.3L1366 639L1366 769L1333.5 769C1301 769 1236 769 1171 769C1106 769 1041 769 976 769C911 769 846 769 780.8 769C715.7 769 650.3 769 585.2 769C520 769 455 769 390 769C325 769 260 769 195 769C130 769 65 769 32.5 769L0 769Z'
              fill='#ffffff'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </ReferralsSvg>
        <ReferralsContent>
          <h1>Referrals</h1>
          <p>
            For help in locating a screened Christian counselor, please contact
            one of our friends.
          </p>
          <Button
            variant='contained'
            color='primary'
            onClick={() => history.push("/referrals")}
          >
            FIND REFERRALS
          </Button>
        </ReferralsContent>
        <Image>
          <img
            src='https://xomarriage.com/wp-content/uploads/2021/03/referrals.jpg'
            alt='img6'
          />
        </Image>
      </Referrals>
      <Footer />
    </Marriage>
  );
};

export default MarriageHelp;

const Marriage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/marriage-help-2.jpg");
  background-size: cover;
  height: 75vh;
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 50%;
    h1 {
      font-size: 170%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    background-size: 100% 50%;
  }
`;

const Desc = styled.div`
  position: relative;
  background-color: #2f905b;
  height: 50vh;
  h2 {
    text-align: center;
    padding: 10%;
    font-size: 200%;
  }
  @media screen and (max-width: 767px) {
    margin-top: 25%;
    height: 30vh;
    h2 {
      font-size: 150%;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    margin-top: 10%;
    height: 20vh;
  }
`;

const DescSvg = styled.div`
  position: absolute;
  top: 97%;
  @media screen and (max-width: 767px) {
    top: -15%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    top: 62%;
  }
`;

const Hope = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/hope.jpg");
  height: 120vh;
  background-size: cover;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    img {
      margin-top: 10%;
    }
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 50vh;
  }
`;

const Image = styled.div`
  img {
    margin-top: 25%;
    width: 100%;
    padding: 5%;
    border-radius: 40px;
  }
`;
const HopeContent = styled.div`
  margin-top: 25%;
  p {
    color: #fff;
    font-weight: bold;
    padding-left: 7%;
    line-height: 220%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-weight: bolder;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    padding-right: 5%;
  }
`;
const Referrals = styled.div`
  position: relative;
  margin-top: 5%;
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

const ReferralsSvg = styled.div`
  position: absolute;
  top: -145%;
  @media screen and (max-width: 768px) {
    top: -95%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    top: -165%;
  }
`;

const ReferralsContent = styled.div`
  margin-top: 7%;
  h1 {
    color: #000;
  }
  p {
    font-weight: bold;
    padding-left: 7%;
  }
`;

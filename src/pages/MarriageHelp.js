import Button from "../components/Button/Button";
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
      <MarriageTitle>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Marriage Help</h1>
      </MarriageTitle>
      <Desc>
        <h2>
          Marriage Project seeks to create the best marriage knowledge available
          in order to meet the needs of hurting couples.
        </h2>
      </Desc>
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
      <Referrals>
        <ReferralsContent>
          <h1>Referrals</h1>
          <p>
            For help in locating a screened Christian counselor, please contact
            one of our friends.
          </p>
          <Button url="/referrals">FIND REFERRALS</Button>
        </ReferralsContent>
        <Image>
          <img
            src="https://xomarriage.com/wp-content/uploads/2021/03/referrals.jpg"
            alt="img6"
          />
        </Image>
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
    background-size: 140%;
    height: 140%;
    background-repeat: no-repeat;
    h1 {
      font-size: 250%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    /*  background-size: 100% 100%; */
  }
`;

const MarriageTitle = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/marriage-help-2.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  height: 140%;
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
  height: 150%;
  background-size: cover;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;

    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    img {
      margin-top: 10%;
    }

    background-repeat: no-repeat;
  }
`;

const Image = styled.div`
  img {
    margin-top: 10%;
    width: 100%;
    padding: 5%;
    border-radius: 40px;
  }
`;
const HopeContent = styled.div`
  margin-top: 5%;
  padding-bottom: 10%;
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

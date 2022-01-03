import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const MarriageProjectPartner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Partners>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h2>Give</h2>
        <h1>Marriage Project Partner</h1>
      </Banner>
      <Become>
        <h1>Become a Marriage Project Partner and impact generations!</h1>
        <p>
          Contribute to the repair of marriages and the creation of strong,
          lasting families by making a monthly donation of any size. Access to
          life-changing marital information, instructional videos, and product
          discounts are included with a{" "}
          <b>recurring monthly contribution of $50</b> or more.
        </p>
      </Become>
      <Footer />
    </Partners>
  );
};

export default MarriageProjectPartner;

const Partners = styled.div``;

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/03/priscilla-du-preez-rf5U-IXqxzg-unsplash-e1619798186563.jpg");
  background-size: 100%;
  height: 100%;
  background-position: 50% 20%;
  h1 {
    padding-left: 7%;
    font-size: 300%;
    color: #fff;
    font-weight: 500;
    padding-bottom: 5%;
  }
  h2 {
    color: #ffd111;
    padding-left: 7%;
    padding-top: 10%;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
  }
`;
const Become = styled.div`
  h1 {
    font-size: 200%;
    margin-top: 10%;
    text-align: center;
    color: #000;
    padding-bottom: 3%;
    font-weight: 500;
  }
  p {
    text-align: center;
    padding: 10%;
    padding-top: 0%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30%;
    h1 {
      font-size: 150%;
      font-weight: 600;
    }
  }
`;

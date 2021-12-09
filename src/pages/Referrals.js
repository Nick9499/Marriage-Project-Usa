import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const Referrals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ReferralsContent>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h2>Marriage Help</h2>
        <h1>Referrals</h1>
      </Banner>
      <Intensives>
        <h1>Marriage Workshops and Intensives</h1>
        <h2>The UNcovered experience</h2>
        <p>
          These specific workshops and intensives are designed for couples that
          have failed <br /> and are in the process of severing their
          relationship. This is a last <br /> attempt to bring back hope through
          4 days of small, intimate and <br /> one on one sessions with Dr.
          Eddie and the Team..
        </p>
        <p className="bold">WEBSITE</p>
        <p className="bold">ABOUT</p>
        <p>
          The four-day retreat at a five-star resort for struggling couples{" "}
          <br /> is full of shared activities, team building exercises and
          inspirational stories of <br /> couples that made it through their own
          nightmares and difficulties. Counselors and <br /> therapists are
          present to help couples navigate through problems.
        </p>
        <p>
          Once you've attended the retreat, your chances of restoration are
          great <br /> like prior couples that have succeeded in transforming
          their marriages, which is <br /> quite remarkable!
        </p>
        <p>
          An intensive with us will not only get you started, but you will{" "}
          <br /> have the knowledge and tools to keep you on the correct path{" "}
          <br /> to rewrite your love story.
        </p>
        <p>
          If you are willing to put in the work, your marriage can <br />{" "}
          improve or be saved at “The UNcovered Experience.”
        </p>
      </Intensives>
      <Testimonials>
        <h2>Testimonials</h2>
        <p>
          “During my time at The UNcovered Experience, I grew closer to both{" "}
          <br /> God and my wife because of the experience. I also learnt how{" "}
          <br /> to continue to work on our marriage using the tools I acquired{" "}
          <br /> throughout my training. This gives me a little hope. Despite my
          lack <br /> of experience, I am confident in my ability to achieve.”
        </p>
        <p>
          We want you to have the same experience as we had. Already, a <br />{" "}
          group of individuals is praying for you and your husband/wife.
        </p>
        <p>See if there are any dates available for your Marriage</p>
      </Testimonials>
      <Footer />
    </ReferralsContent>
  );
};

export default Referrals;

export const ReferralsContent = styled.div`
  height: 100%;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
  }
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/03/referrals-hero.png");
  background-size: cover;
  height: 40vh;
  h1 {
    color: #fff;
    font-weight: 500;
    font-size: 400%;
    padding-left: 7%;
  }
  h2 {
    color: #fff;
    font-weight: bold;
    font-size: 200%;
    padding-top: 5%;
    padding-left: 7%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      font-weight: 500;
    }
    h2 {
      font-size: 150%;
    }
  }
`;
const Intensives = styled.div`
  margin-top: 15%;
  h1 {
    margin-top: 20%;
    margin-left: 5%;
    color: #9a5b9f;
    font-size: 250%;
    font-weight: bold;
  }
  h2 {
    margin-top: 3%;
    font-weight: bold;
    font-size: 150%;
    color: #000;
    margin-left: 5%;
    margin-bottom: 3%;
  }
  p {
    padding-left: 5%;
    padding-bottom: 2%;

    line-height: 240%;
  }
  .bold {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      margin-top: 35%;
      font-size: 150%;
      margin-bottom: 15%;
    }
    h2 {
      margin-bottom: 10%;
      font-size: 130%;
    }
    p {
      padding-right: 10%;
    }
  }
`;
const Testimonials = styled.div`
  h2 {
    color: #000;
    font-weight: bold;
    margin-left: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  p {
    padding-left: 5%;
    margin-bottom: 2%;
    line-height: 240%;
  }
`;

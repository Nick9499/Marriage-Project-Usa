import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import { TextField } from "@material-ui/core";
import Button from "../components/Button/Button";
import "./oneTimeGift.css";

const OneTimeGift = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <OneTime>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h2>Give</h2>
        <h1>One-Time Gift</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641661408">
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
      <One>
        <h2>
          When you donate to the Marriage Project, you're investing in your own
          marriage and promoting the notion that everyone has a 100% chance of
          success in marriage. You may make a one-time gift by clicking the
          button below today!
        </h2>
        <h3>Please fill the below form to donate</h3>
        <Form>
          <TextField
            label="Name"
            variant="outlined"
            className="input"
            style={{ marginBottom: "3%" }}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            className="input"
            style={{ marginBottom: "3%" }}
          />
          <Button>Send</Button>
        </Form>
      </One>
      <Footer />
    </OneTime>
  );
};

export default OneTimeGift;

const OneTime = styled.div``;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/give-1.jpg");
  background-size: cover;
  height: 400px;
  h1 {
    padding-left: 6%;
    padding-top: 2%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
    padding-bottom: 5%;
  }
  h2 {
    font-size: 200%;
    color: #fff;
    font-weight: bold;
    padding: 7%;

    padding-bottom: 0%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    height: 300px;
    h1 {
      font-size: 250%;
    }
    h2 {
      padding-top: 100px;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    h2 {
      padding-top: 100px;
    }
  }
`;
const One = styled.div`
  position: relative;

  h2 {
    padding: 3%;
    padding-bottom: 5%;
    color: #000;
    text-align: center;
    font-size: 150%;
  }
  h3 {
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 120%;
      /*  padding: 10%; */
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    h2 {
      font-size: 130%;
    }
  }
`;
const Form = styled.div`
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

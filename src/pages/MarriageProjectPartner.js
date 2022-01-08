import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./marriageProjectPartner.css";
import { TextField } from "@material-ui/core";
import Button from "../components/Button/Button";

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
      <section style={{ position: "relative" }}>
        <div class="custom-shape-divider-bottom-1641660274">
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
      <h3 style={{ textAlign: "center" }}>
        Please fill the below form to donate
      </h3>
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
          style={{ marginBottom: "2%" }}
        />
        <Button>Send</Button>
      </Form>
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
  height: 400px;
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
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    h2 {
      padding-top: 150px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 320px;
    h1 {
      font-size: 200%;
    }
    h2 {
      padding-top: 100px;
    }
  }
`;
const Become = styled.div`
  h1 {
    font-size: 200%;

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
    h1 {
      font-size: 150%;
      font-weight: 600;
      padding: 5px;
    }
  }
`;
const Form = styled.div`
  margin: 5%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

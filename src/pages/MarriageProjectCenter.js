import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import Button from "../components/Button/Button";
import "./marriageProjectCenter.css";
import { Avatar } from "@material-ui/core";

const MarriageProjectCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarriageCenter>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1> Marriage Project Mentor program</h1>
        <Button white>Donate Us</Button>
      </Banner>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641661906">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <Difference>
        <h1> Marriage Project Mentor program</h1>
        <p>
          Marriage Project mentor program is a network of relationship
          specialists that couples can turn to for practical, inspirational, and
          innovative methods to living a wonderful life of love.
        </p>
        <Image>
          <img
            src="https://images.unsplash.com/photo-1509845350455-fb0c36048db1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="img6"
          />
        </Image>
      </Difference>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641662693">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <Purpose>
        <Item>
          <No>
            <Avatar style={{ color: "#fff", background: "#087DC2" }}>1</Avatar>
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
            <Avatar style={{ color: "#fff", background: "#087DC2" }}>2</Avatar>
          </No>
          <Desc>
            <p>Assemble a global coalition of pro-marriage groups.</p>
          </Desc>
        </Item>
        <Item>
          <No>
            <Avatar style={{ color: "#fff", background: "#087DC2" }}>3</Avatar>
          </No>
          <Desc>
            <p>
              Provides training and tools for pastors and other church leaders.
            </p>
          </Desc>
        </Item>
        <Item>
          <No>
            <Avatar style={{ color: "#fff", background: "#087DC2" }}>4</Avatar>
          </No>
          <Desc>
            <p>
              The ability to create and publish digital content (Podcasts,
              YouTube, Social Media)
            </p>
          </Desc>
        </Item>
      </Purpose>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641662664">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <Stand>
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
  /* height: 100%;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
  } */
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1467803738586-46b7eb7b16a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
  background-size: cover;
  padding-bottom: 1%;
  height: 400px;
  h1 {
    padding: 7%;
    font-size: 300%;
    color: #fff;
    font-weight: 600;
    padding-bottom: 2%;
  }
  Button {
    margin-left: 7%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 100px;
      font-size: 200%;
      margin-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    h1 {
      padding-top: 100px;
      font-size: 250%;
      margin-bottom: 3%;
    }
  }
`;
const Difference = styled.div`
  h1 {
    color: #000;
    font-size: 300%;
    text-align: center;
    font-weight: 600;
  }
  p {
    text-align: center;
    color: #000;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 240%;
    font-weight: 400;
    padding-bottom: 5%;
    font-size: 120%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
      margin-bottom: 10%;
    }
    p {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
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

const Image = styled.div`
  padding-left: 20%;
  img {
    width: 80%;
    border-radius: 15px;
  }
  margin-bottom: 10%;
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    img {
      width: 90%;
      padding-left: 0;
    }
  }
`;
const Purpose = styled.div`
  background-color: #aef;
  height: 500px;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 7%;
  padding-top: 200px;
  gap: 5%;
  @media screen and (max-width: 768px) {
    height: 700px;
    padding-top: 130px;
    grid-template-columns: 100%;
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    padding-top: 150px;
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
  /* @media screen and (max-width: 1365px) and (min-width: 1024px) {
    p {
      font-size: 100%;
      word-break: break-all;
    }
  } */
  p {
    font-weight: 400;
    font-size: 120%;
  }
`;

const Stand = styled.div`
  margin-top: 100px;
  position: relative;
  h1 {
    color: #000;
    font-weight: 600;
    text-align: center;
    font-size: 250%;
  }
  p {
    margin-top: 5%;
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    font-weight: 400;
    line-height: 200%;
    padding-bottom: 5%;
    font-size: 120%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 150px;
  }
  @media screen and (max-width: 1365px) and (min-width: 769px) {
    margin-top: 150px;
  }
`;

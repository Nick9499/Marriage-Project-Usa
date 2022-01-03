import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarriageCenter>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1> Marriage Project Mentor program</h1>
        <Button variant="contained" color="primary">
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
            src="https://xomarriage.com/wp-content/uploads/2020/12/marriage-center-860x600.jpg"
            alt="img6"
          />
        </Image>
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
  height: 100%;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
  }
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/10/home-image-05.jpg");
  background-size: cover;
  height: 200%;
  h1 {
    padding: 7%;
    font-size: 300%;
    color: #fff;
    font-weight: 500;
    padding-bottom: 2%;
  }
  Button {
    margin-left: 7%;
    margin-bottom: 5%;
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
  margin-top: 20%;
  h1 {
    color: #000;
    font-size: 300%;
    text-align: center;
    font-weight: 500;
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
    margin-top: 30%;
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
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 7%;
  gap: 5%;
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
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
    font-weight: 600;
  }
`;

const Stand = styled.div`
  margin-top: 15%;
  position: relative;
  h1 {
    color: #000;
    font-weight: 500;
    text-align: center;
    font-size: 250%;
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

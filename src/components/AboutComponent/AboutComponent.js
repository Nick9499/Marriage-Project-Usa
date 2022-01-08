import Button from "../Button/Button";
import React from "react";

import styled from "styled-components";

const AboutComponent = () => {
  return (
    <About>
      <Image>
        <img
          src="https://xomarriage.com/wp-content/uploads/2021/01/photo-2.jpg"
          alt="img1"
        />
        <img
          src="https://xomarriage.com/wp-content/uploads/2021/01/photo-1.jpg"
          alt="img2"
          className="over-image"
        />
      </Image>
      <AboutContent>
        <h1>About Us</h1>
        <p>
          The purpose of the Marriage Project is to assist couples in having
          healthy and strong marriages by providing accessible education,
          counsel and guidance for both broken and healthy relationships.. This
          is accomplished through the hosting of conferences, the creation of
          resources, and the provision of motivating digital content.
        </p>
        {/* <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/about")}>
          LEARN MORE
        </Button> */}

        <Button url="/about">Learn More</Button>
      </AboutContent>
    </About>
  );
};

export default AboutComponent;

const About = styled.div`
  height: 600px;
  margin-top: -1%;
  background: #f8e71c;
  display: grid;
  grid-template-columns: 60% 40%;

  @media screen and (max-width: 767px) {
    height: 800px;
    grid-template-columns: 100%;
    padding-bottom: -20%;
    /* margin-top: 30%; */
    margin-bottom: -5%;
  }

  position: relative;
`;
const Image = styled.div`
  position: relative;
  img {
    width: 60%;
    padding: 10%;
  }
  .over-image {
    z-index: 1;
    position: absolute;
    left: 20%;
    top: 10%;
  }
  @media screen and (max-width: 767px) {
    img {
      width: 70%;
    }
    .over-image {
      left: 30%;
    }
  }
`;

const AboutContent = styled.div`
  padding-bottom: 20%;
  padding: 5%;
  h1 {
    font-weight: 500;
    font-size: 400%;
    padding-bottom: 5%;
  }
  p {
    font-weight: bold;
    line-height: 240%;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 250%;
      padding-bottom: 7%;
    }
  }
`;

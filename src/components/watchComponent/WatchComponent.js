import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const WatchComponent = () => {
  return (
    <Watch>
      <FeaturedSvg>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            fill='#fff'
          ></path>
        </svg>
      </FeaturedSvg>
      <h1>Watch</h1>
      <p>
        Watch encouraging video content from leading marriage experts like Jimmy{" "}
        <br />
        Evans, Dave and Ashley Willis and more, on XO Now and our XO Marriage{" "}
        <br />
        YouTube channel.
      </p>
      <Button variant='contained' color='primary'>
        LEARN MORE
      </Button>
    </Watch>
  );
};

export default WatchComponent;

const Watch = styled.div`
  position: relative;
  padding: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/homepage.jpg");
  background-size: cover;
  height: 90vh;
  text-align: right;
  h1 {
    color: #fff;
    font-size: 400%;
  }
  p {
    color: #fff;
    margin-top: 5%;
    font-weight: bold;
    line-height: 240%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      text-align: right;
      margin-top: 15%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    height: 40vh;
  }
`;
const FeaturedSvg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(205% + 1.3px);
    height: 166px;
    transform: rotateY(180deg);
  }
`;

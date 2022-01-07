import Button from "../Button/Button";
import React from "react";
import styled from "styled-components";

const WatchComponent = () => {
  return (
    <Watch>
      <h1>Watch</h1>
      <p>
        Watch encouraging video content from leading marriage experts like Eddie{" "}
        <br />
        Riverra and others, on our Marriage Project <br />
        YouTube channel.
      </p>
      <ButtonContainer>
        <Button white>LEARN MORE</Button>
      </ButtonContainer>
    </Watch>
  );
};

export default WatchComponent;

const Watch = styled.div`
  height: 100%;
  position: relative;
  padding: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/homepage.jpg");
  background-size: cover;
  height: 100%;
  text-align: right;
  h1 {
    color: #fff;
    font-size: 400%;
    font-weight: 500;
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
    p {
      text-align: left;
    }
  }
  /*  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    height: 40vh;
  } */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

import React from "react";

import styled from "styled-components";
import Button from "../Button/Button";

const ConferenceComponent = () => {
  return (
    <>
      <Conference>
        <h1>Conferences</h1>
        <p>
          The Marriage Project conference is an event that arms couples with
          tools <br />
          and practical insights to help them apply and live out marriage as it{" "}
          <br />
          should be, with love, laughter and purpose.
        </p>
        {/*  <button onClick={() => history.push("/conference")}>LEARN MORE</button> */}
        <Button white url="/conference">
          Learn More
        </Button>
      </Conference>
    </>
  );
};

export default ConferenceComponent;

const Conference = styled.div`
  position: relative;
  padding: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
  background-size: cover;
  background-position: 50% 30%;

  height: 700px;
  h1 {
    padding-top: 100px;
    color: #fff;

    padding-bottom: 2%;
    font-size: 350%;
    font-weight: 500;
  }
  p {
    color: #fff;
    font-weight: 400;
    line-height: 270%;
    margin-bottom: 5%;
    font-size: 120%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;

    h1 {
      font-size: 250%;
      padding-bottom: 10%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1365px) {
    /* height: 70vh; */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    h1 {
      padding-bottom: 6%;
    }
  }
`;

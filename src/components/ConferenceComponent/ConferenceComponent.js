import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ConferenceComponent = () => {
  const history = useHistory();
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
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push("/conference")}>
          LEARN MORE
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
    url("https://xomarriage.com/wp-content/uploads/2020/10/home-image-03-e1610987925178.jpg");
  background-size: cover;

  height: 100%;
  h1 {
    color: #fff;

    padding-bottom: 2%;
    font-size: 350%;
    font-weight: 500;
  }
  p {
    color: #fff;
    font-weight: 500;
    line-height: 270%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 90%;
    background-repeat: no-repeat;
    /* height: 80vh; */
    h1 {
      margin-top: 20%;
      font-size: 250%;
      padding-bottom: 10%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1365px) {
    /* height: 70vh; */
    background-size: 100% 70%;
    background-repeat: no-repeat;
    h1 {
      padding-bottom: 6%;
    }
  }
`;

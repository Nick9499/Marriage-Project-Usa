import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const ConferenceComponent = () => {
  const history = useHistory();
  return (
    <>
      <Conference>
        <ConferenceSvg>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
              className='shape-fill-about'
            ></path>
          </svg>
        </ConferenceSvg>
        <h1>Conferences</h1>
        <p>
          The Marriage Project conference is an event that arms couples with
          tools <br />
          and practical insights to help them apply and live out marriage as it{" "}
          <br />
          should be, with love, laughter and purpose.
        </p>
        <Button
          color='primary'
          variant='contained'
          onClick={() => history.push("/conference")}
        >
          LEARN MORE
        </Button>
      </Conference>
      <Bottom>
        <ConferenceBottomSvg>
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
        </ConferenceBottomSvg>
      </Bottom>
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

  height: 100vh;
  h1 {
    color: #fff;

    padding-bottom: 2%;
    font-size: 400%;
  }
  p {
    color: #fff;
    font-weight: bold;
    line-height: 270%;
    margin-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 80vh;
    h1 {
      margin-top: 20%;
      font-size: 250%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
    height: 70vh;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
const ConferenceSvg = styled.div`
  @media screen and (max-width: 768px) {
    top: 0;
  }
  @media screen and (max-width: 1365px) and (min-width: 768px) {
    top: -2%;
  }
  position: absolute;
  top: 4%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(146% + 1.3px);
    height: 100px;
  }
  margin-top: -5%;
`;
const ConferenceBottomSvg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(161% + 1.3px);
    height: 198px;
    transform: rotateY(180deg);
  }
  @media screen and (max-width: 768px) {
  }
`;
const Bottom = styled.div`
  position: relative;
`;

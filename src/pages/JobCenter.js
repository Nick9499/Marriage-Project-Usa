import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, withRouter } from "react-router";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const JobCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((val) => !val);
  };
  const history = useHistory();
  return (
    <JobCenterContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Job Center</h1>
      <Offer>
        <h2>
          We offer a unique opportunity to be part of a world-className marriage
          ministry where your skills, talents and passions meet.
        </h2>
        <OfferSvg>
          <svg
            id="visual"
            viewBox="0 0 1366 768"
            width="100%"
            height="768"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1">
            <path
              d="M0 98L25.3 94.5C50.7 91 101.3 84 152 81.2C202.7 78.3 253.3 79.7 303.8 80.5C354.3 81.3 404.7 81.7 455.2 84.5C505.7 87.3 556.3 92.7 607 95.5C657.7 98.3 708.3 98.7 759 97.8C809.7 97 860.3 95 910.8 89.8C961.3 84.7 1011.7 76.3 1062.2 70C1112.7 63.7 1163.3 59.3 1214 61C1264.7 62.7 1315.3 70.3 1340.7 74.2L1366 78L1366 0L1340.7 0C1315.3 0 1264.7 0 1214 0C1163.3 0 1112.7 0 1062.2 0C1011.7 0 961.3 0 910.8 0C860.3 0 809.7 0 759 0C708.3 0 657.7 0 607 0C556.3 0 505.7 0 455.2 0C404.7 0 354.3 0 303.8 0C253.3 0 202.7 0 152 0C101.3 0 50.7 0 25.3 0L0 0Z"
              fill="#f7902e"
              stroke-linecap="round"
              stroke-linejoin="miter"></path>
          </svg>
        </OfferSvg>
      </Offer>
      <Jobs>
        <h2>Opportunities</h2>
        <Job>
          <Name>
            <h3>CREATIVE DIRECTOR</h3>
            <h4>Posted on october 15,2021</h4>
          </Name>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/jobcenter/creativedirector")}>
            Job Details
          </Button>
        </Job>
        <hr />
        <Job>
          <Name>
            <h3>Program Coordinator</h3>
            <h4>Posted on october 15,2021</h4>
          </Name>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/jobcenter/programcordinator")}>
            Job Details
          </Button>
        </Job>
        <hr />
        <Job>
          <Name>
            <h3>Data Analyst</h3>
            <h4>Posted on october 15,2021</h4>
          </Name>
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/jobcenter/dataanalyst")}>
            Job Details
          </Button>
        </Job>
        <hr />
      </Jobs>
      <Footer />
    </JobCenterContainer>
  );
};

export default withRouter(JobCenter);

const JobCenterContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/04/brooke-cagle-RnDGGnMEOao-unsplash-e1619811004336.jpg");
  height: 60vh;
  background-size: cover;
  background-position: 50% 30%;
  h1 {
    padding-top: 5%;
    color: #fff;
    padding-left: 10%;
    font-size: 300%;
  }
  @media screen and (max-width: 768px) {
    height: 40vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 50vh;
  }
`;
const Offer = styled.div`
  position: relative;
  margin-top: 13%;
  background: #f7902e;
  height: 55vh;
  h2 {
    text-align: center;
    color: #fff;
    font-size: 170%;
    padding-top: 10%;
    padding-right: 15%;
    padding-left: 15%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 40%;
    height: 40vh;
    h2 {
      font-size: 150%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 20vh;
    margin-top: 25%;
  }
`;
const OfferSvg = styled.div`
  position: absolute;
  top: 85%;
  @media screen and (max-width: 768px) {
    top: 14%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: 63%;
  }
`;
const Jobs = styled.div`
  h2 {
    padding-top: 5%;
    text-align: center;
    font-size: 300%;
    padding-bottom: 5%;
  }
  hr {
    margin-bottom: 7%;
    margin-top: 1%;
    color: #ccccd7;
    margin-left: 5%;
    margin-right: 5%;
  }
  @media screen and (max-width: 768px) {
    h2 {
      padding-top: 15%;
      padding-bottom: 15%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h2 {
      padding-top: 20%;
    }
  }
`;

const Job = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;

  h3 {
    text-align: left;
    font-size: 150%;
    color: #333;
  }
  h4 {
    padding-top: 2%;
    color: #ccccd7;
    font-weight: 500;
    font-size: 120%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    h4 {
      padding-bottom: 3%;
    }
  }
`;

const Name = styled.div``;

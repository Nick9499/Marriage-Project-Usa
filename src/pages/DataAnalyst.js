import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import {
  CalendarToday,
  FlightOutlined,
  LocationOnOutlined,
  WorkOutline,
} from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DataAnalyst = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <DataAnalystContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h2>Job Center</h2>
        <h1>Data Analyst</h1>
        <Button variant='contained' color='primary'>
          Apply Now
        </Button>
      </Banner>
      <Desc>
        <Point>
          <PointOne>
            <span>
              <CalendarToday />
              <h5>October 15, 2021</h5>
            </span>
            <span>
              <WorkOutline />
              <h5>Full-Time</h5>
            </span>
            <span>
              <LocationOnOutlined />
              <h5>Southlake, TX</h5>
            </span>
            <span>
              <FlightOutlined />
              <h5>20%</h5>
            </span>
          </PointOne>
          <PointDesc>
            <h3>Marriage Project Partner</h3>
            <p>
              Founded in Southlake, Texas, Marriage Project is a non-profit
              organization dedicated to helping couples improve their marriages.
              Marriage Project's aim is to raise marriage rates, reduce divorce
              rates, and create a generation of children who are prepared for
              success.
            </p>
          </PointDesc>
        </Point>
        <Info>
          <h2>Summary of Position</h2>
          <p>
            We are seeking a data analyst to join our team. It is expected that
            the candidate would have a good knowledge of data analytics.
          </p>
          <p>
            As a result, we're looking for someone who is extremely data-driven
            and has excellent analytical abilities.
          </p>
          <p className='p'>
            It is essential that the applicant be able to transform data into
            knowledge and knowledge into business choices. Someone is needed to
            assist in the development of analytical and reporting capabilities
            for our organization. They will be responsible for monitoring
            performance and quality control plans in order to find areas that
            may be improved.
          </p>
          <h2>Job Responsibilities</h2>
          <ul>
            <li>
              The ability to interpret data, evaluate outcomes using statistical
              methods, and offer continuous reports
            </li>
            <li>Model ideal inventory levels using forecasting models</li>
            <li>
              Optimize statistical efficiency and quality through the
              development and implementation of database systems, data gathering
              systems, data analytics, and other techniques.
            </li>
            <li>
              Acquire and preserve data from primary and secondary sources.
            </li>
            <li>
              In a data collection, identify, analyze, and interpret patterns or
              trends.
            </li>
            <li>Find and specify new possibilities for process improvement.</li>
            <li className='p'>
              3-5 times a year, you may need to travel inside and outside of the
              state.
            </li>
          </ul>
          <h2>General Skills & Qualifications</h2>
          <ul>
            <li>
              All sorts of conventional Salesforce development and modification
              are under my purview, including but not limited to: Coding, unit
              testing, developing apps, and establishing and changing existing
              applications are all part of this process.
            </li>
            <li>Experience as a data analyst that can be verified.</li>
            <li>
              If you have demonstrated talent in data science, you don't need a
              degree.
            </li>
            <li>
              Knowledge of data models, database architecture, and database
              mining techniques as well as data mining and segmentation
              techniques
            </li>
            <li>
              With a keen eye for detail, strong analytical abilities are
              required to gather, organize, analyze, and communicate large
              volumes of information accurately.
            </li>
            <li>
              Querying, producing reports, and presenting findings are among her
              strengths.
            </li>
            <li>The ability to fulfill deadlines and deadlines.</li>
            <li className='p'>
              The ability to communicate effectively, especially good phone
              etiquette.
            </li>
          </ul>
          <h2>General Physical Requirements</h2>
          <p>
            The physical requirements listed here are indicative of those that
            an employee must meet in order to properly execute the fundamental
            activities of the job. Regularly, the employee is expected to:
          </p>
          <ul>
            <li>Spend a long time sitting or standing.</li>
            <li>Kneel or crouch sporadically</li>
            <li>
              He/she must often lift and/or move up to 10 pounds and
              occasionally up to 50 pounds.
            </li>
            <p>*Other responsibilities may be allocated if necessary.*</p>
            <p className='p'>
              To apply for the role, email your resume to{" "}
              <a href='mailto:hr@xomarriage.com'>hr@xomarriage.com</a>{" "}
            </p>
          </ul>
        </Info>
      </Desc>
    </DataAnalystContainer>
  );
};

export default DataAnalyst;
const DataAnalystContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/04/brooke-cagle-RnDGGnMEOao-unsplash-e1619811004336.jpg");
  height: 70vh;
  background-size: cover;
  background-position: 50% 30%;
  @media screen and (max-width: 768px) {
    height: 35vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 30vh;
  }
`;

const Banner = styled.div`
  h2 {
    color: #ffd111;
    padding-top: 5%;
    padding-left: 7%;
    font-size: 200%;
  }
  h1 {
    color: #fff;
    padding-left: 7%;
    font-size: 400%;
    padding-top: 1%;
  }
  Button {
    margin-left: 7%;
    margin-top: 2%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      padding-bottom: 3%;
    }
    h2 {
      font-size: 150%;
    }
  }
`;
const Desc = styled.div`
  margin-top: 10%;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 7%;
  padding: 7%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
const Point = styled.div`
  display: grid;
`;

const PointOne = styled.div`
  span {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: -10%;
    h5 {
      font-size: 115%;
    }
    padding-bottom: 5%;
  }
  .MuiSvgIcon-root {
    font-size: 170%;
  }
  @media screen and (max-width: 768px) {
    span {
      grid-template-columns: 20% 80%;
      padding-bottom: 10%;
    }
  }
`;

const PointDesc = styled.div`
  h3 {
    padding-bottom: 10%;
  }
  @media screen and (max-width: 768px) {
    h3 {
      padding-top: 20%;
      padding-bottom: -5%;
    }
    p {
      padding-bottom: -10%;
    }
  }
`;
const Info = styled.div`
  h2 {
    padding-bottom: 2%;
  }
  .p {
    padding-bottom: 5%;
  }
  .ul {
    list-style-type: square;
    padding-left: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  @media screen and (max-width: 768px) {
    .ul {
    }
  }
`;

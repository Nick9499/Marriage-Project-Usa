import { Button } from "@material-ui/core";
import {
  CalendarToday,
  FlightOutlined,
  LocationOnOutlined,
  WorkOutline,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const ProgramCordinator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <ProgramCordinatorContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h2>Job Center</h2>
        <h1>Program Coordinator</h1>
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
          <p className='p'>
            Church Partnerships and the Events Team are in need of a Program
            Coordinator. This job works with the Church Partnership team and the
            Events team on planning, administrative details, and marketing
            initiatives.
          </p>
          <p className='p'>
            A very structured personality, this person is able to work well
            under high-pressure situations. They have outstanding communication
            skills and are well-versed in the non-profit and church sphere.
            Confident in their abilities, they are open to learning new things
            and are not afraid to take risks in their career. The candidate must
            be able to multitask, accomplish allocated tasks, and communicate
            progress as needed. A task-driven individual with excellent
            organizational abilities is needed.
          </p>
          <h2>Job Responsibility</h2>
          <ul>
            <li>
              Marriage Project Events are planned and executed by collaborating
              with the Event team.
            </li>
            <li>Maintains and maintains the Brushfire Event Pages.</li>
            <li>
              The Marriage Project connects with external venues and providers.
            </li>
            <li>
              Coordinates external speaking engagements for in-house speakers.
            </li>
            <li>
              Work with the Church team on planning, administrative support, and
              marketing activities for the Marriage Project Church Partnership
              Program.
            </li>
            <li>
              Eight to ten times every year, I must travel within and outside of
              the state of Washington.
            </li>
            <li className='p'>
              Whenever necessary, provides assistance in other areas
            </li>
          </ul>
          <h2>General Skill and Qualifications</h2>
          <ul>
            <li>The ability to fulfill deadlines and deadlines.</li>
            <li>
              The ability to communicate effectively, especially good phone
              etiquette.
            </li>
            <li>
              All event interactions must be conducted with professionalism.
            </li>
            <li>Positive mindset and problem-solving technique.</li>
            <li>
              The ability to remain calm and collected under high-stress
              situations.
            </li>
            <li>High levels of organization.</li>
            <li>Able to raise up to 50 pounds at a time.</li>
            <li>
              Computer literacy is second to none. (Mac OS, Gmail, Word, Excel,
              Slack, Google Docs, etc.)
            </li>
            <li className='p'>
              Education and/or experience are viewed as pluses, although they
              are not necessary.
            </li>
          </ul>
          <h2>General and Physical Requirements</h2>
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
          </ul>
          <p>*Other responsibilities may be allocated if necessary.*</p>
          <p className='p'>
            To apply for the role, email your resume to{" "}
            <a href='mailto:hr@xomarriage.com'>hr@xomarriage.com</a>{" "}
          </p>
        </Info>
      </Desc>
    </ProgramCordinatorContainer>
  );
};

export default ProgramCordinator;

const ProgramCordinatorContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/04/brooke-cagle-RnDGGnMEOao-unsplash-e1619811004336.jpg");
  height: 70vh;
  background-size: cover;
  background-position: 50% 30%;
  @media screen and (max-width: 768px) {
    height: 40vh;
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

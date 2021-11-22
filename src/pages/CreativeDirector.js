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

const CreativeDirector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((val) => !val);
  };
  return (
    <CreativeDirectorContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h2>Job Center</h2>
        <h1>Creative director</h1>
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
            A creative director will oversee and manage the Marriage Project
            team's creative efforts, including film production and graphic
            design as well as online and other technologies. The Marriage
            Project's creative director will set the tone for how the brand is
            used and executed throughout the business. To lead the team in
            brainstorming, implementation, and execution of ideas, it will be
            required to think creatively and come up with new ideas. As a
            storyteller, the Creative Director must be able to maintain a
            consistent brand message throughout all design, video, digital, and
            printed media. When it comes to accomplishing goals and executing on
            the vision they have acquired via meetings with leadership and other
            department heads, the creative director relies on the strength of
            their team.
          </p>
          <h2>Oversight Responsibilities</h2>
          <ul>
            <li>
              The team and individual team members meet weekly for check-ins.
            </li>
            <li>
              Check-in with other department heads on a weekly or bi-weekly
              basis
            </li>
            <ul className='ul'>
              <li>Marketing & Events</li>
              <li>Publishing</li>
              <li>Mediation</li>
            </ul>
            <li className='p'>
              Assign project workloads, monitor deadlines, and oversee the daily
              operations of the department. Workload, capacity, and abilities of
              the team will help you decide which projects to maintain in-house
              and which to contract out.
            </li>
          </ul>
          <h2>Creative Responsibilities</h2>
          <ul>
            <li>Conceptualize and execute the entire creative process.</li>
            <li>
              Marketing objectives should be translated into clear, innovative
              methods.
            </li>
            <li>
              Supervise pitches and proposals to the leadership and other
              departments in the organization.
            </li>
            <li>
              Next, provide feedback to the creative team, contractors, and
              other outside agencies.
            </li>
            <li>Keep up with the newest trends in creative design.</li>
            <li>
              Initiate gatherings for brainstorming and creative sessions.
            </li>
            <li className='p'>
              Check visual communication and brand guidelines to ensure they are
              being fulfilled.
            </li>
          </ul>
          <h2>Skills & Qualifications</h2>
          <ul>
            <li>
              Interpersonal skills, leadership abilities, and the capacity to
              motivate the creative team to perform their best.
            </li>
            <li>
              Communication abilities, both written and verbal, as well as
              presenting skills, are essential.
            </li>
            <li>
              Marriage Projects Vision and Mission should be clearly understood.
            </li>
            <li>
              Marketing & Events, Customer Service, and Marriage are examples of
              areas where creative roles are beneficial.
            </li>
            <li>Skills in managing projects and resources for mediators</li>
            <li className='p'>
              To address issues in fresh, creative, effective ways via the use
              of creativity
            </li>
          </ul>
          <h2>Experience</h2>
          <p className='p'>
            This applicant should have 5-8 years of experience working on and
            with creative teams that specialize in ministry-related work, as
            well as a knowledge of the business world and how working for a
            Christian non-profit organization differs from working for a church.
          </p>
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
    </CreativeDirectorContainer>
  );
};

export default CreativeDirector;

const CreativeDirectorContainer = styled.div`
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
    padding-left: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
  }
  @media screen and (max-width: 768px) {
    .ul {
    }
  }
`;

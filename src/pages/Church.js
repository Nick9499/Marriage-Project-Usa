import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";

const Church = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ChurchContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <h1>Churches</h1>
      <Simulcast>
        <h1>Simulcast</h1>
        <p>
          It's time for your community to host the world's largest marriage
          celebration. The Marriage Project Simulcast allows you to view the
          Marriage Project Conference live or on-demand and features fresh,
          inspiring information from today's most important marriage
          professionals.
        </p>
      </Simulcast>
      <Community>
        <h1>Marriage Project Now Community</h1>
        <p>
          Make the greatest marriage content available to every couple in your
          church or ministry. Create a robust, vibrant community that will have
          an influence on entire generations.
        </p>
      </Community>
      <Partners>
        <h1>Marriage Project Church Partners</h1>
        <p>
          We encourage healthy marriages in order to help congregations thrive.
          This is because the Marriage Project is the most effective
          marriage-focused organization. In order to maintain the church healthy
          into the next millennium, we must reestablish God centered marriages.
        </p>
      </Partners>
      <Wholesale>
        <h1>Wholesale</h1>
        <p>
          Your church, bookshop, small group, or company may benefit from
          Marriage Project Publishing's latest marriage materials by purchasing
          them. A variety of specialists and experienced leaders contribute to
          our leading material, which is designed to serve a wide audience by
          spreading the message of hope for marriage via many different voices.
        </p>
      </Wholesale>
      <Footer />
    </ChurchContainer>
  );
};

export default Church;

const ChurchContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/PHOTO-2021-02-12-17-00-10-4.jpg");
  background-size: cover;
  height: 90vh;
  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
    p {
      font-weight: normal;
    }
  }
`;
const Simulcast = styled.div`
  margin-top: 5%;
  position: relative;
  background-color: #fd1;
  height: 100;
  margin-top: 15%;
  h1 {
    color: #000;
    font-weight: 500;
    text-align: center;
    padding-bottom: 3%;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    padding-bottom: 5%;
    font-weight: bold;
    line-height: 200%;
  }
  @media screen and (max-width: 768px) {
  }
`;

const Community = styled.div`
  position: relative;

  z-index: 1;
  position: relative;
  padding-top: 10%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/couple.png");
  background-size: cover;
  height: 90vh;
  h1 {
    font-size: 300%;
    text-align: center;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 200%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
      margin-bottom: 5%;
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1365px) {
  }
`;

const Partners = styled.div`
  position: relative;
  background-color: #f93;
  h1 {
    font-size: 300%;
    text-align: center;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding-left: 10%;
    padding-right: 10%;
    line-height: 200%;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 200%;
    }
  }
`;

const Wholesale = styled(Partners)`
  background-color: #fff;
  h1,
  p {
    color: #000;
  }
`;

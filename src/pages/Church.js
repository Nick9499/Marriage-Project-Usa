import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import "./church.css";

const Church = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ChurchContainer>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Churches</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641648828">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
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
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641649200">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <Community>
        <h1>Marriage Project Now Community</h1>
        <p>
          Make the greatest marriage content available to every couple in your
          church or ministry. Create a robust, vibrant community that will have
          an influence on entire generations.
        </p>
      </Community>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641649664">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
      <Partners>
        <h1>Marriage Project Church Partners</h1>
        <p>
          We encourage healthy marriages in order to help congregations thrive.
          This is because the Marriage Project is the most effective
          marriage-focused organization. In order to maintain the church healthy
          into the next millennium, we must reestablish God centered marriages.
        </p>
      </Partners>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641651066">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"></path>
          </svg>
        </div>
      </section>
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
  /*  h1 {
    padding: 7%;
    font-size: 400%;
    color: #fff;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    h1 {
      padding-top: 100px;
      font-size: 300%;
    }
    p {
      font-weight: normal;
    }

    @media screen and (max-width: 1365px) and (min-width: 769px) {
      h1 {
        padding-top: 100px;
      }
    }
  } */
`;
const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/05/PHOTO-2021-02-12-17-00-10-4.jpg");
  background-size: cover;
  background-position: 50% 50%;
  height: 400px;
  h1 {
    padding-left: 7%;
    padding-top: 100px;
    font-size: 400%;
    color: #fff;
    font-weight: 600;
  }
  @media screen and (max-width: 768px) {
    height: 300px;
    h1 {
      font-size: 300%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1365px) {
    height: 350px;
    h1 {
      padding-top: 150px;
    }
  }
`;
const Simulcast = styled.div`
  position: relative;
  background-color: #fd1;
  height: 250px;

  h1 {
    color: #000;
    font-weight: 600;
    text-align: center;
    padding-bottom: 3%;
    font-size: 400%;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    text-align: center;
    padding-bottom: 5%;
    font-weight: 400;
    line-height: 200%;
    font-size: 120%;
  }
  @media screen and (max-width: 768px) {
    height: 350px;
    h1 {
      font-size: 200%;
    }
  }
`;

const Community = styled.div`
  position: relative;

  position: relative;
  padding-top: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/couple.png");
  background-size: cover;
  height: 500px;
  h1 {
    color: #fff;
    font-size: 300%;
    text-align: center;
    font-weight: 600;
    padding-bottom: 40px;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 120%;
    color: #fff;
    padding-left: 20%;
    padding-right: 20%;
    line-height: 200%;
  }
  @media screen and (max-width: 768px) {
    height: 700px;
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
    font-weight: 600;
    color: #fff;
    padding-bottom: 50px;
  }
  p {
    text-align: center;
    font-weight: 400;
    font-size: 120%;
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
  margin-top: 100px;
  background-color: #fff;
  h1 {
    font-weight: 600;
  }
  h1,
  p {
    color: #000;
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    font-size: 120%;
  }
`;

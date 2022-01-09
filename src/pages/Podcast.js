import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import "./podcast.css";

const Podcast = () => {
  const url = `https://cdn.contentful.com/spaces/nxaaw3hc8jri/environments/master/entries?access_token=B7oUkHVltX7AD4UqADE5our_k21roblLdzizAWczntE`;
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data.items);
      setData(res.data.items);
    });
  }, [url]);
  return (
    <PodcastContainer>
      <Banner>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isOpen={isOpen} />
        <h1>Podcast</h1>
      </Banner>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-bottom-1641663380">
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
      <PodcastSection>
        <h1>Marriage Project Podcast Network</h1>
        <h2>
          Listen to weekly relationship advice from leading marriage experts!
        </h2>
      </PodcastSection>
      <section style={{ position: "relative" }}>
        <div className="custom-shape-divider-top-1641663448">
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
      <PodcastCardContainer>
        {data &&
          data.map((item, index) => (
            <PodcastCard key={index}>
              <a href={item.fields.url} target="_blank" rel="noreferrer">
                <img src={item.fields.image} alt={item.fields.name} />
              </a>
              <h2>{item.fields.name}</h2>
            </PodcastCard>
          ))}
      </PodcastCardContainer>
      <Footer />
    </PodcastContainer>
  );
};

export default Podcast;

const PodcastContainer = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/02/network.jpg");
  background-size: cover;
  height: 400px;
  h1 {
    color: #fff;
    font-weight: 500;
    padding-left: 10%;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    background-size: 100% 100%;
    height: 350px;
    h1 {
      font-weight: 600;
      font-size: 250%;
      padding-top: 100px;
      padding-left: 10%;
      padding-bottom: 20%;
    }
  }
`;
const PodcastSection = styled.div`
  background-color: #087dc2;
  height: 200px;

  h1 {
    color: #fff;
    padding-top: 5%;
    padding-bottom: 1%;
    text-align: center;
    font-weight: 500;
    font-size: 250%;
  }

  h2 {
    color: #fff;
    padding-top: 2%;
    padding-bottom: 10%;
    text-align: center;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    height: 160px;
    h1 {
      font-weight: 600;
      padding-top: 10%;
      font-size: 150%;
    }
    h2 {
      font-size: 120%;
      padding-bottom: 20%;
    }
  }
`;

const PodcastCardContainer = styled.div`
  height: 100%;
  padding: 10%;
  padding-top: 150px;

  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    margin-bottom: 250%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 50% 50%;
    padding: 8%;
    margin-bottom: 30%;
    padding-top: 200px;
  }
`;
const PodcastCard = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    padding-bottom: 3%;
    box-shadow: 0 0 45px rgb(0 0 0 / 15%);
  }
  h2 {
    font-size: 150%;
  }
`;

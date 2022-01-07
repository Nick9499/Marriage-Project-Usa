import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Podcast = () => {
  const url = `https://cdn.contentful.com/spaces/nxaaw3hc8jri/environments/master/entries?access_token=B7oUkHVltX7AD4UqADE5our_k21roblLdzizAWczntE`;
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
      <PodcastSection>
        <h1>The Marriage Project Partner Podcast Network</h1>
        <h2>
          Listen to weekly relationship advice from leading marriage experts!
        </h2>
      </PodcastSection>
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
  height: 100%;
  h1 {
    color: #fff;
    font-weight: 500;
    padding-left: 10%;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 400%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      padding-top: 20%;
      padding-left: 10%;
      padding-bottom: 20%;
    }
  }
`;
const PodcastSection = styled.div`
  background-color: #087dc2;
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
  }
  @media screen and (max-width: 768px) {
    h1 {
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

  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    margin-bottom: 250%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 50% 50%;
    padding: 8%;
    margin-bottom: 30%;
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

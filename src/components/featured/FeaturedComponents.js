import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const FeaturedComponents = () => {
  return (
    <Featured>
      <Image>
        <img
          src="https://xomarriage.com/wp-content/uploads/2021/06/82056207_2643171862597705_7871141531199995904_n-1.jpg"
          alt="img3"
        />
      </Image>
      <Content>
        <h1>Featured Story</h1>
        <h2>The Marriage Project Story: Dry Bones</h2>
        <p>
          Kevin and Barbara have been married almost 32 years, but the cracks in
          their marriage started around year 23. After about two years, those
          cracks culminated into a crisis in their marriage and ministry.
        </p>
        <p>
          Read about how a vision retreat and XO resources helped Kevin and
          Barbara restore their marriage, and how they continue to use their
          story to help other couples.
        </p>
        <ButtonGroup variant="contained" color="primary">
          <Button>READ MORE</Button>
          <Button>VIEW ALL STORIES</Button>
        </ButtonGroup>
      </Content>
    </Featured>
  );
};

export default FeaturedComponents;

const Featured = styled.div`
  height: 130%;
  /* position: relative; */
  padding: 10%;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 5%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    height: 170%;
  }
`;

const Image = styled.div`
  img {
    width: 90%;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 400%;
  }
  h2 {
    margin-top: 7%;
    font-size: 200%;
  }
  p {
    margin-top: 7%;
    margin-bottom: 5%;
    font-weight: bold;
    line-height: 240%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
    }
    h2 {
      font-size: 150%;
    }
  }
  margin-bottom: 10%;
`;

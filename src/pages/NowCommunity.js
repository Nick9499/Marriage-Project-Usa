import { Done } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const NowCommunity = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NowCommunityContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Banner>
        <h2>Now</h2>
        <h1>Marriage Project Now Community</h1>
        <BannerSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 685L38 680.3C76 675.7 152 666.3 227.8 664.7C303.7 663 379.3 669 455.2 673.3C531 677.7 607 680.3 683 684.5C759 688.7 835 694.3 910.8 699.2C986.7 704 1062.3 708 1138.2 706.7C1214 705.3 1290 698.7 1328 695.3L1366 692L1366 769L1328 769C1290 769 1214 769 1138.2 769C1062.3 769 986.7 769 910.8 769C835 769 759 769 683 769C607 769 531 769 455.2 769C379.3 769 303.7 769 227.8 769C152 769 76 769 38 769L0 769Z'
              fill='#ffd111'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </BannerSvg>
      </Banner>
      <Growing>
        <h3>
          Revitalize your church, organization or community's marriages by
          starting a revolution!
        </h3>
        <GrowC>
          <GrowImage>
            <img
              src='https://xomarriage.com/wp-content/uploads/2020/11/XO-community.png'
              alt='img'
            />
          </GrowImage>
          <GrowContent>
            <h1>Every Marriage Growing</h1>
            <p>
              Make the greatest marriage information available to every couple
              in your church or ministry! Create a robust, vibrant community
              that will have a lasting influence on future generations.
            </p>
          </GrowContent>
        </GrowC>
        <GrowSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 88L38 88.8C76 89.7 152 91.3 227.8 84.2C303.7 77 379.3 61 455.2 57.5C531 54 607 63 683 70.2C759 77.3 835 82.7 910.8 87.2C986.7 91.7 1062.3 95.3 1138.2 92C1214 88.7 1290 78.3 1328 73.2L1366 68L1366 0L1328 0C1290 0 1214 0 1138.2 0C1062.3 0 986.7 0 910.8 0C835 0 759 0 683 0C607 0 531 0 455.2 0C379.3 0 303.7 0 227.8 0C152 0 76 0 38 0L0 0Z'
              fill='#ffd111'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </GrowSvg>
      </Growing>
      <Learning>
        <LearningContent>
          <h1>Every Marriage Learning</h1>
          <p>
            Marriage Project Now Groups, Courses, Past Marriage Project Now
            Conferences, Jimmy Evans' Marriage Series, and the full Marriage
            Project Now Library with over 600 videos from 60+ marriage teachers
            are all included. In addition, fresh information is released every
            single month.
          </p>
          <p>
            Your marriage group can begin as soon as today! Your homegroup,
            church staff, marital ministry, small groups leaders, or your entire
            church may get Marriage Project Now at a discounted cost.
          </p>
        </LearningContent>
        <LearningImage>
          <img
            src='https://xomarriage.com/wp-content/uploads/2021/02/d-a.jpg'
            alt='img'
          />
        </LearningImage>
        <LearningSvg>
          <svg
            id='visual'
            viewBox='0 0 1366 768'
            width='100%'
            height='768'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <path
              d='M0 726L32.5 720C65 714 130 702 195 692.7C260 683.3 325 676.7 390 674.2C455 671.7 520 673.3 585.2 676.2C650.3 679 715.7 683 780.8 689.8C846 696.7 911 706.3 976 709.8C1041 713.3 1106 710.7 1171 700.8C1236 691 1301 674 1333.5 665.5L1366 657L1366 769L1333.5 769C1301 769 1236 769 1171 769C1106 769 1041 769 976 769C911 769 846 769 780.8 769C715.7 769 650.3 769 585.2 769C520 769 455 769 390 769C325 769 260 769 195 769C130 769 65 769 32.5 769L0 769Z'
              fill='#9a5b9f'
              stroke-linecap='round'
              stroke-linejoin='miter'
            ></path>
          </svg>
        </LearningSvg>
      </Learning>
      <Groups>
        <h1>Build Marriage Small Groups</h1>
        <p>
          Marriage Project Now Groups and all of the wonderful marriage-building
          information on Marriage Project Now may help you start marriage groups
          in your church.
        </p>
        <p>
          An easy-to-use interactive study guide and weekly group videos from
          the Marital Project Now app comprise each marriage small-group
          experience.
        </p>
        <GroupContent>
          <Discussion>
            <img
              src='https://xomarriage.com/wp-content/uploads/2021/01/mariage-300x189.png'
              alt='img'
            />
            <h2>Discussion Guide</h2>
            <p>
              Redesigned interactive study guide to support couples on their own
              journeys and to offer a secure space for husbands and wives to
              talk and share.
            </p>
            <p>
              <span>
                <Done /> Simple:
              </span>
              Sessions that are easy on the leader and promote a lively exchange
              of thoughts. A Sample Session may be downloaded here.
            </p>
            <p>
              <span>
                <Done /> Real-Life Activation:
              </span>
              Healthy marriages need "real" commitment. Couples can put what
              they've learned into practice.
            </p>
            <p>
              <span>
                <Done />
                Consistency:
              </span>
              For ease of use, each discussion guide follows the same format.
            </p>
          </Discussion>
          <Videos>
            <img
              src='https://xomarriage.com/wp-content/uploads/2020/11/watching-300x209.png'
              alt='img'
            />
            <h2>Marriage Project Now Videos</h2>
            <p>
              Marriage Project Now provides organizations with on-demand films
              that were developed specifically for them. Hear from writers and
              marital specialists as they talk from the heart of their
              experiences.
            </p>
            <p>
              <span>
                <Done /> Relevant:
              </span>
              Give group leaders something they can truly use instead of DVDs.
            </p>
            <p>
              <span>
                <Done />
                Community Anywhere:
              </span>
              Stream the videos on a TV or computer or mobile device (iPad, iPad
              mini, iPhone). Wherever there are people, there may be groups.
            </p>
            <p>
              <span>
                <Done /> Easy Adminitstration:
              </span>
              Group leaders log in using a code. DVDs will no longer be
              distributed.
            </p>
          </Videos>
        </GroupContent>
      </Groups>
    </NowCommunityContainer>
  );
};

export default NowCommunity;

const NowCommunityContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2021/01/couple.png");
  background-size: cover;
  height: 65vh;
  @media screen and (max-width: 768px) {
    background-size: 100% 63%;
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 30vh;
  }
`;

const Banner = styled.div`
  position: relative;
  height: 50vh;

  h2 {
    color: #ffd111;
    font-size: 200%;
    padding-left: 7%;
    padding-top: 3%;
    padding-bottom: 2%;
  }
  h1 {
    color: #fff;
    font-size: 300%;
    padding-left: 7%;
  }
  @media screen and (max-width: 768px) {
    height: 30vh;
    h1 {
      font-size: 220%;
    }
    h2 {
      font-size: 150%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 22vh;
  }
`;
const BannerSvg = styled.div`
  position: absolute;
  padding: 0 !important;
  top: -120%;
  @media screen and (max-width: 768px) {
    top: -100%;
  }
`;

const Growing = styled.div`
  position: relative;
  background-color: #ffd111;
  height: 96vh;
  h3 {
    text-align: center;
    font-size: 150%;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    height: 85vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h3 {
      padding: 7%;
      font-size: 200%;
    }
    height: 50vh;
  }
`;
const GrowC = styled.div`
  padding: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    gap: 5%;
  }
`;
const GrowImage = styled.div`
  img {
    width: 100%;
  }
`;

const GrowContent = styled.div`
  h1 {
    font-weight: 1000;
    font-size: 350%;
    padding-bottom: 7%;
  }
  p {
    font-weight: 500;
    line-height: 150%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
    }
  }
`;
const GrowSvg = styled.div`
  z-index: 1000;
  position: absolute;
  top: 98%;
  @media screen and (max-width: 768px) {
    top: 59%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: 82%;
  }
`;
const Learning = styled.div`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url("https://xomarriage.com/wp-content/uploads/2020/11/podcasts-phone.png");
  background-size: cover;
  height: 110vh;
  padding: 5%;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    height: 130vh;
    gap: 0;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    grid-template-columns: 30% 70%;
    gap: 9%;
    height: 70vh;
  }
`;
const LearningContent = styled.div`
  h1 {
    padding-top: 5%;
    color: #fff;
    font-size: 400%;
    padding-bottom: 7%;
  }
  p {
    color: #fff;
    font-weight: 500;
    line-height: 200%;
    padding-bottom: 5%;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      padding-bottom: 15%;
    }
    p {
      padding-bottom: 5%;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    h1 {
      padding-bottom: 15%;
    }
  }
`;
const LearningImage = styled.div`
  img {
    margin-top: 15%;
    width: 100%;
    border-radius: 10px;
  }
  @media screen and (max-width: 768px) {
    img {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    width: 90%;
    margin-top: 20%;
  }
`;
const LearningSvg = styled.div`
  position: absolute;
  top: -5%;
  @media screen and (max-width: 768px) {
    top: 54%;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    top: 30%;
  }
`;
const Groups = styled.div`
  background-color: #9a5b9f;
  height: 80vh;
  padding: 5%;

  h1 {
    color: #fff;
    text-align: center;
    font-size: 350%;
    padding-bottom: 5%;
  }
  p {
    color: #fff;
    padding-right: 10%;
    padding-left: 10%;
    padding-bottom: 3%;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 250%;
      padding-bottom: 10%;
    }
    p {
      text-align: center;
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 10%;
    }
    height: 50vh;
  }
  @media screen and (max-width: 1365px) and (min-width: 1024px) {
    height: 35vh;
  }
`;
const GroupContent = styled.div`
  padding-top: 5%;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    padding-top: 10%;
  }
`;
const Discussion = styled.div`
  img {
    width: 80%;
  }
  p {
    text-align: left;
    color: #000;
    font-weight: 500;
    span {
      font-weight: bold;
      color: #f16d79;
      font-size: 120%;
      .MuiSvgIcon-root {
      }
    }
  }
  h2 {
    padding-top: 9%;
    text-align: center;
    font-size: 250%;
    padding-bottom: 7%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;
const Videos = styled.div`
  img {
    width: 80%;
  }
  p {
    text-align: left;
    color: #000;
    font-weight: 500;
    span {
      font-weight: bold;
      color: #f16d79;
      font-size: 120%;
    }
  }
  h2 {
    padding-top: 2%;
    text-align: center;
    font-size: 250%;
    padding-bottom: 7%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 100%;
    }
  }
`;

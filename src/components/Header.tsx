import React from "react";
import styled from "styled-components";
import Card from "./Cards";
import { data, icons } from "../data/data";
import { GridFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  @media only screen and (max-width: 768px) {
    height: 700px;
  }
  position: relative !important;
  background-position: center !important;
  background: #0a0328
    url("https://sokanacademy.com/_nuxt/img/header-background.c56cb47.jpg")
    no-repeat fixed center !important;
  background-size: cover;
  height: 600px;
  &::before {
    background: #0b032d;
    opacity: 0.85;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    left: 0;
    content: " ";
  }
  @media only screen and (min-width: 1150px) {
    border-bottom-left-radius: 30%;
    &::before {
      border-bottom-left-radius: 30%;
    }
    height: 500px;
  }
`;

const CradContainerHeader = styled.section`
  @media only screen and (max-width: 991px) {
    top: 3%;
  }
  overflow-x: auto;
  position: absolute;
  top: 10%;
  right: 0;
  left: 0;
  margin: 0.5rem;
  padding: 0.5rem;
  &::-webkit-scrollbar {
    display: none !important;
  }
  & {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
  }
`;

const CradGlassContainer = styled.section`
  @media only screen and (max-width: 768px) {
    top: 35%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1150px) {
    top: 45% !important;
  }
  display: flex !important;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: 60%;
  left: 0;
  right: 0;
`;

const HeaderLinkContainer = styled.div`
  @media only screen and (max-width: 460px) {
    top: 36%;
    border-radius: 0;
  }
  @media only screen and (min-width: 461px) and (max-width: 768px) {
    top: 32%;
    border-radius: 0;
  }
  @media only screen and (min-width: 769px) and (max-width: 1150px) {
    top: 23% !important;
    border-radius: 0;
  }
  border-bottom-left-radius: 8%;
  background: #f2f2f2;
  height: 550px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
  margin-bottom: 300px;
  top: 6%;

  .headerLinks {
    display: flex;
    justify-content: space-evenly;
    text-align: -webkit-center;
    & a {
      @media only screen and (max-width: 768px) {
        width: 100px !important;
      }
      font-size: 14px;
      color: #0b032d !important;
      width: 135px;
      transition: font-weight ease !important;
      &:hover {
        font-weight: 700;
      }
      & svg {
        display: inline;
        transition: 0.2s;
        @media only screen and (max-width: 768px) {
          display: block;
          text-align: center;
        }
      }
      &:hover svg {
        transform: scale(1.1);
      }
    }
  }
`;

export default function HomePage() {
  return (
    <div>
      <div
        className="relative rounded-full z-10"
        style={{ backgroundColor: "#f2f2f2" }}
      >
        <HeaderContainer>
          <CradContainerHeader>
            <div
              style={{
                display: "flex",
                minWidth: 800,
                justifyContent: "center",
              }}
            >
              {data.map((i, index) => (
                <Card key={index}>
                  <h6>{i.title}</h6>
                  {i.icon}
                  <p>{i.description}</p>
                </Card>
              ))}
            </div>
          </CradContainerHeader>
          <CradGlassContainer>
            <Card type="glass">
              <p className="cardParagraph">آموزش ردیس</p>
              <img
                src="https://fs.sokanacademy.com/api/files?token=app/courses/X8FefLxgRBqwM6P0PiOO2MKA3vREEejqOK8X3WKD"
                alt="img"
                className="cardImage"
              />
              <div className="cardFooter">
                <div className="cardFooterAuhter">
                  <img
                    src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
                    alt="user-icon"
                    className="cardImageIcon"
                  />
                  <p>تیم تولید محتوا سکان آکادمی </p>
                </div>
                <div className="cardFooterIcon">
                  <GridFill />
                  <p> وردپردس مقدماتی</p>
                </div>
              </div>
            </Card>
            <Card type="glass">
              <img
                src="https://fs.sokanacademy.com/api/files?token=app/statics/N0w6Ks7xxsI8AFvupWUGpWCoEg91lCUYc9e5MRVD"
                alt="alt"
                className="h-fit"
              />
            </Card>
            <Card type="glass">
              <p className="cardParagraph">آموزش ویو جی اس</p>
              <img
                src="https://fs.sokanacademy.com/api/files?token=app/courses/RT9zjJmTKnNtVPaxARJFmRFTwGu87jAnXzhGqxGG"
                alt="img"
                className="cardImage"
              />
              <div className="cardFooter">
                <div className="cardFooterAuhter">
                  <img
                    src="https://sokanacademy.com/imgs/fallbacks/fallback-user.jpg"
                    alt="user-icon"
                    className="cardImageIcon"
                  />
                  <p>بهزاد مردادی</p>
                </div>
                <div className="cardFooterIcon">
                  <GridFill />
                  <p>آموزش ویو جی اس مقدماتی</p>
                </div>
              </div>
            </Card>
          </CradGlassContainer>
        </HeaderContainer>
        <HeaderLinkContainer>
          <div className="absolute bottom-1.5 md:bottom-5 right-0 left-0">
            <div className="headerLinks">
              <Link to="/">
                {icons[0]} <span>آکادمی</span>
              </Link>
              <Link to="/">
                {icons[1]} <span>وبلاگ</span>
              </Link>
              <Link to="/">
                {icons[2]} <span>سکان پلاس</span>
              </Link>
              <Link to="/">
                {icons[3]} <span>رادیو فول استک</span>
              </Link>
              <Link to="/">
                {icons[4]} <span>فن واژه</span>
              </Link>
            </div>
          </div>
        </HeaderLinkContainer>
      </div>
    </div>
  );
}

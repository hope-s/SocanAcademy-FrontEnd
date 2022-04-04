import React from "react";
import styled from "styled-components";
import Card from "./Cards";
import { data } from "../data/data";
import { GridFill } from "react-bootstrap-icons";

const HeaderContainer = styled.div`
  position: relative !important;
  background-position: center !important;
  background: #0a0328
    url("https://sokanacademy.com/_nuxt/img/header-background.c56cb47.jpg")
    no-repeat fixed center !important;
  background-size: cover;
  height: 700px;
  &::before {
    background: #0b032d;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    left: 0;
    content: " ";
  }
  @media only screen and (min-width: 991px) {
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
    -ms-overflow-style: none !important; /* IE and Edge */
    scrollbar-width: none !important; /* Firefox */
  }
`;

const CradGlassContainer = styled.section`
  @media only screen and (max-width: 991px) {
    top: 35%;
  }
  display: flex !important;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  top: 60%;
  left: 0;
  right: 0;
`;

export default function HomePage() {
  return (
    <div className="relative">
      <HeaderContainer>
        <CradContainerHeader>
          <div
            style={{ display: "flex", minWidth: 800, justifyContent: "center" }}
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
    </div>
  );
}

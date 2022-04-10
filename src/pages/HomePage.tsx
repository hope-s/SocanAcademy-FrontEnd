import React, { Fragment } from "react";
import Header from "../components/Header";
import HeaderSvg from "../assets/images/header-svg.svg";
import styled from "styled-components";
import LandingIntroCards from "../components/LandingIntroCards";
import CardPosts from "../components/CardPosts";

const HeaderSecetion = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  display: flex;
  justify-content: center;
  & h4 {
    margin-top: 0.75rem;
    margin-right: -25px;
    font-weight: bold;
  }
`;

export default function HomePage() {
  return (
    <Fragment>
      <Header />
      <main className="overflow-hidden">
        <HeaderSecetion>
          <img src={HeaderSvg} alt="header-bg" width="45" height="45" />
          <h4>آموزش با سکان آکادمی</h4>
        </HeaderSecetion>
        <LandingIntroCards />
        <CardPosts/>
      </main>
    </Fragment>
  );
}

import React from "react";
import Header from "../../sections/app/Header";
import LandingIntroCards from "../../sections/app/LandingIntroCards";
import CardPosts from "../../sections/app/CardPosts";
import TitleSection from "../../sections/app/TitleSection";
import Page from "../../components/Pages";
import { Container } from "react-grid-system";

export default function HomePage() {
  return (
    <Page title="خانه">
      <Header />
      <main className="max-width mx-auto">
        <Container>
          <TitleSection marginTop="2rem" title="آموزش با سکان آکادمی" />
          <LandingIntroCards />
          <CardPosts />
          <TitleSection marginTop="2rem" title="پادکست با سکان آکادمی" />
        </Container>
      </main>
    </Page>
  );
}

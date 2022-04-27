import React from "react";
import Header from "../../sections/app/Header";
import LandingIntroCards from "../../sections/app/IntroCards";
import CardPosts from "../../sections/app/CardPosts";
import Title from "../../sections/app/Title";
import Page from "../../components/Pages";
import CardEpisodes from "../../sections/app/CardExpisods";
import PodcastPlayCard from "../../sections/app/cards/PodcastPlayCard";
import SocanPLusCard from "../../sections/app/cards/SocanPlusCard";

export default function HomePage() {
  return (
    <Page title="سکان | خانه">
      <Header />
      <main className="px-4 md:px-0">
        <Title type="img" mt="2rem" title="آموزش با سکان آکادمی" />
        <LandingIntroCards />
        <CardPosts />
        <Title type="img" mt="2rem" title="پادکست با سکان آکادمی" />
        <CardEpisodes />
        <PodcastPlayCard title="رادیو فول استک" />
        <Title
          type="img"
          mt="2rem !important"
          title="انتشار محتوای شما در سکان آکادمی"
        />
        <SocanPLusCard title="سکان  پلاس" />
      </main>
    </Page>
  );
}

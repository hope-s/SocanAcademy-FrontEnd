import React from "react";
import Header from "../../sections/app/Header";
import LandingIntroCards from "../../sections/app/IntroCards";
import CardPosts from "../../sections/app/CardPosts";
import TitleSection from "../../sections/app/TitleSection";
import Page from "../../components/Pages";
import CardEpisodes from "../../sections/app/CardExpisods";
import PodcastPlayCard from "../../sections/app/PodcastPlayCard";

export default function HomePage() {
  return (
    <Page title="خانه">
      <Header />
      <main className="px-3 md:px-0">
        <TitleSection type="img" mt="2rem" title="آموزش با سکان آکادمی" />
        <LandingIntroCards />
        <CardPosts />
        <TitleSection type="img" mt="2rem" title="پادکست با سکان آکادمی" />
        <CardEpisodes />
        <PodcastPlayCard title="رادیو فول استک" />
        <TitleSection
          type="img"
          mt="1rem"
          title="انتشار محتوای شما در سکان آکادمی"
        />
      </main>
    </Page>
  );
}

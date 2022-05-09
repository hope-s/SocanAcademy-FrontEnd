import React from "react";
import Header from "../../sections/app/Header";
import LandingIntroCards from "../../sections/app/LandingIntroCards";
import CardPosts from "../../sections/app/CardPosts";
import Title from "../../components/Title";
import Page from "../../components/Pages";
import CardEpisodes from "../../sections/app/CardExpisods";
import PodcastPlayCard from "../../sections/app/cards/PodcastPlayCard";
import SocanPLusCard from "../../sections/app/cards/SocanPlusCard";
import LandingPlusess from "../../sections/app/LandingPlusess";
import LandingMostPapular from "../../sections/app/LandingMostPapular";
import FavoriteCategory from "../../sections/app/FavoriteCategory";
import Footer from "../../layout/Footer";

export default function HomePage() {
  return (
    <Page title="سکان آکادمی | خانه">
      <Header />
      <main className="px-4 md:px-0">
        <Title iconType="image" mt="2rem" title="آموزش با سکان آکادمی" />
        <LandingIntroCards />
        <CardPosts />
        <Title iconType="image" mt="2rem" title="پادکست با سکان آکادمی" />
        <CardEpisodes />
        <PodcastPlayCard title="رادیو فول استک" />
        <Title
          iconType="image"
          mt="2rem !important"
          title="انتشار محتوای شما در سکان آکادمی"
        />
        <SocanPLusCard title="سکان  پلاس" />
        <LandingPlusess title="قلم های داغ به انتخاب سردبیر" />
        <Title
          iconType="image"
          mt="2rem !important"
          title="محبوب ترین در این ماه"
        />
        <LandingMostPapular />
        <FavoriteCategory title="دسته بندی های محبوب این ماه" />
      </main>
      <Footer />
    </Page>
  );
}

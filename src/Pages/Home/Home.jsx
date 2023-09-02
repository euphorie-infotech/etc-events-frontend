import React from "react";
import VideoHeader from "./partials/VideoHeader";
import AboutUs from "./partials/AboutUs";
import GetStarted from "./partials/GetStarted";
import UpcomingEvents from "./partials/UpcomingEvents";
import NewsMedia from "./partials/NewsMedia";

const Home = () => {
  return (
    <>
      <VideoHeader />
      <UpcomingEvents />
      <AboutUs />
      <NewsMedia />
      <GetStarted />
    </>
  );
};

export default Home;

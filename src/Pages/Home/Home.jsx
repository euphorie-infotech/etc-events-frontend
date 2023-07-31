import React from "react";
import VideoHeader from "./partials/VideoHeader";
import AboutUs from "./partials/AboutUs";
import GetStarted from "./partials/GetStarted";
import UpcomingEvents from "./partials/UpcomingEvents";

const Home = () => {
  return (
    <>
      <VideoHeader />
      <UpcomingEvents />
      <AboutUs />
      <GetStarted />
    </>
  );
};

export default Home;

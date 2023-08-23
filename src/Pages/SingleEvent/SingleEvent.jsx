import React from "react";
import EventHeader from "./partials/EventHeader";
import EventDetails from "./partials/EventDetails";
import LineUps from "./partials/LineUps";
import Contest from "./partials/Contest";

const SingleEvent = () => {
  return (
    <>
      <EventHeader />
      <EventDetails />
      <LineUps />
      <Contest />
    </>
  );
};

export default SingleEvent;

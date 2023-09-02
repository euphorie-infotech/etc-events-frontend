import React from "react";
import eventHeader from "../../../assets/events/facebook-cover-2.jpg";

const EventHeader = () => {
  return (
    <section className="h-[50vh] lg:h-[75vh] relative border-b border-white">
      <img src={eventHeader} alt="eventHeader" className="w-full h-full" />
      {/* <div className="absolute inset-0 bg-black bg-opacity-0"></div> */}
    </section>
  );
};

export default EventHeader;

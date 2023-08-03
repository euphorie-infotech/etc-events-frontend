import React from "react";
import EventsCard from "./EventsCard";

const UpcomingEvents = ({ className }) => {
  return (
    <section
      className={`bg-events bg-cover bg-center w-screen relative ${className}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative flex flex-col items-center p-10 lg:p-20 ">
        <h1 className="text-4xl lg:text-7xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300 text-white">
          Upcoming Events
        </h1>
        <div className="flex flex-wrap justify-center items-center w-full md:px-10 lg:px-20 py-10">
          <EventsCard />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

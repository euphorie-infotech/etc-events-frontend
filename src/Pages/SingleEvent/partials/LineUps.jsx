import React from "react";
import lineUp1 from "../../../assets/events/james-2.jpg";

const LineUps = () => {
  return (
    <section className="bg-getStarted bg-cover bg-center relative p-20">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <h1 className="text-7xl font-nasalization text-white text-center relative">
        Event Lineups
      </h1>
      <div className="flex flex-wrap justify-center items-center px-20 py-10 relative">
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
        <div className="basis-1/4 p-3 relative">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <img src={lineUp1} alt="line up 1" className="w-72 rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default LineUps;

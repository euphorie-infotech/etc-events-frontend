import React from "react";
import lineUp1 from "../../../assets/events/rafa.jpg";
import lineUp2 from "../../../assets/events/karnival-New-copy.jpg";
import lineUp3 from "../../../assets/events/aftermath.jpg";

const LineUps = () => {
  return (
    <section className="bg-getStarted bg-cover bg-center relative p-10 lg:p-20">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-nasalization text-white text-center relative">
        Event Lineups
      </h1>
      <div className="flex flex-wrap justify-center items-center px-10 lg:px-20 py-10 relative text-white">
        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center p-2">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp1} alt="line up 1" className="w-full rounded-md" />
          </div>
          <h1 className="font-nasalization text-xl md:text-3xl">AvoidRafa</h1>
        </div>
        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center p-2">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp2} alt="line up 1" className="w-full rounded-md" />
          </div>
          <h1 className="font-nasalization text-xl md:text-3xl">Karnival</h1>
        </div>
        <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 text-center p-2">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={lineUp3} alt="line up 1" className="w-full rounded-md" />
          </div>
          <h1 className="font-nasalization text-xl md:text-3xl">Aftermath</h1>
        </div>
      </div>
    </section>
  );
};

export default LineUps;

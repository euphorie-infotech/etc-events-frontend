import React from "react";

const GetStarted = () => {
  return (
    <section className="w-screen bg-getStarted bg-cover bg-center lg:h-screen relative text-white">
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      <div className="h-full pt-20 lg:pt-28 pb-16 md:pb-20 lg:pb-48 md:px-24 lg:px-32 flex flex-col justify-end items-center relative bg-black bg-opacity-60 text-center">
        <h1 className="text-4xl lg:text-7xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
          We execute events <br /> into wonders
        </h1>

        <a href="https://www.facebook.com/etceventsltd/" target="blank">
          <button className="px-9 md:px-12 py-2 md:py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 rounded-lg mt-5 hover:px-12 font-nasalization">
            Know More
          </button>
        </a>
      </div>
    </section>
  );
};

export default GetStarted;

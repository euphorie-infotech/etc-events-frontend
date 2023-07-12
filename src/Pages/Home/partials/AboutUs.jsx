import React from "react";
import concertImage from "../../../assets/images/antoine-j-7TLZWgfid1U-unsplash.jpg";

const AboutUs = () => {
  return (
    <section className="bg-aboutUs bg-cover relative">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="p-10 lg:p-20 flex justify-center items-center z-10 relative">
        <div className="sm:basis-3/4 md:basis-1/2 mt-10 md:mt-0 md:pr-10 lg:pr-20 text-white text-center md:text-left">
          {/* <h3 className="text-4xl">Bringing people together</h3> */}
          <h1 className="text-4xl lg:text-7xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
            Creating Memories That Last
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5">
            The experiences and solutions offered by Etc Events Ltd. create
            trends and influence business results. in the conviction that while
            an event might be forgotten, an experience lasts a lifetime!
          </p>
        </div>
        <div className="basis-1/4 hidden md:flex justify-end relative hover:scale-110 transition-all duration-300 rounded-3xl overflow-clip">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <img src={concertImage} alt="concert image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

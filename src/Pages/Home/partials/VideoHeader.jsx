import React from "react";
import bgVideo from "../../../assets/videos/lights_-_114088 (Original).mp4";
import headerImage1 from "../../../assets/images/maxwell-collins-OUm4v3mWzoc-unsplash.jpg";
import headerImage2 from "../../../assets/images/jordon-conner-e6BOcvKvphE-unsplash.jpg";
import headerImage3 from "../../../assets/images/jordon-conner-tIr-PWgSYB4-unsplash.jpg";
import headerImage4 from "../../../assets/images/muneeb-syed-4_M8uIfPEZw-unsplash.jpg";
const VideoHeader = () => {
  return (
    <>
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        className="w-screen h-screen absolute top-0 object-cover aspect-video p-0 -z-10"
      />
      <div className="w-screen h-screen absolute top-0 bg-black bg-opacity-70 z-0"></div>
      <div className="w-screen h-screen relative flex justify-between items-center z-10 overflow-clip">
        <div className="basis-1/2 text-white p-20">
          <h1 className="text-8xl font-fastHand mb-5">ETC Events</h1>
          <h3 className="text-5xl font-fastHand mb-5">
            Turn your events into <span className="underline">memory</span>
          </h3>
          <p className="pr-32 text-justiy text-lg">
            Platform for planning and organising your events. We provide you the
            best idea for any event, so that you can enjoy without worrying
            anything.
          </p>
          <button className="px-12 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 rounded-lg mt-5 hover:px-16">
            Know More
          </button>
        </div>
        <div className="flex basis-1/2 h-full rotate-12">
          <div className="basis-1/2 flex flex-col justify-between">
            <div className="px-3 pb-5 relative">
              <div className="relative w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-sky-700 mix-blend-multiply bg-opacity-40"></div>
                <div className="absolute inset-0 bg-black mix-blend-multiply bg-opacity-40"></div>
                <img src={headerImage1} alt="image 1" />
              </div>
            </div>
            <div className="px-3 pb-20 relative">
              <div className="relative w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-sky-700 mix-blend-multiply bg-opacity-40"></div>
                <div className="absolute inset-0 bg-black mix-blend-multiply bg-opacity-40"></div>
                <img src={headerImage2} alt="image 2" />
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-between">
            <div className="px-3 pt-20 relative">
              <div className="relative w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <img src={headerImage3} alt="image 3" />
              </div>
            </div>
            <div className="px-3 pt-5 relative">
              <div className="relative w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <img src={headerImage4} alt="image 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoHeader;

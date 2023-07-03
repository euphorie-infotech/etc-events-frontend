import React from "react";
import bgVideo from "../../../assets/videos/lights_-_114088 (Original).mp4";
import headerImage1 from "../../../assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";
import headerImage2 from "../../../assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";
import headerImage3 from "../../../assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";
import headerImage4 from "../../../assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";
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
      <div className="w-screen h-screen absolute top-0 bg-black bg-opacity-80 z-0"></div>
      <div className="w-screen h-screen relative flex justify-between items-center p-20 z-10">
        <div className="basis-1/2 text-white">
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
        <div className="flex basis-1/2">
          <div className="basis-1/2 flex flex-col justify-center">
            <div className="px-3 pb-5">
              <img src={headerImage1} alt="image 1" className="w-3/4" />
            </div>
            <div className="px-3 pb-5">
              <img src={headerImage2} alt="image 2" className="w-3/4" />
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-center">
            <div className="px-3 pt-5">
              <img src={headerImage3} alt="image 3" className="w-3/4" />
            </div>
            <div className="px-3 pt-5">
              <img src={headerImage4} alt="image 4" className="w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoHeader;

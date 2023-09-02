import React from "react";
import bgVideo from "../../../assets/videos/lights_-_114088 (Original)-1.mp4";
import bgVideoPoster from "../../../assets/videos/lights_-_114088-(Original)-1.jpg";
import headerImage1 from "../../../assets/images/jana-kunz-Ra3-o60F1rc-unsplash.jpg";
import headerImage2 from "../../../assets/images/sandra-seitamaa-Zcr67MPWsSM-unsplash.jpg";
import headerImage3 from "../../../assets/images/blake-carpenter-HkvRp7ZL8Ug-unsplash.jpg";
import headerImage4 from "../../../assets/images/kelvin-moquete-LOV7Gbmgm30-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const VideoHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="shadow-inner">
      <video
        src={bgVideo}
        autoPlay
        poster={bgVideoPoster}
        loop
        muted
        className="w-screen h-screen absolute top-0 object-cover aspect-video p-0 -z-10"
      />
      <div className="w-screen h-screen absolute top-0 bg-black bg-opacity-80 z-0"></div>
      <div className="w-screen h-screen relative flex justify-between items-center z-10 overflow-clip">
        <div className="lg:basis-1/2 text-white p-5 sm:p-10 lg:p-20">
          <h1 className="text-6xl md:text-8xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
            ETC Events
          </h1>
          {/* <h3 className="text-2xl lg:text-4xl mb-5">
            Let us take care of the
            <span className="underline text-4xl lg:text-5xl ml-3 font-nasalization  hover:tracking-wide transition-all duration-300">
              Details
            </span>
          </h3> */}
          <p className="md:pr-28 lg:pr-16 text-justiy text-sm md:text-base lg:text-lg ">
            ETC Events Ltd.- a regional experiential event company that creates
            brand experiences with an impact, and organizes events. We integrate
            strategy, creativity, and technology to deliver solutions that
            inspire, building on a legacy spanning proudly.
          </p>
          {/* <a href="https://www.facebook.com/etceventsltd/" target="blank"> */}
          <button
            className="px-12 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-500 rounded-lg mt-5 hover:px-16 font-nasalization"
            onClick={() => navigate("/checkout")}
          >
            Buy Tickets
          </button>
          {/* </a> */}
        </div>
        <div className="hidden lg:flex basis-1/2 h-full">
          <div className="basis-1/2 flex flex-col justify-between">
            <div className="px-3 pb-5 relative">
              <div className="relative lg:w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-sky-700 mix-blend-multiply bg-opacity-20"></div>
                <div className="absolute inset-0 bg-black mix-blend-multiply bg-opacity-20"></div>
                <img src={headerImage1} alt="image 1" />
              </div>
            </div>
            <div className="px-3 pb-20 relative">
              <div className="relative lg:w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-sky-700 mix-blend-multiply bg-opacity-20"></div>
                <div className="absolute inset-0 bg-black mix-blend-multiply bg-opacity-20"></div>
                <img src={headerImage2} alt="image 2" />
              </div>
            </div>
          </div>
          <div className="basis-1/2 flex flex-col justify-between">
            <div className="px-3 pt-20 relative">
              <div className="relative lg:w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <img src={headerImage3} alt="image 3" />
              </div>
            </div>
            <div className="px-3 pt-5 relative">
              <div className="relative lg:w-3/4 rounded-3xl overflow-clip hover:scale-105 transition-all duration-200">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <img src={headerImage4} alt="image 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHeader;

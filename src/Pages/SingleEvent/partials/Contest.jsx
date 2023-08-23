import React from "react";
import contest from "../../../assets/events/contest.jpg";

const Contest = () => {
  return (
    <section className="bg-aboutUs bg-cover bg-center relative p-10 lg:p-20">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-nasalization text-white text-center relative">
        Let Your roar be heard
      </h1>
      <div className="w-1/2 text-center mx-auto">
        <p className="font-roboto text-white relative text-lg">
          Want to see{" "}
          <span className="font-nasalization text-lg">your band</span> on the{" "}
          <span className="font-nasalization text-lg">biggest stage</span> with
          the <span className="font-nasalization text-lg">biggest bands</span>?{" "}
        </p>
        <p className="font-roboto text-white relative text-lg">
          Your chance is one step away. Submit your track by sending a mail as
          well as commenting on{" "}
          <a
            href="https://www.facebook.com/etceventsltd/posts/pfbid02TjszFKmoNRvqYKg2dZ7hCYQpxywRARNtcWD4bBRnsJ9uZE9q9xDz5ZnB7WegzK2fl"
            target="blank"
            className="font-nasalization underline text-xl mx-2"
          >
            this post
          </a>{" "}
          and let the whole country hear you roar!
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center px-10 lg:px-20 py-10 relative text-white">
        <div className="basis-full sm:basis-1/2 md:basis-1/3 text-center p-2">
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            <img src={contest} alt="line up 1" className="w-full rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contest;

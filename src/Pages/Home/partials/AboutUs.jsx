import React from "react";
import concertImage from "../../../assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg";

const AboutUs = () => {
  return (
    <section className="bg-aboutUs bg-cover relative">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="p-20 flex justify-center items-center z-10 relative">
        <div className="basis-1/2 pr-20 text-white">
          <h3 className="text-4xl font-fastHand">Lorem ipsum dolor sit amet</h3>
          <h1 className="text-7xl font-fastHand">Lorem ipsum dolor sit</h1>
          <p className="text-lg text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            provident ipsum nam eos officiis dignissimos! Maiores unde quo
            molestias recusandae nulla aut aliquid sit tenetur adipisci in! Ab
            harum officiis, repellat facere blanditiis laudantium quasi
            molestiae tempore quidem hic! Atque totam nam laudantium animi
            placeat quibusdam illo quidem commodi tenetur.
          </p>
        </div>
        <div className="basis-1/4 flex justify-end relative hover:scale-110 transition-all duration-300">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <img src={concertImage} alt="concert image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

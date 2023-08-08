import React from "react";

const AboutHeader = () => {
  return (
    <section className="h-[50vh] bg-cover bg-center bg-aboutUs relative flex justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="p-20 rounded-3xl flex justify-center items-center relative">
        <h1 className="font-nasalization text-7xl tracking-wider text-white">
          About Us
        </h1>
      </div>
    </section>
  );
};

export default AboutHeader;

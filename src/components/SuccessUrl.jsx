import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessUrl = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-3/4 text-center h-screen flex flex-col justify-center items-center">
        <h1 className="font-nasalization text-2xl">Payment Successfull</h1>
        <h1 className="font-nasalization text-2xl mt-5">
          Thank you for letting us serve you!!!
        </h1>
        <button
          className="border text-white border-white px-5 py-3 mt-16 rounded-md font-nasalization hover:bg-white hover:text-black transition-all duration-500 "
          onClick={() => navigate("/download-ticket")}
        >
          Click this Link to download your tickets
        </button>
      </div>
    </section>
  );
};

export default SuccessUrl;

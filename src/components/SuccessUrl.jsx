import React from "react";
import Ticket from "./Ticket";

const SuccessUrl = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="w-full h-screen flex justify-center items-center">
        <button className="font-nasalization hover:tracking-widest transition-all duration-500 border px-12 py-3 rounded-lg">
          Download Ticket
        </button>
      </div>
    </section>
  );
};

export default SuccessUrl;

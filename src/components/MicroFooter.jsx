import React from "react";

const MicroFooter = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-black py-2">
      <h1 className="text-white font-extralight text-xs">
        Designed and Developed by -
        <span className="text-teal-600 font-light ml-2 underline text-sm">
          <a
            href="https://www.euphorieinfotech.com"
            target="blank"
            rel="noopener noreferrer"
          >
            Euphorie Infotech
          </a>
        </span>
      </h1>
    </div>
  );
};

export default MicroFooter;

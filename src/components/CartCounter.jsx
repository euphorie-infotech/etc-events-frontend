import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const CartCounter = ({ ticketInfo, clickHandler }) => {
  const [count, setCount] = useState(0);
  // console.log(ticketInfo);
  const handleData = () => {
    const finalData = { ...ticketInfo, ticketCount: count };
    clickHandler(finalData);
  };
  return (
    <>
      <div className="flex w-full border items-center justify-between rounded-2xl mt-1 bg-white text-black">
        <div className="basis-1/3 cursor-pointer">
          <FontAwesomeIcon
            icon={faMinus}
            onClick={() => setCount((prevState) => prevState - 1)}
          />
        </div>
        <div className="basis-1/3">
          <input
            className="font-nasalization bg-transparent text-center w-1/2 placeholder:text-black"
            placeholder={count >= 0 ? count : 0}
            onChange={handleData()}
          />
        </div>
        <div className="basis-1/3 cursor-pointer">
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => setCount((prevState) => prevState + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default CartCounter;

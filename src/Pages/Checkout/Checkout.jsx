import React, { useState } from "react";
import UserInfoForm from "./partials/UserInfoForm";
import PurchaseInfo from "./partials/PurchaseInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useState();
  const handleData = (data) => {
    // console.log("from parent", data);
    setPurchaseData(data);
  };
  return (
    <section className="min-h-screen bg-checkout bg-cover bg-center flex flex-col text-white items-center justify-center relative md:p-20">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative rounded-xl w-full h-full bg-black bg-opacity-70 border text-center p-10">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300 relative">
            Buy Ticket
          </h1>
          <h1
            className=" lg:text-xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300 relative cursor-pointer border-b-2 pb-1"
            onClick={() => navigate("/")}
          >
            Back To Home <FontAwesomeIcon icon={faChevronRight} size="sm" />
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </h1>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row py-10">
          <div className="lg:basis-1/2">
            <UserInfoForm passData={handleData} />
          </div>
          <div className="lg:basis-1/2">
            <PurchaseInfo purchaseData={purchaseData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

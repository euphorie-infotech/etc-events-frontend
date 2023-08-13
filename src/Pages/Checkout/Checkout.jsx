import React, { useState } from "react";
import UserInfoForm from "./partials/UserInfoForm";
import PurchaseInfo from "./partials/PurchaseInfo";

const Checkout = () => {
  const [purchaseData, setPurchaseData] = useState();
  const handleData = (data) => {
    // console.log("from parent", data);
    setPurchaseData(data);
  };
  return (
    <section className="min-h-screen bg-checkout bg-cover bg-center flex flex-col text-white items-center justify-center relative md:p-20">
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative rounded-xl w-full h-full bg-black bg-opacity-70 border text-center p-10">
        <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300 relative">
          Buy Ticket
        </h1>
        <div className="w-full h-full flex py-10">
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

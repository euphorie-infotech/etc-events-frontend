import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postSslCommerce } from "../../../Services/apiFunctions";

const PurchaseInfo = ({ purchaseData }) => {
  const queryClient = useQueryClient();

  const postPurchaseData = (data) => {
    return postSslCommerce("pay-via-ajax", data);
  };

  const { mutate } = useMutation(postPurchaseData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["upcoming-event"]);
    },
  });

  return (
    <div className={`p-2 ${!purchaseData ? "hidden" : "visible"}`}>
      <div className="border p-4 lg:p-12 rounded-md">
        <h1 className="font-nasalization text-2xl border-b pb-1">
          Verify Purchase Information
        </h1>
        <div className="text-left mt-3">
          <h1 className="font-nasalization">
            Name <span className="mx-3">:</span>
            <span className="font-roboto">{purchaseData?.name}</span>
          </h1>
          <h1 className="font-nasalization">
            Phone <span className="mx-3">:</span>
            <span className="font-roboto">{purchaseData?.phone}</span>
          </h1>
          <h1 className="font-nasalization">
            Email <span className="mx-3">:</span>
            <span className="font-roboto">{purchaseData?.email}</span>
          </h1>
          <h1 className="font-nasalization">
            Date of Birth <span className="mx-3">:</span>
            <span className="font-roboto">{purchaseData?.dateOfBirth}</span>
          </h1>
          <h1 className="font-nasalization">
            Event Name <span className="mx-3">:</span>
            <span className="font-roboto">{purchaseData?.label}</span>
          </h1>
          <h1 className="font-nasalization">
            Ticket Info <span className="mx-3">:</span>
          </h1>
          <ul className="w-full flex flex-col items-end lg:items-center">
            {purchaseData?.ticket.map((item) => (
              <li key={item.type} className="border w-3/4 p-1 text-center">
                <h1 className="font-roboto capitalize w-full">
                  {`${item.type} => ${item.price} X ${item.ticketCount} = ${
                    item.price * item.ticketCount
                  } BDT`}
                </h1>
              </li>
            ))}
          </ul>
          <h1 className="font-nasalization text-right my-5">
            Total Purchased Amount <span className="mx-3">:</span>
            <span className="font-roboto text-xl">
              {purchaseData?.totalAmount}
            </span>
          </h1>
        </div>

        <button
          className="font-nasalization hover:tracking-widest transition-all duration-500 my-3"
          id="sslczPayBtn"
          onClick={() => mutate(purchaseData)}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default PurchaseInfo;

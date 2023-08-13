import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postApiData } from "../../../Services/apiFunctions";
import PayNowButton from "../../../components/PayNowButton";

const PurchaseInfo = ({ purchaseData }) => {
  const queryClient = useQueryClient();

  const postPurchaseData = (data) => {
    return postApiData("pay", data);
  };

  const { mutate } = useMutation(postPurchaseData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["upcoming-event"]);
    },
  });

  if (!purchaseData) {
    return;
  }

  return (
    <div className="p-2">
      <div className="border p-4 lg:p-12 rounded-md">
        <div className="text-left">
          <h1 className="font-nasalization">
            Name <span className="mx-3">:</span>
            <span>{purchaseData?.name}</span>
          </h1>
          <h1 className="font-nasalization">
            Phone <span className="mx-3">:</span>
            <span>{purchaseData?.phone}</span>
          </h1>
          <h1 className="font-nasalization">
            Email <span className="mx-3">:</span>
            <span>{purchaseData?.email}</span>
          </h1>
          <h1 className="font-nasalization">
            Date of Birth <span className="mx-3">:</span>
            <span>{purchaseData?.dateOfBirth}</span>
          </h1>
          <h1 className="font-nasalization">
            Event Name <span className="mx-3">:</span>
            <span>{purchaseData?.label}</span>
          </h1>
          <h1 className="font-nasalization">
            Ticket Info <span className="mx-3">:</span>
          </h1>
          <ul className="w-full flex flex-col items-end">
            {purchaseData?.ticket.map((item) => (
              <li>
                <h1 className="font-nasalization">
                  {`${item.type} => ${item.price} X ${item.ticketCount} = ${
                    item.price * item.ticketCount
                  } BDT`}
                </h1>
              </li>
            ))}
          </ul>
          <h1 className="font-nasalization">
            Total Purchased Amount <span className="mx-3">:</span>
            <span>{purchaseData.totalAmount}</span>
          </h1>
        </div>
        {/* <PayNowButton callbackFn={mutate(purchaseData)} /> */}
        <button
          className="border border-white px-12 py-3"
          onClick={() => mutate(purchaseData)}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default PurchaseInfo;

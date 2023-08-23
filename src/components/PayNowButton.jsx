import React from "react";
import { postApiData } from "../Services/apiFunctions";
import axios from "axios";

const PayNowButton = () => {
  // ((window, document) => {
  //   var loader = () => {
  //     console.log("habijabi");
  //     var script = document.createElement("script"),
  //       tag = document.getElementsByTagName("script")[0];
  //     script.src =
  //       "https://sandbox.sslcommerz.com/embed.min.js?" +
  //       Math.random().toString(36).substring(7);
  //     tag.parentNode.insertBefore(script, tag);
  //   };

  //   window.addEventListener
  //     ? window.addEventListener("load", loader, false)
  //     : window.attachEvent("onload", loader);
  // })(window, document);

  const handleSslCommerz = () => {
    // postApiData({});
    axios.post("https://admin.etceventsltd.com/public/api/pay-via-ajax", {});
    // callbackFn();
  };

  // return (
  //   <button
  //     className="font-nasalization hover:tracking-widest transition-all duration-500"
  //     id="sslczPayBtn"
  //     token="if you have any token validation"
  //     postdata="your javascript arrays or objects which requires in backend"
  //     order="If you already have the transaction generated for current order"
  //     endpoint="https://admin.etceventsltd.com/public/api/pay-via-ajax"
  //     onClick={() => handleSslCommerz()}
  //   >
  //     Pay Now
  //   </button>
  // );
};

export default PayNowButton;

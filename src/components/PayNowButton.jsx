import React from "react";

const PayNowButton = () => {
  ((window, document) => {
    var loader = () => {
      var script = document.createElement("script"),
        tag = document.getElementsByTagName("script")[0];
      script.src =
        "https://sandbox.sslcommerz.com/embed.min.js?" +
        Math.random().toString(36).substring(7);
      tag.parentNode.insertBefore(script, tag);
    };

    window.addEventListener
      ? window.addEventListener("load", loader, false)
      : window.attachEvent("onload", loader);
  })(window, document);

  return (
    <button
      className="font-nasalization hover:tracking-widest transition-all duration-500 ml-10"
      id="sslczPayBtn"
      token="if you have any token validation"
      postdata="your javascript arrays or objects which requires in backend"
      order="If you already have the transaction generated for current order"
      endpoint="http://127.0.0.1:8000/api/pay"
    >
      Pay Now
    </button>
  );
};

export default PayNowButton;

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
      className="font-nasalization"
      id="sslczPayBtn"
      token="if you have any token validation"
      postdata="your javascript arrays or objects which requires in backend"
      order="If you already have the transaction generated for current order"
      endpoint="http://sandbox.sslcommerz.com/EasyCheckOut/testcdeaae88e0996d08f0d752169127efe5445"
    >
      Pay Now
    </button>
  );
};

export default PayNowButton;

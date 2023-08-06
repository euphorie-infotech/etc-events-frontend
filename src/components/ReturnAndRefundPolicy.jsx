import React from "react";

const ReturnAndRefundPolicy = () => {
  return (
    <section className="bg-black bg-opacity-90 w-screen min-h-screen px-40 py-40 text-white">
      <div className="border-2 border-white p-20 rounded-3xl flex justify-center items-center bg-black text-center">
        <h1 className="font-nasalization text-7xl tracking-wider">
          Return & Refund Policy
        </h1>
      </div>
      <div className="my-10">
        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">
            Products can be refunded only in the cases of:
          </h1>
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">Delivered item found to be defective</p>
            </li>
            <li>
              <p className="text-sm">
                After claiming, customer will get refund within 10 working days.
              </p>
            </li>
          </ul>
        </div>
        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">How to refund:</h1>
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">
                Contact :{" "}
                <a href="tel:+880 1750-356417" className="underline mx-1">
                  +880 1750-356417
                </a>{" "}
                or Email :{" "}
                <a
                  href="mailto:etc.eventsltd@gmail.com"
                  className="underline mx-1"
                >
                  etc.eventsltd@gmail.com
                </a>{" "}
                or text on
                <a
                  href=" https://www.facebook.com/etceventsltd"
                  className="underline mx-1"
                >
                  Facebook Page
                </a>
                within 24 hours of receiving the item with the INVOICE NUMBER of
                your order. Our team shall provide an efficient method to refund
                depending on the shipping location.
              </p>
            </li>
            <li>
              <p className="text-sm">
                If the product is refunded via shipping agents, customer has to
                bear the shipping charge (to our inventory)
              </p>
            </li>
            <li>
              <p className="text-sm">
                Get Set Rock shall bear the final delivery charge while shipping
                the refunded item to the consumer address
              </p>
            </li>
          </ul>
        </div>
        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">Please Note: </h1>
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">
                Event Tickets, membership card and any similar document based
                purchases are not refundable
              </p>
            </li>
            <li>
              <p className="text-sm">
                Products can be returned and thereby refunded only if the
                product is found majorly defected and there is no available
                product in stock to provide as refund
              </p>
            </li>
            <li>
              <p className="text-sm">
                Products under PROMOTIONAL SALE or offers will not be refunded
                or returned unless major quality issues found
              </p>
            </li>
          </ul>
        </div>{" "}
      </div>
    </section>
  );
};

export default ReturnAndRefundPolicy;

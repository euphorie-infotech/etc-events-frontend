import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-black bg-opacity-90 w-screen min-h-screen px-12 lg:px-40 py-40 text-white">
      <div className="border-2 border-white p-5 lg:p-20 rounded-3xl flex justify-center items-center bg-black text-center">
        <h1 className="font-nasalization text-4xl lg:text-7xl tracking-wider">
          Terms & Conditions
        </h1>
      </div>
      <div className="my-10">
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Acceptable Use Policy:</h1>
          <p className="text-sm">
            You agree to use ETC Events Ltd only for lawful purposes and in a
            manner that does not infringe upon the rights of others, including
            but not limited to intellectual property rights.
          </p>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Merchandises</h1>
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">
                Acceptance of orders depends on stock availability.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Confirmed orders cannot be cancelled or refunded. Due to the
                covid situation, we don’t allow exchanging of clothing
                materials. Please confirm the design or size before placing an
                order.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Only the Delivery charge will be added with the Product MRP. No
                other charges are to be paid once the order is placed.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Price of a product might occasionally vary in Get Set Rock and
                Associative physical stores & websites due to periodic
                promotional offers.
              </p>
            </li>
            <li>
              <p className="text-sm">
                In the event of incorrect pricing information due to system
                error, Get Set Rock authority holds the right to cancel any
                order to prevent any further trouble for the customers.
              </p>
            </li>
            <li>
              <p className="text-sm">
                For locations outside Dhaka, the order will be processed after
                the confirmation from the recipient directly.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Inside Dhaka Delivery will be made within 2-3 working days.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Outside Dhaka Delivery will be made within 5-6 working days.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Please note that we are associated with third party shipping
                companies to deliver orders. Hence, the delivery process is not
                completely in our control. We apologize for the occurrence of
                any damage & promise to compensate for it.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Due to monitor discrepancies, colors may seem slightly different
                in various devices. We are trying our best to minimize visual
                confusionsas much as possible.
              </p>
            </li>
          </ul>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Payment Policy: </h1>
          <p className="text-sm">
            ETC Events Ltd charges a service fee for every ticket sold through
            our platform. This fee is non-refundable.
          </p>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Refund Policy: </h1>
          <p className="text-sm">
            ETC Events Ltd's refund policy varies depending on the event
            organizer's policy. In the event of a cancellation, postponement, or
            any other issue related to the event, ETC Events Ltd will follow the
            refund policy set forth by the event organizer. If the event
            organizer offers refunds, ETC Events Ltd will facilitate the refund
            process on behalf of the organizer. If the event organizer does not
            offer refunds, ETC Events Ltd is not responsible for providing a
            refund.
          </p>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Privacy Policy:</h1>
          <p className="text-sm">
            ETC Events Ltd respects your privacy and is committed to protecting
            your personal information. We will only use your personal
            information for the purposes outlined in our Privacy Policy.
          </p>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">Intellectual Property:</h1>
          <p className="text-sm">
            ETC Events Ltd and its content are protected by copyright,
            trademark, and other laws. You may not copy, modify, distribute, or
            reproduce any content from ETC Events Ltd without our prior written
            consent.
          </p>
        </div>
        <div className="py-3 lg:px-24">
          <h1 className="text-xl font-nasalization">
            Limitation of Liability:{" "}
          </h1>
          <p className="text-sm">
            ETC Events Ltd is not liable for any damages, including but not
            limited to direct, indirect, incidental, consequential, or punitive
            damages, arising from the use of our platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

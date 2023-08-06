import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-black bg-opacity-90 w-screen min-h-screen px-40 py-40 text-white">
      <div className="border-2 border-white p-20 rounded-3xl flex justify-center items-center bg-black">
        <h1 className="font-nasalization text-7xl tracking-wider">
          Privacy Policy
        </h1>
      </div>
      <div className="my-10">
        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">Providing Consent:</h1>
          <p className="text-sm">
            By using our website, you consent to our Privacy Policy and agree to
            its terms.
          </p>
        </div>
        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">
            Information We Collect:{" "}
          </h1>
          <p className="text-sm">
            We collect personal information such as your name, email address,
            phone number, and the contents of the message and/or attachments you
            may send us, when you contact us directly. If you register for an
            account with Tickify, we will receive and store the information
            regarding your respective connected platform with adequate security.
          </p>
        </div>

        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">
            We use the information we collect to:
          </h1>
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">
                We provide, operate, and maintain our website to deliver a
                seamless user experience.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We continuously strive to improve, personalize, and expand our
                website features and functionality.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We analyze user behavior and preferences to gain insights into
                how our audience interacts with our website.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We use the information gathered to develop new products,
                services, and features.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We communicate with our users, including customer service, to
                ensure they have a smooth experience on our website.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We keep you updated with the latest website-related news and
                information.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We use your information for marketing and promotional purposes
                with your consent.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We may send you emails unless you have unsubscribed from our
                newsletter.
              </p>
            </li>
            <li>
              <p className="text-sm">
                We take necessary measures to detect and prevent fraudulent
                activities.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Our website is not intended for use by children under 13 years
                of age, and we do not knowingly collect personal information
                from children.
              </p>
            </li>
          </ul>
          <br />
          <p className="text-sm">
            We are committed to protecting children while they use the internet.
            Parents and guardians are encouraged to monitor and guide their
            children’s online activities.
          </p>
          <br />
          <p className="text-sm">
            ETC Events Ltd. does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, please
            contact us immediately, and we will do our best efforts to promptly
            remove such information from our records.
          </p>
        </div>

        <div className="py-3 px-24">
          <h1 className="text-xl font-nasalization">
            Data Protection Rights:{" "}
          </h1>
          <p className="text-sm">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <br />
          <ul className="list-disc px-10">
            <li>
              <p className="text-sm">
                Restriction Right – You are entitled to request the limitation
                of processing of your personal data, subject to specific
                conditions.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Data Portability Right –You are entitled to request the transfer
                of the personal data we have collected to another organization
                or directly to you, subject to specific conditions.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Access Right –You are entitled to request copies of your
                personal data, which may incur a nominal fee for this service.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Rectification Right – If you believe any of your personal
                information is inaccurate or incomplete, you have the right to
                request that we correct or complete it.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Erasure Right– You have the right to request the erasure of your
                personal information, under specific conditions.
              </p>
            </li>
            <li>
              <p className="text-sm">
                Objection Right – You can object to our processing of your
                personal data.
              </p>
            </li>
          </ul>
          <br />
          <p className="text-sm">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

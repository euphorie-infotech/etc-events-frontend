import React from "react";
import aboutImage from "../../../assets/images/zachary-smith-zorgErvL_Fs-unsplash.jpg";
import passionImage from "../../../assets/images/fabio-traina-46HSTy-xeYo-unsplash.jpg";

const AboutContent = () => {
  return (
    <section className="bg-black bg-opacity-95 text-white px-20 py-10">
      <div className="flex relative items-center">
        <div className="basis-1/2 p-10 ">
          <div className="relative  rounded-2xl overflow-clip">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={aboutImage} alt="etc events" className="rounded-2xl" />
          </div>
        </div>
        <div className="basis-1/2 py-10 pr-20">
          <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
            Our Philosophy
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 text-justify">
            Etc Events is an event logistics and marketing firm. The company
            provides A-Z event planning services from a team of experienced and
            energetic event planners, suppliers, venues, and more. With the
            number of events we organize, Event Planner Ltd does not need to
            charge exorbitant fees and mark-ups to make a profit. This ensures
            that our ever-expanding clientele continues to use our services on a
            regular basis.
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="basis-1/2 pr-8">
          <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
            Passion became Purpose
          </h1>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 text-justify">
            Etc Events is devoted to each project and treats it as a personal
            one. We are able to exceed client expectations because of our
            passion and dedication, combined with the experience of our in-house
            event specialists.
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 text-justify">
            We make it a priority to understand our client's goals, working with
            them from concept to completion to create a one-of-a-kind and
            memorable event.
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 text-justify">
            We almost never see a client just once. Most of our clients return
            to us time and again, allowing us to develop a thorough
            understanding of their business goals. Almost all new customers come
            from personal recommendations.
          </p>
          <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 text-justify">
            Because we own our own equipment, we have complete control over your
            event from start to finish. We have a 3000-square-foot warehouse
            full of exceptionally high-quality equipment.
          </p>
        </div>
        <div className="basis-1/2 p-10">
          <div className="relative rounded-2xl overflow-clip">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <img src={passionImage} alt="etc events" className="rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="text-center px-20 py-10">
        <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
          The Team
        </h1>
        <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5 px-36">
          The members of the Etc Events team are diverse. A sizable support
          team, in addition to this group, assists the business with everything
          it does, from office work to on-site logistics planning. We are
          genuinely passionate about what we do, and that is one thing you can
          say about our team!
        </p>
      </div>
      <div className="px-20 py-10">
        <h1 className="text-2xl lg:text-5xl font-nasalization mb-2 hover:tracking-wide transition-all duration-300">
          How can we help you organize a successful event?
        </h1>
        <ul>
          <li>
            <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5">
              1. We shall work on your event from beginning to end. You can
              unwind and let us handle the logistics.{" "}
            </p>
          </li>
          <li>
            <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5">
              2. It's not as simple as people make it seem to find a venue in
              Malta. Even though we provide a comprehensive list of venues on
              our website, we are aware of and in contact with hundreds of
              locations throughout the Maltese Islands, at least one of which
              will be suitable for your event.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5">
              3. We organize product launches, gala receptions, seminars and
              conferences, staff events, awards nights, team building events,
              B2B and B2C networking events, weddings, and more.
            </p>
          </li>
          <li>
            <p className="text-sm md:text-base lg:text-lg mt-3 lg:mt-5">
              4. We provide additional services such as transportation,
              photography, videography, furniture rental, entertainment, sound
              and lighting, branding, security, RSVP communication and
              follow-up, personnel, sms/email marketing, handling VIPs,
              catering, and more.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutContent;

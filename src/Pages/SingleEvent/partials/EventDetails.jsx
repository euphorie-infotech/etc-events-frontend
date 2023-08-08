import React from "react";
import eventBanner from "../../../assets/events/poster-02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-between items-center px-40 py-20 bg-events bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
      <div className="basis-1/3 relative ring-1 ring-white p-2">
        <img src={eventBanner} alt="eventBanner" />
      </div>
      <div className="basis-2/3 relative text-white pl-20">
        <h1 className="text-7xl font-nasalization">
          The School Of Rock - (<span>Vol-01</span>)
        </h1>
        <div className="flex mb-5">
          <div className="flex text-white font-roboto my-2 mr-10">
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              style={{ color: "#fff" }}
              size="xl"
              className="mr-3"
            />
            ICCB Hall-4
          </div>
          <div className="flex text-white font-roboto my-2 mr-10">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              style={{ color: "#fff" }}
              size="xl"
              className="mr-3"
            />
            September 15, 2023
          </div>
        </div>
        <p className="text-lg">
          To provide a chance for a significant refreshment in this chaotic
          city, we plan to organize a sizeable gathering of youth. Additionally,
          it is firmly within our purview to support the Deshi bands and
          disseminate their magic among the young. We value and expect our young
          people to value art and culture. A brand-new band is another thing we
          want to promote. We are announcing a competition for original song
          submissions in response to that. The winner will have the honor of
          going on stage and performing one song live.
        </p>
        <div className="mt-10">
          <button
            className="font-nasalization hover:tracking-widest transition-all duration-500 border border-white px-10 py-3 rounded-md hover:bg-white hover:text-black "
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;

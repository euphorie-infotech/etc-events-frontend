import React from "react";
import { useNavigate } from "react-router-dom";
import events1 from "../../../assets/events/poster-02.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const EventsCard = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:basis-1/2 xl:basis-1/3 p-5">
      <div className="w-full h-full ring-1 ring-white p-2 rounded-md overflow-hidden relative">
        <div className="absolute bg-black opacity-0 hover:opacity-90 inset-0 transition-all duration-700 flex flex-col justify-between items-center text-white px-5 lg:px-10 py-8 lg:py-16 text-center">
          <div>
            <h1 className="font-nasalization text-3xl lg:text-3xl xl:text-5xl">
              School Of Rock
            </h1>
            <h3 className="md:text-xl font-nasalization">Vol-01</h3>
          </div>
          <div className="flex flex-col">
            <div className="flex text-white font-roboto my-2 text-sm md:text-base">
              <FontAwesomeIcon
                icon={faLocationCrosshairs}
                style={{ color: "#fff" }}
                size="xl"
                className="mr-5"
              />
              ICCB Hall-4
            </div>
            <div className="flex text-white font-roboto my-2 text-sm md:text-base">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                style={{ color: "#fff" }}
                size="xl"
                className="mr-5"
              />
              September 15, 2023
            </div>
          </div>
          <button
            className="text-white font-nasalization px-10 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            onClick={() => navigate("/events/1")}
          >
            View Details
          </button>
        </div>
        <img src={events1} alt="school of rock vol-2" className="rounded-md" />
      </div>
    </div>
  );
};

export default EventsCard;

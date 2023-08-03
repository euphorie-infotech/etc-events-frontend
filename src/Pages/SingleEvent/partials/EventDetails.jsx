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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aut
          eaque iure, ipsam doloribus, perspiciatis totam quo, adipisci atque
          accusantium dolore ad. At voluptatem, temporibus sapiente dignissimos
          excepturi minima molestias obcaecati inventore. Laborum atque nisi,
          maiores natus voluptate numquam expedita veniam! Distinctio, quisquam
          dignissimos? Esse molestiae reprehenderit vitae tempore at?
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

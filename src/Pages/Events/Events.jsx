import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="mb-44">Events Page</h1>
      <h1 className="cursor-pointer" onClick={() => navigate("/events/1")}>
        Single Event
      </h1>
    </div>
  );
};

export default Events;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UpcomingEvents from "../Home/partials/UpcomingEvents";

const Events = () => {
  const navigate = useNavigate();
  return <UpcomingEvents className="pt-20" />;
};

export default Events;

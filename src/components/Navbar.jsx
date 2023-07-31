import React from "react";
import logo from "../assets/images/logo-web.png";
import PayNowButton from "./PayNowButton";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-screen z-50 px-5 sm:px-10 md:px-16 lg:px-20 fixed bg-black bg-opacity-50 border-b-2 border-white flex justify-between items-center">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="w-24 sm:w-28 lg:w-56" />
      </div>
      <div className="flex items-center">
        <div className="flex mr-10">
          <Link to="/events">
            <h1 className="rounded-sm text-white font-nasalization cursor-pointer px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
              Events
            </h1>
          </Link>
          <Link to="/store">
            <h1 className="rounded-sm text-white font-nasalization cursor-pointer px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
              Store
            </h1>
          </Link>
        </div>
        <PayNowButton />
      </div>
    </nav>
  );
};

export default Navbar;

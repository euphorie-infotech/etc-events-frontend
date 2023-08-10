import React, { useState } from "react";
import logo from "../assets/images/logo-web.png";
import PayNowButton from "./PayNowButton";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize, faMinimize } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const navigate = useNavigate();
  return (
    <nav className="fixed z-50">
      <div className="w-screen z-50 px-10 md:px-12 lg:px-20 relative bg-black bg-opacity-50 border-b-2 border-white flex justify-between items-center">
        <div
          className={`absolute sm:hidden top-full left-0 py-1 px-5 w-screen ${
            !menuOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-500`}
        >
          <div className="flex bg-black bg-opacity-70 border-2 rounded-md border-white py-5 justify-around">
            <Link to="/aboutus">
              <h1 className="rounded-sm text-white font-nasalization cursor-pointer sm:px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
                About Us
              </h1>
            </Link>
            <Link to="/events">
              <h1 className="rounded-sm text-white font-nasalization cursor-pointer sm:px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
                Events
              </h1>
            </Link>
            <Link to="/store">
              <h1 className="rounded-sm text-white font-nasalization cursor-pointer sm:px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
                Store
              </h1>
            </Link>
          </div>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="w-24 sm:w-28 lg:w-56" />
        </div>
        <div className="items-center flex justify-end relative w-full">
          <div
            className="text-white flex sm:hidden cursor-pointer"
            onClick={() => setMenuOpen((prevState) => !prevState)}
          >
            <FontAwesomeIcon
              icon={!menuOpen ? faMaximize : faMinimize}
              size="xl"
            />
          </div>
          <div className="hidden sm:flex">
            <Link to="/aboutus">
              <h1 className="rounded-sm text-white font-nasalization cursor-pointer px-5 pb-2 border-b border-white transition-all duration-500 mx-5 hover:tracking-[0.3em]">
                About Us
              </h1>
            </Link>
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
          {/* <PayNowButton /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

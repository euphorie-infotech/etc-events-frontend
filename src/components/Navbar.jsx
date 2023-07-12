import React from "react";
import logo from "../assets/images/logo-web.png";

const Navbar = () => {
  return (
    <nav className="w-screen z-50 px-5 sm:px-10 md:px-16 lg:px-20 fixed bg-black bg-opacity-50 border-b-2 border-white">
      <img src={logo} alt="logo" className="w-24 sm:w-28 lg:w-56" />
    </nav>
  );
};

export default Navbar;

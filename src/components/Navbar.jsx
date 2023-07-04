import React from "react";
import logo from "../assets/images/logo-web.png";

const Navbar = () => {
  return (
    <nav className="w-screen bg-transparent z-50  px-20 py-10">
      <img src={logo} alt="logo" />
    </nav>
  );
};

export default Navbar;

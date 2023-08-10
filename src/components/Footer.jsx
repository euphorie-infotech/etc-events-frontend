import React from "react";
import logo from "../assets/images/logo-web.png";
import MicroFooter from "./MicroFooter";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import sslCommerce from "../assets/images/sslCommerce.png";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navigate = useNavigate();
  const date = new Date();
  return (
    <footer className="bg-events bg-cover bg-center bg-no-repeat relative py-10 text-white">
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
      <MicroFooter />
      <div className="relative flex flex-col sm:flex-row w-full items-center md:justify-between px-10 md:px-20 lg:px-32 ">
        <div className="basis-full md:basis-1/3">
          <img
            src={logo}
            alt="logo"
            className="w-44 lg:w-56 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="flex items-center px-2 font-nasalization">
            <span className="text-xs md:text-sm">
              <FontAwesomeIcon icon={faCopyright} size="xs" className="mr-1" />
              {date.getFullYear()}
            </span>
            <span className="mx-3">|</span>
            <span className="text-xs md:text-sm">ETC Events Ltd.</span>
          </p>
          <p className="px-3 text-[0.5rem] md:text-[10px]">
            Trademarks and Brands are property of the owner
          </p>
        </div>
        <div className="basis-full md:basis-1/3 flex sm:justify-center md:items-center">
          <h1 className="font-nasalization mt-5 border p-2 md:w-1/2 text-center rounded-lg text-xs md:text-sm">
            Trade License: <span className="tracking-widest">4161</span>
          </h1>
        </div>
        <div className="basis-full md:basis-1/3 flex justify-end items-center">
          <div className="mt-5 md:mt-0 text-center sm:text-left">
            <h1 className="font-nasalization text-sm">
              <span className="text-base">Address:</span> <br /> House#247,
              Road#17, Block#K, <br /> South Banasree, Khilgaon, <br />{" "}
              Dhaka-1219
            </h1>
            <div className="flex justify-between items-center mt-5">
              <a
                href="https://www.facebook.com/etceventsltd"
                target="blank"
                rel="noopener noreferrer"
                className="border border-white p-2 aspect-square rounded-full hover:scale-125 transition-all duration-500"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/etceventsltd.001/"
                target="blank"
                rel="noopener noreferrer"
                className="border border-white p-2 aspect-square rounded-full hover:scale-125 transition-all duration-500"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/@ETCEvents-ic7do"
                target="blank"
                rel="noopener noreferrer"
                className="border border-white p-2 aspect-square rounded-full hover:scale-125 transition-all duration-500"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.linkedin.com/company/96317227/admin/feed/posts/"
                target="blank"
                rel="noopener noreferrer"
                className="border border-white p-2 aspect-square rounded-full hover:scale-125 transition-all duration-500"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative px-10 pt-10 text-center">
        <h1 className="text-sm">
          Payment Verified by -{" "}
          <a
            href="https://sslcommerz.com/"
            target="blank"
            rel="noopener noreferrer"
            className="hover:tracking-widest hover:underline transition-all duration-500 font-nasalization text-lg ml-3"
          >
            SSLCommerz
          </a>
        </h1>
        <img src={sslCommerce} alt="ssl banner" />
      </div>
      <div className="w-full relative mt-5 text-center font-nasalization text-xs flex flex-col md:flex-row justify-center">
        <p
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer text-xs md:text-base"
          onClick={() => navigate("/terms-conditions")}
        >
          Terms & Conditions
        </p>
        <span className="mx-5 hidden md:inline">|</span>
        <p
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer text-xs md:text-base"
          onClick={() => navigate("/return-refund")}
        >
          Return & Refund Policy
        </p>
        <span className="mx-5 hidden md:inline">|</span>

        <p
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer text-xs md:text-base"
          onClick={() => navigate("/privacy-policy")}
        >
          Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;

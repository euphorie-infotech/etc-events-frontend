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
      <div className="relative flex w-full justify-between px-40 ">
        <div className="basis-1/3">
          <img
            src={logo}
            alt="logo"
            className="w-24 sm:w-28 lg:w-56 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="flex items-center px-2 font-nasalization">
            <span className="text-sm">
              <FontAwesomeIcon icon={faCopyright} size="xs" className="mr-1" />
              {date.getFullYear()}
            </span>
            <span className="mx-3">|</span>
            <span>ETC Events Ltd.</span>
          </p>
          <p className="px-3 text-[10px]">
            Trademarks and Brands are property of the owner
          </p>
        </div>
        <div className="basis-1/3 flex justify-center items-center">
          <h1 className="font-nasalization mt-5 border p-2 w-1/2 text-center rounded-lg text-sm">
            Trade License: <span className="tracking-widest">4161</span>
          </h1>
        </div>
        <div className="basis-1/3 flex justify-end items-center">
          <div className="">
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
      <div className="w-full relative mt-5 text-center font-nasalization text-xs">
        <span
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer"
          onClick={() => navigate("/terms-conditions")}
        >
          Terms & Conditions
        </span>
        <span className="mx-5">|</span>
        <span
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer"
          onClick={() => navigate("/return-refund")}
        >
          Return & Refund Policy
        </span>
        <span className="mx-5">|</span>

        <span
          className="hover:underline hover:tracking-widest transition-all duration-500 cursor-pointer"
          onClick={() => navigate("/privacy-policy")}
        >
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import newsPaloJames from "../../../assets/events/pAlo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NewsMedia = () => {
  return (
    <section className="bg-black px-5 md:px-10 lg:px-40 py-20">
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-nasalization text-white text-center relative">
          News & Media
        </h1>
        <div className="flex justify-center items-center flex-wrap my-10 text-white relative">
          <div className="basis-1/3 font-nasalization p-2 border group overflow-clip">
            <a
              href="https://www.prothomalo.com/entertainment/song/5ajb6mh51d?fbclid=IwAR3KaX9E5cxLADlXi782fdA6XRX3tI934zOKoCKLsJ9f28jVkZRAL2g-iLM"
              target="blank"
            >
              <div className="bg-black opacity-0 flex justify-center items-center absolute inset-0 group-hover:opacity-60 transition-all duration-500">
                <h1 className="font-basalizatio">Clieck To Read more</h1>
              </div>
            </a>

            <img src={newsPaloJames} alt="news" />
            <h1 className="text-center mt-3">
              ঢাকায় গাইবেন জেমস, একই কনসার্টে থাকছে নতুন ব্যান্ডের সুযোগ
            </h1>
          </div>
          {/* <div className="basis-1/3 font-nasalization p-2 border group overflow-clip">
            <a
              href="https://protidinerbangladesh.com/entertainment/61093/%E0%A6%B8%E0%A7%81%E0%A6%B0%E0%A7%87-%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A7%87-%E0%A6%A6%E0%A7%8D%E0%A6%AF-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%81%E0%A6%B2-%E0%A6%85%E0%A6%AC-%E0%A6%B0%E0%A6%95"
              target="blank"
            >
              <div className="bg-black opacity-0 flex justify-center items-center absolute inset-0 group-hover:opacity-60 transition-all duration-500">
                <h1 className="font-basalizatio">Clieck To Read more</h1>
              </div>
            </a>

            <img src={newsPaloJames} alt="news" />
            <h1 className="text-center mt-3">সুরে ভাসাবে ‘দ্য স্কুল অব রক’</h1>
          </div>
          <div className="basis-1/3 font-nasalization p-2 border group overflow-clip">
            <a
              href="https://www.prothomalo.com/entertainment/song/5ajb6mh51d?fbclid=IwAR3KaX9E5cxLADlXi782fdA6XRX3tI934zOKoCKLsJ9f28jVkZRAL2g-iLM"
              target="blank"
            >
              <div className="bg-black opacity-0 flex justify-center items-center absolute inset-0 group-hover:opacity-60 transition-all duration-500">
                <h1 className="font-basalizatio">Clieck To Read more</h1>
              </div>
            </a>

            <img src={newsPaloJames} alt="news" />
            <h1 className="text-center mt-3">
              ঢাকায় গাইবেন জেমস, একই কনসার্টে থাকছে নতুন ব্যান্ডের সুযোগ
            </h1>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsMedia;

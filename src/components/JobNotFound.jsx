import React from "react";
import NotFound from "../assets/creatJob.png";

const JobNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center col-span-4 py-25">
      <img className="mx-auto w-[500px] dark:text-white" src={NotFound}></img>

      <button class="relative flex mt-5  w-[195px]  items-center gap-1 py-1 px-12 border-2 border-orange-500 font-semibold text-[16px] text-orange-500 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group bg-transparent">
        {/* <!-- Left arrow --> */}
        <svg
          viewBox="0 0 24 24"
          class="absolute left-[-25%] w-5 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-5 group-hover:fill-white"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>

        <span class="relative z-10 -translate-x-3 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-white">
          Next More
        </span>

        <span class="absolute inset-0 m-auto w-[20px] h-[20px] bg-orange-500 rounded-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>

        <svg
          viewBox="0 0 24 24"
          class="absolute right-8 w-5 fill-orange-500 z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default JobNotFound;

import React from "react";
import Agency from "../branding/Agency";
import { HomeIcon, User } from "lucide-react";

type Props = {};

const HeroText = (props: Props) => {
  return (
    <div className="flex-1 text-center md:text-start ">
      <p className="flex flex-wrap md:justify-start justify-center">
        <HomeIcon className="mr-2 w-5 h-5" />
        <Agency className="font-medium" />
        <p className="ml-1 font-medium">Real Estate Agent</p>
      </p>
      <h1 className="text-4xl md:text-[4.3rem] tracking-wider leading-[40px] md:leading-[90px] font-semibold mt-4">
        Find Your Dream
        <br /> Home Today
      </h1>
      <p className="font-semibold mt-4 max-w-[600px]">
        Are you ready to start the search for your dream home? Look no further
        than <Agency />
      </p>
      <div className="flex items-center justify-center md:justify-start">
        <div className="bg-dark-blue w-fit p-6 rounded-b-xl rounded-tr-xl flex gap-3 items-center  mt-8 shadow-xl">
          <div className="flex">
            <div className="bg-gray-300 p-2 rounded-full z-10 -mr-2 mt-1">
              <User />
            </div>
            <div className="bg-gray-300 p-2 rounded-full z-20 shadow-xl">
              <User />
            </div>
            <div className="bg-gray-300 p-2 rounded-full z-10 -ml-2 mt-1">
              <User />
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">
              <span className="text-yellow">200+</span> Satisfied Clients
            </p>
            <p className="text-gray-400">Ready to serve you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;

import React from "react";

import phone from "../../public/phone.png";
import Image from "next/image";
import Button from "../reuseable/Button";

type Props = {};

const ContactBanner = (props: Props) => {
  return (
    <div className="flex justify-center text-center  items-center flex-col xl:flex-row md:py-[50px] py-10 bg-[#040720] text-white  xl:gap-[150px] gap-10">
      <div>
        <h1 className="lg:text-[50px] sm:text-[40px] text-[30px] font-bold md:w-[700px] ">
          Contact Us to Start Your Real Estate <span className="font-normal text-[#FFD278]">Journey.</span>
        </h1>
      </div>
      <div className="flex items-center gap-5">
        <Button buttonStyle="blue">Contact Us</Button>
        <Button buttonStyle="yellow">1(233)345-4567</Button>
      </div>
    </div>
  );
};

export default ContactBanner;

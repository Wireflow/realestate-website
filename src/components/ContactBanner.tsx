import React from "react";
import { Button } from "./ui/button";
import phone from "../../public/phone.png";
import Image from "next/image";

type Props = {};

const ContactBanner = (props: Props) => {
  return (
    <div className="flex justify-center  xl:flex-row flex-col xl:gap-[420px] md:py-[40px] py-10 bg-[#040613] text-white pl-10 gap-7">
      <h1 className="md:text-[30px] sm:text-[30px] text-[20px] font-bold sm:w-[600px]">
        Contact Us to Start Your Real Estate Journey !
      </h1>
      <div className="flex items-center gap-5">
        <button>Contact us</button>
        <button className="flex gap-2 items-center">
          <Image src={phone} alt="phone" width={20} height={20} />
          1(233)345-4567
        </button>
      </div>
    </div>
  );
};

export default ContactBanner;

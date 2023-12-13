import React from "react";
import { Button } from "./ui/button";
import phone from "../../public/phone.png";
import Image from "next/image";
import { agent } from "../data/branding/AgentData";
import formatPhone from "@/utils/formatPhone";
import Link from "next/link";

type Props = {};

const ContactBanner = (props: Props) => {
  const phoneNumber = formatPhone(agent.info.contact.phone);

  return (
    <div className="flex justify-center  xl:flex-row flex-col xl:gap-[420px] md:py-[40px] py-10 bg-[#040613] text-white pl-10 gap-7">
      <h1 className="md:text-[30px] sm:text-[30px] text-[20px] font-bold sm:w-[600px]">
        Contact Us to Start Your Real Estate Journey !
      </h1>
      <div className="flex items-center gap-5">
        <button>Contact us</button>
        <Link className="flex gap-2 items-center" href={`tel:${phoneNumber}`}>
          <Image src={phone} alt="phone" width={20} height={20} />
          {phoneNumber}
        </Link>
      </div>
    </div>
  );
};

export default ContactBanner;

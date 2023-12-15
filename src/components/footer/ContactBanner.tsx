import React from "react";
import Image from "next/image";
import { agent } from "../../data/branding/agent-data";
import formatPhone from "@/utils/formatPhone";
import Link from "next/link";
import { Phone } from "lucide-react";
import Button from "../reuseable/Button";
import Section from "../reuseable/Section";

type Props = {};

const ContactBanner = (props: Props) => {
  const phoneNumber = formatPhone(agent.info.contact.phone);

  return (
    <Section background="black" size="md">
      <div className="flex justify-center text-center items-center flex-col xl:flex-row text-white  xl:gap-[140px] gap-10 ">
        <h1 className="lg:text-[50px] sm:text-[40px] text-[30px] font-bold md:w-[700px]">
          Contact Us to Start Your Real Estate Journey!
        </h1>
        <div className="flex items-center gap-5 px-5 flex-wrap justify-center">
          <Button buttonStyle="blue">Contact Us</Button>
          <Link
            className="flex gap-2 items-center text-sm bg-yellow text-darker-blue rounded-md xl:py-3 py-3 px-8 font-bold hover:bg-opacity-80 "
            href={`tel:${phoneNumber}`}
          >
            <Phone className="w-4 h-4" />
            {phoneNumber}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ContactBanner;

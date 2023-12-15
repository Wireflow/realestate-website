import Header from "@/components/reuseable/Header";
import { agent } from "@/data/branding/agent-data";
import formatPhone from "@/utils/formatPhone";
import { Home, Mail, Phone } from "lucide-react";
import React, { cloneElement } from "react";

type Props = {};

const ContactInfo = (props: Props) => {
  const phone = formatPhone(agent.info.contact.phone);

  const contactDetails = [
    { icon: <Mail />, contact: agent.info.contact.email },
    { icon: <Home />, contact: agent.info.location.address },
    { icon: <Phone />, contact: phone },
  ];

  return (
    <div className="grid gap-4 flex-1 md:flex-[.5] h-[350px]">
      <Header
        title="Get In Touch"
        description="We love hearing from you, all of our contact information is listed
        below!"
        className="mb-0"
      />
      <div className="grid gap-2 md:justify-start justify-center">
        {contactDetails.map((contact, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="bg-light-blue p-2 md:p-4 rounded-full">
              {cloneElement(contact.icon, {
                className: "w-4 h-4 md:w-6 md:h-6 text-black",
              })}
            </div>
            <h4 className="text-sm md:text-lg font-semibold">
              {contact.contact}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;

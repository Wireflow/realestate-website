import React from "react";
import { twMerge } from "tailwind-merge";
import { agent } from "../../data/branding/AgentData";

type LogoProps = {
  className?: string;
};

const PhoneNumber = ({ className }: LogoProps) => {
  const contact = String(agent.info.contact.phone);
  const area_code = contact.slice(0, 3);
  const phone = contact.slice(3).slice(0, 3) + "-" + contact.slice(-4);

  return (
    <span className={twMerge("font-semibold", className)}>
      {`(${area_code}) ${phone}`}
    </span>
  );
};

export default PhoneNumber;

import React from "react";
import { twMerge } from "tailwind-merge";
import { agent } from "../../data/branding/agent-data";
import formatPhone from "@/utils/formatPhone";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

const PhoneNumber = ({ className }: LogoProps) => {
  const phone = formatPhone(agent.info.contact.phone);

  return (
    <Link href={`tel:${phone}`} className={twMerge("font-semibold", className)}>
      {phone}
    </Link>
  );
};

export default PhoneNumber;

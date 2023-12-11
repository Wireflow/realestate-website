import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

const PhoneNumber = ({ className }: LogoProps) => {
  return (
    <span className={twMerge("font-semibold", className)}>(347) 129-1293</span>
  );
};

export default PhoneNumber;

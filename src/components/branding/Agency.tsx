import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

const Agency = ({ className }: LogoProps) => {
  return (
    <span className={twMerge("text-black font-semibold", className)}>
      Coastal Realty 1 Corp
    </span>
  );
};

export default Agency;

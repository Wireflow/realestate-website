import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <span className={twMerge("text-4xl text-white font-semibold", className)}>
      Samantha
    </span>
  );
};

export default Logo;

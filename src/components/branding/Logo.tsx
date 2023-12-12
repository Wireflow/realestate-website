import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={twMerge("text-6xl text-white", className)}>BNGOON</div>
  );
};

export default Logo;

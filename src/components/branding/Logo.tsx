import React from "react";
import { twMerge } from "tailwind-merge";
import { agent } from "../../data/branding/AgentData";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <span className={twMerge("text-4xl text-white font-semibold", className)}>
      {agent.info.firstname}
    </span>
  );
};

export default Logo;

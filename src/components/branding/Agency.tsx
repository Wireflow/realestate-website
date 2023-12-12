import React from "react";
import { twMerge } from "tailwind-merge";
import { agent } from "../../data/branding/AgentData";

type LogoProps = {
  className?: string;
};

const Agency = ({ className }: LogoProps) => {
  return (
    <span className={twMerge("text-black font-semibold", className)}>
      {agent.info.broker}
    </span>
  );
};

export default Agency;

import React from "react";
import { twMerge } from "tailwind-merge";
import { agent } from "../../data/branding/AgentData";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
<<<<<<< HEAD
    <span className={twMerge("text-4xl text-white font-semibold", className)}>
      {agent.info.firstname}
    </span>
=======
    <div className={twMerge("text-6xl text-white", className)}>BNGOON</div>
>>>>>>> ff7163c124d25b9f811bb23b1a74a3a3decb9ecf
  );
};

export default Logo;

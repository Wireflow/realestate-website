import React from "react";

import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import { agent } from "../../data/branding/AgentData";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="flex flex-col gap-10 justify-center z-10 px-4 py-8 w-full md:gap-20 lg:px-[10rem] lg:py-20 lg:flex-row lg:gap-40"
      style={{
        backgroundImage: `url(${agent.images.hero.mainImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeroText />
      <HeroForm />
    </div>
  );
};

export default Hero;

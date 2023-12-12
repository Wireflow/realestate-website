import React from "react";

import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import { agent } from "../../data/branding/AgentData";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      className="z-10 px-4 lg:px-[10rem] py-8 lg:py-20 w-full flex lg:flex-row flex-col gap-10 md:gap-20 lg:gap-40 justify-center"
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

import React from "react";

import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import { agent } from "../../data/branding/AgentData";
import SectionContainer from "../SectionContainer";

type Props = {};

const Hero = (props: Props) => {
  const { mainImage } = agent.images.hero;

  return (
    <SectionContainer
      backgroundImage={mainImage}
      className="bg-no-repeat bg-cover"
    >
      <div className="flex flex-col gap-10 justify-center z-10 w-full md:gap-20 lg:px-[8rem] lg:flex-row lg:gap-40">
        <HeroText />
        <HeroForm />
      </div>
    </SectionContainer>
  );
};

export default Hero;

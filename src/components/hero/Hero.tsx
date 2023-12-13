import React from "react";

import HeroText from "./HeroText";
import HeroForm from "./HeroForm";
import { agent } from "../../data/branding/agent-data";
import Section from "../reuseable/Section";

type Props = {};

const Hero = (props: Props) => {
  const { mainImage } = agent.images.hero;

  return (
    <Section backgroundImage={mainImage} className="bg-no-repeat bg-cover">
      <div className="flex flex-col gap-10 justify-center z-10 w-full md:gap-20 lg:px-[8rem] lg:flex-row lg:gap-40">
        <HeroText />
        <HeroForm />
      </div>
    </Section>
  );
};

export default Hero;

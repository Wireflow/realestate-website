import React from "react";
import WhyText from "./WhyText";
import WhyGrid from "./WhyGrid";
import Section from "../reuseable/Section";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <Section background="light-blue">
      <div className="flex gap-8 xl:gap-28 items-center justify-center xl:flex-row flex-col ">
        <WhyText />
        <WhyGrid />
      </div>
    </Section>
  );
};

export default WhyUs;

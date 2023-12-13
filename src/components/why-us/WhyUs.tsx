import React from "react";
import WhyText from "./WhyText";
import WhyGrid from "./WhyGrid";
import SectionContainer from "../SectionContainer";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <SectionContainer background="light-blue">
      <div className="flex gap-8 xl:gap-28 items-center justify-center xl:flex-row flex-col ">
        <WhyText />
        <WhyGrid />
      </div>
    </SectionContainer>
  );
};

export default WhyUs;

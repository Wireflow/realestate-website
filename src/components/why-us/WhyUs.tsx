import React from "react";
import WhyText from "./WhyText";
import WhyGrid from "./WhyGrid";

type Props = {};

const WhyUs = (props: Props) => {
  return (
    <div className=" bg-light-blue p-8 md:p-16 lg:p-28 flex gap-8 xl:gap-28 items-center justify-center xl:flex-row flex-col ">
      <WhyText />
      <WhyGrid />
    </div>
  );
};

export default WhyUs;

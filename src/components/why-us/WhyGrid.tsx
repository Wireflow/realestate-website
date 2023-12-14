import React from "react";
import { agent } from "../../data/branding/agent-data";
import { HelpingHand, Plus } from "lucide-react";
import Image from "next/image";

type Props = {};

const WhyGrid = (props: Props) => {
  return (
    <div className="grid md:grid-cols-1 gap-5 w-full xl:w-auto">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-dark-blue rounded-xl flex py-14 md:p-0 items-center justify-center flex-col gap-2">
          <div className="flex items-center gap-3">
            <HelpingHand className="text-yellow w-10 h-10" strokeWidth={1.5} />
            <h3 className="text-white text-3xl flex items-center justify-center gap-1 font-semibold">
              {agent.sales.soldProperties.toLocaleString()}{" "}
              <Plus strokeWidth={2.8} />
            </h3>
          </div>
          <p className="text-center text-white font-light">Properties Sold</p>
        </div>
        <Image
          src={"/" + agent.images.whyus.small}
          alt="small-img"
          className="object-cover rounded-xl brightness-90"
          width={1000}
          height={500}
        />
      </div>
      <Image
        src={"/" + agent.images.whyus.large}
        alt="large-img"
        className="object-cover rounded-xl max-h-[250px] brightness-90"
        width={1500}
        height={300}
      />
    </div>
  );
};

export default WhyGrid;

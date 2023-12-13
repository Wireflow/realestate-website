import React from "react";
import { agent } from "../../data/branding/AgentData";
import { HelpingHand, Plus } from "lucide-react";

type Props = {};

const WhyGrid = (props: Props) => {
  return (
    <div className="grid md:grid-cols-1 gap-5 w-full xl:w-auto">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-dark-blue p-16 rounded-xl grid place-items-center">
          <div className="flex items-center gap-3">
            <HelpingHand className="text-yellow w-10 h-10" strokeWidth={1.5} />
            <h3 className="text-white text-3xl flex items-center justify-center gap-1 font-semibold">
              {agent.sales.soldProperties} <Plus strokeWidth={2.8} />
            </h3>
          </div>
          <p className="text-center text-white font-light">Properties Sold</p>
        </div>
        <div
          className="bg-yellow p-16 py-28 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${agent.images.whyus.small})`,
          }}
        ></div>
      </div>
      <div
        className="p-16 py-32 rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${agent.images.whyus.large})`,
        }}
      ></div>
    </div>
  );
};

export default WhyGrid;

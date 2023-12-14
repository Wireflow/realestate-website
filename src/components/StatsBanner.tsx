import React from "react";
import Section from "./reuseable/Section";

type Props = {};

const StatsBanner = (props: Props) => {
  const stats = [
    { stat: "20+", text: "Years in the industry" },
    { stat: "90%", text: "Customer satisfaction" },
    { stat: "10K", text: "Properties sold" },
    { stat: "10+", text: "Cities served" },
  ];

  return (
    <Section background="dark-blue">
      <div className="flex flex-wrap">
        {stats.map((stat, index) => (
          <div
            className="grid gap-2 text-white flex-1 text-center p-2"
            key={index}
          >
            <p className="text-5xl font-bold">{stat.stat}</p>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsBanner;

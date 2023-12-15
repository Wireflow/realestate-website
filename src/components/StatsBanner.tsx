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
    <Section background="dark-blue" size="md">
      <div className="flex gap-3 flex-wrap">
        {stats.map((stat, index) => (
          <div
            className="grid gap-2 text-white flex-1 text-center p-2"
            key={index}
          >
            <p className="xl:text-5xl text-4xl font-bold">{stat.stat}</p>
            <p className="xl:text-xl text-sm">{stat.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsBanner;

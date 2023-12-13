import React from "react";
import { agent } from "../../data/branding/AgentData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

type Props = {};

const WhyText = (props: Props) => {
  const reasons = [
    {
      title: "Proven Results",
      description:
        "Consistent success in turning aspirations into achievements in real estate transactions.",
    },
    {
      title: "Your Goals, My Priority",
      description:
        "Client-centric approach, shaping our strategy around your unique needs for a personalized, satisfying experience.",
    },
    {
      title: "Transparent Integrity",
      description:
        "Clear, honest communication and unwavering integrity for peace of mind throughout our journey.",
    },
  ];
  return (
    <Card className="bg-transparent border-none outline-none rounded-none flex-1 xl:flex-auto xl:max-w-[500px] shadow-none">
      <CardHeader>
        <CardTitle className="text-[2rem]">
          Why Choose {agent.info.firstname}?
        </CardTitle>
        <CardDescription>
          Select us as your real estate partner for a proven track record,
          client-centric focus, and a commitment to transparent and personalized
          service tailored to your unique needs.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-yellow p-4 w-fit rounded-full">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold">{reason.title}</p>
              <p className=" text-slate-500">{reason.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WhyText;

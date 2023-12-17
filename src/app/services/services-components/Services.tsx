import React from "react";
import Card from "../../../components/reuseable/Card";
import Section from "../../../components/reuseable/Section";
import Header from "../../../components/reuseable/Header";
import { agent } from "@/data/branding/agent-data";
import { services } from "@/data/services";

type Props = {};

const Services = (props: Props) => {
  return (
    <Section>
      <Header
        action={true}
        title="Discover Our Services"
        description="Turning Keys, Fulfilling Dreams"
        actionTitle="See All Services"
      />
      <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 p-5">
        {services.map((service, index) => (
          <Card
            className={` ${
              service.title === "Rent A Property"
                ? "xl:col-span-1 col-span-full"
                : ""
            }`}
            key={index}
            image={service.image}
            Title={service.title}
            Description={service.description}
            ButtonText={service.buttonText}
            ButtonType={service.buttonType}
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;

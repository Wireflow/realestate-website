import Card from "@/components/reuseable/Card";
import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import React from "react";

type Props = {};

const Agents = (props: Props) => {
  return (
    <Section>
      <Header
        action={true}
        title="Our Exclusive Agents"
        description="Our Agents: Turning dreams into keys, one property at a time"
        actionTitle="Become Our Agent"
      />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-10">
        <Card
          CardDescriptionStyle=" text-sm font-medium"
          CardTitleStyle=" text-[20px] font-semibold"
          IconContainerStyle=""
          CardContainerStyle="flex flex-col gap-3 justify-center items-start w-full"
          image="agent1.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
          ImageWidth={300}
          ImageHeight={400}
          ImageStyle="rounded-xl"
        />
        <Card
          CardDescriptionStyle=" text-sm font-medium"
          CardTitleStyle=" text-[20px] font-semibold"
          IconContainerStyle=""
          CardContainerStyle="flex flex-col gap-3 justify-center items-start"
          image="agent2.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
          ImageWidth={300}
          ImageHeight={400}
          ImageStyle="rounded-xl"
        />
        <Card
          CardDescriptionStyle=" text-sm font-medium"
          CardTitleStyle=" text-[20px] font-semibold"
          IconContainerStyle=""
          CardContainerStyle="flex flex-col gap-3 justify-center items-start"
          image="agent3.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
          ImageWidth={300}
          ImageHeight={400}
          ImageStyle="rounded-xl"
        />
        <Card
          CardDescriptionStyle=" text-sm font-medium"
          CardTitleStyle=" text-[20px] font-semibold"
          IconContainerStyle=""
          CardContainerStyle="flex flex-col gap-3 justify-center items-start "
          image="agent4.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
          ImageWidth={300}
          ImageHeight={400}
          ImageStyle="rounded-xl"
        />
      </div>
    </Section>
  );
};

export default Agents;

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
          image="agent1.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
        />
        <Card
          image="agent2.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
        />
        <Card
          image="agent3.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
        />
        <Card
          image="agent4.jpg"
          Title="Mustafa Jajeh"
          Description="Senior Agent"
          ButtonText="Contact Agent"
          ButtonType="outline"
        />
      </div>
    </Section>
  );
};

export default Agents;

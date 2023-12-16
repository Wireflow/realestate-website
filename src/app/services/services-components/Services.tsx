import React from "react";
import Card from "../../../components/reuseable/Card";
import Section from "../../../components/reuseable/Section";
import Header from "../../../components/reuseable/Header";

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
      <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
        <Card
          CardDescriptionStyle="text-center text-sm"
          CardTitleStyle="text-2xl font-bold"
          IconContainerStyle="rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center"
          CardContainerStyle="flex flex-col items-center gap-5 border px-10 py-20 rounded-xl"
          image="SellIcon.png"
          Title="Sell A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
          ImageWidth={40}
          ImageHeight={40}
        />
        <Card
          CardDescriptionStyle="text-center text-sm"
          CardTitleStyle="text-2xl font-bold"
          IconContainerStyle="rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center"
          CardContainerStyle="flex flex-col items-center gap-5 border px-10 py-20 rounded-xl"
          image="BuyIcon.png"
          Title="Buy A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ImageWidth={40}
          ImageHeight={40}
        />
        <Card
          CardDescriptionStyle="text-center text-sm"
          CardTitleStyle="text-2xl font-bold"
          IconContainerStyle="rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center"
          CardContainerStyle="flex flex-col items-center gap-5 border px-10 py-20 rounded-xl  col-span-full xl:col-span-1"
          image="RentIcon.png"
          Title="Rent A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
          ImageWidth={40}
          ImageHeight={40}
        />
      </div>
    </Section>
  );
};

export default Services;

import React from "react";
import Card from "../reuseable/Card";
import Section from "../reuseable/Section";
import Header from "../reuseable/Header";

type Props = {};

const Services = (props: Props) => {
  return (
    <Section>
      <Header
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
          Icon="SellIcon.png"
          Title="Sell A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
        />
        <Card
          CardDescriptionStyle="text-center text-sm"
          CardTitleStyle="text-2xl font-bold"
          IconContainerStyle="rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center"
          CardContainerStyle="flex flex-col items-center gap-5 border px-10 py-20 rounded-xl"
          Icon="BuyIcon.png"
          Title="Buy A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
        />
        <Card
          CardDescriptionStyle="text-center text-sm"
          CardTitleStyle="text-2xl font-bold"
          IconContainerStyle="rounded-full bg-light-blue w-[100px] h-[100px] flex justify-center items-center"
          CardContainerStyle="flex flex-col items-center gap-5 border px-10 py-20 rounded-xl  col-span-full xl:col-span-1"
          Icon="RentIcon.png"
          Title="Rent A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
        />
      </div>
    </Section>
  );
};

export default Services;

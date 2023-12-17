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
      <div className=" grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 p-5 ">
        <Card
          image="SellIcon.png"
          Title="Sell A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"

        />
        <Card
          image="BuyIcon.png"
          Title="Buy A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
        />
        <Card
        className="xl:col-span-1 col-span-full"
          image="RentIcon.png"
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

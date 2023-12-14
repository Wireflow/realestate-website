import React from "react";
import Card from "../reuseable/Card";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-between px-[150px] ">
        <div>
          <h2 className="text-[40px] font-semibold">Discover Our Services</h2>
          <p className="text-lg font-medium text-gray-400">
            Turning Keys, Fulfilling Dreams
          </p>
        </div>
        <div>
          <p className="text-lg font-bold">See All Services</p>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <Card
          Icon="SellIcon.png"
          Title="Sell A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
        />
        <Card
          Icon="BuyIcon.png"
          Title="Buy A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
        />
        <Card
          Icon="RentIcon.png"
          Title="Rent A Property"
          Description="Maximize your property's appeal effortlessly. As your dedicated real estate professional"
          ButtonText="Learn More"
          ButtonType="outline"
        />
      </div>
    </div>
  );
};

export default Services;

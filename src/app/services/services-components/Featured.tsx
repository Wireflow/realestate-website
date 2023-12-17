import ListingTypeBadge from "@/components/listings/ListingTypeBadge";
import Button from "@/components/reuseable/Button";
import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import { Bath, BedDouble, Ruler, icons } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Featured = (props: Props) => {
  const featured_data = [
    { title: "3 Beds", icon: <BedDouble size={30} /> },
    { title: "3 Baths", icon: <Bath size={30} /> },
    { title: "3 Sqft", icon: <Ruler size={30} /> },
  ];

  return (
    <Section className="lg:p-0" background="light-blue">
      <div className="grid lg:grid-cols-2 place-items-center gap-20">
        <div className="bg-black w-full  FeaturedImage"></div>
        <div className="">
          <Header
            action={false}
            title="Featured Property"
            description="Discover dream-worthy homes in our featured properties collection."
          />
          <div className=" flex flex-col gap-8 items-start">
            <div className="flex flex-col items-start gap-4">
              <ListingTypeBadge
                type="sale"
                className="static shadow-none px-6 "
              />
              <div className="flex flex-col md:flex-row md:gap-[120px]">
                <div>
                  <h3 className="text-[20px] font-semibold">
                    Luxurious Modern House
                  </h3>
                  <p className="text-gray-500 text-[18px]">36 Future, CO</p>
                </div>
                <div>
                  <h2 className="font-bold text-[32px]">$4,490</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              {featured_data.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white h-40 w-[150px] rounded-xl text-center flex items-center gap-5 justify-center flex-grow flex-col"
                >
                  <span className="bg-darker-blue rounded-full p-4 text-white">
                    {feature.icon}
                  </span>
                  <p className="md:text-lg font-medium">{feature.title}</p>
                </div>
              ))}
            </div>

            <Button>Schedule A Tour</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Featured;

import Button from "@/components/reuseable/Button";
import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import { Bath, BedDouble, Ruler } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Featured = (props: Props) => {
  return (
    <Section className="lg:p-0" background="light-blue">
      <div className="grid lg:grid-cols-2 place-items-center gap-20">
        <div className="bg-black w-full  FeaturedImage"></div>
        <div className="">
          <Header
            action={false}
            title="Featured Properties"
            description="Discover dream-worthy homes in our featured properties collection."
          />
          <div className=" flex flex-col gap-8 items-start">
            <div className="flex flex-col items-start gap-4">
              <p className="bg-yellow px-6 py-2 rounded-lg font-medium">For Sale</p>
              <div className="flex flex-col md:flex-row md:gap-[120px]">
                <div>
                  <h3 className="text-[20px] font-semibold">
                    Luxurious Modern House
                  </h3>
                  <p className="text-gray-300 text-[18px]">36 Future, CO</p>
                </div>
                <div>
                  <h2 className="font-bold text-[32px]">$4,490</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5">
              <div className="bg-white h-40 w-[150px] rounded-xl text-center flex items-center gap-5 justify-center flex-grow flex-col">
                <span className="bg-darker-blue rounded-full p-4 text-white"><BedDouble size={30}/></span>
                
                <p className="md:text-lg font-medium">3 Beds</p>
              </div>
              <div className="bg-white h-40 w-[150px] rounded-xl text-center flex items-center gap-5 justify-center flex-grow flex-col">
              <span className="bg-darker-blue rounded-full p-4 text-white">  <Bath size={30} /></span>
              
                <p className="md:text-lg font-medium">3 Bathrooms</p>
              </div>
              <div className="bg-white h-40 w-[150px] rounded-xl text-center flex items-center gap-5 justify-center flex-grow flex-col">
              <span className="bg-darker-blue rounded-full p-4 text-white"><Ruler size={30}/></span>
                <p className="md:text-lg font-medium">800 Sqft</p>
              </div>
            </div>

            <Button>Schedule A Tour</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Featured;

import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import React from "react";

type Props = {};

const Discover = (props: Props) => {
  return (
    <Section>
      <div className="grid xl:grid-cols-2  gap-10">
        <div className="flex flex-col justify-center gap-8 xl:max-w-[40rem] items-start">
          <div>
            <Header
              action={false}
              title="Discover Our Services"
              description="Swiftly unlock your dream home with personalized solutions tailored just for you."
            />
            <p className="xl:max-w-[40rem] font-medium">
              Experience a faster and more personalized journey to your dream
              home with us. Our dedicated team leverages cutting-edge technology
              and an extensive network to provide exclusive opportunities,
              ensuring a seamless and efficient process that sets us apart in
              the market.
            </p>
          </div>
          <div className="grid grid-cols-1 w-full gap-3">
            <div className="flex sm:justify-between justify-center gap-3 flex-col sm:flex-row  items-center px-10 py-5 bg-gray-100 rounded-xl ">
              <h2 className="font-bold text-[24px]">Real Estate Investment</h2>
              <p className="bg-yellow px-3 py-1 text-md flex justify-center items-center rounded-lg font-semibold">
                90%
              </p>
            </div>
            <div className="flex sm:justify-between justify-center gap-3 flex-col sm:flex-row  items-center px-10 py-5 bg-gray-100 rounded-xl ">
              <h2 className="font-bold text-[24px]">Rental Properties</h2>
              <p className="bg-yellow px-3 py-1 text-md flex justify-center items-center rounded-lg font-semibold">
                90%
              </p>
            </div>
            <div className="flex sm:justify-between justify-center gap-3 flex-col sm:flex-row  items-center px-10 py-5 bg-gray-100 rounded-xl ">
              <h2 className="font-bold text-[24px]">Property Managment</h2>
              <p className="bg-yellow px-3 py-1 text-md flex justify-center items-center rounded-lg font-semibold">
                90%
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 flex items-end justify-end rounded-xl DiscoverImage ">
          <div className="flex gap-10 px-[44px] md:py-[40px] py-[20px] mt-60 bg-gray-100 rounded-tl-3xl">
            <div className="text-center">
              <h2 className="font-bold text-[32px]">10K</h2>
              <p className="font-medium text-[16px]">Properties sold</p>
            </div>
            <div className="text-center">
              <h2 className="font-bold text-[32px]">20+</h2>
              <p className="font-medium text-[16px]">States Served</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Discover;

import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import Image from "next/image";
import React from "react";

type Props = {};

const Sell = (props: Props) => {
  return (
    <Section>
      <div className="grid xl:grid-cols-2 gap-10">
        <div className="SellImage xl:h-full h-60 ">
      
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <Header
              action={false}
              title="Smart Selling for Top Value"
              description="Sell smarter, faster, and at its peak value with our strategic expertise."
            />
            <p className="font-medium">
              Unlock the full potential of your property with our expert selling
              strategies. We navigate the market with precision, ensuring a swift
              and profitable sale tailored to your goals.
            </p>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex justify-center flex-col items-start gap-2">
              <div className="rounded-full bg-gray-100 p-5">
                <Image
                  src="/check.png"
                  alt="check-icon"
                  width={20}
                  height={20}
                />
              </div>
              <h2 className="font-semibold text-[20px]">Hassle-free Process</h2>
              <p className="text-gray-400">
                Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus
                sodales massa scelerisque. Sit dignissim.
              </p>
            </div>
            <div className="flex justify-center flex-col items-start gap-2">
              <div className="rounded-full bg-gray-100 p-5">
                <Image
                  src="/check.png"
                  alt="check-icon"
                  width={20}
                  height={20}
                />
              </div>
              <h2 className="font-semibold text-[20px]">Hassle-free Process</h2>
              <p className="text-gray-400">
                Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus
                sodales massa scelerisque. Sit dignissim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Sell;

import Button from "@/components/reuseable/Button";
import Header from "@/components/reuseable/Header";
import Image from "next/image";
import React from "react";

type Props = {};

const FAQOther = (props: Props) => {
  return (
    <div className="flex-[0.5] flex flex-col items-center md:items-start">
      <Image
        src={"/listing-image-1.jpg"}
        className="rounded-xl object-cover mb-6"
        alt="test"
        width={1000}
        height={800}
      />
      <Header
        title="Have Other Questions?"
        description="Feel free to reach out to ask any other questions"
        size="sm"
        className="mb-5"
      />
      <Button buttonStyle="lightblue">Contact Us</Button>
    </div>
  );
};

export default FAQOther;

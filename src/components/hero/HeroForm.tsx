import React from "react";

type Props = {};

const HeroForm = (props: Props) => {
  return (
    <div className="bg-white rounded-xl p-10 max-w-[500px]">
      <div>
        <p className="text-2xl font-semibold">Real Estate Inquiry Form</p>
        <p>
          Please provide the following information to help us better understand
          your real estate needs.
        </p>
      </div>
    </div>
  );
};

export default HeroForm;

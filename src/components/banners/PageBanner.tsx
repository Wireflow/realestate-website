import React from "react";
import Section from "../reuseable/Section";

type BannerProps = {
  PageName: string;
  PagePath: string;
};

const PageBanner = ({ PageName, PagePath }: BannerProps) => {
  return (
    <Section className="text-center text-white" background="dark-blue">
      <h2 className="text-5xl mb-2 font-medium">{PageName}</h2>
      <p className="text-md font-medium">{PagePath}</p>
    </Section>
  );
};

export default PageBanner;

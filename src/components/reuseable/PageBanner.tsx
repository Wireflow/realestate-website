import React from "react";
import Section from "./Section";

type BannerProps = {
  PageName: string;
  PagePath: string;
};

const PageBanner = ({ PageName, PagePath }: BannerProps) => {
  return (
    <Section className="text-center ">
      <h2 className="text-5xl mb-2 font-medium">{PageName}</h2>
      <p className="text-md font-medium">{PagePath}</p>
    </Section>
  );
};

export default PageBanner;

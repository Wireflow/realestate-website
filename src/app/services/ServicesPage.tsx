import React from "react";
import Discover from "./services-components/Discover";
import Sell from "./services-components/Sell";
import Video from "./services-components/Video";
import Agents from "./services-components/Agents";
import Featured from "./services-components/Featured";
import PageBanner from "@/components/banners/PageBanner";

type Props = {};

const ServicesPage = (props: Props) => {
  return (
    <>
      <PageBanner PageName="Services" PagePath="Home / Services" />
      <Discover />
      <Sell />
      <Video />
      {/* <Agents /> */}
      <Featured />
    </>
  );
};

export default ServicesPage;

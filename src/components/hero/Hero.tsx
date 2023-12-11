import React from "react";
import Agency from "../branding/Agency";
import { Home, User } from "lucide-react";
import HeroText from "./HeroText";
import HeroForm from "./HeroForm";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-yellow px-[10rem] py-28 w-full flex justify-between">
      <HeroText />
      <HeroForm />
    </div>
  );
};

export default Hero;

import React from "react";
import { twMerge } from "tailwind-merge";

type SectionContainerProps = {
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  background?: "white" | "light-blue" | "black" | "dark-blue";
};

const SectionContainer = ({
  children,
  backgroundImage,
  className,
  background = "white",
}: SectionContainerProps) => {
  const bg_variants = {
    white: "bg-white",
    "light-blue": "bg-light-blue",
    black: "bg-darker-blue",
    "dark-blue": "bg-dark-blue",
  };

  return (
    <div
      className={twMerge(
        "p-8 md:p-16 lg:p-28",
        bg_variants[background],
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default SectionContainer;

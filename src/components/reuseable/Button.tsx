import React from "react";
import { Button as ShadButton } from "../ui/button";
import { twMerge } from "tailwind-merge";

type CustomButtonProps = {
  buttonStyle?: "yellow" | "blue" | "outline" | "lightblue";
  className?: string;
  children?: string;
};

const Button = ({
  className,
  buttonStyle = "blue",
  children,
}: CustomButtonProps) => {
  const base = "rounded-md py-6 px-10 font-bold hover:bg-opacity-80 ";
  const variants = {
    yellow: base + "bg-yellow text-darker-blue",
    blue: base + "bg-darker-blue text-white",
    outline: base + "bg-transparent border-2 border-dark-blue text-darker-blue",
    lightblue: base + "bg-dark-blue text-white",
  };

  return (
    <ShadButton className={twMerge(variants[buttonStyle], className)}>
      {children}
    </ShadButton>
  );
};

export default Button;

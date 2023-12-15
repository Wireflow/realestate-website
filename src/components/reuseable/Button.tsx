import React, { ButtonHTMLAttributes } from "react";
import { Button as ShadButton } from "../ui/button";
import { twMerge } from "tailwind-merge";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: "yellow" | "blue" | "outline" | "lightblue";
  className?: string;
  children?: string;
}

const Button = ({
  className,
  buttonStyle = "blue",
  children,
  ...props
}: CustomButtonProps) => {
  const base = "rounded-md py-6 px-10 font-bold hover:bg-opacity-80 ";
  const variants = {
    yellow: base + "bg-yellow text-darker-blue",
    blue: base + "bg-darker-blue text-white",
    outline:
      base +
      "bg-transparent border-2 border-dark-blue text-darker-blue hover:text-white",
    lightblue: base + "bg-dark-blue text-white",
  };

  return (
    <ShadButton
      className={twMerge(variants[buttonStyle], className)}
      {...props}
    >
      {children}
    </ShadButton>
  );
};

export default Button;

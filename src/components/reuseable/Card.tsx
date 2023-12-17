import Image from "next/image";
import React from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

type CardProps = {
  ButtonType?: "yellow" | "blue" | "outline" | "lightblue";
  ButtonText?: string;
  Title?: string;
  Description?: string;
  image?: string;
  className?: string;
};

const Card = ({
  ButtonType,
  ButtonText,
  Title,
  Description,
  image,
  className,
}: CardProps) => {
  return (
    <div className={twMerge('flex flex-col gap-3 justify-center items-center w-full border p-10 rounded-2xl', className)}>
      <div className={twMerge('p-4 rounded-full bg-gray-200', className)} >
        <Image
          className={twMerge(' p-1', className)}
          src={`/${image}`}
          width={40}
          height={40}
          alt="service-icon"
        />
      </div>
      <div className={twMerge('text-center', className)}>
        <h2 className={twMerge('text-[20px] font-semibold', className)}>{Title}</h2>
        <p className={twMerge('text-sm font-medium', className)}>{Description}</p>
      </div>
      <Button className="p-5" buttonStyle={ButtonType}>
        {ButtonText}
      </Button>
    </div>
  );
};

export default Card;

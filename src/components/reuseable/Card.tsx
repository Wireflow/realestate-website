import Image from "next/image";
import React from "react";
import Button, { ButtonStyle } from "./Button";
import { twMerge } from "tailwind-merge";
import { CustomButtonProps } from "./Button";

type CardProps = {
  ButtonType?: ButtonStyle;
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
    <div
      className={twMerge(
        "flex flex-col gap-[16px] justify-center items-center w-full border px-[32px] py-[40px] rounded-xl",
        className
      )}
    >
      <div className={twMerge("p-[40px] rounded-full bg-gray-200", className)}>
        <Image
          className={twMerge(" p-1", className)}
          src={`/${image}`}
          width={50}
          height={50}
          alt="service-icon"
        />
      </div>
      <div className={twMerge("text-center flex flex-col gap-5", className)}>
        <h2 className={twMerge("text-[24px] font-[600]", className)}>
          {Title}
        </h2>
        <p
          className={twMerge(
            "text-sm font-[14px] text-gray-400 xl:px-[30px] leading-6",
            className
          )}
        >
          {Description}
        </p>
      </div>
      <Button className="p-5" buttonStyle={ButtonType}>
        {ButtonText}
      </Button>
    </div>
  );
};

export default Card;

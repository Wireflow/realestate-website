import Image from "next/image";
import React from "react";
import Button from "./Button";

type CardProps = {
  ButtonType?: "yellow" | "blue" | "outline" | "lightblue";
  ButtonText?: string;
  Title?: string;
  Description?: string;
  image?: string;
  CardContainerStyle?: string;
  IconContainerStyle?: string;
  CardTitleStyle?: string;
  CardDescriptionStyle?: string;
  ImageWidth?: number;
  ImageHeight?: number;
  ImageStyle?: string;
};

const Card = ({
  ButtonType,
  ButtonText,
  ImageStyle,
  Title,
  Description,
  ImageWidth,
  ImageHeight,
  image,
  CardContainerStyle,
  IconContainerStyle,
  CardTitleStyle,
  CardDescriptionStyle,
}: CardProps) => {
  return (
    <div className={CardContainerStyle}>
      <div className={IconContainerStyle}>
        <Image
          className={ImageStyle}
          src={`/${image}`}
          width={ImageWidth}
          height={ImageHeight}
          alt="service-icon"
        />
      </div>
      <div>
        <h2 className={CardTitleStyle}>{Title}</h2>
        <p className={CardDescriptionStyle}>{Description}</p>
      </div>
      <Button className="p-5" buttonStyle={ButtonType}>
        {ButtonText}
      </Button>
    </div>
  );
};

export default Card;

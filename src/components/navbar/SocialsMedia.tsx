import { socials } from "../branding/SocialMedia";
import { cloneElement } from "react";
import { twMerge } from "tailwind-merge";

type SocialMediaProps = {
  mobile?: boolean;
  iconStyle?: string;
  className?: string;
};

const SocialsMedia = ({ mobile, iconStyle, className }: SocialMediaProps) => {
  return (
    <div
      className={twMerge(
        `gap-6 lg:flex self-center mr-10 ${mobile ? "flex" : " hidden"}`,
        className
      )}
    >
      {socials.map((platform, index) => (
        <a key={index} href={platform.link} target="_black" rel="noreferror">
          {iconStyle
            ? cloneElement(platform.icon, { className: iconStyle })
            : platform.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialsMedia;

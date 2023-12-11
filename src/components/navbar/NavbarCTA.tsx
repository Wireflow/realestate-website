import { Phone } from "lucide-react";
import React from "react";
import PhoneNumber from "../branding/PhoneNumber";
import { twMerge } from "tailwind-merge";

type NavbarCTAProps = { mobile?: boolean; className?: string };

const NavbarCTA = ({ mobile, className }: NavbarCTAProps) => {
  return (
    <div
      className={twMerge(
        `items-center md:flex ${mobile ? "" : "hidden max-w-[300px] w-full"}`
      )}
    >
      <div
        className={twMerge(
          `bg-yellow h-full w-full flex items-center justify-center gap-4 px-8`,
          className
        )}
      >
        <div className="bg-black rounded-full p-5">
          <Phone className="w-5 h-5" fill="#FFD278" stroke="#FFD278" />
        </div>
        <div>
          <p>Need Help?</p>
          <PhoneNumber className="font-semibhold" />
        </div>
      </div>
    </div>
  );
};

export default NavbarCTA;

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ChevronRight } from "lucide-react";
import { Star } from "lucide-react";

type NavLinkProps = {
  href: string;
  display?: string;
  isActive?: boolean;
  className?: string;
};

const NavLink = ({ href, display, isActive, className }: NavLinkProps) => {
  return (
    <Link href={href}>
      <Button
        variant={"ghost"}
        className={twMerge(
          `${isActive ? " text-darker-blue" : "text-gray-800"} py-5`,
          className
        )}
      >
        {display}

        {isActive ? (
          <Star className="w-4 h-4 ml-1.5 -mr-2" fill="white" strokeWidth={1} />
        ) : (
          <ChevronRight className="w-5 h-5 mt-[1px] -mr-2" strokeWidth={1} />
        )}
      </Button>
    </Link>
  );
};

export default NavLink;

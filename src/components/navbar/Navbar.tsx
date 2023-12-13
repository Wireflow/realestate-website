"use client";

import links from "../../data/nav-links.json";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import NavbarCTA from "./NavbarCTA";
import SocialsMedia from "./SocialsMedia";
import Logo from "../branding/Logo";
import { usePathname } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const path = usePathname();

  return (
    <nav className=" bg-white border-b-2 border-gray-150 flex justify-between w-full">
      <div className="py-8 px-8 lg:px-20 flex gap-24 items-center w-full">
        <div>
          <Logo className="text-black" />
        </div>
        <div className="lg:flex gap-6 hidden ">
          {links.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              display={link.display}
              isActive={path === link.path}
            />
          ))}
        </div>
      </div>
      <SocialsMedia />
      <NavbarCTA />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;

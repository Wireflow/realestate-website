import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { headers } from "next/headers";
import links from "../data/NavbarLinks.json";
import NavLink from "./NavLink";
import NavbarCTA from "./NavbarCTA";
import SocialsMedia from "./SocialsMedia";
import Logo from "./branding/Logo";

type Props = {};

const MobileNavbar = (props: Props) => {
  const path = headers().get("next-url") || "/";

  return (
    <Sheet>
      <SheetTrigger className="static md:absolute md:bottom-8 md:right-8 lg:hidden">
        <>
          <Menu className="w-12 h-12 md:hidden block text-darker-blue mr-8" />

          <div className="md:block hidden bg-dark-blue p-2 rounded-xl">
            <Menu className="w-12 h-12 text-white" />
          </div>
        </>
      </SheetTrigger>
      <SheetContent className="bg-dark-blue p-0 flex flex-col justify-between h-full">
        <div className="p-6">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8 w-full">
            {links.map((link, index) => (
              <NavLink
                key={index}
                href={link.path}
                display={link.display}
                isActive={path === link.path}
                className="border-none w-full justify-start py-8 text-white"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center w-full">
            <SocialsMedia
              mobile
              iconStyle="text-white mb-8"
              className="justify-between w-full px-8 mr-0"
            />
          </div>
          <NavbarCTA mobile className="py-5" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;

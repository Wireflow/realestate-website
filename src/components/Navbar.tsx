import React from "react";
import Logo from "./branding/Logo";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="py-4 px-6 bg-dark-blue">
      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;

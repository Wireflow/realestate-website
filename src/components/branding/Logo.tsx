import React from "react";

type LogoProps = {
  className: string;
};

const Logo = ({ className }: LogoProps) => {
  return <div className={className}>BNGOON</div>;
};

export default Logo;

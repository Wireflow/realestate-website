import React from "react";
import { twMerge } from "tailwind-merge";

type HeaderProps = {
  title?: string;
  description?: string;
  actionTitle?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "default";
  action?: boolean;
  onActionClick?: () => void;
};

const Header = ({
  title,
  description,
  actionTitle,
  action = false,
  onActionClick,
  className,
  size = "default",
}: HeaderProps) => {
  const size_variants = {
    default: "text-4xl",
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl lg:text-7xl",
  };

  return (
    <div
      className={twMerge(
        "flex justify-between flex-col md:flex-row items-center mb-10",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <h2
          className={twMerge(
            "font-semibold text-center md:text-start",
            size_variants[size]
          )}
        >
          {title}
        </h2>
        <p className="text-md font-medium text-gray-400 text-center md:text-start">
          {description}
        </p>
      </div>
      {action ? (
        <button className="font-bold mt-4 md:mt-2" onClick={onActionClick}>
          {actionTitle}
        </button>
      ) : (
        null
      )}
    </div>
  );
};

export default Header;

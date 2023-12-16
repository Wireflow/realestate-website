import React from "react";
import { ListingType } from "./Listing";
import { twMerge } from "tailwind-merge";

type ListingTypeBadgeProps = {
  type: ListingType;
  className?: string;
};

const ListingTypeBadge = ({ type, className }: ListingTypeBadgeProps) => {
  function renderListingType() {
    if (type === "rent") return "For Rent";
    if (type === "sale") return "For Sale";
    if (type === "sold") return "Property Sold";
  }

  return (
    <div
      className={twMerge(
        `top-4 left-4 absolute rounded-md shadow-xl ${
          type === "sold" ? "bg-red-400" : "bg-yellow"
        } px-4 py-2`,
        className
      )}
    >
      <p className="text-sm">{renderListingType()}</p>
    </div>
  );
};

export default ListingTypeBadge;

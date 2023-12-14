import React from "react";
import { ListingType } from "./Listing";

type ListingTypeBadgeProps = {
  type: ListingType;
};

const ListingTypeBadge = ({ type }: ListingTypeBadgeProps) => {
  function renderListingType() {
    if (type === "rent") return "For Rent";
    if (type === "sale") return "For Sale";
    if (type === "sold") return "Property Sold";
  }

  return (
    <div
      className={`top-4 left-4 absolute rounded-md shadow-xl ${
        type === "sold" ? "bg-red-400" : "bg-yellow"
      } px-4 py-2`}
    >
      <p className="text-sm">{renderListingType()}</p>
    </div>
  );
};

export default ListingTypeBadge;

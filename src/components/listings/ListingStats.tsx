import React from "react";
import { Listing } from "./Listing";
import { ArrowRightCircle } from "lucide-react";

type ListingStatsProps = Pick<Listing, "bedrooms" | "bathrooms" | "sqft">;

const ListingStats = ({ bedrooms, bathrooms, sqft }: ListingStatsProps) => {
  const listing = [
    { count: bedrooms, text: "Beds" },
    { count: bathrooms, text: "Baths" },
    { count: sqft, text: "sqft" },
  ];
  return (
    <div className="flex justify-between items-center flex-wrap">
      {listing.map((listing, index) => (
        <p
          className="flex gap-2 items-center text-center text-sm flex-1 whitespace-nowrap"
          key={index}
        >
          <ArrowRightCircle className="w-6 h-6" strokeWidth={1.5} />
          {listing.count} {listing.text}
        </p>
      ))}
    </div>
  );
};

export default ListingStats;

import Image from "next/image";
import React from "react";
import ListingTypeBadge from "./ListingTypeBadge";
import ListingStats from "./ListingStats";

export type ListingType = "rent" | "sale" | "sold";
export type Listing = {
  type: ListingType;
  title?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  img?: React.ComponentProps<typeof Image>["src"];
  price?: number;
};

export type ListingProps = {
  listing: Listing;
};

const Listing = ({
  listing: { type, title = "No Title", bathrooms, bedrooms, sqft, img, price },
}: ListingProps) => {
  const altText = title
    ? `Image of ${title} - ${type} listing`
    : "Placeholder Image";

  return (
    <div className="border-2 rounded-xl relative">
      <div className="overflow-hidden rounded-t-xl">
        <div className="bg-dark-blue h-[200px] flex items-center">
          {img ? (
            <Image
              src={img}
              alt={altText}
              width={800}
              height={200}
              className="text-white object-contain"
            />
          ) : null}
        </div>
      </div>
      <div className="p-4 grid gap-6">
        <p className="font-medium">
          $ {price?.toLocaleString()} {type === "rent" && "/mo"}
        </p>
        <p className="font-bold">{title}</p>
        <ListingTypeBadge type={type} />
        <ListingStats bathrooms={bathrooms} bedrooms={bedrooms} sqft={sqft} />
      </div>
    </div>
  );
};

export default Listing;

import React from "react";
import Section from "../reuseable/Section";
import Header from "../reuseable/Header";
import Listing from "./Listing";
import { listingData } from "../../data/listings";

type Props = {};

const Listings = (props: Props) => {
  const reviews = 4;

  return (
    <Section>
      <Header
        title="Explore Our Latest Listings"
        description="Discover a diverse range of properties and find your dream home."
        actionTitle="Inquire About Listing"
      />
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-4">
        {listingData.map((listing, i) => (
          <Listing key={i} listing={listing} />
        ))}
      </div>
    </Section>
  );
};

export default Listings;

"use client";

import { agent } from "@/data/branding/agent-data";
import Section from "../reuseable/Section";
import Header from "../reuseable/Header";
import Testimonial from "./Testimonial"; 
import Reviews from '../../data/Reviews.json'
import Image from "next/image";

type Props = {};

const Testimonials = (props: Props) => {
  const { desktop, mobile } = agent.images.testimonials;
 
  return (
    <Section background="light-blue">
      <Header
        action={true}
        title="Hear What They Say"
        description="Testimonials From Clients"
        actionTitle="See All Testimonials"
      />
      <div className="flex xl:flex-row flex-col mt-10 gap-6 md:gap-10 justify-between items-center">
        <Image
          src={"/" + desktop}
          alt="desktop"
          width={400}
          loading="lazy"
          height={2000}
          className="hidden xl:block rounded-xl  object-cover border-2"
        />
        <Image
          src={"/" + mobile}
          alt="mobile"
          width={1500}
          height={1000}
          loading="lazy"
          className="block xl:hidden rounded-xl max-h-[250px]  object-cover border-2"
        />
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {Reviews.map((review, index) => (
            <Testimonial
              name={review.name}
              review={review.review}
              key={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

"use client";

import { agent } from "@/data/branding/AgentData";
import SectionContainer from "../SectionContainer";
import SectionHeader from "../SectionHeader";
import Testimonial from "./Testimonial";

type Props = {};

const Testimonials = (props: Props) => {
  const reviews = [
    {
      name: "Marc Pillay",
      review:
        "My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative nd understanding, as well as very efficient.",
    },
    {
      name: "Marc Pillay",
      review:
        "My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative nd understanding, as well as very efficient.",
    },
    {
      name: "Marc Pillay",
      review:
        "My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative nd understanding, as well as very efficient.",
    },
    {
      name: "Marc Pillay",
      review:
        "My wife and I have been dealing with Bangoonan for over 18 months, and they are outstanding. Co-operative nd understanding, as well as very efficient.",
    },
  ];

  return (
    <SectionContainer background="light-blue">
      <SectionHeader
        title="Hear What They Say"
        description="Testimonials From Clients"
        actionTitle="See All Testimonials"
        className="md:max-w-[1320px] mx-auto"
      />
      <div className="flex xl:flex-row flex-col mt-10 gap-6 md:gap-10 justify-center items-center">
        <div
          className=" hidden xl:block min-w-[400px] self-stretch  bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${agent.images.testimonials.desktop})`,
          }}
        ></div>
        <div
          className=" block xl:hidden w-full h-[200px]  bg-cover bg-center bg-no-repeat rounded-xl"
          style={{
            backgroundImage: `url(${agent.images.testimonials.mobile})`,
          }}
        >
          d
        </div>
        {/* <picture>
            <source
              width={400}
              srcSet="TestimonialHome.jpg"
              media="(min-width: 1280px)"
              className="rounded-xl"
            />
            <img
              src="TestimonialMobile.jpg"
              alt="MDN"
              className="rounded-xl h-[500px]"
            />
          </picture> */}

        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {reviews.map((review, index) => (
            <Testimonial
              name={review.name}
              review={review.review}
              key={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;

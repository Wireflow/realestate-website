"use client";
import { StarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import TestimonialHome from "../../public/TestimonialHome.jpg";
import TestimonialMobile from "../../public/TestimonialMobile.jpg";
import Button from "../reuseable/Button";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="bg-[#F2F5FF]  ">
      <div className="flex justify-between xl:px-[150px] lg:px-[100] px-8 flex-col md:flex-row  pt-10 ">
        <div className="flex flex-col gap-3 mb-3">
          <h1 className="font-semibold text-[40px]">Hear What They Say</h1>
          <p className="text-lg font-medium text-gray-400">
            Testimonials From Clients
          </p>
        </div>
        <Button buttonStyle="yellow">Get Started</Button>
      </div>
      <div className="flex justify-center items-center flex-col xl:flex-row gap-[20px] h-full py-10">
        <div className="  px-5  text-white rounded-xl ">
          <picture>
            <source
              width={400}
              srcSet="TestimonialHome.jpg"
              media="(min-width: 1280px)"
            />
            <img src="TestimonialMobile.jpg" alt="MDN" />
          </picture>
        </div>
        <div className=" ">
          <div className=" flex flex-col sm:flex-row gap-x-5 gap-10 p-5">
            <div className="bg-[#FFF] rounded-xl p-10 xl:w-[400px]  ">
              <div className="flex gap-2">
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm ">
                  My wife and I have been dealing with Bangoonan for over 18
                  months, and they are outstanding. Co-operative nd
                  understanding, as well as very efficient.
                </p>
                <h1 className="font-bold text-2xl">Marc Pillay</h1>
              </div>
            </div>
            <div className="bg-[#FFF] rounded-xl p-10 xl:w-[400px] ">
              <div className="flex gap-2">
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm ">
                  My wife and I have been dealing with Bangoonan for over 18
                  months, and they are outstanding. Co-operative nd
                  understanding, as well as very efficient.
                </p>
                <h1 className="font-bold text-2xl">Marc Pillay</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-x-5 gap-10 p-5">
            <div className="bg-[#FFF] rounded-xl p-10 xl:w-[400px]">
              <div className="flex gap-2">
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm ">
                  My wife and I have been dealing with Bangoonan for over 18
                  months, and they are outstanding. Co-operative nd
                  understanding, as well as very efficient.
                </p>
                <h1 className="font-bold text-2xl">Marc Pillay</h1>
              </div>
            </div>
            <div className="bg-[#FFF] rounded-xl p-10  xl:w-[400px]">
              <div className="flex gap-2">
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
                <StarIcon className="w-5 h-12" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm ">
                  My wife and I have been dealing with Bangoonan for over 18
                  months, and they are outstanding. Co-operative nd
                  understanding, as well as very efficient.
                </p>
                <h1 className="font-bold text-2xl">Marc Pillay</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

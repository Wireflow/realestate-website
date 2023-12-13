import { StarIcon, UserCircle } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type TestimonialProps = {
  name: string;
  review: string;
  stars?: number;
};

const Testimonial = ({ review, name, stars = 5 }: TestimonialProps) => {
  return (
    <Card className="shadow-none xl:max-w-[420px] h-full">
      <CardHeader className="py-3">
        <CardTitle className="flex gap-2">
          {Array.from({ length: stars }).map((v, i) => (
            <StarIcon key={i} className="w-5 h-12 fill-yellow stroke-yellow" />
          ))}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-sm ">{review}</p>
        <div className="flex items-center gap-4 mt-4">
          <div className=" bg-dark-blue w-fit p-3 rounded-full">
            <UserCircle className="text-white w-10 h-10" />
          </div>
          <h1 className="font-bold text-2xl">{name}</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;

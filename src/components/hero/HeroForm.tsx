"use client";

import React from "react";
import { Form } from "../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useForm } from "react-hook-form";
import { Inquiry, InquirySchema } from "@/types/inquiry";
import { zodResolver } from "@hookform/resolvers/zod";
import Field from "../form/Field";
import Select from "../form/Select";
import { preferences } from "@/types/inquiry";
import Button from "../reuseable/Button";

type Props = {};

const HeroForm = (props: Props) => {
  const form = useForm<Inquiry>({
    resolver: zodResolver(InquirySchema),
    defaultValues: {
      name: "",
      phone: undefined,
      preference: undefined,
      location: "",
      budget: undefined,
    },
  });

  const { handleSubmit, control, setValue, getValues } = form;

  const onSubmit = (data: Inquiry) => {
    console.log(data);
  };

  return (
    <Card className="bg-white rounded-xl p-7 lg:max-w-[500px] shadow-xl w-full flex-1">
      <CardHeader>
        <CardTitle className="text-2xl">Real Estate Inquiry Form</CardTitle>
        <CardDescription>
          Please provide the following information to help us better understand
          your real estate needs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="font-semibold">Your Information</p>
            <Field control={control} name="name" placeholder="your name" />
            <Field
              control={control}
              name="phone"
              placeholder="your phone number"
              type="number"
              onChange={(v) => {
                setValue("phone", parseInt(v.target.value));
              }}
            />

            <p className="font-semibold mt-8">Your Preferences</p>
            <Select
              control={control}
              name="preference"
              placeholder="type of property you are interested in"
              options={preferences}
            />
            <Field
              control={control}
              name="location"
              placeholder="what is your preferred location?"
            />
            <Field
              control={control}
              name="budget"
              placeholder="what is your budget?"
              type="number"
              onChange={(v) => {
                setValue("budget", parseInt(v.target.value));
              }}
            />
            <Button buttonStyle="blue" className="w-full py-8 mt-4">
              Get Inquiry
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default HeroForm;

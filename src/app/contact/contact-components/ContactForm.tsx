"use client";

import Field from "@/components/form/Field";
import Textarea from "@/components/form/Textarea";
import Button from "@/components/reuseable/Button";
import { Form } from "@/components/ui/form";
import { Contact, ContactSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const ContactForm = (props: Props) => {
  const form = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit, control, setValue, getValues } = form;

  const onSubmit = (data: Contact) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 grid bg-light-blue p-10 rounded-xl gap-4"
      >
        <div className="grid lg:grid-cols-2 gap-4">
          <Field
            control={control}
            name="name"
            placeholder="your name"
            type="text"
            label="Your Name"
          />
          <Field
            control={control}
            name="email"
            placeholder="your phone number"
            type="email"
            label="Your Email"
          />
        </div>
        <Textarea
          control={control}
          name="message"
          rows={8}
          label="Your Message"
          placeholder="Writing your message here..."
        />
        <Button buttonStyle="lightblue" className="w-full py-8 mt-4">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;

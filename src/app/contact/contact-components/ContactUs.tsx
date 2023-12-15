import Section from "@/components/reuseable/Section";
import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-10 md:gap-28">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};

export default ContactUs;

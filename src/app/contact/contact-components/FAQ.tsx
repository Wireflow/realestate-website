import Header from "@/components/reuseable/Header";
import Section from "@/components/reuseable/Section";
import React from "react";
import FAQAccordion from "./FAQAccordion";
import FAQOther from "./FAQOther";

type Props = {};

const FAQ = (props: Props) => {
  return (
    <Section>
      <div className="flex gap-20 h-full flex-col lg:flex-row">
        <FAQAccordion />
        <FAQOther />
      </div>
    </Section>
  );
};

export default FAQ;

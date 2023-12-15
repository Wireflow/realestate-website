import React from "react";
import ContactUs from "./ContactUs";
import PageBanner from "@/components/reuseable/PageBanner";
import FAQ from "./FAQ";

type Props = {};

const ContactPage = (props: Props) => {
  return (
    <>
      <PageBanner PageName="Contact Us" PagePath="Home / Contact Us" />
      <ContactUs />
      <FAQ />
    </>
  );
};

export default ContactPage;

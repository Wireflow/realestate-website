import React from "react";
import ContactUs from "./contact-components/ContactUs";
import PageBanner from "@/components/banners/PageBanner";
import FAQ from "./contact-components/FAQ";

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

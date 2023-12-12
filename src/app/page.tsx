import Hero from "@/components/hero/Hero";
import Testimonials from "@/components/Testimonials";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <ContactBanner />
      <Footer />
    </>
  );
}

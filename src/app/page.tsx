import ContactBanner from "@/components/ContactBanner";
import Testimonials from "@/components/testimonials/Testimonials";
import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/why-us/WhyUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Testimonials />
      <ContactBanner />
    </>
  );
}

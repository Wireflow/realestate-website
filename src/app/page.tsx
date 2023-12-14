import ContactBanner from "@/components/contact-banner/ContactBanner";
import Testimonials from "@/components/testimonial/Testimonials";
import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/why-us/WhyUs";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services/>
      <Testimonials />
      <ContactBanner />
    </>
  );
}

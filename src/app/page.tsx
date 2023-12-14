import Testimonials from "@/components/testimonials/Testimonials";
import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/why-us/WhyUs";
import Listings from "@/components/listings/Listings";
import StatsBanner from "@/components/StatsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Listings />
      <StatsBanner />
      <Testimonials />
    </>
  );
}

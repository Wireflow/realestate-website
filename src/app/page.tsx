import Testimonials from "@/components/testimonials/Testimonials";
import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/why-us/WhyUs";
import Services from "@/app/services/services-components/Services";
import Listings from "@/components/listings/Listings";
import StatsBanner from "@/components/banners/StatsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <WhyUs />
      <Services />
      <Testimonials />
      <Listings />
    </>
  );
}

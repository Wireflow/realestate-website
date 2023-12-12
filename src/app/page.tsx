import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Testimonials/>
      <ContactBanner/>
      <Footer/>
    </>
  );
}

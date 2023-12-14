import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { agent } from "@/data/branding/agent-data";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ContactBanner from "@/components/footer/ContactBanner";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: `${agent.info.firstname} Real Estate`,
  description: `${agent.info.firstname} ${agent.info.lastname} Real Estate Agent Site`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge("max-w-[1920px] mx-auto", poppins.className)}>
        <Navbar />
        {children}
        <ContactBanner />
        <Footer />
      </body>
    </html>
  );
}

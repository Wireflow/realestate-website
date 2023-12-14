import React from "react";
import Logo from "../branding/Logo";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { agent } from "../../data/branding/agent-data";
import formatPhone from "@/utils/formatPhone";

type Props = {};

const Footer = (props: Props) => {
  const phone = formatPhone(agent.info.contact.phone);
  const { address, city } = agent.info.location;
  const { email } = agent.info.contact;

  return (
    <footer className="bg-black text-white ">
      {/* Top body of the Footer Containing Links and Info About Site */}
      <div className="flex flex-wrap md:flex-nowrap md:justify-center  md:pl-0 pl-10 xl:gap-40 gap-20 py-20">
        <div className="flex flex-col gap-4 md:pl-5">
          <Logo />
          <p className="w-80 text-[16px]">
            Copyright @ 2023 {agent.info.broker} Powered by{" "}
            <Link href={"https://wireflow.us"} target="_blank" rel="noreferrer">
              Wireflow
            </Link>
          </p>
        </div>
        <div className="flex gap-20 flex-wrap">
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-medium">About Me</h3>
            <p className="w-80">
              With over {agent.info.experienceYears} of experience in the real
              estate market, I have honed my skills to navigate the complexities
              of the industry. Whether you&apos;re a first-time buyer, seasoned
              investor, or looking to sell, my expertise ensures a smooth and
              successful transaction.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-medium">Location</h3>
            <div>
              <p className="text-[16px]">Bronx</p>
              <p className="text-[16px]">Manhattan</p>
              <p className="text-[16px]">Queens</p>
              <p className="text-[16px]">Brooklyn</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[32px] font-medium">Contact Info</h3>
            <div>
              <p className="text-[16px]">{`${address}, ${city}`}</p>
              <Link className="text-[16px]" href={`tel:${phone}`}>
                {phone}
              </Link>
              <p className="text-[16px]">
                <Link href="mailto:info@bangoonan.com">{email}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom footer Social icons, Terms/Privacy */}
      <div className="flex justify-center xl:gap-[900px] lg:gap-[400px] md:gap-[200px] items-center flex-col md:flex-row">
        <div className="flex gap-5 items-center">
          <h2 className="text-[24px]">Follow Us</h2>
          <div className="flex gap-3">
            <Link
              href={agent.socials[1].link}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogoIcon className="w-6 h-24" />
            </Link>
            {/* Repeat the above pattern for other social links */}
          </div>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

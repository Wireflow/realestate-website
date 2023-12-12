import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const agent = {
  info: {
    firstname: "Nader",
    lastname: "M",
    broker: "Coastal Realty 1 Corp",
    image: "",
    contact: {
      phone: 3471291293,
      email: "samantha@costalrealty.com",
    },
    location: {
      address: "4611 White Plains Road",
      city: "Bronx",
      state: "New York",
      zipcode: 10466,
    },
  },
  sales: {
    servedClients: 200,
    soldProperties: 200,
    rentedHomes: 800,
  },
  socials: [
    {
      platform: "Facebook",
      link: "https://facebook.com/",
      icon: <Facebook className="w-4 h-4" fill="black" />,
    },
    {
      platform: "Instagram",
      link: "https://instagram.com/",
      icon: <Instagram className="w-4 h-4" />,
    },
    {
      platform: "Twitter",
      link: "https://x.com/",
      icon: <Twitter className="w-4 h-4" fill="black" />,
    },
    {
      platform: "Linkedin",
      link: "https://linkedin.com/",
      icon: <Linkedin className="w-4 h-4" />,
    },
  ],

  images: {
    hero: {
      mainImage: "hero-img.jpg",
    },
  },
};

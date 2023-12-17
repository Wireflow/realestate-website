import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const agent = {
  info: {
    firstname: "Logo",
    lastname: "M",
    broker: "Broker Name",
    experienceYears: 10,
    image: "",
    contact: {
      phone: 12345678,
      email: "Example@email.com",
    },
    location: {
      address: "1234 address street",
      city: "Ex: Bronx",
      state: "Ex: New York",
      zipcode: 12345,
    },
  },
  sales: {
    servedClients: 200,
    soldProperties: 10000,
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
      mainImage: "HeroImage.webp",
    },
    whyus: {
      large: "image-why-1.png",
      small: "image-why-2.jpg",
    },
    testimonials: {
      desktop: "TestimonialHome.jpg",
      mobile: "TestimonialMobile.jpg",
    },
  },
  services: {
    sell: {
      title: "Sell A Property",
      description:
        "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
      buttonText: "Learn More",
      buttonStyle: "outline",
      image: "SellIcon.png",
    },
    buy: {
      title: "Buy A Property",
      description:
        "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
      buttonText: "Learn More",
      image: "BuyIcon.png",
    },
    rent: {
      title: "Rent A Property",
      description:
        "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
      buttonText: "Learn More",
      buttonStyle: "outline",
      image: "RentIcon.png",
    },
  },
};

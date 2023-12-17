import { ButtonStyle } from "@/components/reuseable/Button";

type Service = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  buttonType: ButtonStyle;
  image: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Sell A Property",
    description:
      "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
    buttonText: "Learn More",
    buttonType: "outline",
    image: "SellIcon.png",
  },
  {
    id: 2,
    title: "Buy A Property",
    description:
      "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
    buttonText: "Learn More",
    image: "BuyIcon.png",
    buttonType: "blue",
  },
  {
    id: 3,
    title: "Rent A Property",
    description:
      "Aliquet rhoncus ornare dolor quam. Quis egestas aliquam purus sodales massa scelerisque. Sit dignissim.",
    buttonText: "Learn More",
    buttonType: "outline",
    image: "RentIcon.png",
  },
];

import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Contact",
    href: "/contact",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "#about",
    Icon: PiChatCircleBold,
  },
  {
    title: "Book a call",
    href: "#calendly",
    Icon: FiSearch,
  },
];

export const Details = {
  email: "management@of-vision.eu",
  instagram: "https://www.instagram.com/ofvisionc",
};

"use client";
import Image from "next/image";
import React from "react";
import { NavMobile } from "./Navmobile";
import { routes } from "@/lib/constant";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className=" py-4 px-4 lg:px-7 flex justify-between text-text h-20 lg:h-24 items-center">
      <div>
        {" "}
        <Image
          alt="Image"
          width={50}
          height={50}
          className="mix-blend-screen rounded-full"
          src={
            "https://cdn.discordapp.com/attachments/1189916729116217425/1189919986077143140/IMG_3571.png?ex=659fea58&is=658d7558&hm=fce349a7acf40de4677347d5a863d06fdaa455b83f3753da018f7b0d206ff084&"
          }
        ></Image>
      </div>

      <NavMobile />

      <nav className=" hidden lg:block">
        <ul className="hidden lg:flex lg:items-center  justify-center  gap-5 text-sm">
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li key={title} className=" list-none ">
                <Motion {...OpacityAnimation}>
                  <a
                    href={href}
                    className="flex items-center gap-1 font-extralight leading-[1] text-lg   hover:text-text/40 transition-all"
                  >
                    {title}
                  </a>
                </Motion>
              </li>
            );
          })}
        </ul>
      </nav>
      <Motion {...OpacityAnimation} className=" cursor-pointer max-lg:hidden">
        <FiInstagram size={20} />
      </Motion>
    </header>
  );
};

export default Navbar;

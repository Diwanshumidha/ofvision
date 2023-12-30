"use client";
import Image from "next/image";
import React from "react";
import { routes } from "@/lib/constant";
import { Motion } from "./motion";
import { FadeinView, OpacityAnimation } from "@/lib/animations";
import { Details } from "@/lib/constant";

const Footer = () => {
  return (
    <Motion
      viewport={{
        once: true,
      }}
      variants={FadeinView}
      initial="initial"
      whileInView="animate"
      className="py-20 px-4 lg:px-7 mx-auto flex-col justify-center w-full text-text h-20 lg:h-24 items-center"
    >
      <div className="flex pb-10 justify-center">
        {" "}
        <Image
          alt="Image"
          width={50}
          height={50}
          className="mix-blend-screen rounded-full "
          src={
            "https://cdn.discordapp.com/attachments/1189916729116217425/1189919986077143140/IMG_3571.png?ex=659fea58&is=658d7558&hm=fce349a7acf40de4677347d5a863d06fdaa455b83f3753da018f7b0d206ff084&"
          }
        ></Image>
      </div>

      <nav className=" block">
        <ul className="flex lg:items-center justify-center flex-wrap gap-5 text-sm">
          {routes.map((route) => {
            const { href, title } = route;
            return (
              <li key={title} className=" list-none ">
                <Motion {...OpacityAnimation}>
                  <a
                    href={href}
                    className="flex items-center gap-1 font-bold underline leading-[1] text-lg hover:text-text/40 transition-all"
                  >
                    {title}
                  </a>
                </Motion>
              </li>
            );
          })}
        </ul>
        <div className="flex pb-20 justify-center flex-col text-center gap-4 font-light items-center py-4">
          <p>{Details.email}</p>
          <p>© 2023 OfVision | ALL RIGHTS RESERVED</p>
        </div>
      </nav>
    </Motion>
  );
};

export default Footer;

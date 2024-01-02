import React from "react";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex gap-4 lg:gap-8   flex-col sm:flex-row w-full bg-background justify-center   items-center px-4">
      <div className="">
        <Motion {...OpacityAnimation}>
          <h1 className=" mt-5 font-bold text-lg md:text-2xl lg:text-4xl  ">
            EUROPE‘S LEADING ONLYFANS MANAGEMENT AGENCY
          </h1>
        </Motion>
        <p className=" space-y-3 text-pretty">
          <span className="block text-pretty">
            Welcome to OF Vision, the leading agency to help models to unlock
            their full potential and earn as much as they want. Our team
            consists of experts in every aspect, to be able to help you to
            maximize your earnings and lower your effort.
          </span>
          <span className="block text-pretty">
            Be better than everyone out there.
          </span>
        </p>
        <div className=" max-sm:hidden text-lg lg:text-3xl flex flex-col gap-1 justify-center font-bold  text-background w-max   mt-9">
          <Motion
            initial={{ width: "0px" }}
            animate={{ width: "max-content" }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="bg-text w-max text-nowrap "
          >
            CHOOSE WHAT FEELS{" "}
          </Motion>
          <Motion
            initial={{ width: "0px" }}
            animate={{ width: "max-content" }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="bg-text w-max mx-auto text-nowrap "
          >
            BEST FOR YOU ❤️‍🔥
          </Motion>
        </div>
        <div className=" flex max-sm:hidden  gap-3 mt-5">
          {" "}
          <Link
            href={"#calendly"}
            className="px-5 py-2 font-bold  border-white border-2 border-solid rounded-full  bg-text text-background hover:bg-background hover:text-text transition-all"
          >
            {" "}
            Book a call
          </Link>
          <Button background="black" className=" text-sm">
            <Link href={"/contact"}>Apply online</Link>
          </Button>
        </div>
      </div>

      <div>
        <div className=" w-[250px] h-[350px]  bg-white">
          <img
            alt="Image"
            className=" w-full h-full object-cover"
            src={"/hero_img.webp"}
          />
        </div>
      </div>

      <p className=" text-lg lg:text-3xl sm:hidden flex flex-col gap-1 justify-center font-bold  text-background w-max   mt-9">
        <span className="bg-text w-max ">CHOOSE WHAT WORKS </span>
        <span className="bg-text w-max mx-auto ">BEST FOR YOU ❤️‍🔥</span>
      </p>
      <div className=" flex sm:hidden flex-col   gap-3 mt-5">
        {" "}
        <Link
          href={"#calendly"}
          className="px-5 py-2 font-bold  border-white border-2 border-solid rounded-full  bg-text text-background hover:bg-background hover:text-text transition-all"
        >
          {" "}
          Book a call
        </Link>
        <Button background="black" className=" text-sm">
          <Link href={"/contact"}>Apply online</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";
import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="flex gap-4   flex-col sm:flex-row w-full bg-background justify-center   items-center px-4">
      <div className="">
        <Motion {...OpacityAnimation}>
          <h1 className=" mt-5 font-bold text-lg md:text-2xl lg:text-4xl  ">
            AUSTRALIA’S LEADING ONLYFANS MANAGEMENT AGENCY
          </h1>
        </Motion>
        <p className=" space-y-3">
          <span className="block">
            Welcome to Nonstop Agency, the ultimate hub for ambitious hustlers
            ready to unlock their full earning potential. Our management team
            has been propelling creators to success since day one, and we're
            pumped to take you to new heights in 2023.
          </span>
          <span className="block">
            Outwork them. Outwork them all. Take everything.
          </span>
        </p>
        <p className=" max-sm:hidden text-lg lg:text-3xl flex flex-col gap-1 justify-center font-bold  text-background w-max   mt-9">
          <span className="bg-text w-max ">CHOOSE WHAT WORKS </span>
          <span className="bg-text w-max mx-auto ">BEST FOR YOU ❤️‍🔥</span>
        </p>
        <div className=" flex max-sm:hidden  gap-3 mt-5">
          {" "}
          <Button background="white"> Book a call</Button>
          <Button background="black"> Apply online</Button>
        </div>
      </div>

      <div>
        <div className=" w-[250px] h-[350px]  bg-white">asddsa</div>
      </div>

      <p className=" text-lg lg:text-3xl sm:hidden flex flex-col gap-1 justify-center font-bold  text-background w-max   mt-9">
        <span className="bg-text w-max ">CHOOSE WHAT WORKS </span>
        <span className="bg-text w-max mx-auto ">BEST FOR YOU ❤️‍🔥</span>
      </p>
      <div className=" flex sm:hidden  gap-3 mt-5">
        {" "}
        <Button background="white" className=" text-sm">
          {" "}
          Book a call
        </Button>
        <Button background="black" className=" text-sm">
          {" "}
          Apply online
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;

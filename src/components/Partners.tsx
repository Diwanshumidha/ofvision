"use client";
import React from "react";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";
import Button from "./Button";

const PartnersDetails = {
  heading: "YOUR PARTNER IN SUCCESS",
  paragraph: () => (
    <p className=" flex flex-col gap-3">
      <span>
        Looking to elevate your OnlyFans game to the next level? Look no further
        than OfVision Agency! Our trusted management team has been helping
        Australian creators succeed since day one, and we’re ready to help you
        thrive in 2023. we know the ins and outs of the OnlyFans industry and
        are committed to your success.
      </span>
      <span>
        Our agency offers top-notch support, expertise, and structure to ensure
        your creator account performs at its highest level.
      </span>
      <span>
        Ready to take your OnlyFans to the next level? Join OfVision Agency
        today and start seeing real results!
      </span>
    </p>
  ),
};

const Partners = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-7 justify-center max-md:items-center  ">
      <div className="flex flex-col  gap-4 lg:gap-10">
        <Content></Content>
      </div>
      <div className="flex-1 w-full max-w-[441px] ">
        <div className=" h-[400px] bg-white "></div>
      </div>
    </section>
  );
};

export default Partners;

const Content = () => {
  const Paragraph = PartnersDetails.paragraph;
  return (
    <Motion
      {...OpacityAnimation}
      className=" space-y-3 max-w-[400px] lg:w-max "
      viewport={{
        once: true,
      }}
    >
      <h3 className=" text-2xl font-semibold">{PartnersDetails.heading}</h3>

      <Paragraph />

      <Button background="white">About us </Button>
    </Motion>
  );
};

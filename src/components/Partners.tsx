"use client";
import React from "react";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";
import Button from "./Button";

const PartnersDetails = {
  heading: "YOUR ALLY IN ACHIEVEMENT",
  paragraph: () => (
    <p className=" flex flex-col gap-3">
      <span>
        Ready to take your OnlyFans experience to unprecedented heights? Embrace
        the exceptional services of Ofvision Agency! Our esteemed management
        team has been pivotal in steering Australian creators towards triumph
        since our inception, and we&apos;re poised to elevate your success in
        2023.
      </span>

      <span>
        Armed with an in-depth understanding of the intricacies of the OnlyFans
        industry, we are unwaveringly dedicated to propelling you to new
        heights. At Ofvision, our agency provides unparalleled support, expert
        guidance, and a robust framework to ensure optimal performance for your
        creator account.
      </span>

      <span>
        Embark on the journey to elevate your OnlyFans presence with Ofvision
        Agency. Join us today and witness tangible, substantial results that
        will redefine your success in the dynamic world of content creation.
      </span>
    </p>
  ),
};

const Partners = () => {
  return (
    <section
      id="about"
      className=" flex flex-col md:flex-row gap-7 justify-center max-md:items-center  "
    >
      <div className="flex flex-col  gap-4 lg:gap-10">
        <Content></Content>
      </div>
      <div className="flex-1 w-full max-w-[441px] ">
        <div className=" h-[400px]  ">
          <img
            alt="Image"
            className=" object-contain"
            src={"/partner_img.webp"}
          />
        </div>
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

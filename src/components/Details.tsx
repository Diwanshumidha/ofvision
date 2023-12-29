"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView } from "@/lib/animations";
import Button from "./Button";

const Steps = [
  {
    heading: "SUPER COMPETITIVE",
    paragraph:
      "There are more than 2.1 million different creators on OnlyFans. How do you stand out and keep subscribers?",
  },
  {
    heading: "SUPER COMPETITIVE",
    paragraph:
      "There are more than 2.1 million different creators on OnlyFans. How do you stand out and keep subscribers?",
  },
  {
    heading: "SUPER COMPETITIVE",
    paragraph:
      "There are more than 2.1 million different creators on OnlyFans. How do you stand out and keep subscribers?",
  },
  {
    heading: "SUPER COMPETITIVE",
    paragraph:
      "There are more than 2.1 million different creators on OnlyFans. How do you stand out and keep subscribers?",
  },
];

const Details = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-7 justify-center items-center   ">
      <div className="flex-1 w-full aspect-[1080/1350] bg-white max-w-[441px] ">
        das
      </div>
      <div className=" flex flex-col  gap-4 lg:gap-10">
        {Steps.map((item, idx) => (
          <Point data={item} idx={idx} key={item.heading}></Point>
        ))}
      </div>
    </section>
  );
};

export default Details;

const Point = ({
  data,
  idx,
}: {
  data: (typeof Steps)[number];
  idx: number;
}) => {
  return (
    <Motion
      variants={FadeinView}
      initial="initial"
      whileInView="animate"
      className=" space-y-3 max-w-[400px] "
      custom={idx}
      viewport={{
        once: true,
      }}
    >
      <h3 className=" text-lg font-semibold">{data.heading}</h3>
      <p>{data.paragraph}</p>
    </Motion>
  );
};

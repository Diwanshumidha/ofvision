"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView } from "@/lib/animations";
import Button from "./Button";

const Steps = [
  {
    heading: "HIGHLY COMPETITIVE LANDSCAPE",
    paragraph:
      "With a vast pool of over 2.1 million diverse creators on OnlyFans, the challenge lies in setting yourself apart and retaining a loyal subscriber base.",
  },
  {
    heading: "LACK OF STRATEGIC APPROACH",
    paragraph:
      "A significant number of creators find themselves without a concrete plan. Simply posting content and hoping for organic growth is an ineffective strategy.",
  },
  {
    heading: "TIME CONSTRAINTS",
    paragraph:
      "Navigating the demands of consistently posting content and responding to fan messages can be time-consuming, leaving little room for sustained subscriber interaction.",
  },
  {
    heading: "CREATIVE DROUGHT",
    paragraph:
      "Experiencing a shortage of content ideas can lead to waning interest from your audience, hindering growth potential and limiting your income.",
  },
  {
    heading: "ENGAGEMENT HURDLES",
    paragraph:
      "Sustaining fan interest and securing ongoing payments require dedicated effort. Unfortunately, many models face the challenge of losing both fans and revenue due to insufficient engagement strategies.",
  },
];

const Details = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-7 justify-center    ">
      <div className="flex-1 w-full aspect-[1080/1350] bg-white max-w-[441px] ">
        das
      </div>
      <div className=" flex flex-col  gap-4 lg:gap-10">
        {Steps.map((item, idx) => (
          <Point data={item} idx={idx} key={idx}></Point>
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

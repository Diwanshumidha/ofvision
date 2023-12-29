"use client";
import React from "react";
import { Motion } from "./motion";
import type { Variants } from "framer-motion";
import { FadeinView } from "@/lib/animations";

// TODO: Put extra thing in constant files
const FeaturesArray = [
  {
    heading: "STRONG AGENCY NETWORK",
    paragraph: `Our big network with other known agencies can benefit you. From cross
        promotions to exposure on various platforms, we can leverage our
        connections for your growth.`,
  },
  {
    heading: "STRONG AGENCY NETWORK",
    paragraph: `Our big network with other known agencies can benefit you. From cross
        promotions to exposure on various platforms, we can leverage our
        connections for your growth.`,
  },
  {
    heading: "STRONG AGENCY NETWORK",
    paragraph: `Our big network with other known agencies can benefit you. From cross
        promotions to exposure on various platforms, we can leverage our
        connections for your growth.`,
  },
];

const Features = () => {
  return (
    <section className=" flex flex-col gap-7 justify-center items-center text-center md:flex-row ">
      {FeaturesArray.map((item, idx) => (
        <Feature key={item.heading} data={item} idx={idx} />
      ))}
    </section>
  );
};

export default Features;

const Feature = ({
  data,
  idx,
}: {
  data: (typeof FeaturesArray)[number];
  idx: number;
}) => {
  return (
    <Motion
      variants={FadeinView}
      initial="initial"
      whileInView="animate"
      className=" space-y-3 max-w-[400px]"
      custom={idx}
    >
      <h2 className=" text-xl font-bold">{data.heading}</h2>
      <p>{data.paragraph}</p>
    </Motion>
  );
};

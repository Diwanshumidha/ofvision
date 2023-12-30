"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView } from "@/lib/animations";

// TODO: Put extra thing in constant files
const FeaturesArray = [
  {
    heading: "STRONG AGENCY NETWORK",
    paragraph: `Our agency's strong network with top-notch partners benefits you. From cross-promotions to broad platform exposure, we leverage connections for your growth. Let's elevate your game with Ofvision!`,
  },
  {
    heading: "BIG EARNINGS FOR ALL",
    paragraph: `Rest assured, making significant income on platforms like OnlyFans is not just a dream—it's doable. Join our agency, and you're plugging into a supportive network that maximizes your earning potential.`,
  },
  {
    heading: "LIMITED TO 5 MODELS",
    paragraph: `Small number, right? But here's the scoop – we focus on a select group to guarantee top-notch content.Quality over quantity, always.`,
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
      viewport={{
        once: true,
      }}
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

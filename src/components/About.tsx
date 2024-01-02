"use client";
import React from "react";
import { Motion } from "./motion";
import { OpacityAnimation } from "@/lib/animations";

const About = [
  {
    question: "WHAT ARE WE OFFERING?",
    answer: `you don’t know how to manage your OnlyFans to make as much money as possible? We have the solution….`,
    pointPrefix: "⚜️",
    points: [
      "Content Planning",
      "Social Media Management",
      "Marketing",
      "Chatting",
      "Weekly Strategy Calls",
      "Funnels and Promotion",
      "Personal Branding",
    ],
  },
  {
    question: "REDUCE YOUR EFFORT AND STRESS",
    answer: `are you sick of the feeling of not finding an end to your work? We will change that…`,
    pointPrefix: "⚡️",
    points: [
      "Grow your socials",
      "Get a bigger fanbase",
      "Have more time for yourself",
      "Make money while enjoying free time",
      "We handle everything for you",
      "Just create the content you like",
      "Our support is here for you 24/7",
    ],
  },
];

const AboutSection = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-7 justify-center items-center   ">
      <div className="flex flex-col  gap-4 lg:gap-10">
        {About.map((item, idx) => (
          <AboutComponent key={`${idx} about`} data={item} />
        ))}
      </div>
      <div className="flex-1 w-full max-w-[441px] ">
        <div className=" h-[450px] bg-white">
          <img
            alt="Image"
            className=" w-full h-full object-cover"
            src={"/offer_img.webp"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const AboutComponent = ({ data }: { data: (typeof About)[number] }) => {
  return (
    <Motion
      {...OpacityAnimation}
      className=" space-y-3 max-w-[400px] lg:w-max "
      viewport={{
        once: true,
      }}
    >
      <h3 className=" text-2xl font-semibold">{data.question}</h3>
      <p>{data.answer}</p>
      <ul className="space-y-2">
        {data.points.map((item) => (
          <li key={item}>
            {data.pointPrefix} {item}
          </li>
        ))}
      </ul>
    </Motion>
  );
};

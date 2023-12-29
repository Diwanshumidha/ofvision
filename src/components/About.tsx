"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView, OpacityAnimation } from "@/lib/animations";
import Button from "./Button";

const About = [
  {
    question: "WHAT DO WE DO?",
    answer: `Do you feel stuck and not making enough money? We will fix that…`,
    pointPrefix: "🍒",
    points: [
      "Daily Account Management",
      "Weekly Content Scheduling",
      "Account Branding & Promotions",
      "Message Management",
      "Social Media Management",
      "Viral Growth And Funnels",
    ],
  },
  {
    question: "WHAT DO WE DO?",
    answer: `Do you feel stuck and not making enough money? We will fix that…`,
    pointPrefix: "🍒",
    points: [
      "Daily Account Management",
      "Weekly Content Scheduling",
      "Account Branding & Promotions",
      "Message Management",
      "Social Media Management",
      "Viral Growth And Funnels",
    ],
  },
];

const AboutSection = () => {
  return (
    <section className=" flex flex-col md:flex-row gap-7 justify-center items-center   ">
      <div className="flex flex-col  gap-4 lg:gap-10">
        {About.map((item) => (
          <AboutComponent key={item.question} data={item} />
        ))}
      </div>
      <div className="flex-1 w-full max-w-[441px] ">
        <div className=" h-[450px] bg-white"></div>
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
      <ul>
        {data.points.map((item) => (
          <li>
            {data.pointPrefix} {item}
          </li>
        ))}
      </ul>
    </Motion>
  );
};

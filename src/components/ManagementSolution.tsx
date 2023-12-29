"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView } from "@/lib/animations";

const ManagementArray = [
  {
    heading: "GUIDED CONTENT ",
    paragraph: `Focus solely on creating captivating content while our team provides you with personalised shooting recommendations. `,
  },
  {
    heading: " REVENUE FORMULA",
    paragraph: `We Implement our growth formula which consists of psychology and time tested strategies to earn more from your fans tailored to your unique goals and audience.`,
  },
  {
    heading: "MARKETING FORMULA",
    paragraph: `We are on top of all the latest marketing trends to get your account booming. We do all the research, implementation and take advantage of social media platforms.`,
  },
  {
    heading: "DAILY MANAGEMENT",
    paragraph: `We manage your profile and take care of everything from a to z so you can focus on making amazing content while we grow your brand.`,
  },
];
const ManagementSolutions = () => {
  return (
    <section className="">
      <h2 className=" text-3xl text-center font-bold mb-10 ">
        Our Management Solution{" "}
      </h2>
      <div className=" flex flex-col gap-5 justify-center max-md:items-center  text-center md:flex-row">
        {ManagementArray.map((item, idx) => (
          <ManagementSolution key={item.heading} data={item} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default ManagementSolutions;

const ManagementSolution = ({
  data,
  idx,
}: {
  data: (typeof ManagementArray)[number];
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
      className=" space-y-3 w-[350px] h-[400] flex flex-col  items-center "
      custom={idx}
    >
      <div className="image w-[200px] h-[300px] bg-white"> dasd</div>
      <h2 className=" text-xl font-bold">
        {idx + 1}. {data.heading}
      </h2>
      <p>{data.paragraph}</p>
    </Motion>
  );
};

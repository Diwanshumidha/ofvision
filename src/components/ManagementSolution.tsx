"use client";
import React from "react";
import { Motion } from "./motion";
import { FadeinView } from "@/lib/animations";

const ManagementArray = [
  {
    heading: "GUIDED CONTENT ",
    paragraph: `At OF VISION, we redefine success in the world of OnlyFans by embracing a 'no time' philosophy. Our approach centers on efficiency, eliminating unnecessary time constraints to amplify creators' journeys. `,
  },
  {
    heading: " REVENUE FORMULA",
    paragraph: `At OF VISION, we've cracked the code to revenue on OnlyFans. Our agency isn't just about management; it's about mastering the revenue formula that fuels creators' success.`,
  },
  {
    heading: "MARKETING FORMULA",
    paragraph: `At OF VISION, we don't just manage; we master the art of marketing on OnlyFans. Our agency is built on a robust marketing formula designed to amplify creators' reach and engagement.`,
  },
  {
    heading: "DAILY MANAGEMENT",
    paragraph: `At OF VISION, daily management isn't just about routine tasks; it's about orchestrating a seamless and thriving OnlyFans presence for creators. Our agency excels in daily management, ensuring creators can focus on content creation while we handle the rest.`,
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
          <ManagementSolution key={idx} data={item} idx={idx} />
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
      className=" space-y-3 w-full lg:w-[350px] h-[400] flex flex-col  items-center "
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

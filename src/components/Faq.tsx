"use client";
import { FadeinView } from "@/lib/animations";
import React, { useMemo } from "react";
import { Motion } from "./motion";
import { AnimatePresence } from "framer-motion";

const FaqArray = [
  {
    heading: "What Does The Agency Do?",
    paragraph: () => {
      return (
        <ul className="list-disc pl-5">
          <li>Full Account Manager</li>
          <li>Accountability Partner</li>
          <li>Daily Check Ins / Any Questions, etc</li>
          <li>24/7 Chatters Worldwide</li>
        </ul>
      );
    },
  },
  {
    heading: "How will you get More Subscribers?",
    paragraph: () => {
      return (
        <p className=" flex gap-2 flex-col">
          <span>Various ways.</span>
          <span>
            We will get you viral marketing strategies across social media
            platforms.
          </span>{" "}
          <span>
            In addition we set up your account to increase conversions with
            strategic promotions and account branding.
          </span>{" "}
        </p>
      );
    },
  },
  {
    heading: "What do I have to do?",
    paragraph: () => {
      return (
        <p className="flex flex-col gap-2">
          <span>
            Working with us is super simple. Your only job is to create content
            weekly and custom content when asked. We will do basically
            everything else.{" "}
          </span>
          <span>
            That being said if you really want to grind… I’m sure you could
            think of other ways getting people to subscribe.
          </span>
        </p>
      );
    },
  },
  {
    heading: "How do i get paid?",
    paragraph: () => {
      return <p>We request payouts weekly and you will be paid weekly.</p>;
    },
  },
];
const Faq = () => {
  const midpointIndex = useMemo(() => Math.ceil(FaqArray.length / 2), []);

  const firstHalf = useMemo(
    () => FaqArray.slice(0, midpointIndex),
    [midpointIndex]
  );
  const secondHalf = useMemo(
    () => FaqArray.slice(midpointIndex),
    [midpointIndex]
  );

  return (
    <Motion
      viewport={{
        once: true,
      }}
      variants={FadeinView}
      initial="initial"
      whileInView="animate"
      className=" space-y-3 px-5 items-center "
    >
      <div className="mx-auto w-full">
        <h2 className=" text-3xl text-center font-bold mb-10 ">
          FREQUENTLY ASKED QUESTIONS{" "}
        </h2>

        <div className="mx-auto gap-4 lg:gap-10 w-full mt-8 flex flex-col md:flex-row  items-start divide-y divide-gray-200 ">
          <div className=" flex-1 flex flex-col gap-3 w-full">
            {firstHalf.map((item, index) => (
              <Accordion item={item} index={index} key={index} />
            ))}
          </div>
          <div className=" flex-1 flex flex-col gap-3 w-full">
            {secondHalf.map((item, index) => (
              <Accordion item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Motion>
  );
};

export default Faq;

const Accordion = ({
  item,
  index,
}: {
  item: (typeof FaqArray)[number];
  index: number;
}) => {
  const ItemPara = item.paragraph;
  return (
    <details
      className="group py-2  border-t font-light transition-all "
      key={index}
    >
      <summary className="flex cursor-pointer list-none items-center gap-10 justify-between">
        <span> {item.heading}</span>
        <span className="transition group-open:rotate-180">
          <svg
            fill="none"
            height={24}
            shapeRendering="geometricPrecision"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width={24}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="group-open:animate-fadeIn mt-3 max-w-[90%]">
        <ItemPara />
      </div>
    </details>
  );
};

"use client";
import React from "react";
import { Motion, MotionSpan } from "./motion";
import { FadeinView, OpacityAnimation } from "@/lib/animations";

const About = [
    {
        title: "TRUSTED TEAM",
        pointPrefix: "✓",
        points: [
            "Safe & Secure Management",
            "Our Team Is Directly Trained By Us"
        ],
    },
    {
        title: "ACCOUNTING",
        pointPrefix: "✓",
        points: [
            "Australian Registered Company",
            "Professional Stripe Invoicing"
        ],
    },
    {
        title: "SUPPORT",
        pointPrefix: "✓",
        points: [
            "24/7 Direct Contact With Manager",
            "Zoom Calls Available"
        ],
    },

];

const Info = () => {
    return (
        <section className=" flex flex-col md:flex-row gap-7 justify-center items-center  text-center ">
            <div className="flex gap-4 lg:gap-8   flex-col sm:flex-row w-full bg-background justify-center   items-center px-4">
                <div className="space-y-5">
                    <Motion {...OpacityAnimation}>
                        <h1 className=" mt-5 font-bold text-lg md:text-2xl lg:text-4xl  ">
                            WHAT MAKES{" "}<span>
                                <MotionSpan
                                    initial={{ width: "0px" }}
                                    animate={{ width: "max-content" }}
                                    transition={{
                                        delay: 0.4,
                                        duration: 1,
                                    }}
                                    className="bg-text text-background  w-max text-nowrap "
                                >
                                    OFVISION
                                </MotionSpan>
                            </span>{" "}SUPERIOR
                        </h1>
                    </Motion>
                    <p className="text-center space-y-5 text-pretty">
                        <span className="block text-pretty">
                            At Nonstop Agency, we've been here since before it was cool.
                        </span>
                        <span className="block text-pretty">
                            Our vibe? All about professionalism, trustworthiness, and actual results. We're picky with creators; if you're in with Nonstop, you're in with one of the best.
                        </span>
                        <span className="block text-pretty">Quality over quantity every time.</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col  gap-4 lg:gap-10">
                {About.map((item, idx) => (
                    <InfoComponent key={`${idx} about`} data={item} />
                ))}
            </div>
        </section>
    );
};

export default Info;

const InfoComponent = ({ data }: { data: (typeof About)[number] }) => {
    return (
        <Motion
            {...OpacityAnimation}
            className=" space-y-5 max-w-[400px] lg:w-max "
            viewport={{
                once: true,
            }}
        >
            <h3 className="text-2xl font-bold">{data.title}</h3>
            <ul className="space-y-2">
                {data.points.map((item) => (
                    <li key={item}>
                        <span className="text-blue-400 font-bold">{data.pointPrefix}</span> {item}
                    </li>
                ))}
            </ul>
        </Motion>
    );
};

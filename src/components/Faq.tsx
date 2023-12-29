"use client"
import { FadeinView } from '@/lib/animations'
import React from 'react'
import { Motion } from './motion'

const FaqArray = [
    {
        heading: "What Does The Agency Do?",
        paragraph: () => {
            return <ul className='list-disc pl-5'>
                <li>Full Account Manager</li>
                <li>Accountability Partner</li>
                <li>Daily Check Ins / Any Questions, etc</li>
                <li>24/7 Chatters Worldwide</li>
            </ul>

        },
    },
    {
        heading: "What Does The Agency Do?",
        paragraph: () => {
            return <ul className='list-disc pl-5'>
                <li>Full Account Manager</li>
                <li>Accountability Partner</li>
                <li>Daily Check Ins / Any Questions, etc</li>
                <li>24/7 Chatters Worldwide</li>
            </ul>

        },
    },
    {
        heading: "What Does The Agency Do?",
        paragraph: () => {
            return <ul className='list-disc pl-5'>
                <li>Full Account Manager</li>
                <li>Accountability Partner</li>
                <li>Daily Check Ins / Any Questions, etc</li>
                <li>24/7 Chatters Worldwide</li>
            </ul>

        },
    },
    {
        heading: "What Does The Agency Do?",
        paragraph: () => {
            return <ul className='list-disc pl-5'>
                <li>Full Account Manager</li>
                <li>Accountability Partner</li>
                <li>Daily Check Ins / Any Questions, etc</li>
                <li>24/7 Chatters Worldwide</li>
            </ul>

        },
    },
];
const Faq = () => {
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
                
                    <div className="mx-auto gap-4 w-full mt-8 flex flex-wrap items-start divide-y divide-gray-200 ">
                        {FaqArray.map((item, index) => <FaqDetail item={item} index={index} key={index} />
                        )}
                    </div>
            </div>
        </Motion>
    )
}

export default Faq


const FaqDetail = ({ item, index }: {
    item: (typeof FaqArray)[number];
    index: number;
}) => {

    const ItemPara = item.paragraph
    return <details className="group py-2 border-t font-light w-[49%]" key={index} >
        <summary className="flex cursor-pointer list-none items-center gap-10 justify-between">
            <span> {item.heading}</span>
            <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                </svg>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 max-w-[90%]">
            <ItemPara />
        </p>
    </details>
}

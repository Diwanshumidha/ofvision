import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact - OfVision",
  description: "Some Description",
};
const page = () => {
  return (
    <main className=" pt-10">
      <Contact />
    </main>
  );
};

export default page;

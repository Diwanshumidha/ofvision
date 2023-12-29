"use client";
import React from "react";
import SubmitButton from "./SubmitButton";
import { toast } from "sonner";
import { SendEmail } from "@/actions/Email";

export default function Form() {
  return (
    <form
      action={async (e: FormData) => {
        const res = await SendEmail(e);
        if (res.error) {
          return toast.error("There Was Problem While Sending Message ");
        }

        return toast.success("Email is successfully sent");
      }}
      className=" mt-10 flex flex-col w-full max-w-screen-md space-y-5 mx-auto  "
    >
      <input
        name="senderName"
        required={true}
        maxLength={60}
        className=" h-14 border-solid border-2 border-white bg-background text-text px-3 py-2 rounded-xl"
        title="Name"
        placeholder="Full Name"
        type="text"
      />
      <input
        name="senderemail"
        required={true}
        maxLength={60}
        className=" h-14 border-solid border-2 border-white bg-background text-text px-3 py-2 rounded-xl"
        title="Email"
        placeholder="Email"
        type="email"
      />

      <textarea
        name="message"
        required={true}
        maxLength={600}
        className=" h-[20ch]   border-solid border-2 border-white bg-background text-text px-3 py-2 rounded-xl "
        placeholder="Message"
      />
      <SubmitButton />
    </form>
  );
}

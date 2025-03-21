"use client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@shadcn/select";
import { Label } from "@shadcn/label";
import { Button } from "@shadcn/button";
import { Input } from "@shadcn/input";
import { Textarea } from "@shadcn/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { H1 } from "./Heading";
import { motion } from "motion/react";

const fadeInfromBottom = {
  initial: { y: 80, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.3, ease: "easeIn" },
};

const fadeInFromBlur = {
  initial: { filter: "blur(10px)", opacity: 0 },
  whileInView: {
    filter: ["blur(10px)", "blur(10px)", "blur(0px)"],
    opacity: [0, 1, 1],
  },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.6,
    ease: "easeIn",
    times: [0, 0.5, 1],
  },
};

export const SendMessageForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      helpType: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      name: "",
      designation: "",
      message: "",
    },
  });

  const helpType = watch("helpType");
  const [data, setData] = useState("");

  console.log(data);
  return (
    <section className="bg-[url('/form-bg.png')] bg-cover bg-bottom min-h-[80vh]">
      <motion.div
        {...fadeInfromBottom}
        className="form-content  2xl:px-32  xl:px-16 sm:px-10 px-4 pt-8 flex flex-col items-center gap-5  "
      >
        <H1 className="">Send a Message</H1>
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="md:w-5/6 w-full mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* How can we help you dropdown */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>How can we help you?</Label>
              <Select
                onValueChange={(value) => setValue("helpType", value)}
                value={helpType}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Company Name */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>Company Name</Label>
              <Input
                id="companyName"
                placeholder="Your company name"
                className="bg-white "
                {...register("companyName")}
              />
            </motion.div>

            {/* Email */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                className="bg-white"
                placeholder="your.email@example.com"
                {...register("email")}
              />
            </motion.div>

            {/* Phone Number */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                id="phoneNumber"
                className="bg-white"
                placeholder="Your phone number"
                {...register("phoneNumber")}
              />
            </motion.div>

            {/* Name */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                className="bg-white"
                {...register("name")}
              />
            </motion.div>

            {/* Designation */}
            <motion.div {...fadeInFromBlur} className="space-y-2">
              <Label>Designation</Label>
              <Input
                id="designation"
                placeholder="Your job title"
                className="bg-white"
                {...register("designation")}
              />
            </motion.div>
          </div>

          {/* Message - Spans two columns */}
          <motion.div {...fadeInFromBlur} className="col-span-2 mt-6">
            <Label>Brief Your Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-32 mt-2 bg-white"
              {...register("message")}
            />
          </motion.div>
          <motion.div {...fadeInFromBlur}>
            <Button
              type="submit"
              className="w-full rounded-none px-8 hover:bg-[#006BFF] py-5 md:w-auto mt-4"
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

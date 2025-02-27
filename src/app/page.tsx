"use client";
import { FeaturedProductsSection } from "@components/FeaturedProducts";
import { Header } from "@components/Header";
import { Button } from "@shadcn/button";
import { Input } from "@shadcn/input";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdMail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@shadcn/select";
import { Textarea } from "@shadcn/textarea";
import { Label } from "@shadcn/label";
import { H1 } from "@components/Heading";

export default function Home() {
  return (
    <div>
      <section className="bg-[url('/hero-bg.png')] min-h-screen bg-cover bg-bottom">
        <Header theme="black" />
        <div className="hero-section 2xl:px-32 xl:px-16 px-10 mt-20 md:mt-32 flex gap-5 flex-col">
          <h1 className="text-6xl font-bold text-[#BFB080]">
            Where Innovation Takes Flight
          </h1>
          <p className="text-white max-w-2xl  text-xl">
            We are a team of passionate engineers and design strategists,
            modernizing businesses with Digital Engineering, AI/ML, UI/UX, and
            Performance Marketing. From legacy transformation to future-ready
            experiences, we make innovation effortless.
          </p>
          <Button className="w-fit bg-[#BFB080] p-5 text-base text-black rounded-none hover:bg-white">
            Learn More <GoArrowRight />
          </Button>
        </div>
      </section>
      <PartnerSection />
      <ScheduleSection />
      <BeyondFameSection />
      <FeaturedProductsSection />
      <StayAheadSection />
      <SendMessageForm />
    </div>
  );
}

const PartnerSection = () => {
  const listItems = [
    {
      title: "Built for Modernization",
      description:
        "We build and modernize digital ecosystems using cutting-edge technologies. Whether it's cloud-native applications, microservices, or API-driven architectures, we ensure your business stays ahead in a fast-evolving digital world.",
      Icon: (
        <Image
          src={"/batch_prediction.svg"}
          alt={`icon`}
          width={24}
          height={24}
        />
      ),
    },
    {
      title: "Innovation Powered AI",
      description:
        "From intelligent automation to advanced data analytics, our AI/ML solutions help you streamline operations, decision-making, and unlock new opportunities. We leverage AI to transform raw data into actionable insights, boosting efficiency and scalability.",
      Icon: (
        <Image src={"/lightbulb.svg"} alt={`icon`} width={24} height={24} />
      ),
    },
    {
      title: "Experience First Design",
      description:
        "From intelligent automation to advanced data analytics, our AI/ML solutions help you streamline operations, decision-making, and unlock new opportunities. We leverage AI to transform raw data into actionable insights, boosting efficiency and scalability.",
      Icon: (
        <Image src={"/linear_scale.svg"} alt={`icon`} width={16} height={16} />
      ),
    },
  ];

  return (
    <section className=" bg-[url('/partner-us-bg.png')] min-h-[80vh] bg-contain bg-no-repeat bg-right-top ">
      <div className="2xl:px-32 xl:px-16 px-10 py-10 flex flex-col gap-10 md:gap-20">
        <H1 className=" text-center">Why partner with us</H1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
          {listItems.map((item) => (
            <li key={item.title} className="flex flex-col gap-4">
              {/* <div className="bg-white/20 backdrop-blur-lg rounded-lg w-12 h-12 flex justify-center items-center p-3 border border-white/30 shadow-lg"> */}
              {item.Icon}
              {/* </div> */}
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p>{item.description}</p>
              <Button className="w-fit rounded-none hover:bg-[#BFB080] hover:text-black">
                Learn More <GoArrowRight />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const ScheduleSection = () => {
  const approaches = [
    {
      title: "Comprehensive digital assessment",
      description:
        "We conduct in-depth evaluations of your existing technology stack, workflows, and market positioning, identifying bottlenecks, inefficiencies and growth opportunities.",
    },
    {
      title: "Tailored Digital Stratergy",
      description:
        "From AI-powered automation to performance-driven marketing, we design solutions that align with your business goals.",
    },
    {
      title: "Industry Specific Insights",
      description:
        "Whether you’re in finance, healthcare, e-commerce, or SaaS, we provide sector-specific strategies that give you a competitive edge.",
    },
    {
      title: "Scalable, Resilient Solutions",
      description:
        "We future-proof your business with adaptive digital frameworks, ensuring long-term agility and sustained growth.",
    },
  ];
  return (
    <section className="bg-[url('/digital-transformation-bg.png')]  min-h-screen bg-cover bg-bottom">
      <div className="scedule-content 2xl:px-32 xl:px-16 px-10 py-20  flex flex-col gap-16">
        <H1 className="">Your Doorway to Digital Transformation</H1>
        <div className="stratergic-section flex items-center justify-center gap-4 lg:gap-10 lg:flex-row flex-col md:justify-around">
          <Image
            src={"/doorway.png"}
            alt="doorway-image"
            width={500}
            height={400}
            className="rounded-sm w-full h-auto lg:w-1/2"
          />
          <div className="text-section flex flex-col gap-4 w-full lg:w-1/2  ">
            <H1 className="text-left">
              Stratergic modernization for measurable impact
            </H1>
            <p>
              Digital transformation is not a one-size-fits-all journey. We
              provide bespoke consulting services, leveraging deep industry
              expertise and cutting-edge technology to help businesses
              modernize, optimize, and scale effectively.
            </p>{" "}
            <br />
            <p>
              we are committed to delivering scalable growth through tailored
              business intelligence, and seamless user experiences.{" "}
            </p>
            <div className="buttons flex flex-col sm:flex-row gap-2">
              <Button className="rounded-none px-8 py-4 ">
                <FaCalendar /> Schedule a consultation
              </Button>
              <Button
                variant={"ghost"}
                className="rounded-none text-blue-500 text-lg "
              >
                <MdMail className="h-6 w-6" /> Talk to our Experts
              </Button>
            </div>
          </div>
        </div>
        <div className="approach-section flex flex-col gap-10 justify-center items-center">
          <h1 className="bg-[#006BFF] text-white w-fit py-2 px-7 font-semibold rounded-full shadow-blue-200 shadow-lg ">
            Our Approach
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className=" shadow-lg rounded-lg sm:w-72 p-8 flex flex-col bg-white gap-2"
              >
                <h1 className="font-semibold text-xl">{approach.title}</h1>
                <p>{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BeyondFameSection = () => {
  return (
    <section className="bg-[url('/beyond-fame-bg.png')] bg-cover bg-bottom min-h-[80vh]">
      <div className="beyond-fame-content 2xl:px-32 xl:px-16 px-10 pt-28 flex flex-col gap-5 ">
        <H1 className="text-white text-left text-4xl">
          Beyond the Hype: <br /> Smart, Cost-Effective GenAI
        </H1>
        <p className="max-w-2xl text-white text-lg">
          In the rush to adopt GenAI, businesses often force-fit AI solutions,
          leading to high costs, inefficiencies, and unreliable automation. We
          take a different path—reverse-engineering business needs first,
          ensuring AI works for you, not against you.
        </p>
        <Button className="rounded-none bg-white w-fit text-black hover:bg-white/80">
          Learn More
          <GoArrowRight />{" "}
        </Button>
      </div>
    </section>
  );
};

const StayAheadSection = () => {
  return (
    <section className="bg-[url('/stay-ahead-bg.png')] bg-cover bg-bottom min-h-[80vh]">
      <div className="stay-ahead-content  2xl:px-32  xl:px-16 px-10 md:py-28 sm:py-16 py-10 flex flex-col gap-5 ">
        <div className="flex flex-col gap-4 max-w-4xl">
          <H1 className="text-4xl md:text-6xl text-white text-left">
            Stay Ahead with Real-World <br />
            Insights
          </H1>
          <p className="max-w-2xl text-white text-lg">
            We share real stories of digital transformation, breaking down how
            businesses are adapting to AI, modernization, and shifting industry
            trends. No fluff—just practical insights to help you make informed
            decisions and stay ahead.{" "}
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Email ID"
              className="rounded-none w-full sm:w-96 placeholder:italic h-10 bg-white"
            />
            <Button className="rounded-none h-10 w-full sm:w-52 bg-white text-black hover:text-white">
              Join our newsletter <GoArrowRight />
            </Button>
          </form>
        </div>
        <div className="text-lg md:text-xl text-white md:mt-20 mt-5 sm:mt-6 max-w-4xl">
          Got a Story to Share? – Tell us how your business is evolving with
          technology.{" "}
          <Link href={"/"} className="text-blue-300 font-semibold">
            Submit Your Story{" "}
          </Link>
          and we’ll help share your journey with the world.
        </div>
      </div>
    </section>
  );
};

const SendMessageForm = () => {
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

  return (
    <section className="bg-[url('/form-bg.png')] bg-cover bg-bottom min-h-[80vh]">
      <div className="form-content  2xl:px-32  xl:px-16 px-10 pt-8 flex flex-col items-center gap-5  ">
        <H1 className="">Send a Message</H1>
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="md:w-5/6 w-full mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* How can we help you dropdown */}
            <div className="space-y-2">
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
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <Label>Company Name</Label>
              <Input
                id="companyName"
                placeholder="Your company name"
                className="bg-white "
                {...register("companyName")}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                id="email"
                type="email"
                className="bg-white"
                placeholder="your.email@example.com"
                {...register("email")}
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                id="phoneNumber"
                className="bg-white"
                placeholder="Your phone number"
                {...register("phoneNumber")}
              />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                id="name"
                placeholder="Your full name"
                className="bg-white"
                {...register("name")}
              />
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label>Designation</Label>
              <Input
                id="designation"
                placeholder="Your job title"
                className="bg-white"
                {...register("designation")}
              />
            </div>
          </div>

          {/* Message - Spans two columns */}
          <div className="col-span-2 mt-6">
            <Label>Brief Your Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here"
              className="min-h-32 mt-2 bg-white"
              {...register("message")}
            />
          </div>

          <Button type="submit" className="w-full md:w-auto mt-4">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

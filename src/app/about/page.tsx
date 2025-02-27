import { InfiniteMovingCards } from "@accernity/infinite-moving-cards";
import { Header } from "@components/Header";
import { H1 } from "@components/Heading";

import {
  LightbulbIcon,
  BarChart3Icon,
  Users2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutMainSection />
    </div>
  );
};

const AboutMainSection = () => {
  return (
    <>
      <section className="main-about-info min-h-screen 2xl:px-32 xl:px-16 px-10 object-contain bg-[url('/about-main-bg.png')] bg-no-repeat">
        <div className="about-us-cards flex flex-col flex-wrap py-16 gap-32">
          <IntroSection />
          <PhilosophySection />
        </div>
      </section>
      <CoreValueSection />
      <TeamSection />
    </>
  );
};

const IntroSection = () => {
  return (
    <div className="who-we-are-section flex flex-col gap-6 lg:flex-row justify-between">
      <div className="text-section lg:w-3/5 flex gap-6 flex-col">
        <H1 className="md:text-6xl text-4xl text-left font-bold">
          Who We Are: <br />
          <span className="text-3xl md:text-5xl">
            Beyond Code, Building Possibilities
          </span>
        </H1>
        <div className="flex flex-col text-lg gap-3">
          <p>
            Technology is evolving at lightning speed, but true digital
            transformation isn’t just about keeping up—it’s about leading the
            way.
          </p>
          <p>
            {" "}
            At Cubixso Solutions Pvt Ltd, we don’t just build software; we craft
            experiences, engineer solutions, and solve real-world business
            challenges. Whether it’s AI-driven automation, intuitive digital
            products, or scalable cloud solutions, we help businesses modernize
            at the core and stay ahead of the curve.
          </p>
        </div>
      </div>
      {/* @to-do - this must be auto scroll with more boxes */}
      <div className="img-section flex flex-row flex-wrap lg:flex-col gap-3">
        <div className="relative w-full h-72 lg:w-72 lg:h-40 web-and-mobile-dev bg-[url('/mobile-web.jpg')] bg-cover">
          <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
            Web & Mobile Development <FaArrowRight />
          </div>
        </div>
        <div className="relative w-full h-72 lg:w-72 lg:h-40  ui-ux-design bg-[url('/ui-ux-design.jpg')] bg-cover">
          <div className="flex flex-row gap-2 items-center justify-between web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
            UI/UX Design <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <div className="who-we-are-section flex lg:flex-row-reverse flex-col gap-6 justify-between">
      <div className="text-section w-full lg:w-3/5 flex gap-6 flex-col">
        <H1 className="md:text-6xl text-4xl text-left font-bold">
          Our Philosophy: <br />
          <span className="text-3xl md:text-5xl">
            Business First, Technology Second{" "}
          </span>
        </H1>
        <div className="flex flex-col text-lg gap-3">
          <p>
            In a world rushing to adopt AI and digital trends, many businesses
            force-fit solutions that don’t truly serve them. At Cubixso, we take
            a different approach:
          </p>
          <ul className="list-disc flex flex-col gap-2 pl-10 mt-2">
            <li>
              We start with your business challenges, not just the latest tech
              trends.
            </li>
            <li>
              We optimize for efficiency, scalability, and long-term growth.
            </li>
            <li>
              We build digital solutions that work for you—not the other way
              around.{" "}
            </li>
          </ul>
          <blockquote className="border-l-4 border-blue-500 mt-6 pl-4 italic text-xl font-medium text-gray-700">
            It&apos;s not about using AI—it&apos;s about using AI the right way.
          </blockquote>{" "}
        </div>
      </div>
      <div className="img-section">
        <Image
          src={"/philosophy-image.png"}
          alt="our_philosophy_img"
          width={390}
          height={393}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

const CoreValueCard = ({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/20">
    <div className="bg-gradient-to-br from-amber-500/80 to-blue-800/80 p-4 rounded-xl shadow-lg">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    <p className="text-white/80 text-center text-lg">{description}</p>
  </div>
);

const CoreValueSection = () => {
  const values = [
    {
      Icon: LightbulbIcon,
      title: "Innovation",
      description: "We push boundaries, always seeking smarter solutions",
    },
    {
      Icon: BarChart3Icon,
      title: "Quality",
      description: "Excellence is not an option, it's our standard",
    },
    {
      Icon: Users2Icon,
      title: "Collaboration",
      description: "Success is shared, we build it together",
    },
    {
      Icon: ShieldCheckIcon,
      title: "Trust",
      description: "transparency and trust guide everything we do",
    },
  ];

  return (
    <section className="bg-[url('/core-values-bg.png')] bg-no-repeat bg-cover  md:min-h-[32rem] w-screen py-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <H1 className="text-white mb-8">Our Core Values</H1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300/80 to-blue-400/80 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <CoreValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  const supporters = [
    "/atlassian.png",
    "/digital-ocean.png",
    "/google-devs.png",
    "/google-devs.png",
    "/google-devs.png",
  ];

  return (
    <section className="team-section bg-[url('/vision-mission-bg.png')] 2xl:px-32 xl:px-16 px-10  bg-contain bg-no-repeat bg-top min-h-screen">
      <div className="team-section-content flex flex-col gap-12">
        <VisionMissionCards />
        <div className="team-members flex flex-col items-center gap-12">
          <H1 className="text-center">
            Meet the Team: <br /> The Minds Behind the Initiative
          </H1>
          <ul className="team-members-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <li className="flex flex-col gap-1">
              <Image
                src={"/gowtham.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Nayini Gowtham Reddy</h2>
              <p>Founder and Managing Director</p>
            </li>
            <li className="flex flex-col gap-1">
              <Image
                src={"/sudheer.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Sudheer Kumar Kota</h2>
              <p>Co Founder and CTO</p>
            </li>
            <li className="flex flex-col gap-1">
              <Image
                src={"/uncle.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Nayini Gowtham Reddy</h2>
              <p>Founder and Managing Director</p>
            </li>
          </ul>
        </div>
        <section className="our-supporters flex flex-col justify-center items-center ">
          <H1 className="">Our Supporters</H1>
          {/* <InfiniteCarousel /> */}
          <div className="h-[10rem] 2xl:px-32 xl:px-16 px-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              logos={supporters}
              items={testimonials}
              direction="right"
              speed="fast"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

const VisionMissionCards = () => {
  return (
    <section className="vision-mission-cards   py-12">
      <div className="vision-mission-content flex flex-col gap-8">
        <div className="vision-card overflow-hidden relative w-full h-64 md:h-96 bg-white  rounded-lg shadow-xl ">
          <Image
            src={"/vision-design.svg"}
            alt="vision-design"
            width={605}
            height={316}
            className="absolute md:-left-10 lg:left-0 opacity-30 lg:opacity-100 h-full w-auto rounded-tl-lg rounded-b-lg "
          />
          <div className="absolute md:left-1/3 lg:left-1/2 left-10 top-[20%] flex flex-col gap-2">
            <H1 className="text-left">Vision</H1>
            <p className="text-xl max-w-[550px]">
              To become a global leader in digital innovation, shaping the
              future of AI-powered, tech-driven businesses across industries.
            </p>
          </div>
        </div>
        <div className="mission-card relative w-full h-64 md:h-96 bg-white  rounded-lg shadow-xl">
          <Image
            src={"/mission-design.svg"}
            alt="vision-design"
            width={605}
            height={316}
            className="absolute right-0 h-full w-auto  opacity-30 md:opacity-100 "
          />
          <div className="absolute md:left-20 left-10 top-[25%] flex flex-col gap-2">
            <H1 className="text-left">Mission</H1>
            <p className="text-xl md:w-[550px]">
              To empower businesses with technology that drives growth, enhances
              efficiency, and creates exceptional digital experiences.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

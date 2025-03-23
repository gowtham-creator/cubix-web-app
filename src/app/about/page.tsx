"use client";
import { InfiniteMovingCards } from "@accernity/infinite-moving-cards";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { H1 } from "@components/Heading";
import { ServiceCarousel } from "@components/ServicesCarousel";

import {
  LightbulbIcon,
  BarChart3Icon,
  Users2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { motion } from "motion/react";
import { TextGenerateEffect } from "@accernity/text-generate-effect";

const AboutPage = () => {
  return (
    <div className="">
      <Header mobNavClassName="right-[45%] xs:right-[47%] sm:right-[45%] md:right-0" />
      <AboutMainSection />
      <Footer />
    </div>
  );
};

const AboutMainSection = () => {
  return (
    <>
      <section className="main-about-info min-h-screen 2xl:px-32 xl:px-16 sm:px-10 px-4 object-contain bg-[url('/about/about-main-bg.png')] bg-no-repeat">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="about-us-cards flex flex-col flex-wrap py-16 gap-32"
        >
          <IntroSection />
          <PhilosophySection />
        </motion.div>
      </section>
      <CoreValueSection />
      <TeamSection />
    </>
  );
};

const IntroSection = () => {
  return (
    <div className="who-we-are-section flex flex-col gap-20 lg:gap-6 lg:flex-row justify-between">
      <div className="text-section lg:w-3/5 flex gap-6 flex-col">
        <H1 className="md:text-6xl text-4xl text-left font-semibold">
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
      <ServiceCarousel />
      {/* @to-do - this must be auto scroll with more boxes */}
      {/* <div className="img-section flex flex-row flex-wrap lg:flex-col gap-3"> */}
      {/*   <div className="relative w-full h-72 lg:w-72 lg:h-40 web-and-mobile-dev bg-[url('/mobile-web.jpg')] bg-cover"> */}
      {/*     <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3"> */}
      {/*       Web & Mobile Development <FaArrowRight /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="relative w-full h-72 lg:w-72 lg:h-40  ui-ux-design bg-[url('/ui-ux-design.jpg')] bg-cover"> */}
      {/*     <div className="flex flex-row gap-2 items-center justify-between web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3"> */}
      {/*       UI/UX Design <FaArrowRight /> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
};

const PhilosophySection = () => {
  return (
    <div className="who-we-are-section flex lg:flex-row-reverse flex-col gap-6 justify-between">
      <div className="text-section w-full lg:w-3/5 flex gap-6 flex-col">
        <H1 className="md:text-6xl text-4xl text-left font-semibold">
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
          src={"/about/our-philosophy.png"}
          alt="our_philosophy_img"
          width={1560}
          height={1572}
          className="w-full h-auto md:h-[450px] md:w-auto"
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
    <h2 className="text-2xl font-medium text-white">{title}</h2>
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

  const fadeInScroll = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  return (
    <section className="bg-[url('/about/core-values-bg.png')] bg-no-repeat bg-cover  md:min-h-[32rem] w-screen py-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div {...fadeInScroll} className="text-center mb-16">
          <H1 className="text-white mb-8">Our Core Values</H1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300/80 to-blue-400/80 mx-auto"></div>
        </motion.div>
        <motion.div
          {...fadeInScroll}
          className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <CoreValueCard key={index} {...value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const supporters = [
    "/about/dpiit.png",
    "/about/msft.png",
    "/about/neo4j.png",
    "/about/wadhwani.png",
    "/about/atlassian.png",
    "/about/digital-ocean.png",
    "/about/mongo.png",
    "/about/aws.png",
    "/about/google-devs.png",
  ];

  const trustedBy = [
    "/about/bolt-abacus-black.png",
    "/about/elit-celer.png",
    "/about/tech-savant.png",
    "/about/krower.png",
    "/about/pursuit-soln.png",
  ];

  return (
    <section className="team-section bg-[url('/about/vision-mission-bg.png')] 2xl:px-32 xl:px-16 px-10  bg-contain bg-no-repeat bg-top min-h-screen">
      <div className="team-section-content flex flex-col gap-12">
        <VisionMissionCards />
        <div className="team-members flex flex-col items-center gap-12">
          <H1 className="text-center">
            <TextGenerateEffect
              words={"Meet the Team:"}
              className="text-black text-center"
              wordsClassName="text-black text-center text-3xl md:text-5xl font-medium text-left"
            />
            <TextGenerateEffect
              words={"The Minds Behind the Initiative"}
              className="text-black text-center"
              wordsClassName="text-black text-center text-3xl md:text-5xl font-medium text-left"
            />
          </H1>
          <ul className="team-members-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <motion.li
              initial={{ scale: 0.98, filter: "blur(10px)" }}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{
                duration: 0.3,
                delay: 0.05,
              }}
              className="flex flex-col gap-1"
            >
              <Image
                src={"/about/gowtham.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Nayini Gowtham Reddy</h2>
              <p>Founder and Managing Director</p>
            </motion.li>
            <motion.li
              initial={{ scale: 0.98, filter: "blur(10px)" }}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
              }}
              className="flex flex-col gap-1"
            >
              <Image
                src={"/about/sudheer.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Sudheer Kumar Kota</h2>
              <p>Co Founder and CTO</p>
            </motion.li>
            <motion.li
              initial={{ scale: 0.98, filter: "blur(10px)" }}
              whileInView={{ scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.75 }}
              transition={{
                duration: 0.3,
                delay: 0.15,
              }}
              className="flex flex-col gap-1"
            >
              <Image
                src={"/about/uncle.png"}
                alt="founder-img"
                width={350}
                height={350}
              />
              <h2 className="font-semibold">Nayini Gowtham Reddy</h2>
              <p>Founder and Managing Director</p>
            </motion.li>
          </ul>
        </div>
        <section className="mt-20 our-supporters flex flex-col justify-center items-center ">
          <H1 className="">Our Supporters</H1>
          {/* <InfiniteCarousel /> */}
          <div className="h-[10rem] 2xl:px-32 xl:px-16 px-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              logos={supporters}
              direction="right"
              speed="normal"
            />
          </div>
        </section>
        <section className="our-supporters flex flex-col justify-center items-center ">
          <H1 className="">Trusted By</H1>
          {/* <InfiniteCarousel /> */}
          <div className="h-[10rem] 2xl:px-32 xl:px-16 px-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              logos={trustedBy}
              direction="left"
              speed="normal"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

const VisionMissionCards = () => {
  return (
    <section className="vision-mission-cards py-8   md:py-16">
      <div className="vision-mission-content flex flex-col md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.75 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="vision-card overflow-hidden relative w-full h-64 md:h-80 max-w-5xl bg-white  rounded-lg shadow-xl "
        >
          <Image
            src={"/about/vision-design.svg"}
            alt="vision-design"
            width={605}
            height={316}
            className="absolute md:-left-32 lg:-left-8 opacity-30 lg:opacity-100 h-full w-auto rounded-tl-lg rounded-b-lg "
          />
          <div className="absolute md:left-1/3 lg:left-1/2 left-10 top-[20%] flex flex-col gap-2">
            <H1 className="text-left">Vision</H1>
            <p className="text-xl max-w-[550px]">
              To become a global leader in digital innovation, shaping the
              future of AI-powered, tech-driven businesses across industries.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.75 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="mission-card relative w-full h-64  bg-white md:h-80 max-w-5xl   rounded-lg shadow-xl"
        >
          <Image
            src={"/about/mission-design.svg"}
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;

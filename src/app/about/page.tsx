import { Header } from "@components/Header";
import { InfiniteCarousel } from "@components/InfiniteCarousel";
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
      <section className="main-about-info min-h-screen 2xl:px-32 xl:px-16  px-4 object-contain bg-[url('/about-main-bg.png')] bg-no-repeat">
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
    <div className="who-we-are-section flex flex-row justify-between">
      <div className="text-section w-3/5 flex gap-6 flex-col">
        <h1 className="text-6xl font-bold">
          Who We Are: <br />
          <span className=" text-5xl">Beyond Code, Building Possibilities</span>
        </h1>
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
      <div className="img-section flex flex-col gap-3">
        <div className="relative w-72 h-40 web-and-mobile-dev bg-[url('/mobile-web.jpg')] bg-cover">
          <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
            Web & Mobile Development <FaArrowRight />
          </div>
        </div>
        <div className="relative w-72 h-40  ui-ux-design bg-[url('/ui-ux-design.jpg')] bg-cover">
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
    <div className="who-we-are-section flex flex-row-reverse justify-between">
      <div className="text-section w-3/5 flex gap-6 flex-col">
        <h1 className="text-6xl font-bold">
          Our Philosophy: <br />
          <span className="text-5xl">Business First, Technology Second </span>
        </h1>
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
          className="h-96 w-96"
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
    <section className="bg-[url('/core-values-bg.png')] min-h-[32rem] w-screen py-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            Our Core Values
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-300/80 to-blue-400/80 mx-auto"></div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {values.map((value, index) => (
            <CoreValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  return (
    <section className="team-section bg-[url('/vision-mission-bg.png')] 2xl:px-32 xl:px-16 px-10  bg-contain bg-no-repeat bg-top min-h-screen">
      <div className="team-section-content flex flex-col gap-12">
        <VisionMissionCards />
        <div className="team-members flex flex-col items-center gap-12">
          <h1 className="text-5xl font-medium  text-center">
            Meet the Team: <br /> The Minds Behind the Initiative
          </h1>
          <ul className="team-members-list flex flex-row gap-6 text-center">
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
          <h1 className="text-5xl font-medium">Our Supporters</h1>
          <InfiniteCarousel />
        </section>
      </div>
    </section>
  );
};

const VisionMissionCards = () => {
  return (
    <section className="vision-mission-cards   py-12">
      <div className="vision-mission-content flex flex-col gap-8">
        <div className="vision-card relative w-full h-96 bg-white  rounded-lg shadow-xl ">
          <Image
            src={"/vision-design.svg"}
            alt="vision-design"
            width={605}
            height={316}
            className="absolute left-0 h-full w-auto rounded-tl-lg rounded-b-lg "
          />
          <div className="absolute left-1/2 top-[20%] flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Vision</h1>
            <p className="text-xl w-[550px]">
              To become a global leader in digital innovation, shaping the
              future of AI-powered, tech-driven businesses across industries.
            </p>
          </div>
        </div>
        <div className="mission-card relative w-full h-96 bg-white  rounded-lg shadow-xl">
          <Image
            src={"/mission-design.svg"}
            alt="vision-design"
            width={605}
            height={316}
            className="absolute right-0 h-full w-auto  "
          />
          <div className="absolute left-20 top-[25%] flex flex-col gap-2">
            <h1 className="text-5xl font-bold">Mission</h1>
            <p className="text-xl w-[550px]">
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

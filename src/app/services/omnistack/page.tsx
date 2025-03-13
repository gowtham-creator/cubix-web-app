"use client";
import { SendMessageForm } from "@components/ContactForm";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { H1 } from "@components/Heading";
import { cn } from "lib/utils";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { motion } from "motion/react";

const OmniStackPage = () => {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <HeroSection />
      <FoundationSection />
      <MoreServicesSection />
      <SendMessageForm />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="lg:relative min-h-screen lg:block flex flex-col gap-4 mt-4"
    >
      <div className="lg:absolute text-part flex flex-col gap-2 px-4 sm:px-10 text-left right-20 lg:w-[50vw] lg:top-16">
        <H1 className="text-[#006FFF] text-left font-bold">OmniStack</H1>
        <H1 className="md:text-4xl text-left ">
          Building Seamless Digital Experiences,
          <br /> From Concept to Scale
        </H1>
        <p className="text-xl">
          From startups launching their first MVPs to enterprises optimizing
          mission-critical platforms, our full-stack development expertise
          ensures that your digital product is secure, scalable, and built for
          the future.
        </p>
      </div>
      <Image
        src={"/omnistack/omni-stack-hero.png"}
        width={764}
        height={752}
        alt="omni-stack"
        className="lg:left-[-200px] lg:absolute lg:h-[500px] xl:h-[650px] 2xl:h-[700px] lg:w-auto sm:px-10  w-full h-auto px-4"
      />
      <Image
        src={"/Squiggle.svg"}
        width={1032}
        height={387}
        alt="squiggle-svg"
        className="lg:absolute -bottom-10 right-0"
      />
    </motion.section>
  );
};

const FoundationSection = () => {
  const foundationItems = [
    {
      title: "User-Centric Design",
      description: "Ensuring intuitive, engaging, and accessible experiences.",
      Image: (
        <Image
          src={"/omnistack/user-centric-img.png"}
          width={884}
          height={884}
          alt="user-centric"
          className="md:h-40 md:w-auto w-[70%] h-auto"
        />
      ),
      className:
        "user-centric-design rounded-lg  w-full md:col-span-3 md:row-span-3  p-4  shadow-lg flex flex-col-reverse items-center",
      titleColor: "text-purple-800",
    },
    {
      title: "Performance Optimization",
      description:
        "Architecting applications that load fast and scale effortlessly",
      Image: (
        <Image
          src={"/omnistack/performance-opt.png"}
          width={1416}
          height={1416}
          alt="performance-optimization"
          className="md:h-60 md:w-auto w-[70%] h-auto"
        />
      ),
      className:
        "perfomance-optimization  p-4 md:col-span-4  md:row-span-4 md:p-10 shadow-lg rounded-lg flex flex-col items-center",
      titleColor: "text-[#385A64]",
    },
    {
      title: "Seamless Functionality",
      description: "Creating fluid interactions between front-end and back-end",
      Image: (
        <Image
          src={"/omnistack/seamless-func.png"}
          width={1132}
          height={830}
          alt="seamless-functionality"
          className="md:h-48 md:w-auto w-[70%] h-auto"
        />
      ),
      className:
        "seamless-func p-4 md:col-span-3 md:row-span-4  md:p-10 shadow-lg rounded-lg flex flex-col-reverse items-center",
      titleColor: "text-[#F6461E]",
    },
    {
      title: "Security & Compliance",
      description:
        "Protecting data, transactions, and user privacy with robust security protocols.",
      Image: (
        <Image
          src={"/omnistack/security-compliance.png"}
          width={1192}
          height={752}
          alt="user-centric"
          className="md:w-64 md:h-auto w-[70%] h-auto"
        />
      ),
      className:
        "security-compliance md:col-span-4 md:row-span-3 md:p-2 rounded-lg p-3  shadow-lg flex flex-col gap-4  items-center",
      titleColor: "text-purple-800",
    },
  ];

  const FeatureTitle: FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
  }) => {
    return (
      <h3 className={cn("text-lg font-semibold  mt-5", className)}>
        {children}
      </h3>
    );
  };

  const FeatureDescription: FC<{ children: ReactNode; className?: string }> = ({
    children,
    className,
  }) => {
    return (
      <p
        className={cn("max-w-64 text-sm text-gray-500 text-center", className)}
      >
        {children}
      </p>
    );
  };
  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  return (
    <section className="2xl:px-32 h-full  xl:px-16 sm:px-10 px-4 mt-32 flex flex-col items-center gap-20 md:mb-20 mb-8">
      <motion.div
        {...fadeInfromBottom}
        className="foundation-heading flex flex-col gap-2 items-center"
      >
        <H1>The Foundation</H1>
        <p className="text-lg md:text-xl max-w-2xl text-center">
          Whether you need a dynamic web application, a high-performance mobile
          app, or a full-fledged enterprise system, we ensure
        </p>
      </motion.div>
      <div className="foundation-items w-full grid grid-cols-1  md:grid-cols-7 md:grid-rows-7 gap-4 max-w-3xl md:min-h-[700px]">
        {foundationItems.map((foundation) => (
          <motion.div
            {...fadeInfromBottom}
            className={cn("", foundation.className)}
            key={foundation.title + "foundation"}
          >
            <div className="flex flex-col items-center">
              <FeatureTitle className={foundation.titleColor}>
                {foundation.title}
              </FeatureTitle>
              <FeatureDescription>{foundation.description}</FeatureDescription>
            </div>
            {foundation.Image}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const MoreServicesSection = () => {
  const serviceCards = [
    {
      title: "Web Development",
      subtitle: "Fast, Scalable, and Future-Ready",
      descriptionPoints: [
        {
          title: "Custom Web Applications",
          subtitle:
            "Designed for your business needs, ensuring seamless functionality.",
        },
        {
          title: "Single-Page & Progressive Web Apps",
          subtitle: "Lightning-fast, mobile-friendly, and engaging.",
        },
        {
          title: "API-Driven Platforms",
          subtitle:
            "Connecting your digital ecosystem with scalable integrations.",
        },
        {
          title: "Cloud-Optimized Solutions",
          subtitle: "Reliable, flexible, and built for performance.",
        },
      ],
      Image: (
        <Image
          src={"/web-dev.jpg"}
          alt="web dev"
          width={5200}
          height={7868}
          className=" lg:h-[70vh] lg:w-auto w-full h-[300px] xs:h-[320px] sm:h-[500px] object-cover"
        />
      ),
    },
    {
      title: "Mobile App Development",
      subtitle: "Build Once, Reach Everywhere",
      descriptionPoints: [
        {
          title: "Custom Web Applications",
          subtitle:
            "Built with Swift, Kotlin, and Jetpack for top-tier performance.",
        },
        {
          title: "Cross-Platform Apps",
          subtitle:
            "Using Flutter and React Native to maximize reach with a single codebase.",
        },
        {
          title: "Offline-First Functionality",
          subtitle: "Ensuring access even without an internet connection.",
        },
        {
          title: "AI-Enabled Apps",
          subtitle: "Personalization, automation, and smarter interactions.",
        },
      ],
      Image: (
        <Image
          src={"/mobile-app-dev.jpg"}
          alt="mobile app dev"
          width={3456}
          height={5184}
          className=" lg:h-[70vh] lg:w-auto w-full h-[300px] xs:h-[320px] sm:h-[500px] object-cover"
        />
      ),
    },
    {
      title: "Robust Backend, APIs & DevOps for Scalability",
      subtitle:
        "A strong backend is key to performance, security, and growth. Our expertise includes",
      descriptionPoints: [
        {
          title: "Scalable Backend Architectures",
          subtitle: "Microservices, REST & GraphQL APIs.",
        },
        {
          title: "Secure Data Management",
          subtitle: "SQL & NoSQL databases with encryption & compliance.",
        },
        {
          title: "CI/CD & Cloud Optimization",
          subtitle: "Fast deployments, seamless updates, and zero downtime.",
        },
      ],
      Image: (
        <Image
          src={"/devops.png"}
          alt="web dev"
          width={298}
          height={396}
          className=" lg:h-[63vh] lg:w-auto w-full h-[300px] xs:h-[320px] sm:h-[500px] object-cover"
        />
      ),
    },
  ];

  const DescriptionList = ({
    listItems,
  }: {
    listItems: { title: string; subtitle: string }[];
  }) => {
    return (
      <div className="w-full max-w-3xl mx-auto py-8 px-4">
        <ul className="relative">
          {listItems.map((point, index) => (
            <li key={index} className="flex mb-8 relative">
              {/* Number circle with blue background */}
              <div className="relative z-10">
                <div className="flex items-center justify-center bg-[#1976D2] text-white rounded-full w-10 h-10 font-bold">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="ml-6 mt-1">
                <h3 className="text-base sm:text-lg font-semibold">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-xs xs:text-base">
                  {point.subtitle}
                </p>
              </div>

              {/* Connecting line (except for the last item) */}
              {index < listItems.length - 1 && (
                <div className="absolute top-12 left-5 w-px h-8 bg-gray-400"></div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const fadeInfromRight = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };
  return (
    // @to-do add animation
    <section className="more-services-section mt-32 min-h-screen bg-[url('/more-service-bg.png')] bg-cover bg-no-repeat bg-bottom mb-8 md:mb-32">
      <div className="more-service-content  2xl:px-32  xl:px-16 sm:px-10 px-4">
        {/* <div className="absolute -right-[60vw] top-36 -z-10 h-[50vh] w-[75vw] gradient-ball bg-blue-600 blur-[500px] rounded-full "></div> */}
        <div className="services-cards   flex flex-col gap-16 ">
          {serviceCards.map((service) => (
            <motion.div
              {...fadeInfromRight}
              key={service.title}
              className="flex lg:flex-row flex-col w-full gap-20 items-start"
            >
              {service.Image}
              <div className="card-content">
                <H1 className="text-left">{service.title}</H1>
                <h2 className="text-lg sm:text-xl text-gray-600 mt-2">
                  {service.subtitle}
                </h2>
                <DescriptionList listItems={service.descriptionPoints} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OmniStackPage;

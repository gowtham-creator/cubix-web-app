import { Header } from "@components/Header";
import { H1 } from "@components/Heading";
import { Button } from "@shadcn/button";
import { cn } from "lib/utils";
import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Servicespage = () => {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <section className="out-services-head 2xl:px-32  xl:px-16 px-10  mt-4 flex flex-col items-center gap-4">
        <H1 className="text-4xl md:text-6xl">
          <span className="text-[#006FFF]">Our Services:</span>
          Future-Ready
          <br /> Solutions for Digital Excellence
        </H1>
        <p className="text-center text-xl max-w-4xl">
          At Cubixso, we don’t just build technology—we redefine how businesses
          operate, scale, and innovate. Our cutting-edge services, from
          AI-powered automation to immersive digital experiences, are designed
          to give your business a competitive edge in a fast-evolving world.
        </p>
      </section>
      <ServicesListSection />
    </div>
  );
};

const ServicesListSection = () => {
  const services = [
    {
      title: "AetherGen – Generative AI Solutions Suite",
      description: "Where AI Meets Strategy for Real-World Impact",
      className:
        "flex flex-col-reverse col-span-1 lg:col-span-2 justify-between pb-5",
      Image: (
        <Image
          src={"/aether-gen.png"}
          alt="aether gen image"
          width={436}
          height={239}
          className="h-auto w-full"
        />
      ),
    },
    {
      title: "OmniStack – Full-Stack Development",
      description: "Scalable, Secure & Future-Ready Enterprise Applications",
      className: "col-span-1 lg:col-span-3 lg:relative pt-8",
      Image: (
        <Image
          src={"/omni-stack.png"}
          alt="aether gen image"
          width={260}
          height={315}
          className="h-80 xl:h-[350px] w-auto lg:absolute  bottom-0 left-[25%]"
        />
      ),
    },
    {
      title: "CloudMorph – DevOps & Cloud Solutions",
      description: "Cloud-Powered Scalability & Agile DevOps",
      className: "col-span-1 lg:col-span-3 py-5",
      Image: (
        <Image
          src={"/cloudmorph.png"}
          alt="aether gen image"
          width={436}
          height={239}
          className="lg:h-80 w-auto"
        />
      ),
    },
    {
      title: "ImmersiXR – AR/VR Solutions",
      description: "Beyond Reality: The Future of Digital Experiences",
      className: "col-span-1 lg:col-span-2 lg:relative pt-5 ",
      Image: (
        <Image
          src={"/immersi-xr.png"}
          alt="aether gen image"
          width={302}
          height={323}
          className="lg:absolute right-0 bottom-0"
        />
      ),
    },
    {
      title: "EnterpriseX – ERP & Business Solutions",
      description: "Smart Business. Smarter Systems.",
      className:
        "col-span-1 lg:col-span-5 flex flex-col justify-between lg:items-center lg:flex-row-reverse",
      Image: (
        <Image
          src={"/Africa.png"}
          alt="aether gen image"
          width={436}
          height={239}
          className="h-auto w-full"
        />
      ),
    },
  ];
  return (
    <section className="services-list 2xl:px-32 xl:px-16 px-10 mb-12">
      <div className="services-content-grid grid grid-cols-1 lg:grid-cols-5 border border-gray-300 rounded-lg">
        {services.map((service) => (
          <div
            key={service.title}
            className={cn("h-auto border border-gray-300 ", service.className)}
          >
            <div className="text-section flex flex-col gap-2 p-5">
              <h2 className="font-semibold text-4xl">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
              <Button className="w-fit text-white p-5 text-base hover:text-black rounded-none hover:bg-white">
                Learn More <GoArrowRight />
              </Button>
            </div>
            <div>{service.Image}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicespage;

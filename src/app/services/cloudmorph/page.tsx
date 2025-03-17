"use client";
import { Header } from "@components/Header";
import { H1 } from "@components/Heading";
import { LeftOrientedCard } from "@components/LeftOrientedCard";
import { RightOrientedCard } from "@components/RightOrientedCard";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { SendMessageForm } from "@components/ContactForm";
import { Footer } from "@components/Footer";

const CloudMorphPage = () => {
  return (
    <div>
      <Header />
      <CloudMorphHero />
      <CloudScaleSection />
      <ContinuousInnovation />
      <DevopsMoreFeatures />
      <CloudSecuritySection />
      <SendMessageForm />
      <Footer />
    </div>
  );
};

const CloudMorphHero = () => {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
    >
      <div className="min-h-screen flex flex-col sm:px-10 px-4 gap-5 mt-8 md:flex-row md:px-0 md:-translate-x-16 lg:-translate-x-20 lg:mt-32  lg:gap-10 ">
        <Image
          src={"/devops-hero1.jpg"}
          width={496}
          height={405}
          alt="devops-image"
          className="w-full h-auto md:h-[400px] lg:w-auto"
        />
        <motion.div className="flex flex-col md:w-2/3 lg:w-full lg:gap-2">
          <H1 className="text-[#006FFF] text-left md:text-4xl lg:text-5xl lg:font-black">
            CloudMorph – DevOps & Cloud Solutions
          </H1>
          <H1 className="text-2xl md:text-2xl lg:text-4xl text-left mb-2">
            Seamless, Scalable, and Secure Cloud Transformation
          </H1>
          <p className="text-lg md:text-xl">
            We deliver end-to-end DevOps and cloud solutions, ensuring your
            business operates with speed, efficiency, and reliability. From
            CI/CD automation to cloud-native engineering and enterprise
            security, we help businesses evolve beyond traditional IT into fully
            automated, cloud-driven powerhouses.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

const CloudScaleSection = () => {
  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  const blurSharpen = {
    initial: { filter: "blur(12px)", opacity: 0 },
    whileInView: { filter: "blur(0px)", opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="2xl:px-32 xl:px-16 sm:px-10 px-4 mt-10">
      <div className="ai-meets-auto-content flex flex-col items-center justify-center gap-8">
        <motion.div {...fadeInfromBottom} className="text-center">
          <H1 className=" text-[#006FFF]">
            Cloud That Scales, Adapts, and Evolves
          </H1>
          <p className="text-lg md:text-xl text-gray-500 mt-2">
            Beyond Migration – Building a Cloud-First, AI-Optimized Future
          </p>
        </motion.div>
        <motion.div {...blurSharpen}>
          <Image
            src={"/scale-cloud.jpg"}
            width={821}
            height={461}
            alt="scale-cloud-img"
            className=""
          />
        </motion.div>
        <motion.p
          {...blurSharpen}
          className="text-center text-lg md:text-xl text-gray-500 mt-2 max-w-3xl"
        >
          We engineer high-performance cloud solutions that are optimized for
          cost, scalability, and security, ensuring seamless infrastructure
          management, automated workflows, and zero-downtime deployments.{" "}
        </motion.p>
      </div>
    </section>
  );
};

const ContinuousInnovation = () => {
  const cloudFeatures = [
    {
      title: "Cloud Architecture & Migration",
      descriptionPoints: [
        "Cloud-native architecture design for AWS, Azure, and GCP.",
        "Zero-downtime migration from legacy systems to the cloud.",
        "Hybrid & multi-cloud strategies for enterprise flexibility.",
      ],
      Image: (
        <Image
          src={"/cloud-architecture.jpg"}
          alt="cloud-architecture-img"
          width={457}
          height={517}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#1976D2]",
    },
    {
      title: "Serverless & Microservices Engineering",
      descriptionPoints: [
        "API-driven, event-based architectures that scale instantly.",
        "Containerization & Kubernetes orchestration for resilient applications.",
        "Serverless computing for high-performance, cost-efficient workloads.",
      ],
      Image: (
        <Image
          src={"/serverless-micro.jpg"}
          alt="Predictive-analysis"
          width={457}
          height={517}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#1976D2]",
    },
    {
      title: "CloudOps & Cost Optimization",
      descriptionPoints: [
        "Automated scaling & workload balancing to optimize cloud expenses.",
        "Intelligent cloud monitoring & alerting for predictive failure prevention.",
        "FinOps strategies to track and control cloud costs in real-time.",
      ],
      Image: (
        <Image
          src={"/cloud-cost.jpg"}
          alt="Predictive-analysis"
          width={268}
          height={396}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#1976D2]",
    },
  ];
  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  const blurSharpen = {
    initial: { filter: "blur(12px)", opacity: 0 },
    whileInView: { filter: "blur(0px)", opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="bg-[url('/engineering-bg.png')]  bg-cover bg-no-repeat ">
      <LeftOrientedCard cards={cloudFeatures} />
      <section className="engineering-ai-section 2xl:px-32 xl:px-16 sm:px-10 px-4 mt-32">
        <div className=" flex flex-col items-center justify-center gap-8">
          <motion.div {...fadeInfromBottom} className="text-center">
            <H1 className="text-black">
              DevOps That Drives Continuous Innovation{" "}
            </H1>
            <p className="text-lg md:text-xl text-gray-500 mt-2">
              Automate Everything, Deploy Anywhere, Deliver Faster
            </p>
          </motion.div>
          <motion.div {...blurSharpen}>
            <Image
              src={"/devops-neon.jpg"}
              width={820}
              height={461}
              alt="ai-meets-automation-img"
              className=""
            />
          </motion.div>
          <motion.p
            {...blurSharpen}
            className="text-center text-lg md:text-xl text-gray-500 mt-2 max-w-3xl"
          >
            DevOps is the engine that keeps businesses running at peak
            efficiency. Our CloudMorph DevOps suite accelerates your software
            development lifecycle, ensuring fast, reliable, and secure software
            releases.{" "}
          </motion.p>
        </div>
      </section>
    </section>
  );
};

const DevopsMoreFeatures = () => {
  const devopsFeatures = [
    {
      title: "CI/CD Automation & Infrastructure as Code",
      descriptionPoints: [
        "End-to-end CI/CD pipelines for frictionless deployments.",
        "GitOps-based workflow automation to reduce manual errors.",
        "Terraform, Ansible, and Kubernetes automation for infrastructure scalability.",
      ],
      Image: (
        <Image
          src={"/terraform.jpg"}
          alt="Retrieval-Augmented"
          width={406}
          height={517}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#6517CF]",
    },
    {
      title: "Observability & Performance Monitoring",
      descriptionPoints: [
        "Proactive APM (Application Performance Monitoring) for real-time tracking.",
        "Log aggregation & distributed tracing for deep system insights.",
        "AI-driven anomaly detection to preempt infrastructure failures.",
      ],
      Image: (
        <Image
          src={"/observability.jpg"}
          alt="observability img"
          width={2840}
          height={2160}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#244317]",
    },
    {
      title: "Security-First DevSecOps",
      descriptionPoints: [
        "Security baked into CI/CD pipelines – automated vulnerability scanning.",
        "Cloud-native security policies for compliance & governance.",
        "Zero-trust architecture & API security for bulletproof protection.",
      ],
      Image: (
        <Image
          src={"/dev-secops.png"}
          alt="Predictive-analysis"
          width={461}
          height={495}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#613F4C]",
    },
  ];

  return <RightOrientedCard cards={devopsFeatures} />;
};

const CloudSecuritySection = () => {
  const devopsSecurityFeatures = [
    {
      title: "Identity & Access Management (IAM) for Cloud Security",
      descriptionPoints: [
        "Role-based access control (RBAC) & multi-factor authentication (MFA).",
        "Least-privilege security models to protect sensitive data.",
        "API security & threat detection for cloud-native applications.",
      ],
      Image: (
        <Image
          src={"/identity-mangement.png"}
          alt="identity-mangement"
          width={406}
          height={517}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#119EAA]",
    },
    {
      title: "Cloud Governance & Compliance Automation",
      descriptionPoints: [
        "Automated compliance reporting for SOC 2, ISO 27001, GDPR, HIPAA.",
        "Continuous security monitoring with AI-driven risk assessment.",
        "Automated threat detection & response to mitigate attacks in real-time.",
      ],
      Image: (
        <Image
          src={"/cloud-goveranance.png"}
          alt="cloud-gov-img"
          width={2840}
          height={2160}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-gray-500",
    },
    {
      title: "Disaster Recovery & Business Continuity Planning",
      descriptionPoints: [
        "Geo-redundant cloud backups for failover protection.",
        "RTO/RPO optimization strategies for minimal downtime.",
        "Automated rollback & recovery mechanisms for enterprise resilience.",
      ],
      Image: (
        <Image
          src={"/dev-secops.png"}
          alt="Predictive-analysis"
          width={461}
          height={495}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#613F4C]",
    },
  ];

  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  const blurSharpen = {
    initial: { filter: "blur(12px)", opacity: 0 },
    whileInView: { filter: "blur(0px)", opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="bg-[url('/cloud-sec-bg.png')] mt-20 bg-cover bg-no-repeat bg-top">
      <div className="cloud-security-main 2xl:px-32 xl:px-16 sm:px-10  px-4">
        <div className=" flex flex-col items-center justify-center gap-8">
          <motion.div {...fadeInfromBottom} className="text-center">
            <H1 className="text-black">Cloud Security & Compliance </H1>
            <p className="text-lg md:text-xl text-gray-500 mt-2">
              Stay Secure, Stay Compliant, Stay Ahead{" "}
            </p>
          </motion.div>
          <motion.div {...blurSharpen}>
            <Image
              src={"/security-cloud.png"}
              width={820}
              height={461}
              alt="ai-meets-automation-img"
              className=""
            />
          </motion.div>
        </div>
      </div>
      <div className="devops-content-list mt-32 flex flex-col gap-4">
        <RightOrientedCard cards={devopsSecurityFeatures} />
        {/* {devopsSecurityFeatures.map((feature) => ( */}
        {/*   <div */}
        {/*     key={feature.title} */}
        {/*     className="flex flex-row-reverse gap-8 items-center lg:translate-x-24" */}
        {/*   > */}
        {/*     {feature.Image} */}
        {/*     <div className="flex flex-col gap-2 "> */}
        {/*       <H1 className="text-left">{feature.title}</H1> */}
        {/*       <SingleDescriptionList */}
        {/*         listItems={feature.descriptionPoints} */}
        {/*         pointColor={feature.pointColor} */}
        {/*       /> */}
        {/*     </div> */}
        {/*   </div> */}
        {/* ))} */}
      </div>
    </section>
  );
};

export default CloudMorphPage;

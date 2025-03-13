"use client";
import { Header } from "@components/Header";
import { H1 } from "@components/Heading";
import { cn } from "lib/utils";
import Image from "next/image";
import React from "react";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
import { GiCube } from "react-icons/gi";
import { GoShieldLock } from "react-icons/go";
import { SendMessageForm } from "@components/ContactForm";
import { Footer } from "@components/Footer";
import { LeftOrientedCard } from "@components/LeftOrientedCard";
import { RightOrientedCard } from "@components/RightOrientedCard";
import { motion, MotionProps } from "motion/react";

const AetherGenPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AiAutomationSection />
      <EnginneringAiSection />
      <GenAiMoreFeatSection />
      <LLMOpSection />
      <AiFrameworksSection />
      <SendMessageForm />
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  return (
    <motion.section
      initial={{ y: 40 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="flex flex-col mt-12  lg:h-screen lg:px-0 gap-8 lg:relative"
    >
      <motion.div className="flex flex-col lg:flex-row-reverse gap-8 w-full lg:relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="text-part flex flex-col gap-2  text-left lg:absolute lg:right-10 lg:w-1/2 sm:px-10 px-4 lg:top-0 xl:top-10 xl:right-24"
        >
          <H1 className="text-[#006FFF] text-left font-bold ">AetherGen</H1>
          <H1 className="md:text-4xl text-left ">
            Generative AI Solutions Suite
          </H1>
          <p className="text-xl">
            From intelligent automation to real-time analytics, knowledge
            augmentation, and autonomous decision-making, we got it all covered.
            We build AI that understands, learns, and adapts—not just generates.
            Our AI-backed development stack is designed to simplify complex
            business processes, enhance operational efficiency, and bridge the
            gap between data, automation, and real-world applications.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <Image
            src={"/aether-gen-hero.png"}
            width={764}
            height={752}
            alt="omni-stack"
            className="sm:px-10 px-4 w-full lg:w-[700px] lg:h-auto lg:absolute lg:-left-44 xl:w-[800px]"
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
      >
        <Image
          src={"/color-squiggle.png"}
          width={1280}
          height={262}
          alt="squiggle-svg"
          className=" h-auto w-full bottom-0 lg:bottom-20 lg:absolute"
        />
      </motion.div>
    </motion.section>
  );
};

const AiAutomationSection = () => {
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
    <section className="2xl:px-32 xl:px-16 px-10 mt-32">
      <div className="ai-meets-auto-content flex flex-col items-center justify-center gap-8">
        <motion.div {...fadeInfromBottom} className="text-center">
          <H1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600  via-pink-500 to-yellow-400">
            Where Intelligence Meets Automation
          </H1>
          <motion.p className="text-lg md:text-xl text-gray-500 mt-2">
            Unleashing AI for Smarter Decision-Making
          </motion.p>
        </motion.div>
        <motion.div {...blurSharpen}>
          <Image
            src={"/intelligence-x-auto.png"}
            width={821}
            height={461}
            alt="ai-meets-automation-img"
            className=""
          />
        </motion.div>
        <motion.p
          {...blurSharpen}
          className="text-center text-lg md:text-xl text-gray-500 mt-2 max-w-3xl"
        >
          Data is everywhere, but insights are scarce. Our Generative AI
          solutions turn raw data into actionable intelligence, helping
          businesses optimize operations, forecast trends, and automate
          decision-making.
        </motion.p>
      </div>
    </section>
  );
};

const EnginneringAiSection = () => {
  const agiGenFeatures = [
    {
      title: "Predictive Analytics & Business Intelligence",
      descriptionPoints: [
        "AI-powered trend forecasting to anticipate market shifts before they happen.",
        "AI-powered trend forecasting to anticipate market shifts before they happen.",
        "AI-enhanced reporting dashboards that deliver insights in plain language, not just numbers.",
      ],
      Image: (
        <Image
          src={"/devops.png"}
          alt="Predictive-analysis"
          width={268}
          height={396}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#1976D2]",
    },
    {
      title: "Workflow Automation & Cognitive AI Agents",
      descriptionPoints: [
        "Reduce manual intervention with AI-driven task automation and self-learning workflows.",
        "Automate repetitive processes in finance, supply chain, and customer support with AI-powered RPA.",
        "Enable document intelligence – AI-driven document parsing, summarization, and auto-filling.",
      ],
      Image: (
        <Image
          src={"/wall-e.jpg"}
          alt="Predictive-analysis"
          width={268}
          height={396}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#F09B00]",
    },
    {
      title: "Applied AI for Research & Development",
      descriptionPoints: [
        "Tailored domain-specific AI models for healthcare, legal, finance, and education.",
        "AI-driven hypothesis testing, simulations, and knowledge extraction for research-heavy industries.",
        "Generative AI-powered prototyping for product innovation and digital twins for process optimization.",
      ],
      Image: (
        <Image
          src={"/research-lib.jpg"}
          alt="Predictive-analysis"
          width={268}
          height={396}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#613F4C]",
    },
    {
      title: "Generative AI Engineering & Knowledge Systems",
      descriptionPoints: [
        "Build AI-enhanced decision-making models (DMN, BPMN) that optimize rule-based logic.",
        "AI-powered knowledge graphs that connect enterprise data silos into meaningful insights.",
        "Automate regulatory compliance and audit processes with AI-enhanced validation systems.",
      ],
      Image: (
        <Image
          src={"/aethergen/genai-chart.png"}
          alt="Predictive-analysis"
          width={1825}
          height={2068}
          className="rounded-[110px] w-full h-[450px] lg:w-[500px] lg:h-[450px] "
        />
      ),
      pointColor: "bg-[#101010]",
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
    <section className="bg-[url('/engineering-bg.png')] bg-contain bg-no-repeat ">
      <LeftOrientedCard cards={agiGenFeatures} />
      <section className="engineering-ai-section 2xl:px-32 xl:px-16 px-10 mt-32">
        <div className=" flex flex-col items-center justify-center gap-8">
          <motion.div {...fadeInfromBottom} className="text-center">
            <H1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600  via-pink-500 to-yellow-400">
              Engineering AI for Tech
            </H1>
            <p className="text-lg md:text-xl text-gray-500 mt-2">
              The Brains Behind Smarter Systems
            </p>
          </motion.div>
          <motion.div {...blurSharpen}>
            <Image
              src={"/engineer-ai.png"}
              width={821}
              height={461}
              alt="ai-meets-automation-img"
              className=""
            />
          </motion.div>

          <motion.p
            {...fadeInfromBottom}
            className="text-center text-lg md:text-xl text-gray-500 mt-2 max-w-3xl"
          >
            Generative AI isn’t just about text generation. It’s about enhancing
            reasoning, context-awareness, and decision-making. Our solutions
            integrate advanced AI architectures like RAG, CAG, and AI Agents to
            create truly adaptive AI-driven systems.{" "}
          </motion.p>
        </div>
      </section>
    </section>
  );
};

const GenAiMoreFeatSection = () => {
  const agiGenFeatures = [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      descriptionPoints: [
        "Move beyond generic responses – AI that retrieves real-time, domain-specific information.",
        "Integrate AI with corporate knowledge bases, customer support logs, and proprietary datasets for context-aware responses.",
        "Fine-tuned models that learn from past interactions and evolve dynamically.",
      ],
      Image: (
        <Image
          src={"/rag.jpg"}
          alt="Retrieval-Augmented"
          width={4320}
          height={4320}
          className="rounded-[110px] lg:w-[450px] lg:h-[400px] xl:w-[500px] xl:h-[450px] object-cover w-full h-[450px] "
        />
      ),
      pointColor: "bg-[#8A4B9A]",
    },
    {
      title: "Context-Augmented Generation (CAG)",
      descriptionPoints: [
        "AI models that absorb real-time data streams for on-the-fly decision-making.",
        "Adaptive AI systems that ingest user behavior, industry trends, and market sentiment.",
        "Context-aware automation that reduces hallucination and increases relevance.",
      ],
      Image: (
        <Image
          src={"/light-tunnel.jpg"}
          alt="cag-image"
          width={2840}
          height={2160}
          className="rounded-[110px] lg:w-[450px] lg:h-[400px] xl:w-[500px] xl:h-[450px] object-cover w-full h-[450px] "
        />
      ),
      pointColor: "bg-[#472C31]",
    },
    {
      title: "Autonomous AI Agents",
      descriptionPoints: [
        "Self-learning AI agents that execute tasks, analyze outcomes, and optimize performance.",
        "AI-driven personal assistants for automated scheduling, business operations, and intelligent recommendations.",
        "Next-gen chatbots that go beyond scripted responses and engage in dynamic, human-like conversations.",
      ],
      Image: (
        <Image
          src={"/cube.jpg"}
          alt="Predictive-analysis"
          width={4288}
          height={2848}
          className="rounded-[110px] lg:w-[450px] lg:h-auto xl:w-[500px] xl:h-[450px] object-cover w-full h-[450px] "
        />
      ),
      pointColor: "bg-[#613F4C]",
    },
  ];

  return <RightOrientedCard cards={agiGenFeatures} />;
};

const LLMOpSection = () => {
  const cards = [
    {
      title: "Model Selection & Training",
      subtitle:
        "Data curation, fine-tuning, and optimization for enterprise use.",
      icon: (
        <Image
          src={"/modeling.svg"}
          width={50}
          height={50}
          alt="model-image-icon"
          className="h-8 w-8 mb-2 ml-3"
        />
      ),
      bgColor: "bg-[#006FFF]",
      textColor: "text-[#006FFF]",
    },
    {
      title: "Evaluation & Validation",
      subtitle:
        "Bias detection, robustness testing, and explainability metrics.",
      icon: <MdOutlinePlaylistAddCheck className="h-8 w-8 mb-2 ml-3" />,
      bgColor: "bg-[#CA4C94]",
      textColor: "text-[#CA4C94]",
    },
    {
      title: "Production Deployment",
      subtitle:
        "Scalable model serving, API integrations, and performance monitoring.",
      icon: <GiCube className="h-8 w-8 mb-2 ml-3" />,
      bgColor: "bg-[#BC7D40]",
      textColor: "text-[#BC7D40]",
    },
    {
      title: "Security & Governance",
      subtitle:
        "Model access control, compliance adherence, and adversarial robustness.",
      icon: <GoShieldLock className="h-8 w-8 mb-2 ml-3" />,
      bgColor: "bg-[#016175]",
      textColor: "text-[#016175]",
    },
  ];

  // For card text content
  const cardContentReveal = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, delay: 0.4 },
  };

  const dashedLineAnimation = {
    initial: { height: 0 },
    whileInView: { height: "4rem" },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6, delay: 0.4, ease: "easeInOut" },
  };

  const blurSharpen = {
    initial: { filter: "blur(12px)", opacity: 0 },
    whileInView: { filter: "blur(0px)", opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.7, ease: "easeOut" },
  };
  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };
  return (
    <section className="bg-[url('/llm-ops-bg1.png')] min-h-screen my-48 bg-cover  bg-top bg-no-repeat">
      <div className="llm-ops-content 2xl:px-32 xl:px-16 px-10 mt-48">
        <motion.section className="llms-ops-main  ">
          <div className=" flex flex-col items-center justify-center gap-8">
            <motion.div {...fadeInfromBottom} className="text-center">
              <H1 className="text-transparent bg-clip-text bg-[url('/text-bg.jpg')] ">
                LLMOps: From Dev to Prod
              </H1>
              <p className="text-lg md:text-xl text-gray-500 mt-2">
                End-to-end AI lifecycle management for scalable, efficient, and
                reliable deployment.{" "}
              </p>
            </motion.div>
            <motion.div {...blurSharpen}>
              <Image
                src={"/llmops.jpg"}
                width={821}
                height={461}
                alt="ai-meets-automation-img"
                className=""
              />
              <div className="w-1 h-16 border-l-2 border-dashed border-gray-400 mx-auto mt-2"></div>
            </motion.div>
          </div>
          <motion.div className="flex flex-col  w-full max-w-2xl mx-auto sm:p-4">
            {cards.map((card, index) => (
              <div key={index} className="relative">
                <motion.div
                  {...cardContentReveal}
                  className="relative bg-white shadow-md rounded-2xl p-6 border border-gray-200 overflow-hidden"
                >
                  {/* Quarter circle with icon in top right */}
                  <div
                    className={`absolute -top-6 -left-5 w-20 h-20 ${card.bgColor} rounded-full flex items-end justify-center p-2`}
                  >
                    <div className="text-white">{card.icon}</div>
                  </div>

                  {/* Card content */}
                  <div className="pl-8 text-center">
                    <h2
                      className={cn(
                        "text-xl sm:text-2xl font-semibold ",
                        card.textColor,
                      )}
                    >
                      {card.title}
                    </h2>
                    <p className="text-base italic text-gray-600 mt-1">
                      {card.subtitle}
                    </p>
                  </div>
                </motion.div>

                {/* Add dashed line below each card except the last one */}
                {index < cards.length - 1 && (
                  <motion.div
                    {...dashedLineAnimation}
                    className="w-1 h-16 border-l-2 border-dashed border-gray-400 mx-auto my-2"
                  ></motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </section>
  );
};

const AiFrameworksSection = () => {
  const cardsData = [
    {
      image: "/responsible-ai.jpg",
      title: "Responsible AI",
      subtitle: "Fairness, bias mitigation, and interpretability strategies.",
    },
    {
      image: "/ai-governance.jpg",
      title: "AI Governance",
      subtitle: "Compliance with GDPR, HIPAA, SOC 2, and enterprise policies.",
    },
    {
      image: "/ml-ops-cicd.png",
      title: "MLOps & CI/CD ",
      subtitle: "Continuous monitoring, retraining, and lifecycle automation.",
    },
    {
      image: "/guard-rails.png",
      title: "Guardrails & Risk Management",
      subtitle: " Implementing safety measures for reliable AI operations.",
    },
  ];

  const fadeInfromBottom = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "easeIn" },
  };

  const slideMaskReveal: MotionProps = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.3, ease: "circOut" },
  };
  return (
    <section className="2xl:px-32 xl:px-16 px-10  md:mb-20">
      <div className="content-ai-frameworks flex flex-col gap-3">
        <motion.div
          {...fadeInfromBottom}
          className="heading-section flex flex-col items-center"
        >
          <H1>AI Frameworks & Responsible AI</H1>
          <p className="text-lg text-center">
            Ensuring ethical, transparent, and accountable AI implementations.
          </p>
        </motion.div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {cardsData.map((card) => (
              <motion.div
                {...slideMaskReveal}
                key={card.title}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-10"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-[#006FFF]">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{card.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AetherGenPage;

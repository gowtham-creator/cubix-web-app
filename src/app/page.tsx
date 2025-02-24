import { Header } from "@components/Header";
import { Button } from "@shadcn/button";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdMail } from "react-icons/md";

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
        <h1 className="text-5xl text-center">Why partner with us</h1>
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
        <h1 className="text-5xl font-semibold text-center">
          Your Doorway to Digital Transformation
        </h1>
        <div className="stratergic-section flex items-center justify-center gap-4 md:flex-row flex-col md:justify-around">
          <Image
            src={"/doorway.png"}
            alt="doorway-image"
            width={500}
            height={400}
            className="rounded-sm"
          />
          <div className="text-section flex flex-col gap-4  max-w-xl">
            <h1 className="text-2xl font-semibold">
              Stratergic modernization for measurable impact
            </h1>
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
          <div className="grid grid-cols-2 gap-12">
            {approaches.map((approach) => (
              <div
                key={approach.title}
                className=" shadow-lg rounded-lg w-72 p-8 flex flex-col bg-white gap-2"
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

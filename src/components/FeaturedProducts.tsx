import { Button } from "@shadcn/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@shadcn/tabs";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { H1 } from "./Heading";

export const FeaturedProductsSection = () => {
  return (
    <section className="feature-product-section bg-[url('/featured-bg.png')] min-h-screen">
      <div className="featured-content 2xl:px-32 xl:px-16 px-10 py-8 flex flex-col justify-center items-center gap-9">
        <h1 className="bg-[#006BFF] text-white w-fit py-2 px-7 font-semibold rounded-full shadow-blue-200 shadow-lg ">
          Featured products
        </h1>
        <Tabs
          defaultValue="logic-gen"
          className="flex justify-center flex-col gap-9"
        >
          <TabsList className="w-full py-10 px-2 bg-transparent  border-black border-2 flex flex-row gap-2">
            <TabsTrigger
              value="logic-gen"
              className="py-4 w-1/2 text-2xl data-[state=active]:bg-black data-[state=active]:text-white hover:text-black"
            >
              LogicGen
            </TabsTrigger>
            <TabsTrigger
              value="Ava"
              className="py-4 w-1/2 text-2xl data-[state=active]:bg-black  data-[state=active]:text-white  hover:text-black"
            >
              Ava
            </TabsTrigger>
          </TabsList>
          <TabsContent value="logic-gen">
            <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-9">
              <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-4">
                <H1 className="text-left font-medium leading-[1em]">
                  Logicgen: GenAi-Powered DMN modeler
                </H1>
                <p className="text-lg">
                  Designed for engineering-first teams, LogicGen automates DMN
                  table, diagram, and executable generation, enabling seamless
                  OpenShift deployment. With built-in ambiguity analysis and
                  edge-case detection, it ensures precision-driven decision
                  automation for modern enterprises.
                </p>
                <Button className="bg-black rounded-none font-medium hover:bg-[#006BFF] hover:text-white  p-5">
                  Learn more <GoArrowRight />
                </Button>
              </div>
              <Image
                src={"/home/dmn-modeler.png"}
                alt="logic gen"
                width={2062}
                height={1084}
                className="h-auto lg:w-[600px] w-full"
              />
            </div>
          </TabsContent>
          <TabsContent value="Ava">
            <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-9">
              <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-4">
                <H1 className="text-left font-medium leading-[1em]">
                  Ava Ai: Your friendly AI companion{" "}
                </H1>
                <p className="text-lg">
                  Ava.ai is more than just an app.it&apos;s a revolution in
                  mental wellness support. We&apos;re a team dedicated to
                  building the world&apos;s leading AI companion, focused on
                  fostering genuine connection and empowering individuals on
                  their path to emotional well-being.{" "}
                </p>
                <Button className="bg-black rounded-none font-medium hover:bg-[#006BFF] hover:text-white  p-5">
                  Learn more <GoArrowRight />
                </Button>
              </div>
              <Image
                src={"/home/ava-ai.png"}
                alt="logic gen"
                width={516}
                height={271}
                className="h-auto lg:w-[600px] w-full rounded-lg"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

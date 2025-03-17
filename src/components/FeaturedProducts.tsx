import { Button } from "@shadcn/button";
import { Tabs, TabsList, TabsTrigger } from "@shadcn/tabs";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { H1 } from "./Heading";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type TabType = "logic-gen" | "ava";
export const FeaturedProductsSection = () => {
  const [selectTab, setSelectTab] = useState<TabType>("logic-gen");

  const blurSharpen = {
    initial: { filter: "blur(12px)", opacity: 0 },
    whileInView: { filter: "blur(0px)", opacity: 1 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <section className="feature-product-section bg-[url('/featured-bg.png')] ">
      <div className="featured-content 2xl:px-32 xl:px-16 px-10 py-8 flex flex-col justify-center items-center gap-9">
        <motion.h1
          {...blurSharpen}
          className="bg-[#006BFF] text-white w-fit py-2 px-7 font-semibold rounded-full shadow-blue-200 shadow-lg "
        >
          Featured products
        </motion.h1>
        <Tabs
          value={selectTab}
          onValueChange={(value) => setSelectTab(value as TabType)}
          defaultValue="logic-gen"
          className="flex justify-center  flex-col gap-9"
        >
          <TabsList className="w-full py-8 border-1 border-gray-200 shadow-lg bg-white flex flex-row gap-2">
            <TabsTrigger
              value="logic-gen"
              className="py-4 w-32  transition-all duration-300 ease-linear sm:w-64  md:w-80 h-fit  sm:text-xl md:text-2xl  data-[state=active]:border-b-4 data-[state=active]:border-[#006BFF] rounded-none data-[state=active]:shadow-none  hover:text-black"
            >
              <span className="flex justify-center items-center font-semibold text-[10px] xs:text-sm h-5 w-5 mr-2 border border-gray-400 rounded-full xs:h-8 xs:w-8">
                01
              </span>
              LogicGen
            </TabsTrigger>
            <TabsTrigger
              value="ava"
              className="py-4 w-32  transition-all duration-300 ease-linear sm:w-64 md:w-80 sm:text-xl md:text-2xl  data-[state=active]:border-b-4 data-[state=active]:border-[#006BFF] rounded-none data-[state=active]:shadow-none  hover:text-black"
            >
              <span className="flex justify-center items-center font-semibold text-[10px] xs:text-sm h-5 w-5 mr-2 border border-gray-400 rounded-full xs:h-8 xs:w-8">
                02
              </span>
              Ava
            </TabsTrigger>
          </TabsList>
          <div className="relative w-[90vw] h-screen sm:h-[600px] md:h-[800px] lg:h-[500px]">
            <AnimatePresence initial={false}>
              {selectTab === "logic-gen" && (
                <motion.div
                  key={"logic-gen"}
                  initial={{ opacity: 0, x: -300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -500 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="absolute flex flex-col-reverse lg:flex-row justify-between w-full gap-9"
                >
                  <div className="w-full lg:w-2/3 xl:w-1/2 flex flex-col justify-between items-start gap-4">
                    <H1 className="text-left font-medium leading-[1em]">
                      Logicgen: GenAi-Powered DMN modeler
                    </H1>
                    <p className="text-lg">
                      Designed for engineering-first teams, LogicGen automates
                      DMN table, diagram, and executable generation, enabling
                      seamless OpenShift deployment. With built-in ambiguity
                      analysis and edge-case detection, it ensures
                      precision-driven decision automation for modern
                      enterprises.
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
                    className="h-auto lg:w-[450px] object-contain  xl:w-[600px] w-full"
                  />
                </motion.div>
              )}
              {selectTab === "ava" && (
                <motion.div
                  key={"ava"}
                  initial={{ opacity: 0, x: 600 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 600 }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                  className="absolute flex flex-col-reverse lg:flex-row justify-between w-full gap-9"
                >
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
                    className="h-auto rounded-lg lg:w-[450px] object-contain  xl:w-[600px] w-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <TabsContent value="logic-gen"> */}
          {/*   <AnimatePresence> */}
          {/*     <motion.div */}
          {/*       initial={{ opacity: 0, x: -300 }} */}
          {/*       animate={{ opacity: 1, x: 0 }} */}
          {/*       exit={{ opacity: 0, x: -300 }} */}
          {/*       transition={{ duration: 0.3, ease: "easeIn" }} */}
          {/*       className="flex flex-col-reverse lg:flex-row justify-between w-full gap-9" */}
          {/*     > */}
          {/*       <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-4"> */}
          {/*         <H1 className="text-left font-medium leading-[1em]"> */}
          {/*           Logicgen: GenAi-Powered DMN modeler */}
          {/*         </H1> */}
          {/*         <p className="text-lg"> */}
          {/*           Designed for engineering-first teams, LogicGen automates DMN */}
          {/*           table, diagram, and executable generation, enabling seamless */}
          {/*           OpenShift deployment. With built-in ambiguity analysis and */}
          {/*           edge-case detection, it ensures precision-driven decision */}
          {/*           automation for modern enterprises. */}
          {/*         </p> */}
          {/*         <Button className="bg-black rounded-none font-medium hover:bg-[#006BFF] hover:text-white  p-5"> */}
          {/*           Learn more <GoArrowRight /> */}
          {/*         </Button> */}
          {/*       </div> */}
          {/*       <Image */}
          {/*         src={"/home/dmn-modeler.png"} */}
          {/*         alt="logic gen" */}
          {/*         width={2062} */}
          {/*         height={1084} */}
          {/*         className="h-auto lg:w-[600px] w-full" */}
          {/*       /> */}
          {/*     </motion.div> */}
          {/*   </AnimatePresence> */}
          {/* </TabsContent> */}
          {/* <TabsContent value="Ava"> */}
          {/*   <motion.div */}
          {/*     initial={{ opacity: 0, x: 300 }} */}
          {/*     animate={{ opacity: 1, x: 0 }} */}
          {/*     exit={{ opacity: 0, x: 300 }} */}
          {/*     transition={{ duration: 0.3 }} */}
          {/*     className="flex flex-col-reverse lg:flex-row justify-between w-full gap-9" */}
          {/*   > */}
          {/*     <div className="w-full lg:w-1/2 flex flex-col justify-between items-start gap-4"> */}
          {/*       <H1 className="text-left font-medium leading-[1em]"> */}
          {/*         Ava Ai: Your friendly AI companion{" "} */}
          {/*       </H1> */}
          {/*       <p className="text-lg"> */}
          {/*         Ava.ai is more than just an app.it&apos;s a revolution in */}
          {/*         mental wellness support. We&apos;re a team dedicated to */}
          {/*         building the world&apos;s leading AI companion, focused on */}
          {/*         fostering genuine connection and empowering individuals on */}
          {/*         their path to emotional well-being.{" "} */}
          {/*       </p> */}
          {/*       <Button className="bg-black rounded-none font-medium hover:bg-[#006BFF] hover:text-white  p-5"> */}
          {/*         Learn more <GoArrowRight /> */}
          {/*       </Button> */}
          {/*     </div> */}
          {/*     <Image */}
          {/*       src={"/home/ava-ai.png"} */}
          {/*       alt="logic gen" */}
          {/*       width={516} */}
          {/*       height={271} */}
          {/*       className="h-auto lg:w-[600px] w-full rounded-lg" */}
          {/*     /> */}
          {/*   </motion.div> */}
          {/* </TabsContent> */}
        </Tabs>
      </div>
    </section>
  );
};

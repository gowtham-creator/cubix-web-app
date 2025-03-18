import { Label } from "@shadcn/label";
import { H1 } from "./Heading";
import { Input } from "@shadcn/input";
import { Button } from "@shadcn/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Footer = () => {
  const animationSet1 = {
    // For the heading section
    headingAnimation: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, ease: "easeOut" },
    },

    // For the form inputs (staggered)
    formContainerAnimation: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },

    formItemAnimation: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: "easeOut" },
    },

    // For the button
    buttonAnimation: {
      initial: { opacity: 0, scale: 0.9 },
      whileInView: { opacity: 1, scale: 1 },
      viewport: { once: false, amount: 0.3 },
      transition: { delay: 0.8, duration: 0.4, ease: "easeOut" },
    },

    // For the contact section
    contactAnimation: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
    },

    // For the socials
    socialsAnimation: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: false, amount: 0.3 },
      transition: { duration: 0.4, delay: 0.8, ease: "easeOut" },
    },
  };
  return (
    <footer className="min-h-screen bg-cover bg-right p-10 sm:p-16 md:p-24 lg:p-32 lg:py-20 xl:px-48 bg-no-repeat bg-[url('/footer-bg.png')] mt-10">
      <div className="footer-content flex flex-col gap-32">
        <motion.div
          {...animationSet1.headingAnimation}
          className="heading-section flex flex-col gap-4 items-start"
        >
          <p className="text-gray-300 text-sm font-semibold">LET&apos;S GO</p>
          <H1 className="text-white text-left">
            Start your Transformation <br /> here
          </H1>
        </motion.div>

        <div className="form-section flex flex-col sm:flex-row justify-between gap-10 w-full">
          <motion.form
            {...animationSet1.formContainerAnimation}
            className="w-3/5 flex flex-col gap-10"
          >
            <motion.div
              {...animationSet1.formItemAnimation}
              className="relative"
            >
              <Label className="z-10 uppercase text-gray-300 text-[8px] relative">
                your name
              </Label>
              <Input
                placeholder="Michael"
                type="text"
                className="border-x-0 border-t-0 z-10 border-b-2 focus-visible:ring-0 relative text-white placeholder:text-white rounded-none border-b-white w-full px-0"
              />
              <Image
                src={"/dots.svg"}
                alt="svg-dots-design"
                width={150}
                height={150}
                className=" absolute -top-10 -left-16 z-0"
              />
            </motion.div>
            <motion.div {...animationSet1.formItemAnimation}>
              <Input
                placeholder="your phone number"
                type="number"
                className="no-spinner border-x-0 focus:outline-white focus-visible:ring-0 focus:border-b-white border-t-0 border-b-2 text-white rounded-none border-b-gray-500 w-full px-0"
              />
            </motion.div>
            <motion.div {...animationSet1.formItemAnimation}>
              <Button className="w-fit bg-[#2B73BF] px-5 py-5 font-semibold rounded-sm">
                Send Request
              </Button>
            </motion.div>
          </motion.form>
          <motion.div
            {...animationSet1.contactAnimation}
            className="contact-us-other sm:w-1/5 py-5"
          >
            <p className="text-gray-500">
              Or contact us in the convenient way for you
            </p>
            <div className="flex flex-col justify-start">
              <Link href="mailto:contact@cubixso.com">
                <Button variant={"link"} className="text-white p-0 w-fit">
                  contact@cubixso.com
                </Button>
              </Link>
              <Link href="tel:+918374563012">
                <Button variant={"link"} className="text-white p-0 w-fit">
                  +91 8374563012
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...animationSet1.socialsAnimation}
          className="socials flex flex-row justify-between"
        >
          <p className="text-gray-500 text-xs">© 2025 — Copyright</p>
          <div className="flex flex-row gap-5">
            <FaLinkedin className="text-white h-5 w-5" />
            <FaFacebook className="text-white h-5 w-5" />
            <FaInstagram className="text-white h-5 w-5" />
            <FaTwitter className="text-white h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };

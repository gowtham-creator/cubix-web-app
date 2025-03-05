import { Label } from "@shadcn/label";
import { H1 } from "./Heading";
import { Input } from "@shadcn/input";
import { Button } from "@shadcn/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="min-h-screen bg-cover bg-right p-10 sm:p-16 md:p-24 lg:p-32 lg:py-20 xl:px-48 bg-no-repeat bg-[url('/footer-bg.png')] mt-10">
      <div className="footer-content flex flex-col gap-32">
        <div className="heading-section flex flex-col gap-4 items-start">
          <p className="text-gray-300 text-sm font-semibold">LET&apos;S GO</p>
          <H1 className="text-white text-left">
            Start your Transformation <br /> here
          </H1>
        </div>

        <div className="form-section flex flex-col sm:flex-row justify-between gap-10 w-full">
          <form className="w-3/5 flex flex-col gap-10">
            <div className="relative">
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
            </div>
            <Input
              placeholder="your phone number"
              type="number"
              className="no-spinner border-x-0 focus:outline-white focus-visible:ring-0 focus:border-b-white border-t-0 border-b-2 text-white rounded-none border-b-gray-500 w-full px-0"
            />
            <Button className="w-fit bg-[#2B73BF] px-5 py-5 font-semibold rounded-sm">
              Send Request
            </Button>
          </form>
          <div className="contact-us-other sm:w-1/5 py-5">
            <p className="text-gray-500">
              Or contact us in the convenient way for you
            </p>
            <div className="flex flex-col justify-start">
              <Button variant={"link"} className="text-white p-0 w-fit">
                office@cubixso.com
              </Button>
              <Button variant={"link"} className="text-white p-0 w-fit">
                +91 000000 0000{" "}
              </Button>
            </div>
          </div>
        </div>

        <div className="socials flex flex-row justify-between">
          <p className="text-gray-500 text-xs">© 2025 — Copyright</p>
          <div className="flex flex-row gap-5">
            <FaLinkedin className="text-white h-5 w-5" />
            <FaFacebook className="text-white h-5 w-5" />
            <FaInstagram className="text-white h-5 w-5" />
            <FaTwitter className="text-white h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };

"use client";

import { cn } from "lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { motion } from "motion/react";

interface Props {
  className?: string;
  theme?: "black" | "white";
}

export const Header: FC<Props> = ({ className, theme = "white" }) => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Newsletter",
      href: "/newsletter",
    },
  ];

  const toggleNav = () => setOpenNav(!openNav);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        y: { type: "keyframes", visualDuration: 0.4 },
      }}
      className={cn(
        "sm:px-10 px-4 py-4 2xl:px-32 xl:px-16 flex flex-row justify-between items-center",
        className,
      )}
    >
      <div className="logo-section ">
        <Link href={"/"} className="logo ">
          <Image
            src={theme === "white" ? "/logo-black.svg" : "/logo-white.svg"}
            alt="Cubixso"
            width={114}
            height={32}
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <nav className="hidden md:flex flex-row gap-5">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "relative group",
              "text-base font-normal",
              "transition-all duration-300 ease-in-out",
              "hover:text-blue-600", // Hover color change
              "before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-0.5",
              "before:bg-blue-600 before:transition-all before:duration-300 before:ease-in-out",
              "hover:before:w-full", // Underline animation
              pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href))
                ? "text-blue-600 font-semibold before:w-full "
                : "",
              theme === "black"
                ? "text-white hover:text-blue-300"
                : "text-black hover:text-blue-800",
              "cursor-pointer",
              "transform origin-center",
              "inline-block",
              "py-1 px-2", // Add some padding for better hover area
              "hover:scale-105", // Slight scale on hover
              "transition-transform duration-200", // Smooth scale transition
            )}
          >
            <span className="relative inline-block">
              {link.name}
              <span
                className={cn(
                  "absolute inset-0 z-[-1]",
                  "opacity-0",
                  "group-hover:opacity-50",
                  "transition-all duration-300 ease-in-out",
                  "rounded-md", // Rounded background
                )}
              />
            </span>
          </Link>
        ))}
      </nav>{" "}
      <MdMenu
        onClick={toggleNav}
        className={cn(
          "md:hidden block h-8 w-8 cursor-pointer",
          theme === "black" ? "text-white" : "text-black",
        )}
      />
      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 bg-transparent  backdrop-blur-md shadow-lg z-50 w-80 transform transition-transform duration-300 ease-in-out",
          openNav ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4 cursor-pointer">
          <MdClose onClick={toggleNav} className="h-8 w-8  text-white" />
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-6 p-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleNav}
              className={cn(
                "text-lg hover:font-bold text-white",
                pathname === link.href && "font-bold text-blue-300", // Active state styling
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Backdrop overlay when menu is open */}
      {openNav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleNav}
        />
      )}
    </motion.header>
  );
};

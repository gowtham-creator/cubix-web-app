"use client";

import { cn } from "lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

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
    <header
      className={cn(
        "px-10 py-4 2xl:px-32 xl:px-16 flex flex-row justify-between items-center",
        className,
      )}
    >
      <div className="logo-section ">
        <div className="logo  ">
          <Image
            src={theme === "white" ? "/logo-black.svg" : "/logo-white.svg"}
            alt="Cubixso"
            width={114}
            height={32}
            className="h-10 w-auto"
          />
        </div>
      </div>
      <nav className="hidden md:flex flex-row gap-5">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "hover:font-bold",
              pathname === link.href && "font-bold",
              theme === "black" ? "text-white" : "text-black",
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
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
                pathname === link.href && "font-bold",
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
    </header>
  );
};

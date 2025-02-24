"use client";

import { cn } from "lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props {
  className?: string;
  theme?: "black" | "white";
}
export const Header: FC<Props> = ({ className, theme = "white" }) => {
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

  const pathname = usePathname();

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
      <nav className="flex flex-row gap-5">
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
    </header>
  );
};

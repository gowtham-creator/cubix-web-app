"use client";

import { cn } from "lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
    <header className="p-4 flex flex-row justify-between">
      <div className="logo-section ">
        <div className="logo h-5 w-auto ">
          <Image src={"/logo.svg"} alt="12" width={114} height={32} />
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
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

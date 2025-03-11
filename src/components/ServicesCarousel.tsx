"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@shadcn/carousel";
import { cn } from "lib/utils";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export const ServiceCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentItem, setCurrentItem] = useState<number>(1);
  const dotsArray = [1, 2, 3, 4];

  const updateSelection = (operation: "incre" | "decre") => {
    if (operation === "incre") {
      if (currentItem === 4) {
        return setCurrentItem(1);
      }
      return setCurrentItem((prevCount) => prevCount + 1);
    }

    if (operation === "decre") {
      if (currentItem === 1) {
        return setCurrentItem(4);
      }

      return setCurrentItem((prevCount) => prevCount - 1);
    }
  };

  const handleScrollTo = (index: number) => {
    if (index < 1 || index > 4) {
      throw new Error("value out of range");
    }

    api?.scrollTo(index - 1);
    setCurrentItem(index);
  };

  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      orientation="vertical"
      setApi={setApi}
      className="h-[420px] md:h-[500px] lg:h-[350px]"
    >
      <CarouselContent className="h-[500px] md:h-[600px] lg:h-[350px] pr-4">
        <CarouselItem className="lg:basis-1/2">
          <div className="relative w-full h-5/6 lg:w-72 lg:h-40 web-and-mobile-dev bg-[url('/mobile-web.jpg')] bg-cover">
            <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
              Web & Mobile Development <FaArrowRight />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/2">
          <div className="relative w-full h-5/6 lg:w-72 lg:h-40  ui-ux-design bg-[url('/ui-ux-design.jpg')] bg-cover">
            <div className="flex flex-row gap-2 items-center justify-between web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
              UI/UX Design <FaArrowRight />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/2">
          <div className="relative w-full h-5/6 lg:w-72 lg:h-40 web-and-mobile-dev bg-[url('/about/cloud_computing.jpg')] bg-cover bg-no-repeat">
            <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
              Generative AI Solutions <FaArrowRight />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="lg:basis-1/2">
          <div className="relative w-full h-5/6 lg:w-72 lg:h-40 cloud-solutions bg-[url('/about/gen_ai.jpg')] bg-cover bg-center">
            <div className="flex flex-row gap-2 items-center justify-between  web-mobile-des absolute bottom-0 bg-black w-full text-white text-center px-5 py-3">
              Cloud Solutions <FaArrowRight />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="translate-x-full -translate-y-80 md:-translate-y-[360px] lg:translate-x-80 lg:-translate-y-52 flex flex-col gap-2">
        {dotsArray.map((item) => (
          <div
            key={item}
            onClick={() => handleScrollTo(item)}
            className={cn(
              "h-2 w-2 transition-colors duration-300 ease-in rounded-full bg-gray-100 cursor-pointer",
              currentItem === item && "bg-gray-400",
            )}
          ></div>
        ))}
      </div>
      <CarouselPrevious onMouseDown={() => updateSelection("decre")} />
      <CarouselNext onMouseDown={() => updateSelection("incre")} />
    </Carousel>
  );
};

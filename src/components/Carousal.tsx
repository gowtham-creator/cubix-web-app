"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="h-30 w-30 bg-background"></div>
      <div className="h-30 w-30 bg-background"></div>
      <div className="h-30 w-30 bg-background"></div>
    </Slider>
  );
};

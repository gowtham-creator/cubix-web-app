"use client";
import { motion } from "motion/react";
import { reveals } from "lib/animations";
import React, { FC, ReactNode } from "react";
import { H1 } from "./Heading";
import { SingleDescriptionList } from "./SingleDescriptionList";

interface CardType {
  title: string;
  descriptionPoints: string[];
  Image: ReactNode;
  pointColor: string;
}

interface Props {
  cards: CardType[];
}
export const LeftOrientedCard: FC<Props> = ({ cards }) => {
  return (
    <div className="left-image-card mt-32 flex flex-col gap-4 px-4 sm:px-10 lg:px-0 ">
      {cards.map((feature) => (
        <Container key={feature.title}>
          <FeatureImage>{feature.Image}</FeatureImage>
          <motion.div {...reveals.up} className="flex flex-col gap-2 px-4 sm:px-8 ">
            <H1 className="text-left text-2xl lg:text-4xl xl:text-5xl">
              {feature.title}
            </H1>
            <SingleDescriptionList
              listItems={feature.descriptionPoints}
              pointColor={feature.pointColor}
            />
          </motion.div>
        </Container>
      ))}
    </div>
  );
};

const FeatureImage: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="lg:relative lg:-left-20 xl:-left-32 border-2 border-dashed border-gray-300  rounded-[110px] w-full lg:max-w-[500px] p-2 [border-dash-length:20px] [border-dash-gap:6px]">
      {children}
    </div>
  );
};

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div {...reveals.scale} className="flex flex-col lg:flex-row gap-8 items-center ">
      {children}
    </motion.div>
  );
};

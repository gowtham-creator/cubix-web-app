import React, { FC, ReactNode } from "react";
import { H1 } from "./Heading";
import { SingleDescriptionList } from "./SingleDescriptionList";
import { motion } from "motion/react";
import { reveals } from "lib/animations";

interface CardType {
  title: string;
  descriptionPoints: string[];
  Image: ReactNode;
  pointColor: string;
}

interface Props {
  cards: CardType[];
}

const RightOrientedCard: FC<Props> = ({ cards }) => {
  return (
    <section className="right-image-card mt-32  flex flex-col gap-4">
      {cards.map((card) => (
        <Container key={card.title}>
          <motion.div {...reveals.up} className="flex flex-col gap-2 px-8">
            <FeatureTitle>{card.title}</FeatureTitle>
            <SingleDescriptionList
              listItems={card.descriptionPoints}
              pointColor={card.pointColor}
            />
          </motion.div>
          <ImageContainer>{card.Image}</ImageContainer>
        </Container>
      ))}
    </section>
  );
};

const bounceReveal = reveals.scale;

const Container: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="justify-between px-4 sm:px-10  lg:px-0 flex flex-col-reverse  lg:flex-row gap-8 items-center lg:translate-x-20 xl:translate-x-28">
      {children}
    </div>
  );
};

const FeatureTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <H1 className="text-left lg:text-4xl xl:text-5xl max-w-2xl">{children}</H1>
  );
};

const ImageContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div {...bounceReveal} className="image-container border-2 border-dashed border-gray-300 rounded-[110px]  w-full lg:w-fit xl:w-fit p-2 [border-dash-length:20px] [border-dash-gap:6px]">
      {children}
    </motion.div>
  );
};

export { RightOrientedCard };

import { Transition, Variants } from "motion/react";

// Centralized easing and duration tokens for consistent motion
export const ease = {
  out: [0.16, 0.84, 0.44, 1] as number[],
  standard: [0.2, 0.8, 0.2, 1] as number[],
};

export const durations = {
  fast: 0.2,
  base: 0.36,
  slow: 0.7,
};

const revealTransition: Transition = {
  duration: durations.base,
  ease: ease.standard,
};

export const reveals = {
  up: {
    initial: { opacity: 0, y: 16 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: revealTransition,
    },
    viewport: { once: true, amount: 0.25 },
  },
  right: {
    initial: { opacity: 0, x: -16 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: revealTransition,
    },
    viewport: { once: true, amount: 0.25 },
  },
  left: {
    initial: { opacity: 0, x: 16 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: revealTransition,
    },
    viewport: { once: true, amount: 0.25 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.98 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration: durations.base, ease: ease.out },
    },
    viewport: { once: true, amount: 0.25 },
  },
};

export const stagger = (gap = 0.1, delay = 0.1) => ({
  whileInView: { transition: { staggerChildren: gap, delayChildren: delay } },
  viewport: { once: true, amount: 0.25 },
});

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: durations.base, ease: ease.standard } },
  exit: { opacity: 0, y: -12, transition: { duration: durations.fast, ease: ease.standard } },
};



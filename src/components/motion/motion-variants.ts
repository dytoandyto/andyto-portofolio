import { Variants, Transition } from "motion/react";

// Standard editorial spring and ease curves
export const editorialTransition: Transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1], // Custom snappy cubic bezier
};

export const snappySpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

// Section / Container Staggers
export const containerStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const fastStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// Item entrances
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: editorialTransition,
  },
};

export const fadeInScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: editorialTransition,
  },
};

export const cardHoverVariants: Variants = {
  initial: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: snappySpring,
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

export const iconHoverVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    x: 3,
    y: -3,
    transition: snappySpring,
  },
};

// Section Viewport Reveal Configurations
export const viewportOnce = {
  once: true,
  amount: 0.15,
};

export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: editorialTransition,
  },
};


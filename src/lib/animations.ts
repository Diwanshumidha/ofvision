import { Variants } from "framer-motion";

export const OpacityAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { ease: "easeInOut", duration: 0.8 },
};

export const FadeinView: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * idx,
      ease: "easeInOut",
    },
  }),
};

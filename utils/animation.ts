export const AnimationContainer = {
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const AnimatedItems = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

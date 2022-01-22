//used in landingPage
const landingVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 1000,
    },
  },

  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 1000,
    },
  },
};
//use in game
const gameVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};
const gameChildVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

//used in leaderBoard
const leaderBoardButtonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
    },
  },
};

//used in modals
const modalBackdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0px",
    stiffness: 500,
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

//used in Navbar
const navVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: -10,
    transition: {
      stiffness: 80,
      type: "spring",
      delay: 0.2,
    },
  },
};

//use in play
const playerVariants = {
  animate: {
    translateY: [0, -50, 0, -50, 0, -50, 0, -50, 0],
    rotateY: [180, 180, 180, 180, 180, 180, 180, 180, 180],

    transition: {
      type: "spring",
      duration: 2,
    },
  },
};
const computerVariants = {
  animate: {
    translateY: [0, -50, 0, -50, 0, -50, 0, -50, 0],
    transition: {
      type: "spring",
      duration: 2,
    },
  },
};
export {
  landingVariants,
  hoverVariants,
  gameVariants,
  gameChildVariants,
  leaderBoardButtonVariants,
  modalBackdrop,
  modal,
  navVariants,
  playerVariants,
  computerVariants,
};

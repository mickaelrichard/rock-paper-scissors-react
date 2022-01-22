import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gameVariants, gameChildVariants } from "../../motion/variants";
import { Pick, Play, LeaderBoard, Modal } from "../../components";
import AnimatedPage from "../../motion/animate-page";
import "./game.css";

const Game = () => {
  const [anim, setAnim] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Game";
    return () => {
      document.title = "";
    };
  }, []);

  return (
    <AnimatedPage>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <motion.div
        className="game-container"
        variants={gameVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <LeaderBoard />
        <motion.div variants={gameChildVariants}>
          <Play anim={anim} setAnim={setAnim} />
        </motion.div>
        <motion.div variants={gameChildVariants}>
          <Pick anim={anim} />
        </motion.div>

        <motion.button
          variants={gameChildVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 1000 }}
          className="game-modal-opener"
          onClick={() => setIsModalOpen(true)}
        >
          Is the computer cheating?
        </motion.button>
      </motion.div>
    </AnimatedPage>
  );
};

export default Game;

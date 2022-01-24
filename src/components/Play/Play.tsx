import { useEffect, useRef, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { playerVariants, computerVariants } from "../../motion/variants";
import { GameContext } from "../../context/game";
import { IProps } from "./interface";
import "./play.css";

const Play: React.FC<IProps> = ({ setAnim }) => {
  const [uiPlayerHand, setUiPlayerHand] = useState<string | null>("rock");
  const [uiComputerHand, setUiComputerHand] = useState<string | null>("rock");
  const { rounds, playerChoice, getResults, computerChoice } = useContext(
    GameContext
  );
  const firstUpdate = useRef<boolean>(true);
  const controls = useAnimation();

  const result = (): void => {
    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper") ||
      (playerChoice === "paper" && computerChoice === "rock")
    ) {
      getResults("win", 1);
    } else if (
      (playerChoice === "rock" && computerChoice === "paper") ||
      (playerChoice === "scissors" && computerChoice === "rock") ||
      (playerChoice === "paper" && computerChoice === "scissors")
    ) {
      getResults("lose", 1);
    } else {
      getResults("draw", 0);
    }
  };

  useEffect(() => {
    //allow result() to not run at first render
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setAnim(true); //trigger disabled pick in Pick.ts
    controls.start("animate"); //start animation
    const cleanup = setTimeout(() => {
      //do when animation finish
      result();
      setAnim(false);
      setUiComputerHand(computerChoice);
      setUiPlayerHand(playerChoice);
    }, 2000);

    return () => {
      clearTimeout(cleanup);
    };
  }, [rounds]);

  return (
    <>
      <div className="play-hands">
        <>
          <motion.img
            animate={controls}
            variants={playerVariants}
            alt="hand"
            className="play-player-hand"
            src={playerChoice ? `./${uiPlayerHand}-b.png` : `./rock-b.png`}
          />
          <motion.img
            animate={controls}
            variants={computerVariants}
            alt="hand"
            src={computerChoice ? `./${uiComputerHand}.png` : `./rock.png`}
          />
        </>
      </div>
    </>
  );
};

export default Play;

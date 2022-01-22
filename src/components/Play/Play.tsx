import { useEffect, useRef, useContext, useState } from "react";
import { GameContext } from "../../context/game";
import { IProps } from "./interface";
import "./play.css";

const Play: React.FC<IProps> = ({ anim, setAnim }) => {
  const [uiPlayerHand, setUiPlayerHand] = useState<string | null>("rock");
  const [uiComputerHand, setUiComputerHand] = useState<string | null>("rock");
  const { rounds, playerChoice, getResults, computer } = useContext(
    GameContext
  );
  const firstUpdate = useRef<boolean>(true);

  const result = (): void => {
    if (playerChoice === "rock" && computer === "scissors") {
      getResults("win", 1);
    } else if (playerChoice === "rock" && computer === "paper") {
      getResults("lose", 1);
    } else if (playerChoice === "scissors" && computer === "paper") {
      getResults("win", 1);
    } else if (playerChoice === "scissors" && computer === "rock") {
      getResults("lose", 1);
    } else if (playerChoice === "paper" && computer === "rock") {
      getResults("win", 1);
    } else if (playerChoice === "paper" && computer === "scissors") {
      getResults("lose", 1);
    } else {
      getResults("draw", 0);
    }
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setAnim(true);
    const cleanup = setTimeout(() => {
      result();
      setAnim(false);
      setUiComputerHand(computer);
      setUiPlayerHand(playerChoice);
    }, 1700);
    return () => {
      clearTimeout(cleanup);
    };
  }, [rounds]);

  const classNames = [];
  if (anim) {
    classNames.push("shakeP", "play-player-hand");
  } else {
    classNames.push("play-player-hand");
  }
  console.log("play");
  return (
    <div>
      <div className="play-hands">
        <img
          alt="hand"
          className={classNames.join(" ")}
          src={playerChoice ? `./${uiPlayerHand}-b.png` : `./rock-b.png`}
        />
        <img
          alt="hand"
          src={computer ? `./${uiComputerHand}.png` : `./rock.png`}
          className={anim ? "shakeC" : ""}
        />
      </div>
    </div>
  );
};

export default Play;
